import React, { useEffect, useState } from 'react';
import DATA from '../resources/data/data.json';
import { Header, Box, InputField, Table, Map, InputMask } from '../components';
import { normalizeString } from '../helpers/helpers';
import './App.css';

function App() {
  const [stores, setStores] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [minValue, setMinValue] = useState('');

  useEffect(() => {
    setStores(DATA.stores);
  }, []);

  const filteredStores = stores.filter(({ name }) =>
    normalizeString(name).includes(normalizeString(searchValue))
  );

  return (
    <div className='app'>
      <Header />
      <main className='app__container'>
        <Box>
          <InputField
            type='text'
            hasIcon
            placeholder='Pesquisa'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Table stores={filteredStores} minValue={minValue} />
        </Box>
        <Box>
          <InputMask
            isShorter
            alignRight
            value={minValue}
            placeholder='15.000,00'
            label='Faturamento mínimo esperado'
            onChange={(newValue) => setMinValue(newValue)}
          />
          <Map stores={filteredStores} minValue={minValue} />
        </Box>
      </main>
    </div>
  );
}

export default App;
