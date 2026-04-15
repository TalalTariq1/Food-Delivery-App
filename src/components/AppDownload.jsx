import React from 'react'
import styled from 'styled-components'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <StyleApp>
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />Tomato-App</p>
        <div className="app-download-platform">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
      
    </div>
    </StyleApp>
  )
}

export default AppDownload

const StyleApp=styled.div`
    .app-download{
        margin: auto auto;
        margin-top: 100px;
        font-size: max(3vw,20px);
        text-align: center;
        font-weight: 500;
    }

    .app-download-platform{
        display: flex;
        justify-content: center;
        gap:max(2vw,10px);
        margin-top: 40px;
    }

    .app-download-platform img{
        width: max(30vw,120px);
        max-width: 180px;
        transition: 0.5s;
        cursor: pointer;
    }

    .app-download-platform img:hover{
        transform: scale(1.05);
    }
`
