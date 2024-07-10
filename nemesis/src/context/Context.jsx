import { createContext, useState } from "react";
import run from "../config/gemini";
// import text from '../config/gemini'
export const Context = createContext();
const ContextProvider = (props) => {
   const [input, setInput] = useState("");
   const [recentPrompt, setRecentPrompt] = useState("");
   const [prevPrompt, setPrevPrompt] = useState([]);
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const [resultData, setResultData] = useState("");

   const delayPara = (index, nextWord) => {
      setTimeout(() => {
         setResultData((prev) => prev + nextWord);
      }, 75 * index);
   };
   async function onSent(prompt) {
      setResultData("");
      setLoading(true);
      setShowResult(true);

      let response;

      // if (prompt) {
      //    response = await run(prompt);
         setRecentPrompt(input);
      // } else {
         setPrevPrompt((prev) => [...prev, input]);
         setRecentPrompt(input);
         response = await run(input);
      // }

      // let response = await run(input);
      let responseArray = response.split("**");
      let newArray = "";
      for (let i = 0; i < responseArray.length; i++) {
         if (i === 0 || i % 2 !== 1) {
            newArray += responseArray[i];
         } else {
            newArray += "<b>" + responseArray[i] + "</b>";
         }
      }

      let newResponse = newArray.split("*").join("</br>");
      setLoading(false);
      setInput("");
      console.log(newResponse);
      let newResponseArray = newResponse.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
         const nextWord = newResponseArray[i];
         delayPara(i, nextWord + " ");
      }
      // console.log(text);
   }

   // onSent("database");

   const contextValue = {
      prevPrompt,
      setPrevPrompt,
      onSent,
      showResult,
      resultData,
      input,
      setInput,
      recentPrompt,
      loading,
   };

   return (
      <Context.Provider value={contextValue}>{props.children}</Context.Provider>
   );
};

export default ContextProvider;
