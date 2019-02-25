import React from 'react';
import {buttons} from '../data/index';

const FilterCurrency = (props) => {
      const {setCurrencyHandler, currency} = props;
      
      const renderButtons = () => {
            return buttons.map(item => {
                  let className="currency-button";
                  if(item.id === currency) className += " active";

                  return (
                        <div 
                              key={item.id} 
                              onClick={() => setCurrencyHandler(item.id)} 
                              className={className}
                        >
                              {item.title}
                        </div>
                  )
            })
      }

      return (
            <div>
                  <span className="filter-name">Валюта</span>
                  <div className="currency-block">
                        {renderButtons()}
                  </div>
            </div>
      );
}

export default FilterCurrency;
