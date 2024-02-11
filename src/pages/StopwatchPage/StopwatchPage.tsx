import './index.css';

import { useState } from 'react';
import { FlagIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid';

import {
  ClockFace,
  Console,
  PauseResumeButton,
  RoundButton,
} from '../../components';

import { useStopwatchEffect } from './hooks';

import { TimeState } from '../../types';

const INITIAL_TIME = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const StopwatchPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState<TimeState>(INITIAL_TIME);
  const [lapsTimes, setLapsTimes] = useState<string[][]>([[]]);

  useStopwatchEffect(isStarted, isPaused, setTime);

  const handleClockStart = () => {
    setIsStarted(true);

    if (lapsTimes[lapsTimes.length - 1].length > 0) {
      setLapsTimes([...lapsTimes, []]);
    }
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleClockStop = () => {
    setIsStarted(false);
    setIsPaused(false);
    setTime(INITIAL_TIME);
  };

  const handleRoundAdd = () => {
    const lastLapTimes = lapsTimes[lapsTimes.length - 1];
    const lapTime = `${time.hours}:${time.minutes}:${time.seconds}`;

    setLapsTimes([
      ...lapsTimes.slice(0, lapsTimes.length - 1),
      [...lastLapTimes, lapTime],
    ]);
  };

  const handleConsoleClear = () => {
    setLapsTimes([[]]);
  };

  return (
    <main className="stopwatch">
      <ClockFace time={time} onTimeChange={setTime} />
      <div className="stopwatch__buttons">
        {isStarted ? (
          <>
            <RoundButton onClick={handleRoundAdd}>
              <FlagIcon width={48} />
            </RoundButton>
            <PauseResumeButton
              onClick={handlePauseToggle}
              isPaused={isPaused}
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
      <Console lapsTimes={lapsTimes} onClear={handleConsoleClear} />
    </main>
  );
};

export default StopwatchPage;
