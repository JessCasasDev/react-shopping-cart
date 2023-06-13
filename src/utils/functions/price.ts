export const getPrice = (price: string, quantity: number) => {
  return quantity * +price.replace("$", "");
};
export const renderPrice = (priceValue: number) => {
  return `$${Number.parseFloat(`${priceValue}`).toFixed(2)}`;
};
