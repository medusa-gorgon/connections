import { useEffect, useState } from 'react';
import styles from './Rectangle.module.css';

const Rectangle = ({ num, onRectangleClick, setReset, reset, shown }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (reset) {
      setClicked(false);
    }
  }, [reset]);

  return (
    <div
      onClick={(e) => {
        if (!clicked && !shown) {
          onRectangleClick(e.target, num);
        }
        setReset(false);
        if (!shown) {
          setClicked(true);
        }
      }}
      className={clicked ? `${styles.rectangle} ${styles.clicked}` : `${styles.rectangle}`}
    >
      {num}
    </div>
  );
};

export default Rectangle;
