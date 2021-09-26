import moment from "moment";

export const dateFromNow = date => moment(date).fromNow();

export const dateFull = date => moment(date).format("dddd, MMMM Do, GGGG");

export const dateStd = date => moment(date).format("YYYY-MM-DD");
