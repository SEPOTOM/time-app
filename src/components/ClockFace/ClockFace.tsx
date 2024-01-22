import './index.css';

import ClockFaceInput from './ClockFaceInput';

import { TimeState } from '../../types';
import { Props } from './types';

const ClockFace = ({ time, onTimeChange }: Props) => {
  const handleHoursChange = (newHours: string) => {
    onTimeChange((t: TimeState) => ({ ...t, hours: newHours }));
  };

  const handleMinutesChange = (newMinutes: string) => {
    onTimeChange((t: TimeState) => ({ ...t, minutes: newMinutes }));
  };

  const handleSecondsChange = (newSeconds: string) => {
    onTimeChange((t: TimeState) => ({ ...t, seconds: newSeconds }));
  };

  return (
    <div className="clock-face">
      <ClockFaceInput
        maxValue={99}
        value={time.hours}
        onChange={handleHoursChange}
      />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput
        maxValue={59}
        value={time.minutes}
        onChange={handleMinutesChange}
      />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput
        maxValue={59}
        value={time.seconds}
        onChange={handleSecondsChange}
      />
    </div>
  );
};

export default ClockFace;
