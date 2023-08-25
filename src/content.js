import React from 'react'

const Content = (props) => {
  console.log(props.meme.upperText);
  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='input-section'>
          <input 
          type='text'
          placeholder='Upper text'
          required
          value={props.meme.upperText}
          onChange={props.handleMemeCheck}
          name='upperText'
          ></input>

          <input 
          type='text'
          placeholder='Upper text'
          required
          value={props.meme.lowerText}
          onChange={props.handleMemeCheck}
          name='lowerText'
          ></input>
        </div>  

      </form>
      <button 
         className='get_meme'
         onClick={props.handleMemeClick}
         >
          Get a new meme image 🖼️ 
         </button>
         <div className='image_container' >
          { props.fetchError && 
          <>
            <span className='top_text memeText'>{props.meme.upperText}</span>
            <span className='bottom_text memeText'>{props.meme.lowerText}</span>
              <img src={props.meme.url} alt='current_meme'  className='meme_image'></img>
          </>
          }
          
         </div>
    </main>
  )
}

export default Content