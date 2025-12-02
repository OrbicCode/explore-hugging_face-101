import { useState } from 'react';
import styles from './TextGeneration.module.css';
import Button from '../Button/Button';

export default function TextGeneration() {
  const [generatedText, setGeneratedText] = useState('');

  function handleClick() {
    setGeneratedText('LOTR is the best');
  }

  return (
    <div className={styles.container}>
      <h2>Text Generation</h2>
      <Button onClick={handleClick} text='Generate Text' />
      <p>{generatedText}</p>
    </div>
  );
}
