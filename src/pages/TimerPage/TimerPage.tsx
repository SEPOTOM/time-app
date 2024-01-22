import './index.css';

import { useState, useEffect, useRef } from 'react';
import {
  HomeIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
} from '@heroicons/react/24/solid';

import { ClockFace, RoundedButton, RoundButton } from '../../components';

import { formatTimeValue } from '../../utils/formatTimeValue';
import { isTimeZero } from './utils';

import { TimeState } from '../../types';

const TimerPage = () => {
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownPaused, setCountdownPaused] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [time, setTime] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let timeoutId: number | null = null;

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
        if (isTimeZero(t)) {
          setCountdownFinished(true);
          return t;
        }

        return {
          hours: getNewHours(t),
          minutes: getNewMinutes(t),
          seconds: getNewSeconds(t),
        };
      });

      timeoutId = window.setTimeout(decreaseTime, 1000);
    };

    if (countdownStarted && !countdownPaused && !countdownFinished) {
      timeoutId = window.setTimeout(decreaseTime, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [countdownStarted, countdownPaused, countdownFinished]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (countdownFinished) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [countdownFinished]);

  const handleCountdownStart = () => {
    if (!isTimeZero(time)) {
      setCountdownStarted(true);
    }
  };

  const handleCountdownPauseResume = () => {
    setCountdownPaused(!countdownPaused);
  };

  const handleCountdownStop = () => {
    setCountdownStarted(false);
    setCountdownPaused(false);
    setCountdownFinished(false);
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
              {!countdownFinished && (
                <RoundButton onClick={handleCountdownPauseResume}>
                  {countdownPaused ? (
                    <PlayIcon width={48} />
                  ) : (
                    <PauseIcon width={48} />
                  )}
                </RoundButton>
              )}
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
      <audio src="./alarm_clock.mp3" loop hidden ref={audioRef}></audio>
    </div>
  );
};

export default TimerPage;
