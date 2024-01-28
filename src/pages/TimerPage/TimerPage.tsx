import './index.css';

import { useState, useRef } from 'react';
import { HomeIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid';

import {
  ClockFace,
  RoundButton,
  PauseResumeButton,
  HomeButton,
} from '../../components';

import { useTimerEffect } from './hooks';

import { isTimeZero } from './utils';

import { TimeState } from '../../types';

const INITIAL_TIME = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const TimerPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState<TimeState>(INITIAL_TIME);

  const audioRef = useRef<HTMLAudioElement>(null);

  useTimerEffect({
    isFinished,
    isPaused,
    isStarted,
    setIsFinished,
    setTime,
  });

  const handleCountdownStart = () => {
    if (!isTimeZero(time)) {
      setIsStarted(true);
    }
  };

  const handleCountdownPauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleCountdownStop = () => {
    setIsStarted(false);
    setIsPaused(false);
    setIsFinished(false);
    setTime(INITIAL_TIME);
  };

  return (
    <div className="timer-page">
      <header className="timer-page__header">
        <HomeButton>
          <HomeIcon width={24} />
        </HomeButton>
      </header>
      <main className="timer-page__content">
        <ClockFace time={time} onTimeChange={setTime} />
        <div className="timer-page__buttons">
          {isStarted ? (
            <>
              {!isFinished && (
                <PauseResumeButton
                  onClick={handleCountdownPauseResume}
                  isPaused={isPaused}
                />
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
