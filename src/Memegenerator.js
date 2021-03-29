import React,{useState,useEffect} from 'react'


function Memegenerator() {
const  [meme, setmeme] = useState({allMemeImgs:[]})

const [input,setInputs]=useState({
    topText:"",
    bottomText:"",
  
})
const [memeimg,setmemeimg]=useState("http://i.imgflip.com/1bij.jpg")

    useEffect(()=>{
   
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
          const {memes} = response.data
         
          setmeme({allMemeImgs:memes}) 
         

        
      })
         
    
      })

      const handleInputChange = (event) => {
    
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        }

       const handleSubmit=(e)=> {
            e.preventDefault()
            const randNum = Math.floor(Math.random() * meme.allMemeImgs.length)
            const randMemeImg = meme.allMemeImgs[randNum].url
           setmemeimg(randMemeImg)
        }
      



    return (
        <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={input.topText}
                        onChange={handleInputChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={input.bottomText}
                        onChange={handleInputChange}
                    /> 
                
                    <button onClick={handleSubmit}>Generate</button>
                  
                </form>
                <div className="meme">
                    <img src={memeimg} onClick={handleSubmit} alt="" />
                    <h2 className="top">{input.topText}</h2>
                    <h2 className="bottom">{input.bottomText}</h2>
                </div>
            </div>
    )
}

export default Memegenerator