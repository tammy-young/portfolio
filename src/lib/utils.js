
export function convertToReadableDate(dateString) {
  const date = new Date(dateString);
  const formatted = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(date).replace("Sep", "Sept");
  return formatted;
}

export function formatDuration(startDate, endDate) {
  if (!startDate) return '';
  const start = convertToReadableDate(startDate);
  const end = endDate ? convertToReadableDate(endDate) : 'Present';
  return `${start} - ${end}`;
}
