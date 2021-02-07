import {
  MenuItem,
  Select,
  FormControl,
  Card,
  CardContent
} from '@material-ui/core';
import {useState, useEffect} from 'react';
import InfoBox from './InfoBox.js';
import Map from './Map';
import Table from './Table';
import './App.css';
import {sortData, prettyPrintStat} from './utils';
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Globals';
import Toggle from './Toggle.js';
import { useDarkMode } from './useDarkMode';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = 
    useState([-10.00746, 40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/all')
      .then(resp => resp.json())
      .then(data =>{
        setCountryInfo(data);
      });
  }, [])

  useEffect(() => {
    const getCountries = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then(resp => resp.json())
      .then((data) => {
        const countries = data.map(country=> (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
        setMapCountries(data);
      });
    };
    getCountries();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url = countryCode=== 'worldwide'?
      "https://disease.sh/v3/covid-19/all":
      `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(resp => resp.json())
    .then(data => {
      if (countryCode === 'worldwide') {
        setMapCenter([-10.00746, 40.4796])
        setMapZoom(3);
      } else {
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      }
      setCountry(countryCode);
      setCountryInfo(data);
    })
  };

  if (!componentMounted) {
    return <div />
  };

  return (
    <div className={`app ${theme==='dark' && "app--dark"}`}>
      <div className={`app__left ${theme==='dark' && "app__left--dark"}`}>
        <div className={`app__header ${theme==='dark' && "app__header--dark"}`}>
          <h1>Covid-19 Tracker</h1>
          <ThemeProvider theme={themeMode}>
            <>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </>
          </ThemeProvider>
          <FormControl className={`app__dropdown ${theme==='dark' && "app__dropdown--dark"}`}>
            <Select variant="outlined"
                    value={country}
                    onChange={onCountryChange}
                    className={`${theme==='dark' && "app__select--dark"}`}>
              <MenuItem value= "worldwide">WorldWide</MenuItem>
              {countries.map(country => {
                return <MenuItem value={country.value}>{country.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
           <InfoBox 
           theme={theme}
           isRed
           active={casesType==="cases"}
           onClick={(e) => setCasesType("cases")}
           title="Coronavirus Cases" 
           cases={prettyPrintStat(countryInfo.todayCases)} 
           total={prettyPrintStat(countryInfo.cases)} />

            <InfoBox 
            theme={theme}
            active={casesType==="recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered" 
            cases={prettyPrintStat(countryInfo.todayRecovered)} 
            total={prettyPrintStat(countryInfo.recovered)} />

           <InfoBox 
           theme={theme}
           isRed
           active={casesType==="deaths"}
           onClick={(e) => setCasesType("deaths")}
           title="Deaths" 
           cases={prettyPrintStat(countryInfo.todayDeaths)} 
           total={prettyPrintStat(countryInfo.deaths)} />
        </div>

        <Map countries={mapCountries} casesType={casesType} center={mapCenter} zoom={mapZoom} theme={theme}/>
      
      </div>
      <Card className={`app__right ${theme==='dark' && "app__right--dark"}`}>
        <CardContent className={`${theme==='dark' && "card--dark"}`}>
          <h3>Live Cases by country</h3>
          <Table theme={theme} countries={tableData} />
          <h3 className='app__graphTitle'>WorldWide new {casesType}</h3>
          <LineGraph className="app__graph" casesType={casesType}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
