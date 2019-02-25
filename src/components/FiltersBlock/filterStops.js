import React, {useState, useEffect} from 'react';
import {numOfstopsData} from '../data/index';
import Checkbox from '@material-ui/core/Checkbox';

const FilterStops = (props) => {
      const {setSelectedHandler} = props;

      const [selected, setSelected] = useState([0]);

      const handleCheckbox = (id) => () => {
            let newSelected = [...selected];
            const selectedIndex = newSelected.indexOf(id);
            
            if(selectedIndex !== -1){
                  newSelected.splice(selectedIndex, 1);
            } else {
                  newSelected.push(id);
            }

            setSelected(newSelected);
      }

      const handleCheckboxAll = () => {
            if(selected.length === numOfstopsData.length){
                  setSelected([]);
                  return;
            }
            setSelected(numOfstopsData.map(item => item.id));
      }

      useEffect(() => {
            setSelectedHandler(selected);
      }, [selected])

      const renderCheckbox = () => (
            <>
                  <div className="checkbox-item" onClick={handleCheckboxAll}>
                        <Checkbox
                              color="primary"
                              disableRipple={true}
                              checked={selected.length === numOfstopsData.length}
                              className="checkbox"
                        />
                        <span className="checkbox-title">Все</span>
                  </div>
                  {
                        numOfstopsData.map(item => (
                        <div className="checkbox-item" onClick={handleCheckbox(item.id)} key={item.id}>
                              <Checkbox
                                    color="primary"
                                    checked={selected.indexOf(item.id) !== -1}
                                    disableRipple={true}
                                    className="checkbox"
                              />
                              <span className="checkbox-title">{item.title}</span>
                        </div>
                        ))
                  }
            </>
      )

      return (
            <div>
                  <span className="filter-name">Количество пересадок</span>
                  {renderCheckbox()}
            </div>
      );
}

export default FilterStops;
