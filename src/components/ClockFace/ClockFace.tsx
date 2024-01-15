import './index.css';

const ClockFace = () => {
  return (
    <div className="clock-face">
      <span className="clock-face__time">00</span>
      <span className="clock-face__separator">:</span>
      <span className="clock-face__time">00</span>
      <span className="clock-face__separator">:</span>
      <span className="clock-face__time">00</span>
    </div>
  );
};

export default ClockFace;
