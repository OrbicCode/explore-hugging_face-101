import { useState } from 'react';
import { InferenceClient } from '@huggingface/inference';
import styles from './TextGeneration.module.css';
import Button from '../Button/Button';

const hf = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export default function TextGeneration() {
  const [generatedText, setGeneratedText] = useState<string | undefined>(undefined);

  const messages = [
    {
      role: 'system',
      content: 'You are an exper Haiku writer. /no_think',
    },
    {
      role: 'user',
      content: 'Can I have a haiku about Lord of the Rings?',
    },
  ];

  async function handleClick() {
    console.log('clicked');
    try {
      const response = await hf.chatCompletion({
        model: 'HuggingFaceTB/SmolLM3-3B',
        messages,
        max_tokens: 50,
      });
      console.log(response.choices[0].message);
      setGeneratedText(response.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <h2>Text Generation</h2>
      <Button onClick={handleClick} text='Generate Text' />
      <p>{generatedText}</p>
    </div>
  );
}
