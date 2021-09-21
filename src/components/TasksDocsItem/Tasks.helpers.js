import moment from "moment";

export const dateFromNow = date => moment(date).fromNow();

export const dateFull = date => moment(date).format("dddd, MMMM Do, GGGG");
