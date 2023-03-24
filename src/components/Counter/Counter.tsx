import { useDispatch } from 'react-redux';

import useCount from '@/store/hooks/useCount';
import { decrement, increment } from '@/store/reducers/counter';

import styles from './Counter.module.scss';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useCount();

  return (
    <div className={styles.counter}>
      <button
        className={`${styles.button} ${styles.decrement}`}
        onClick={() => dispatch(decrement())}
        disabled={count.value === 0}
      >
        Azalt
      </button>
      <div className={styles.value}>{count.value}</div>
      <button className={`${styles.button} ${styles.increment}`} onClick={() => dispatch(increment())}>
        Artır
      </button>
    </div>
  );
};

export default Counter;
