import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const url = `https://api.tvmaze.com/search/shows?q=${input}`;

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
  };
  const onPressEnter = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        name="searcBox"
        onChange={onInputChange}
        onKeyDown={onPressEnter}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
