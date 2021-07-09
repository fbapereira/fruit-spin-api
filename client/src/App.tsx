import React from "react";
import "./App.scss";
import { SearchCountry } from "./components/search-country.component";
import { useDispatch, useSelector } from "react-redux";
import { CountryState } from "./reducers/country.reducer";
import { Header } from "./components/header.component";
import { getAllCountries, searchCountryFullName, searchCountryPartialName } from "./actions/country.actions";
import { SlotMachine } from './components/slot-machine.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const countries = useSelector<CountryState, CountryState["countries"]>(
    ({ countries }) => countries
  );

  const dispatch = useDispatch();
  const loadAllCountries = () => {
    dispatch(getAllCountries());
  };

  const loadCountriesByFullName = (search: string) => {
    dispatch(searchCountryFullName(search));
  };

  const loadCountriesByPartialName = (search: string) => {
    dispatch(searchCountryPartialName(search));
  };


  return (
    <Router>

      <Header />
      <Switch>
          <Route path="/casino">
            <SlotMachine />
          </Route>
          <Route path="/">
          <SearchCountry loadAllCountries={ loadAllCountries} loadCountriesByFullName={loadCountriesByFullName} loadCountriesByPartialName={loadCountriesByPartialName} />
            <div className="search-result">
              {countries.map((country) => (
                <div key="{country.name}" className="card">
                  <img className="flag" src={country.flag} alt={country.name} />
                  <p className="name">{country.name}</p>
                </div>
              ))}
            </div>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
