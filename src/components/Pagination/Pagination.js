import React from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../resources/images/left.svg';
import rightArrow from '../../resources/images/right.svg';
import './Pagination.css';

function Pagination({ actualPage, pagesQuantity, onChangePage }) {
  const pages = [...Array(pagesQuantity).keys()];

  const backButtonClass = ''.concat(actualPage === 1 ? ' -disabled' : '');
  const nextButtonClass = ''.concat(
    actualPage === pagesQuantity || pagesQuantity <= 1 ? ' -disabled' : '',
  );

  function handleClickNumericalButton(pageNumberSelected) {
    const targetPageNumber = pageNumberSelected - actualPage;
    onChangePage(targetPageNumber);
  }

  return (
    <div className="pagination">
      <button
        type="button"
        className={backButtonClass}
        onClick={() => onChangePage(-1)}
      >
        <img alt="left arrow" src={leftArrow} />
      </button>
      {pages.map((pageNumber) => {
        const currentPage = pageNumber + 1;
        const numericalButtonClass = ''.concat(
          actualPage === currentPage ? ' -selected' : '',
        );
        return (
          <button
            type="button"
            key={pageNumber}
            className={numericalButtonClass}
            onClick={() => handleClickNumericalButton(currentPage)}
          >
            {currentPage}
          </button>
        );
      })}
      <button
        type="button"
        className={nextButtonClass}
        onClick={() => onChangePage(1)}
      >
        <img alt="right arrow" src={rightArrow} />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  actualPage: PropTypes.number.isRequired,
  pagesQuantity: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
