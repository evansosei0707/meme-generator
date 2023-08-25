import Nav from './nav';
import Content from './content';
import './App.css';
import { useState, useEffect } from 'react';
import defaultMeme from './The terror_.png'

function App() {

  const MEMES_API = "http://api.imgflip.com/get_memes";
  const [fetchError, setFetchError] = useState(null);
  const [allMeme, setAllMeme] = useState([]);
  const [meme, setMeme] = useState(
    {
      id:1,
      upperText: '',
      lowerText: '',
      url: defaultMeme

    }
  );

  console.log(meme.lowerText)


  useEffect(() => {

    const fetchMemes = async () => {
      try {
        const response = await fetch(MEMES_API);
        const info = await response.json();
        if (!response.ok) throw Error('Refresh the page to reload');
        setAllMeme(info);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
         
      }
      
    }

    fetchMemes();
  }, [])


  function handleMemeClick() {
    const eachMeme = allMeme.data.memes
      const randomMemeIndex = Math.floor(Math.random() * (eachMeme.length ));
      const image = eachMeme[randomMemeIndex].url;
      setMeme(previousMeme => ({...previousMeme, url:image}));
  };

  function handleMemeCheck(event) {
    const {value, name} = event.target;
    setMeme(prevForm => {
      return {...prevForm, [name]: value}
    })
  };
  


  return (
   <div className='container'>
    <Nav /> 
    <Content 
      meme={meme}
      setMeme={setMeme}
      handleMemeClick={handleMemeClick}
      handleMemeCheck={handleMemeCheck}
      fetchError={fetchError}
    
    />
   
   </div> 
   

  );
}

export default App;
