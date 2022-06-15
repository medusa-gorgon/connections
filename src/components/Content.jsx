import { useState } from 'react';
import styles from './Content.module.css';
import Rectangle from './Rectangle';
import SVG from './SVG';

const Content = () => {
  const numbers = [1, 2, 3, 4];

  const [clickedItems, setClickedItems] = useState([]);
  const [shown, setShown] = useState(false);
  const [reset, setReset] = useState(false);
  const [line, setLine] = useState(null);

  const onRectangleClick = (el, number) => {
    const coordinates = el.getBoundingClientRect();
    setClickedItems([...clickedItems, { num: number, get: coordinates }]);
  };

  const onConnectClick = (e) => {
    if (clickedItems.length === 2 && clickedItems[0].get.y === clickedItems[1].get.y) setLine('');
    setShown(true);
  };

  const onResetClick = () => {
    setClickedItems([]);
    setReset(true);
    setLine(null);
    setShown(false);
  };

  return (
    <div>
      {shown &&
        clickedItems &&
        clickedItems.map((item) => <SVG line={line} setLine={setLine} key={item.num} item={item} />)}
      <div className={styles.btns}>
        <button className={styles.btn} onClick={onConnectClick}>
          Connect
        </button>
        <button className={styles.btn} onClick={onResetClick}>
          Reset
        </button>
      </div>
      <div className={styles.content}>
        {numbers.map((num) => (
          <Rectangle
            shown={shown}
            reset={reset}
            key={num}
            num={num}
            setReset={setReset}
            onRectangleClick={onRectangleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
