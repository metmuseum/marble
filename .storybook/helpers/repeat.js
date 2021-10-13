export default (numberOfTimes, filler, joiner = "\n") => new Array(numberOfTimes).fill(filler).join(joiner);
