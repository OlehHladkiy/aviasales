import React from 'react';
import Ticket from '../Ticket';

const TicketBlock = (props) => {
      let id = 100;
      const {data, currency, rates} = props;

      const renderTickets = () => (
            data.length > 0 ? data.map((item) => {
                  return (
                        <Ticket
                              key={id++}
                              {...item}
                              currency={currency}
                              rates={rates}
                        />
                  )
            })
            : null
      )

      return (
            <div className="ticket-block">
                  {
                        data.length > 0 ?
                              renderTickets()
                        : <div style={{width: "650px", textAlign: "center", fontSize: "40px"}}>No results</div>
                  }
            </div>
      );
}

export default TicketBlock;
