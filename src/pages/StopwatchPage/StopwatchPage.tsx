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
import { Modes } from './types';

const HMS_ZERO_TIME: TimeState = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const MSMS_ZERO_TIME: TimeState = {
  minutes: '00',
  seconds: '00',
  milliseconds: '00',
};

const StopwatchPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState<TimeState>(HMS_ZERO_TIME);
  const [lapsTimes, setLapsTimes] = useState<string[][]>([[]]);
  const [mode, setMode] = useState<Modes>(Modes.HMS);

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

  const handleClockStop = (currentMode: Modes) => {
    setIsStarted(false);
    setIsPaused(false);
    setTime(currentMode === Modes.HMS ? HMS_ZERO_TIME : MSMS_ZERO_TIME);
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

  const handleModeChange = (newMode: Modes) => {
    handleClockStop(newMode);
    setMode(newMode);
  };

  return (
    <main className="stopwatch">
      <div className="stopwatch__row">
        <ClockFace time={time} onTimeChange={setTime} />
        <div className="stopwatch__switcher">
          <button
            className="stopwatch__option"
            type="button"
            disabled={mode === Modes.HMS}
            onClick={() => handleModeChange(Modes.HMS)}
          >
            h:m:s
          </button>
          <button
            className="stopwatch__option"
            type="button"
            disabled={mode === Modes.MSMS}
            onClick={() => handleModeChange(Modes.MSMS)}
          >
            m:s:ms
          </button>
        </div>
      </div>
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
            <RoundButton onClick={() => handleClockStop(mode)}>
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
