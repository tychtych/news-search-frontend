const formatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

export default function formatDate(date) {
  console.log(date);
  if (date) {
    const dateToConvert = new Date(date);
    return formatter.format(dateToConvert);
  }
}
