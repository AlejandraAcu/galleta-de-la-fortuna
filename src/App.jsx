import { useState } from 'react'
import quotes from './data/pharases.json'
import getRandomNumbers from './utils/getRandomNumbers'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'
import photos from './data/photos.json'

function App() {
  const indexRandom = getRandomNumbers (quotes.length);
  const [phraseSelected,setPhraseSelected] = useState(quotes[indexRandom]);
  const [bgSelected,setBgSelected] = useState(photos[getRandomNumbers (photos.length)],
  );

  const objStyles = {
    backgroundImage: `url(/images/fondo${bgSelected}.png)`,
  };

  return (
    <div style={objStyles} className='min-h-screen bg-cover bg-center
    flex justify-center items-center px-4'>
      <h1 className='absolute top-20 text-3xl uppercase font-black text-center
       drop-shadow-lg stroke text-green-500 '>Galleta de la fortuna</h1>
      <article className='max-w-[300px] bg-white p-6 rounded-xl shadow-2x1 border-double border-4
       border-sky-950 font-mono'>
        <Phrase phraseSelected ={phraseSelected} />
        <BtnPhrase 
          setPhraseSelected ={setPhraseSelected}
          setBgSelected={setBgSelected}
        />
      </article>
      <footer className='absolute bottom-20 bg-amber-900/75 p-5 rounded-lg
       text-white'>
        <p>{phraseSelected.author}</p>
      </footer>
    </div>
  )
}

export default App
