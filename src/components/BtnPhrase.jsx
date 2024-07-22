import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from '../data/pharases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {
    const changePhrase = () => {
        const indexRandon = getRandomNumbers(quotes.length);
        const phraseRandom = quotes[indexRandon]
        setPhraseSelected(phraseRandom)
        setBgSelected(photos[getRandomNumbers(photos.length)])
    }
    return <button className="text-center hover:scale-110 transition-transform cursor-pointer
    ml-16 block bg-lime-600 py-2 px-4 rounded-xl text-white " onClick={changePhrase}>Abrir otra</button>
};

export default BtnPhrase
