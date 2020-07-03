const formatDate = (date: Date): string => {
  const strDateList = date.toString();

  const [year, month, dayDate] = strDateList.split('-');
  const [day] = dayDate.split('T');
  const strDate = [day, month, year].join('/');

  return strDate;
};

export default formatDate;
