const formatTimeValue = (value: number | string) => {
  let formattedValue = String(value);

  while (formattedValue.length < 2) {
    formattedValue = `0${formattedValue}`;
  }

  return formattedValue;
};

export { formatTimeValue };
