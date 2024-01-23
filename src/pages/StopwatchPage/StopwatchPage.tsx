import './index.css';

import { useState } from 'react';
import { HomeIcon, PlayIcon } from '@heroicons/react/24/solid';

import {
  ClockFace,
  Console,
  RoundButton,
  RoundedButton,
} from '../../components';

import { TimeState } from '../../types';

const StopwatchPage = () => {
  const [time, setTime] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

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
          <RoundButton onClick={() => {}}>
            <PlayIcon width={48} />
          </RoundButton>
        </div>
        <Console />
      </main>
      <footer className="stopwatch__footer">Time App</footer>
    </div>
  );
};

export default StopwatchPage;
