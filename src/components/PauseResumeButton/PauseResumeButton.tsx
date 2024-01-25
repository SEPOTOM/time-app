import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';

import { RoundButton } from '..';

import { Props } from './types';

const PauseResumeButton = ({ onClick, isPaused }: Props) => {
  return (
    <RoundButton onClick={onClick}>
      {isPaused ? <PlayIcon width={48} /> : <PauseIcon width={48} />}
    </RoundButton>
  );
};

export default PauseResumeButton;
