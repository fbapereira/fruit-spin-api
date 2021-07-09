import React, { ChangeEvent, useState } from "react";
import "./search-country.component.scss";

interface SearchCountryProps {
  loadAllCountries(): void;
  loadCountriesByFullName(search: string): void;
  loadCountriesByPartialName(search: string): void;
}

export const SearchCountry: React.FC<SearchCountryProps> = ({
  loadAllCountries,
  loadCountriesByFullName,
  loadCountriesByPartialName,
}) => {
  const [search, setSearch] = useState("");

  const updateSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const onLoadAllCountriesClick = () => {
    loadAllCountries();
    setSearch("");
  };

  const onLoadByFullNameClick = () => {
    loadCountriesByFullName(search);
    setSearch("");
  };

  const onLoadByPartialNameClick = () => {
    loadCountriesByPartialName(search);
    setSearch("");
  };

  return (
    <div className="search-area">
      <input
        className="field"
        onChange={updateSearch}
        value={search}
        type="text"
        name="search"
        placeholder="Search"
      ></input>
      <div className="actions">
        <button className="button yellow" onClick={onLoadByFullNameClick}>Search Full Text</button>
        <button className="button green" onClick={onLoadByPartialNameClick}>Search Partial Text</button>
        <button className="button red" onClick={onLoadAllCountriesClick}>
          Load All Countries
        </button>
      </div>
    </div>
  );
};
