import { useState } from 'react';
import styles from './TextGeneration.module.css';
import Button from '../Button/Button';

export default function TextGeneration() {
  const [generatedText, setGeneratedText] = useState('');

  function handleClick() {
    setGeneratedText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem sodales, vulputate augue eget, dapibus elit. Mauris tortor elit, blandit et fermentum eget, pharetra sed lectus. Integer ac semper erat. Nunc molestie nisi dui, sed dignissim dui pellentesque eu. Duis rutrum purus id quam fringilla tincidunt. Morbi tempor nunc a luctus porttitor. Etiam ac efficitur tortor. Cras volutpat mauris et laoreet venenatis. Suspendisse accumsan eget lorem a suscipit. Suspendisse aliquam dictum nulla sit amet ultrices. Donec vulputate porta semper. Aliquam a mauris tellus. Donec finibus porta iaculis. Ut orci metus, euismod nec consectetur dictum, lacinia eget odio. Vestibulum vehicula tortor in nisi varius aliquet. Mauris vel tincidunt tellus.'
    );
  }

  return (
    <div className={styles.container}>
      <h2>Text Generation</h2>
      <Button onClick={handleClick} text='Generate Text' />
      <p>{generatedText}</p>
    </div>
  );
}
