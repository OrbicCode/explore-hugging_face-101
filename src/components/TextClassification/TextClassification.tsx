import { InferenceClient } from '@huggingface/inference';
import Button from '../Button/Button';
import styles from './TextClassification.module.css';
import { useState } from 'react';

interface Classification {
  label: string;
  score: number;
}

const hf = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export default function TextClassification() {
  const [classification, setClassification] = useState<Classification[] | null>(null);

  async function handleClick() {
    try {
      const response = await hf.textClassification({
        inputs: 'hello, I like you',
        provider: 'hf-inference',
      });
      setClassification(response as Classification[]);
    } catch (error) {
      console.error(error);
    }
  }

  const display =
    classification &&
    classification.map((clas: Classification) => {
      return (
        <li key={clas.label}>
          <p>{clas.label}</p>
          <p>{clas.score}</p>
        </li>
      );
    });
  return (
    <div className={styles.container}>
      <h2>Text Classification</h2>
      <Button onClick={handleClick} text='Text Classification' />
      <ul>{display}</ul>
    </div>
  );
}
