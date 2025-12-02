import Button from '../Button/Button';
import styles from './TextClassification.module.css';

export default function TextClassification() {
  function handleClick() {}
  return (
    <div className={styles.container}>
      <h2>Text Classification</h2>
      <Button onClick={handleClick} text='Text Classification' />
    </div>
  );
}
