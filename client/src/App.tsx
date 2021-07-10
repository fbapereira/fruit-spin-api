import React from "react";
import "./App.scss";
import { SearchCountry } from "./components/search-country.component";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/header.component";
import { getAllCountries, searchCountryFullName, searchCountryPartialName } from "./actions/country.actions";
import { SlotMachine } from "./components/slot-machine.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RootReducer } from "./store";

function App() {
  const dispatch = useDispatch();
  const loadAllCountries = () => dispatch(getAllCountries());
  const loadCountriesByFullName = (search: string) =>dispatch(searchCountryFullName(search));
  const loadCountriesByPartialName = (search: string) => dispatch(searchCountryPartialName(search));

  const countries = useSelector<RootReducer, RootReducer["countryReducer"]["countries"]>(
    ({ countryReducer: { countries } }) => countries
  );

  const token = useSelector<RootReducer, RootReducer["authenticationReducer"]["token"]>(
    ({ authenticationReducer: { token } }) => token
  );

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/casino">
          <SlotMachine />
        </Route>
        <Route path="/">
          <SearchCountry
            loadAllCountries={loadAllCountries}
            loadCountriesByFullName={loadCountriesByFullName}
            loadCountriesByPartialName={loadCountriesByPartialName}
          />
          a{token}a
          <div className="search-result">
            {
              countries && countries.map((country) => (
                <div key={country.name} className="card">
                  <img className="flag" src={country.flag} alt={country.name} />
                  <p className="name">{country.name}</p>
                </div>
              ))
            }
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
