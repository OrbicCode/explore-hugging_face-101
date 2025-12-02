import './App.css';
import ImageToImage from './components/ImageToImage/ImageToImage';
import TextClassification from './components/TextClassification/TextClassification';
import TextGeneration from './components/TextGeneration/TextGeneration';
import TextToSpeech from './components/TextToSpeech/TextToSpeech';

function App() {
  return (
    <main>
      <h1>Explore Hugging Face 101</h1>
      <div className='widget_container'>
        <TextGeneration />
        <TextClassification />
        <TextToSpeech />
        <ImageToImage />
      </div>
    </main>
  );
}

export default App;
