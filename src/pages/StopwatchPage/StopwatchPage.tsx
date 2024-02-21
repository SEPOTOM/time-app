import './index.css';

import { useState } from 'react';
import { FlagIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid';

import {
  ClockFace,
  Console,
  PauseResumeButton,
  RoundButton,
} from '../../components';
import StopwatchModeSwitcher from './StopwatchModeSwitcher';

import { useStopwatchEffect } from './hooks';

import { TimeState } from '../../types';
import { Modes } from './types';

import { HMS_ZERO_TIME, MSMS_ZERO_TIME } from './data';

const StopwatchPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState<TimeState>(HMS_ZERO_TIME);
  const [lapsTimes, setLapsTimes] = useState<string[][]>([[]]);
  const [mode, setMode] = useState<Modes>(Modes.HMS);

  useStopwatchEffect(isStarted, isPaused, mode, setTime);

  const handleClockStart = () => {
    setIsStarted(true);

    if (lapsTimes[lapsTimes.length - 1].length > 0) {
      setLapsTimes([...lapsTimes, []]);
    }
  };

  const handleClockStop = (currentMode: Modes) => {
    setIsStarted(false);
    setIsPaused(false);
    setTime(currentMode === Modes.HMS ? HMS_ZERO_TIME : MSMS_ZERO_TIME);
  };

  const handleRoundAdd = () => {
    const lastLapTimes = lapsTimes[lapsTimes.length - 1];
    const hours = time.hours ? `${time.hours}:` : '';
    const milliseconds = time.milliseconds ? `:${time.milliseconds}` : '';
    const lapTime = `${hours}${time.minutes}:${time.seconds}${milliseconds} (${mode})`;

    setLapsTimes([
      ...lapsTimes.slice(0, lapsTimes.length - 1),
      [...lastLapTimes, lapTime],
    ]);
  };

  const handleModeChange = (newMode: Modes) => {
    handleClockStop(newMode);
    setMode(newMode);
  };

  return (
    <main className="stopwatch">
      <div className="stopwatch__row">
        <ClockFace time={time} onTimeChange={setTime} />
        <StopwatchModeSwitcher mode={mode} onModeChange={handleModeChange} />
      </div>
      <div className="stopwatch__buttons">
        {isStarted ? (
          <>
            <RoundButton onClick={handleRoundAdd}>
              <FlagIcon width={48} />
            </RoundButton>
            <PauseResumeButton
              onClick={() => setIsPaused(!isPaused)}
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
      <Console lapsTimes={lapsTimes} onClear={() => setLapsTimes([[]])} />
    </main>
  );
};

export default StopwatchPage;
