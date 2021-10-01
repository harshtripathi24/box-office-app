import React, { useState, useCallback } from 'react';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import Result from '../components/Result';
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from './Home.style';

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
  const handleRadio = useCallback(ev => {
    setSearchOption(ev.target.value);
  }, []);

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        name="searcBox"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onPressEnter}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isSearchShows}
            onChange={handleRadio}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isSearchShows}
            onChange={handleRadio}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      <Result result={result} />
    </MainPageLayout>
  );
};

export default Home;
