import './index.css';

import { ClockFace, RoundedButton, RoundButton } from '../../components';

import { HomeIcon, PlayIcon } from '@heroicons/react/24/solid';

const TimerPage = () => {
  return (
    <div className="timer-page">
      <header className="timer-page__header">
        <RoundedButton>
          <HomeIcon width={24} />
        </RoundedButton>
      </header>
      <main className="timer-page__content">
        <ClockFace />
        <div>
          <RoundButton>
            <PlayIcon width={48} />
          </RoundButton>
        </div>
      </main>
      <footer className="timer-page__footer">Time App</footer>
    </div>
  );
};

export default TimerPage;
