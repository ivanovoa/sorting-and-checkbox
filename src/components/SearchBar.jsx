import React, { useState } from "react";
import useDebounce from "./useDebounce";

function SearchBar ({filterText, setFilterText, onGoodsChange, isGoodsChecked, isElectronicsChecked, onElectronicsChange}) {

    const [displayValue, setDisplayValue] = useState(filterText);
    const debouncedChange = useDebounce(setFilterText, 500);


    function  handleFilterTextChange(e) {
        const {value} = e.target;
        setDisplayValue(value)
        debouncedChange(value);
    }

    function handleGoodsChange(e) {
      onGoodsChange(e.target.checked)
    }

    function handleElectronicsChange(e) {
      onElectronicsChange(e.target.checked)
    }

    return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={displayValue}
            onChange={handleFilterTextChange}
            />
          <p>
            <input
              id="goods"
              type="checkbox"
              checked={isGoodsChecked}
              onChange={handleGoodsChange}
              />
              <span></span>
            <label className="goods">Only show products in goods</label>
          </p>
          <p>
            <input
              id="electronics"
              type="checkbox"
              checked={isElectronicsChecked}
              onChange={handleElectronicsChange}
              />
            <label className="electro">Only show products in electronics</label>
          </p>
        </form>
      );
}

export default SearchBar