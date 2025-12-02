import { pipeline } from '@huggingface/transformers';
import street from '/street.jpg';
import Button from '../Button/Button';
import styles from './ObjectDetection.module.css';

const detector = await pipeline('object-detection', 'Xenova/yolos-tiny');
const imageFetch = await fetch(street);
const image = await imageFetch.blob();

export default function ObjectDetection() {
  async function handleClick() {
    console.log('clicked');
    try {
      const output = await detector(image, { threshold: 0.8 });
      console.log(output);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.container}>
      <h2>Object Detection</h2>
      <Button onClick={handleClick} text='Generate Detection' />
    </div>
  );
}
