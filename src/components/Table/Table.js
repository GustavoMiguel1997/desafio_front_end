import React, { useState } from 'react';
import { Pagination } from '../';
import { formatValueToReal } from '../../helpers/helpers';
import './Table.css';

const STORES_PER_PAGE = 10;

function Table({ stores, minValue }) {
  const [actualPage, setActualPage] = useState(1);
  const currentMinValue = minValue || 15000;

  const pagesQuantity = Math.ceil(stores.length / STORES_PER_PAGE);

  const [from, to] = getStoresFromPage();
  const tableStores = stores.slice(from, to);

  function getStoresFromPage() {
    const fromIndex = actualPage * STORES_PER_PAGE - STORES_PER_PAGE;
    const toIndex = actualPage * STORES_PER_PAGE;
    return [fromIndex, toIndex];
  }

  function handleChangePage(value) {
    const newPage = value + actualPage;
    const isValidPage = newPage > 0 && newPage <= pagesQuantity;
    if (isValidPage) setActualPage(newPage);
  }

  return (
    <div className='table'>
      <ul className='table__list'>
        <li className='table__list__item'>
          <label>Loja</label>
          <label>Faturamento</label>
        </li>
        {tableStores.length === 0 && (
          <li className='table__list__item'>Nenhuma loja encontrada</li>
        )}
        {tableStores.map((store) => {
          const isStoreRevenueLessThenMinimun = store.revenue < currentMinValue;
          const itemClass = 'table__list__item'.concat(
            isStoreRevenueLessThenMinimun ? ' red-text' : ''
          );
          return (
            <li className={itemClass} key={store.name}>
              <label>{store.name}</label>
              <label>R$ {formatValueToReal(store.revenue)}</label>
            </li>
          );
        })}
      </ul>
      <Pagination
        stores={stores}
        actualPage={actualPage}
        pagesQuantity={pagesQuantity}
        onChangePage={handleChangePage}
      />
    </div>
  );
}

export default Table;
