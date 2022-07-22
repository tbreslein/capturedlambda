export const transformDate = (inputDate: Date) => {
  return new Date(inputDate).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
