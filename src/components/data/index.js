import axios from 'axios';
import {SERVER_URL, CURRENCY_URL} from '../constants';

export const numOfstopsData = [
      {id: 0, title: "Без пересадок"},
      {id: 1, title: "1 пересадка"},
      {id: 2, title: "2 пересадки"},
      {id: 3, title: "3 пересадки"},
]

export const buttons = [
      {id: 'RUB', title: 'RUB'},
      {id: 'USD', title: 'USD'},
      {id: 'EUR', title: 'EUR'},
]

export const getData = async () => {
      const {data} = await axios.get(SERVER_URL);
      
      if(data){
            return data.tickets;
      } else {
            return [];
      }
}

export const getCurrency = async () => {
      const { data } = await axios.get(CURRENCY_URL);

      return data;
}