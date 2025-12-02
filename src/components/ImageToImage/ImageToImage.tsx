import { InferenceClient } from '@huggingface/inference';
import Button from '../Button/Button';
import styles from './ImageToImage.module.css';
import seaside from '/seaside.jpg';
import { useState } from 'react';

const hf = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export default function ImageToImage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  async function handleClick() {
    console.log('clicked');
    try {
      const res = await fetch(seaside);
      const blob = await res.blob();

      const response = await hf.imageToImage({
        provider: 'replicate',
        model: 'black-forest-labs/FLUX.1-Kontext-dev',
        inputs: blob,
        parameters: { prompt: 'add some color to this image of a man walking by the seaside' },
      });
      setImageUrl(URL.createObjectURL(response));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.container}>
      <h2>Image to Image</h2>
      <div className={styles.imgWrapper}>
        <img src={seaside} />
      </div>
      <Button onClick={handleClick} text='Generate Image' />
      <div className={styles.imgWrapper}>
        <img src={imageUrl && imageUrl} />
      </div>
    </div>
  );
}
