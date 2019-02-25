import React from 'react';
import FilterCurrency from './filterCurrency';
import FilterStops from './filterStops';

const FiltersBlock = (props) => {
      const {setSelectedHandler, setCurrencyHandler, currency} = props;
      return (
            <div className="filter-block">
                  <FilterCurrency 
                        setCurrencyHandler={setCurrencyHandler}
                        currency={currency}
                  />
                  <FilterStops setSelectedHandler={setSelectedHandler}/>
            </div>
      );
}

export default FiltersBlock;
