import moment from "moment";

export const dateFromNow = date => moment(date).fromNow();

export const dateFull = date => moment(date).format("dddd, MMMM Do, GGGG");

export const dateStd = date => moment(date).format("YYYY-MM-DD");

export const getHsl = date => {
  // Time from now in the past and future. Sets the timescale on which to draw colors. In months, 3 months ago and 3 months in the future = 6 months total
  //   const timePeriod = 1;
  const timePeriod = 0.7 * 7 * 24 * 60 * 60 * 1000; // Weeks X Days X Hours X Minutes X Seconds X Miliseconds.

  // Gets the date timePeriod in the past
  const pastDate = Date.now() - timePeriod;

  // Gets the date timePeriod in the future
  const futureDate = Date.now() + timePeriod;

  // HMS colors are graded between 0 for red and 240 for blue. We need to express the time difference between the date (argument passed to getHMS() function) and time period in the past or future as a number between 0 and 240, the present moment in time being representet as 120 green.
  //    0 red            120 green         240 blue
  //    |-----------------|-----------------|
  // pastDate            now              futureDate
  const multiplier = 240 / (futureDate - pastDate);

  // Multiplier reduces the difference between the pastDate and date (argument passed to getHMS() function) to a number between 0 and 240.
  //    0 red            120 green         240 blue
  //    |-----------------|-----------------|
  //    |-----------|-----------------------|
  // pastDate      date                   futureDate
  const hsl = (date - pastDate) * multiplier;

  // Return 0 red for dates smaller than now - timePeriod and 240 blue for dates larger than now + timePeriod
  if (hsl <= 0) return 0;
  if (hsl >= 240) return 240;
  return Math.round(hsl);
};
