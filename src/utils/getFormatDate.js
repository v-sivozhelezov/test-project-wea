const monthNames = [
  "янв",
  "фев",
  "мар",
  "апр",
  "мая",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export function getFormatDate(date) {
  const fullDate = new Date(date);

  return `${fullDate?.getDate()} ${monthNames[fullDate?.getMonth()]}`;
}
