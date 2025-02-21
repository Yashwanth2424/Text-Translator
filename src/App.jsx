import { useState } from 'react'
import Loader from './components/Loader'
import axios from "axios"
import './App.css'

function App() {
  const [textInput,setTextInput] = useState("")
  const [selectValue,setSelectValue] = useState("")
  const [resultValue,setresultValue] = useState("")
  const [loader,setloader] = useState(false)

  
  
  const handleTextTranslation = async() => {
    if (textInput === "") {
      alert("Please Enter what you want to Translate");
      setloader(false);
      return;
    }
    if(!selectValue) {
      alert("Please Select Language to Proceed")
      setloader(false);
      return;
    }
    setloader(true);
    setresultValue("");
    try {
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': '054710bb33msh79d302f5156cacdp1e6a38jsnb2c0e154eb48',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: `${textInput}`,
          source: 'en',
          target: `${selectValue}`,
          format: 'text'
        }
      };
      const response = await axios.request(options);
	    setresultValue(response.data.data.translations[0].translatedText)
      setloader(false);
    } catch (error) {
      console.log(error)
      setloader(false);
    }
  }
  
  return (
    <div className="bg-white h-screen w-screen pt-25 flex flex-col justify-start items-center border border-pink-800">
      <div className="border-black w-2/3 h-2/3 p-4 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-center text-[#683FEA] font-">Text Translator</h1>
        <textarea name="input-text" className="w-full h-40 border border-lime-700 p-2 mt-2" onChange={(e) => setTextInput(e.target.value)} placeholder="Enter text here..." />
        {loader &&<Loader />}
        <textarea name="input-text" className="w-full h-40 border border-lime-700 p-2 mt-2" value={resultValue} readOnly placeholder="Translated text..." />
        <div className='mt-4'>
          <label htmlFor='options'>Converted Into: </label>
          <select name='value' className='bg-white px-2 py-2 rounded-lg border border-black outline-none cursor-pointer hover:border-lime-700' onChange={(e) => setSelectValue(e.target.value)}>
            <option value="" selected>Select</option>
            <option value="te">Telugu</option>
            <option value="de">German</option>
            <option value="hi">Hindi</option>
            <option value="ur">Urdu</option>
            <option value="bn">Bengali</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ne">Nepali</option>
          </select>
        </div>
      </div>
      <div>
        {/* <button type="button" class="btn" onClick={handleTextTranslation} >
            <svg height="20" width="20" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span class="text">Translate</span>
        </button> */}
        <button type="button" className='w-50 h-10 border border-black bg-lime-700 text-white rounded-sm' onClick={handleTextTranslation}>Translate</button>
      </div>
    </div>
  )
}

export default App
