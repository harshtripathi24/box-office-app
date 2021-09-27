import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import Result from '../components/Result';

const Home = () => {
  const [input, setInput] = useState('');
  const url = `https://api.tvmaze.com/search/shows?q=${input}`;
  const [result, setResult] = useState(null);

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setResult(data);
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
      <Result result={result} />
    </MainPageLayout>
  );
};

export default Home;
