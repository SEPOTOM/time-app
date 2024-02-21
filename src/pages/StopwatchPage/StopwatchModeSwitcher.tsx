import { ModeSwitcherProps, Modes } from './types';

const StopwatchModeSwitcher = ({ mode, onModeChange }: ModeSwitcherProps) => {
  return (
    <div className="stopwatch__switcher">
      <button
        className="stopwatch__option"
        type="button"
        disabled={mode === Modes.HMS}
        onClick={() => onModeChange(Modes.HMS)}
      >
        h:m:s
      </button>
      <button
        className="stopwatch__option"
        type="button"
        disabled={mode === Modes.MSMS}
        onClick={() => onModeChange(Modes.MSMS)}
      >
        m:s:ms
      </button>
    </div>
  );
};

export default StopwatchModeSwitcher;
