import { useEffect } from 'react';

const SVG = ({ item, line, setLine }) => {
  const x = item.num % 2 === 1 ? item.get.left + item.get.width : item.get.right - item.get.width;
  const w = document.documentElement.clientWidth / 2;
  const y = item.get.y + item.get.height / 2;
  const lineDown = `L ${w},${y + 25 + item.get.height / 2}`;
  const lineUp = `L ${w},${y - 25 - item.get.height / 2}`;

  useEffect(() => {
    if (line !== '') {
      item.num === 3 || item.num === 4 ? setLine(lineUp) : setLine(lineDown);
    }
  }, [line, setLine]);
  return (
    <svg viewBox='0 0 100vw 100vh' height='100%' width='100%'>
      <path fill='none' stroke='#000' strokeWidth='2' d={`M ${x},${y} L ${w},${y} ${line}`} />
    </svg>
  );
};

export default SVG;
