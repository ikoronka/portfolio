import React from 'react';
import '../styles/index.css';
import { ReactTyped } from "react-typed";

export default function Home() {

    return (
      <div className='fullPage'>

        <div id="centeredText">
          <div>
            <ReactTyped 
            strings={[
              "Hi, I'm <br> <span style='color: #FFAB00; font-weight: 600' >a teacher</span>",
              "Hi, I'm <br> <span style='color: #009CEA; font-weight: 600' >a dev</span>",
              "Hi, I'm <br> <span style='color: #74AF00; font-weight: 600' >a student</span>",
              "Hi, I'm <br> <span style='color: #E22E57; font-weight: 600' >Amy</span>"
            ]} 
            typeSpeed={40}
            className='titleText' />
            <br />
          </div>
        </div>
      </div>
    );
}
