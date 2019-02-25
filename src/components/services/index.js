export const calculatePrice = (price, currency, rates) => {
      let resPrice = 0;

      if(currency === 'RUB'){
            resPrice = price + " ₽";
      } else if(currency === 'EUR') {
            resPrice = (price / rates["RUB"]).toFixed(2) + " €";
      } else {
            resPrice = (price / rates["RUB"] * rates[currency]).toFixed(2) + " $";
      }

      return resPrice;
}

