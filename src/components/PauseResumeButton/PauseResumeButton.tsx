import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';

import { RoundButton } from '..';

import { PauseResumeButtonProps } from '../../pages/TimerPage/types';

const PauseResumeButton = ({
  onClick,
  countdownPaused,
}: PauseResumeButtonProps) => {
  return (
    <RoundButton onClick={onClick}>
      {countdownPaused ? <PlayIcon width={48} /> : <PauseIcon width={48} />}
    </RoundButton>
  );
};

export default PauseResumeButton;
