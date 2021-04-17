import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ placeholder, onChange, onSearchClick, onEnter }) {
  const [searchValue, setSeartchValue] = useState('');
  const onChangeBound = (e) => {
    setSeartchValue(e.target.value);
    onChange(e.target.value, e);
  };

  const onEnterBound = (e) => {
    const isEnterPressed = e.which === 13 || e.keyCode === 13;
    if (isEnterPressed) {
      onEnter(e.target.value, e);
    }
  };

  const onSearch = () => {
    onSearchClick(searchValue);
  };

  const searchFieldButtonStyle = {
    height: 35 - 2,
    width: 35 - 2,
    outline: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    padding: 5,
    boxSizing: 'border-box',
    appearance: 'none',
    border: 'none',
    borderLeft: '1px #ddd solid',
  };
  const SearchIcon = () => {
    const iconEdge = Math.ceil(35 * 0.6);
    const searchIconStyle = {
      fill: '#727272',
    };
    return (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width={iconEdge}
        height={iconEdge}
        viewBox="0 0 635 635"
        style={searchIconStyle}
      >
        <g>
          <path
            d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
            c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
            c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
            C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
            c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"
          />
        </g>
      </svg>
    );
  };
  return (
    <div className="input-group w-50">
      <input
        type="text"
        className="form-control rounded"
        placeholder={placeholder}
        aria-label="search input"
        aria-describedby="search-addon"
        onChange={onChangeBound}
        onKeyPress={onEnterBound}
        value={searchValue}
      />
      <button
        type="button"
        className="btn "
        aria-label="search button"
        onClick={onSearch}
        style={searchFieldButtonStyle}
      >
        <SearchIcon />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearchClick: PropTypes.func,
  onEnter: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchBar;
