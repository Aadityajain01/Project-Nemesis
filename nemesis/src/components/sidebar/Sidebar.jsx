import React, { useContext, useState } from "react";
import "./sidebar.css";
import { Context } from "../../context/Context";

export default function Sidebar() {
   const [Extended, setExtended] = useState(true);
   const { onSent, prevPrompt, setRecentPrompt } = useContext(Context);
   const loadPrompt = async(prompt)=>{
      setRecentPrompt(prompt)
      await onSent(prompt)
   }
   return (
      <>
         <div className="sidebar">
            <div className="top">
               <img
                  src="/assets/menu_icon.png"
                  alt="menu icon"
                  className="menu"
                  onClick={() => setExtended((prev) => !prev)}
               />
               <div className="new-chat">
                  <img src="/assets/plus_icon.png" alt="plus icon" />
                  {Extended ? <p>New Chat</p> : null}
               </div>

               {Extended ? (
                  <div className="recent">
                     <p className="recent-title">Recent</p>
                     {prevPrompt.map((item, index) => {
                        return (
                           <div className="recent-entry"
                           onClick={()=>loadPrompt(item)}
                           >
                              <img src="/assets/message_icon.png" alt="" />
                              <p>{item.slice(0, 18)}...</p>
                           </div>
                        );
                     })}
                  </div>
               ) : null}
            </div>

            <div className="bottom">
               <div className="bottom-item recent-entry">
                  <img src="/assets/question_icon.png" alt="" />
                  {Extended ? <p>Help </p> : null}
               </div>
               <div className="bottom-item recent-entry">
                  <img src="/assets/compass_icon.png" alt="" />
                  {Extended ? <p>Activity </p> : null}
               </div>
               <div className="bottom-item recent-entry">
                  <img src="/assets/history_icon.png" alt="" />
                  {Extended ? <p>Settings </p> : null}
               </div>
            </div>
         </div>
      </>
   );
}
