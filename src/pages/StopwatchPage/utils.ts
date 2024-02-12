import { formatTimeValue } from '../../utils/formatTimeValue';

import { TimeState } from '../../types';

const MAX_HOURS = '99';
const MAX_MINUTES = '59';
const MAX_SECONDS = '59';

const getNewSeconds = ({ seconds, minutes, hours }: TimeState): string => {
  if (
    hours === MAX_HOURS &&
    minutes === MAX_MINUTES &&
    seconds === MAX_SECONDS
  ) {
    return MAX_SECONDS;
  }

  const rawNewSeconds = Number(seconds) + 1;

  if (rawNewSeconds > 59) {
    return '00';
  }

  return formatTimeValue(rawNewSeconds);
};

const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
  if (seconds !== MAX_SECONDS) {
    return minutes;
  }

  const rawNewMinutes = Number(minutes) + 1;

  if (rawNewMinutes > 59) {
    return hours === MAX_HOURS ? MAX_MINUTES : '00';
  }

  return formatTimeValue(rawNewMinutes);
};

const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
  if (seconds !== MAX_SECONDS || minutes !== MAX_MINUTES) {
    return hours || MAX_HOURS;
  }

  const rawNewHours = Number(hours) + 1;

  if (rawNewHours > 99) {
    return MAX_HOURS;
  }

  return formatTimeValue(rawNewHours);
};

export { getNewSeconds, getNewMinutes, getNewHours };
