import React, { useContext, useState } from "react";
import "./main.css";
import { Context } from "../../context/Context";

export default function Main() {
   const {
      prevPrompt,
      recentPrompt,
      onSent,
      loading,
      showResult,
      resultData,
      input,
      setInput,
   } = useContext(Context);

   return (
      <div className="main">
         <nav>
            <ul>
               <li>
                  <p>Nemesis</p>
               </li>
               <li>
                  <img src="/assets/user_icon.png" alt="" />
               </li>
            </ul>
         </nav>

         <div className="main-container">
            {!showResult ? (
               <>
                  <div className="greet">
                     <p>
                        <span>Hello, Dev!</span>
                     </p>
                     <p>How can I help you today?</p>
                  </div>
                  <div className="cards">
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Neque, earum?
                        </p>
                        <img src="/assets/compass_icon.png" alt="" />{" "}
                     </div>
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Neque, earum?
                        </p>
                        <img src="/assets/message_icon.png" alt="" />{" "}
                     </div>
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Neque, earum?
                        </p>
                        <img src="/assets/bulb_icon.png" alt="" />{" "}
                     </div>
                     <div className="card">
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Neque, earum?
                        </p>
                        <img src="/assets/code_icon.png" alt="" />{" "}
                     </div>
                  </div>
               </>
            ) : (
               <div className="result">
                  <div className="result-title">
                     <img src="/assets/user_icon.png" alt="" />
                     <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                     <img src="/assets/gemini_icon.png" alt="" />
                     {loading? <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                     </div>: <p dangerouslySetInnerHTML={{__html:resultData}} ></p>}
                     
                  </div>
               </div>
            )}

            <div className="main-bottom">
               <div className="search-box">
                  <input
                     type="text"
                     placeholder="Write a prompt to ask....."
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                  />
                  <div>
                     <img src="/assets/gallery_icon.png" alt="" />
                     <img src="/assets/mic_icon.png" alt="" />
                     <img
                        src="/assets/send_icon.png"
                        alt="send"
                        onClick={onSent}
                     />
                  </div>
               </div>
               <p className="bottom-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  necessitatibus in odio tempora, quo pariatur?
               </p>
            </div>
         </div>
      </div>
   );
}
