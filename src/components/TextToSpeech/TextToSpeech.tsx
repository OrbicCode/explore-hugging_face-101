import { InferenceClient } from '@huggingface/inference';
import Button from '../Button/Button';
import styles from './TextToSpeech.module.css';

const hf = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export default function TextToSpeech() {
  const inputText = 'Hello Mithrandir';
  function handleClick() {
    console.log('clicked');
    try {
      const response = hf.textToSpeech({
        model: 'facebook/mms-tts',
        inputs: inputText,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.container}>
      <h2>Text To Speech</h2>
      <Button onClick={handleClick} text='Generate Audio' />
      <audio src={undefined} controls></audio>
    </div>
  );
}
