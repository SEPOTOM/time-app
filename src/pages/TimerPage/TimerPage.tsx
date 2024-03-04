import './index.css';

import { useState, useRef, useEffect } from 'react';
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid';

import { ClockFace, RoundButton, PauseResumeButton } from '../../components';

import { useTimerEffect } from './hooks';

import { isTimeZero } from './utils';

import { TimeState } from '../../types';

import { INITIAL_TIME } from './data';

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

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isFinished) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isFinished]);

  const handleCountdownStart = () => {
    if (!isTimeZero(time)) {
      setIsStarted(true);
    }
  };

  const handleCountdownStop = () => {
    setIsStarted(false);
    setIsPaused(false);
    setIsFinished(false);
    setTime(INITIAL_TIME);
  };

  return (
    <>
      <main className="timer-page">
        <ClockFace time={time} onTimeChange={setTime} />
        <div className="timer-page__buttons">
          {isStarted ? (
            <>
              {!isFinished && (
                <PauseResumeButton
                  onClick={() => setIsPaused(!isPaused)}
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
      <audio src="./alarm_clock.mp3" loop hidden ref={audioRef}></audio>
    </>
  );
};

export default TimerPage;
