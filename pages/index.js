import React, { useState } from 'react';
import Page from '../components/Page/Page';
import AutoComplete from './../components/CPAutoComplete'

export default function Home() {
  const [searchValue, setSearchValue] = useState([]);
  const [notFound, setNotFound] = useState('');
  const [instrumentCode, setInstrumentCode] = useState({
    key: "",
    value: '',
  });

  /**
   * this method call search api and create options of searchBar
   * @param value
   */
  const handleSearch = async value => {
    if (value) {
      console.log(value);
      setInstrumentCode(value);
    } else {
      setSearchValue([]);
    }
  };
  /**
   * Selected instrument
   * @params value, option
   */
  const onSelect = async (value, option) => {
    console.log("value",value);
    console.log("option",option);
    return null;
  };

  return (
    <Page>
      <div>home</div>
      <AutoComplete
        dataSource={searchValue}
        onSearch={handleSearch}
        onChange={onSelect}
        notFoundContent={notFound}
        value={instrumentCode?.value}
      />
    </Page>
  );
}
