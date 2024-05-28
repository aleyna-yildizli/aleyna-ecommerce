export const truncateAddress = (address, maxLength = 30) => {
  if (address.length > maxLength) {
    return address.slice(0, maxLength) + "...";
  }
  return address;
};
