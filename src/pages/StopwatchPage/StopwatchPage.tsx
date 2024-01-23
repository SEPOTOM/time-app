import './index.css';

import { useEffect, useState } from 'react';
import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  StopIcon,
} from '@heroicons/react/24/solid';

import {
  ClockFace,
  Console,
  RoundButton,
  RoundedButton,
} from '../../components';

import { formatTimeValue } from '../../utils/formatTimeValue';

import { TimeState } from '../../types';
import PauseResumeButton from '../../components/PauseResumeButton/PauseResumeButton';

const StopwatchPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [roundsTime, setRoundsTime] = useState<string[]>([]);

  useEffect(() => {
    let intervalId: number | null = null;

    const getNewSeconds = ({ seconds, minutes, hours }: TimeState): string => {
      const rawNewSeconds = Number(seconds) + 1;

      if (rawNewSeconds > 59 && hours === '99' && minutes === '59') {
        return '59';
      } else if (rawNewSeconds > 59) {
        return '00';
      }

      return formatTimeValue(rawNewSeconds);
    };

    const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '59') {
        return minutes;
      }

      const rawNewMinutes = Number(minutes) + 1;

      if (rawNewMinutes > 59 && hours === '99') {
        return '59';
      } else if (rawNewMinutes > 59) {
        return '00';
      }

      return formatTimeValue(rawNewMinutes);
    };

    const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '59' || minutes !== '59') {
        return hours;
      }

      const rawNewHours = Number(hours) + 1;

      if (rawNewHours > 99) {
        return '99';
      }

      return formatTimeValue(rawNewHours);
    };

    const incrementTime = () => {
      setTime((t: TimeState) => {
        return {
          hours: getNewHours(t),
          minutes: getNewMinutes(t),
          seconds: getNewSeconds(t),
        };
      });
    };

    if (isStarted && !isPaused) {
      intervalId = window.setInterval(incrementTime, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isStarted, isPaused]);

  const handleClockStart = () => {
    setIsStarted(true);
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleClockStop = () => {
    setIsStarted(false);
    setIsPaused(false);
    setTime({
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  };

  const handleRoundAdd = () => {
    setRoundsTime([
      ...roundsTime,
      `${time.hours}:${time.minutes}:${time.seconds}`,
    ]);
  };

  return (
    <div className="stopwatch">
      <header className="stopwatch__header">
        <RoundedButton>
          <HomeIcon width={24} />
        </RoundedButton>
      </header>
      <main className="stopwatch__content">
        <ClockFace time={time} onTimeChange={setTime} />
        <div className="stopwatch__buttons">
          {isStarted ? (
            <>
              <RoundButton onClick={handleRoundAdd}>
                <FlagIcon width={48} />
              </RoundButton>
              <PauseResumeButton
                onClick={handlePauseToggle}
                countdownPaused={isPaused}
              />
              <RoundButton onClick={handleClockStop}>
                <StopIcon width={48} />
              </RoundButton>
            </>
          ) : (
            <RoundButton onClick={handleClockStart}>
              <PlayIcon width={48} />
            </RoundButton>
          )}
        </div>
        <Console roundsTime={roundsTime} />
      </main>
      <footer className="stopwatch__footer">Time App</footer>
    </div>
  );
};

export default StopwatchPage;
