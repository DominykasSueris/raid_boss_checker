export const date = Date.now();

const formatter = Intl.DateTimeFormat("en-Ca", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});

export const currentDate = formatter.format(date);
