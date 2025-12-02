import './App.css';
import TextGeneration from './components/TextGeneration/TextGeneration';

function App() {
  return (
    <main>
      <h1>Explore Hugging Face 101</h1>
      <div className='widget_container'>
        <TextGeneration />
      </div>
    </main>
  );
}

export default App;
