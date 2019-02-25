import React, { useCallback } from 'react';
import moment from 'moment';
import {calculatePrice} from '../services';

const Ticket = (props) => {
      const { 
            price, 
            departure_time, 
            arrival_time, 
            stops, 
            origin,  
            destination,
            origin_name,
            destination_name,
            departure_date,
            arrival_date,
            currency,
            rates,
      } = props;

      const renderPrice = useCallback(() => calculatePrice(price, currency, rates), [currency]);

      return (
            <div className="ticket">
                  <div className="logo-and-buy">
                        <div className="ticket-logo"></div>
                        <button className="buy-button">
                              Купить<br/> за {renderPrice()}
                        </button>
                  </div>
                  <div className="ticket-detail">
                        <div className="detail-top">
                              <div className="time">
                                    {departure_time}
                              </div>
                              <div className="stops">
                                    {stops !== 0 ?
                                          stops === 1 ? `${stops} пересадка` : `${stops} пересадки`
                                    : null} 
                              </div>
                              <div className="time">
                                    {arrival_time}
                              </div>
                        </div>
                        <div className="detail-bot">
                              <div>
                                    {origin}, {origin_name}<br/>
                                    {moment(departure_date).format('ll, ddd')}
                              </div>
                              <div>
                                    {destination}, {destination_name}<br/>
                                    {moment(arrival_date).format('ll, ddd')}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Ticket;
