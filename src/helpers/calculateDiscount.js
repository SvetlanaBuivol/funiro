export const calculateDiscount = (priceStr, discountPercent) => {
  const price = parseFloat(priceStr.replace(/\./g, ""));
  const discountAmount = price * (discountPercent / 100);
  const discountedPrice = price - discountAmount;
  const formattedPrice = discountedPrice
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return formattedPrice;
};
