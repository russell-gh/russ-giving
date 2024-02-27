export const jgDateToJson = (jg) => {
  return Number(jg.split("(")[1].split("+")[0]);
};
