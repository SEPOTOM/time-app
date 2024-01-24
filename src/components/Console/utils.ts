const formatIndex = (index: number): string => {
  switch (index) {
    case 1: {
      return '1st';
    }
    case 2: {
      return '2nd';
    }
    case 3: {
      return '3rd';
    }
    default: {
      return `${index}th`;
    }
  }
};

const hasLaps = (lapsTimes: string[][]): boolean => {
  return lapsTimes.every((lapsTime) => lapsTime.length === 0);
};

export { formatIndex, hasLaps };
