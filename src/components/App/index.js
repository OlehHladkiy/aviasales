import React, { useState, useCallback, useEffect } from 'react';
import FiltersBlock from '../FiltersBlock';
import TicketBlock from '../TicketBlock';
import useData from '../customHooks/dataHook';
import {getCurrency} from '../data'

const App = () => {
      const [selected, setSelected] = useState([]);
      const setSelectedHandler = useCallback((selected) => {
            setSelected(selected);
      }, []);

      const [currency, setCurrency] = useState('RUB');
      const setCurrencyHandler = useCallback((currency) => {
            setCurrency(currency);
      }, [])

      const [rates, setRates] = useState({});
      useEffect(() => {
            getCurrency().then(res => { 
                  setRates(res.rates);
            });
      }, [])

      const data = useData();
      let visibleData = data.filter(item => selected.indexOf(item.stops) !== -1);

      return (
            <>
                  <div className="logo"></div>
                  <div className="container">
                        <FiltersBlock
                              setSelectedHandler={setSelectedHandler}
                              setCurrencyHandler={setCurrencyHandler}
                              currency={currency}
                        />
                        <TicketBlock 
                              data={visibleData} 
                              currency={currency}
                              rates={rates}
                        />
                  </div>
                  </>
      );
}

export default App;
