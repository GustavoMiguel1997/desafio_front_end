import React from 'react';
import leftArrow from '../../resources/images/left.svg';
import rightArrow from '../../resources/images/right.svg';
import './Pagination.css';

function Pagination({ actualPage, pagesQuantity, onChangePage }) {
  const pages = [...Array(pagesQuantity).keys()];

  const backButtonClass = ''.concat(actualPage === 1 ? ' -disabled' : '');
  const nextButtonClass = ''.concat(
    actualPage === pagesQuantity || pagesQuantity <= 1 ? ' -disabled' : ''
  );

  function handleClickNumericalButton(pageNumberSelected) {
    const targetPageNumber = pageNumberSelected - actualPage;
    onChangePage(targetPageNumber);
  }

  return (
    <div className='pagination'>
      <button className={backButtonClass} onClick={() => onChangePage(-1)}>
        <img src={leftArrow} />
      </button>
      {pages.map((pageNumber) => {
        const currentPage = pageNumber + 1;
        const numericalButtonClass = ''.concat(
          actualPage === currentPage ? ' -selected' : ''
        );
        return (
          <button
            key={pageNumber}
            className={numericalButtonClass}
            onClick={() => handleClickNumericalButton(currentPage)}
          >
            {currentPage}
          </button>
        );
      })}
      <button className={nextButtonClass} onClick={() => onChangePage(1)}>
        <img src={rightArrow} />
      </button>
    </div>
  );
}

export default Pagination;
