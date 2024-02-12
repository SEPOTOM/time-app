import './index.css';

import ClockFaceInput from './ClockFaceInput';

import { TimeState } from '../../types';
import { Props } from './types';

const ClockFace = ({ time, onTimeChange }: Props) => {
  const { hours, minutes, seconds, milliseconds } = time;

  const handleTimeChange = (updatedTime: Partial<TimeState>) => {
    onTimeChange((t: TimeState) => ({ ...t, ...updatedTime }));
  };

  return (
    <div className="clock-face">
      {hours && (
        <>
          <ClockFaceInput
            maxValue={99}
            value={hours}
            onChange={(newHours) => handleTimeChange({ hours: newHours })}
          />
          <span className="clock-face__separator">:</span>
        </>
      )}
      <ClockFaceInput
        maxValue={59}
        value={minutes}
        onChange={(newMinutes) => handleTimeChange({ minutes: newMinutes })}
      />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput
        maxValue={59}
        value={seconds}
        onChange={(newSeconds) => handleTimeChange({ seconds: newSeconds })}
      />
      {milliseconds && (
        <>
          <span className="clock-face__separator">:</span>
          <ClockFaceInput
            maxValue={99}
            value={milliseconds}
            onChange={(newMilliseconds) =>
              handleTimeChange({ milliseconds: newMilliseconds })
            }
          />
        </>
      )}
    </div>
  );
};

export default ClockFace;
