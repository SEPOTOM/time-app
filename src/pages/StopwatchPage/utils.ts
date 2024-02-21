import { formatTimeValue } from '../../utils/formatTimeValue';

import { TimeState } from '../../types';

const MAX_HOURS = '99';
const MAX_MINUTES = '59';
const MAX_SECONDS = '59';
const MAX_MILLISECONDS = '99';

const getNewMilliseconds = ({
  milliseconds,
  seconds,
  minutes,
}: TimeState): string => {
  if (!milliseconds) {
    return '00';
  }

  if (seconds === MAX_SECONDS && minutes === MAX_MINUTES) {
    return MAX_MILLISECONDS;
  }

  const rawNewMilliseconds = Number(milliseconds) + 1;

  if (rawNewMilliseconds > 99) {
    return '00';
  }

  return formatTimeValue(rawNewMilliseconds);
};

const getNewSeconds = ({
  milliseconds,
  seconds,
  minutes,
  hours,
}: TimeState): string => {
  if (
    (hours === MAX_HOURS || !hours) &&
    minutes === MAX_MINUTES &&
    seconds === MAX_SECONDS
  ) {
    return MAX_SECONDS;
  }

  if (milliseconds && milliseconds !== MAX_MILLISECONDS) {
    return seconds;
  }

  const rawNewSeconds = Number(seconds) + 1;

  if (rawNewSeconds > 59) {
    return '00';
  }

  return formatTimeValue(rawNewSeconds);
};

const getNewMinutes = ({
  milliseconds,
  seconds,
  minutes,
  hours,
}: TimeState): string => {
  if (
    seconds !== MAX_SECONDS ||
    (milliseconds !== MAX_MILLISECONDS && milliseconds)
  ) {
    return minutes;
  }

  const rawNewMinutes = Number(minutes) + 1;

  if (rawNewMinutes > 59) {
    return hours === MAX_HOURS || !hours ? MAX_MINUTES : '00';
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

export { getNewMilliseconds, getNewSeconds, getNewMinutes, getNewHours };
