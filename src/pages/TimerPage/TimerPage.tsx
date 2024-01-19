import './index.css';

import { useState } from 'react';

import { ClockFace, RoundedButton, RoundButton } from '../../components';

import {
  HomeIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
} from '@heroicons/react/24/solid';

const TimerPage = () => {
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownPaused, setCountdownPaused] = useState(false);

  const handleCountdownStart = () => {
    setCountdownStarted(true);
  };

  const handleCountdownPauseResume = () => {
    setCountdownPaused(!countdownPaused);
  };

  return (
    <div className="timer-page">
      <header className="timer-page__header">
        <RoundedButton>
          <HomeIcon width={24} />
        </RoundedButton>
      </header>
      <main className="timer-page__content">
        <ClockFace
          countdownStarted={countdownStarted}
          countdownPaused={countdownPaused}
        />
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
              <RoundButton onClick={() => {}}>
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
