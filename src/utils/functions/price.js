export const getPrice = (price, quantity) => {
  return quantity * +price.replace("$", "");
};
export const renderPrice = (priceValue) => {
  return `$${Number.parseFloat(priceValue).toFixed(2)}`;
};
