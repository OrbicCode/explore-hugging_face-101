import { pipeline } from '@huggingface/transformers';
import { WaveFile } from 'wavefile';
import Button from '../Button/Button';
import styles from './TextToSpeech.module.css';
import { useState } from 'react';

export default function TextToSpeech() {
  const [audioOutput, setAudioOutput] = useState<string | undefined>();

  async function handleClick() {
    console.log('clicked');
    const synthesizer = await pipeline('text-to-speech', 'Xenova/mms-tts-eng', {});
    try {
      const output = await synthesizer('hello', {});
      const wav = new WaveFile();
      wav.fromScratch(1, output.sampling_rate, '32f', output.audio);
      wav.toBitDepth('16');
      const buffer = new Uint8Array([...wav.toBuffer()]);
      const audioBlob = new Blob([buffer], { type: 'audio/wav' });
      const blobUrl = URL.createObjectURL(audioBlob);
      setAudioOutput(blobUrl);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.container}>
      <h2>Text To Speech</h2>
      <Button onClick={handleClick} text='Generate Audio' />
      <audio src={audioOutput && audioOutput} controls></audio>
    </div>
  );
}
