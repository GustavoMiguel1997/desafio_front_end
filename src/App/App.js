import React, { useEffect, useState } from 'react';
import DATA from '../resources/data/data.json';
import { Header, Box, InputField, Table, Map } from '../components';
import { normalizeString } from '../helpers/helpers';
import './App.css';

function App() {
  const [stores, setStores] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [minValue, setMinValue] = useState('');

  useEffect(() => {
    setStores(DATA.stores);
  }, []);

  const currentStores = stores.filter(({ name }) =>
    normalizeString(name).includes(normalizeString(searchValue))
  );

  return (
    <div className='app'>
      <Header />
      <div className='app__container'>
        <Box>
          <InputField
            type='text'
            hasIcon
            placeholder='Pesquisa'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Table stores={currentStores} minValue={minValue} />
        </Box>
        <Box>
          <InputField
            type='number'
            isShorter
            alignRight
            value={minValue}
            placeholder='15.000,00'
            label='Faturamento mínimo esperado'
            onChange={(e) => setMinValue(e.target.value)}
          />
          <Map stores={currentStores} minValue={minValue} />
        </Box>
      </div>
    </div>
  );
}

export default App;
