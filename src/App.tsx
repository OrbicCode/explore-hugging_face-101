import './App.css';
import TextClassification from './components/TextClassification/TextClassification';
import TextGeneration from './components/TextGeneration/TextGeneration';

function App() {
  return (
    <main>
      <h1>Explore Hugging Face 101</h1>
      <div className='widget_container'>
        <TextGeneration />
        <TextClassification />
      </div>
    </main>
  );
}

export default App;
