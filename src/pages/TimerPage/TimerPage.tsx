import './index.css';

import { useState, useEffect } from 'react';

import { ClockFace, RoundedButton, RoundButton } from '../../components';

import {
  HomeIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
} from '@heroicons/react/24/solid';

import { formatTimeValue } from '../../utils/formatTimeValue';

import { TimeState } from '../../types';

const TimerPage = () => {
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownPaused, setCountdownPaused] = useState(false);
  const [time, setTime] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    let timeoutId = 0;

    const getNewSeconds = ({ seconds, minutes, hours }: TimeState): string => {
      const rawNewSeconds = Number(seconds) - 1;

      if (rawNewSeconds < 0 && hours === '00' && minutes === '00') {
        return '00';
      } else if (rawNewSeconds < 0) {
        return '59';
      }

      return formatTimeValue(rawNewSeconds);
    };

    const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '00') {
        return minutes;
      }

      const rawNewMinutes = Number(minutes) - 1;

      if (rawNewMinutes < 0 && hours === '00') {
        return '00';
      } else if (rawNewMinutes < 0) {
        return '59';
      }

      return formatTimeValue(rawNewMinutes);
    };

    const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '00' || minutes !== '00') {
        return hours;
      }

      const rawNewHours = Number(hours) - 1;

      if (rawNewHours < 0) {
        return '00';
      }

      return formatTimeValue(rawNewHours);
    };

    const decreaseTime = () => {
      setTime((t: TimeState) => {
        if (t.hours === '00' && t.minutes === '00' && t.seconds === '00') {
          return t;
        }

        const newSeconds = getNewSeconds(t);
        const newMinutes = getNewMinutes(t);
        const newHours = getNewHours(t);

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });

      timeoutId = window.setTimeout(decreaseTime, 1000);
    };

    if (countdownStarted && !countdownPaused) {
      timeoutId = window.setTimeout(decreaseTime, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [countdownStarted, countdownPaused]);

  const handleCountdownStart = () => {
    if (time.hours !== '00' || time.minutes !== '00' || time.seconds !== '00') {
      setCountdownStarted(true);
    }
  };

  const handleCountdownPauseResume = () => {
    setCountdownPaused(!countdownPaused);
  };

  const handleCountdownStop = () => {
    setCountdownStarted(false);
    setCountdownPaused(false);
    setTime({
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  };

  return (
    <div className="timer-page">
      <header className="timer-page__header">
        <RoundedButton>
          <HomeIcon width={24} />
        </RoundedButton>
      </header>
      <main className="timer-page__content">
        <ClockFace time={time} onTimeChange={setTime} />
        <div className="timer-page__buttons">
          {countdownStarted ? (
            <>
              <RoundButton onClick={handleCountdownPauseResume}>
                {countdownPaused ? (
                  <PlayIcon width={48} />
                ) : (
                  <PauseIcon width={48} />
                )}
              </RoundButton>
              <RoundButton onClick={handleCountdownStop}>
                <StopIcon width={48} />
              </RoundButton>
            </>
          ) : (
            <RoundButton onClick={handleCountdownStart}>
              <PlayIcon width={48} />
            </RoundButton>
          )}
        </div>
      </main>
      <footer className="timer-page__footer">Time App</footer>
    </div>
  );
};

export default TimerPage;
