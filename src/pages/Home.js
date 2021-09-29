import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import Result from '../components/Result';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isSearchShows = searchOption === 'shows';
  const url = `https://api.tvmaze.com/search/${searchOption}?q=${input}`;

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setResult(data);
  };
  const onPressEnter = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const handleRadio = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        name="searcBox"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onPressEnter}
        value={input}
      />
      <div>
        <label htmlFor="search-shows">
          Search Show
          <input
            type="radio"
            name="sarch-show"
            id="search-show"
            value="shows"
            onChange={handleRadio}
            checked={isSearchShows}
          />
        </label>
        <label htmlFor="search-actors">
          Search Actors
          <input
            type="radio"
            name="sarch-actors"
            id="search-actors"
            value="people"
            onChange={handleRadio}
            checked={!isSearchShows}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <Result result={result} />
    </MainPageLayout>
  );
};

export default Home;
