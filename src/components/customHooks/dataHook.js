import { useState, useEffect } from 'react';
import { getData } from '../data';

const useData = () => {
      const [data, setData] = useState([]);
      useEffect(() => {
            getData().then(res => {
                  setData(res);
            });
      }, [])
      return data;
}

export default useData;