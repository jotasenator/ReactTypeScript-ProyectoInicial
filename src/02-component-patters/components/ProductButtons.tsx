import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //TODO: maxCount
  const { increaseBy, counter, minCount, maxCount } =
    useContext(ProductContext);

  //TODO: isMaxReached =useCallback, dependencies [counter, maxCount]
  // true si el  count es igual a maxCounter
  // false si no lo es

  const isMinReached = () => {
    return (minCount === 0 || !!minCount) && counter === minCount;
  };

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        disabled={isMinReached() && true}
        className={`${styles.buttonMinus} ${
          isMinReached() && styles.disabled
        } ${isMinReached() && styles.disabledMinus}`}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached() && true}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled} ${
          isMaxReached() && styles.disabledPlus
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
