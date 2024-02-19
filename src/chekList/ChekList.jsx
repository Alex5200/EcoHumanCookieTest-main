import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Gilroy from '../assets/fonts/Gilroy-Medium.ttf'
import "./ChekList.scss"
import {privichki} from './privichki'
import Header from '../header/header';
import Logos from '/src/assets/logo.png';


const ChekListHabits = styled.div`
    color: #4A860B;
    font-family: 'Cygre-Black';
    font-size: 54.723px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`;
const ProgressOfHabits = styled.div`
    color:  #B4D21C;
    font-family: 'CygreExtraBold';
    font-size: 30px;
    font-style: italic;
    font-weight: 800;
    line-height: normal;
    margin-right: 50%;
    text-align: left;
    width: 55%;
    margin-top:2em;
    margin-left: 1.5em;
`;
const TextProgress = styled(ProgressOfHabits)`

`
const Slider = styled.input`
    accent-color: #4A860B;
    color: #CFCFCF;
    width: 80%;   
    border-radius: 0;
    
`;
const ChekBoxText = styled.a`
    margin-left: 1em;
    color: #696969;
    text-align: justify;
    font-family: ${Gilroy};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const ChekBoxDiv = styled.div`
    padding: 0.5em;
    margin-right: auto;
`;
const BoxHow  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
let scoreHuman = 0;
function functionReturnRadioButton(text, id){
    const Handle = () =>{
        console.log(event.target.checked, event.target.value)
        console.log(scoreHuman);
        if(event.target.checked == true){
            scoreHuman += 1;
        }else{
            scoreHuman -= 1;
        }
    }
    return(
    <ChekBoxDiv>
        <input className={"custom-checkbox"} onChange={Handle}  type="checkbox" id={id} name={id} value={text} />
        <ChekBoxText >{text}</ChekBoxText>
    </ChekBoxDiv>
    )

}
const ViewPrivichki = privichki.map((value) => {
        return (functionReturnRadioButton(value.text, value.id))
})


export default function ChekList(){
    const [seeCookie, setCookie] = useState(true);

    function cookieNotification() {
        function handleClick() {
          setCookie(false)
        }
        if(seeCookie){ 
          return(
          <div id="cookie_notification">
          <p className='cookie_text'>Для улучшения работы сайта и его взаимодействия с пользователями мы используем файлы cookie. Продолжая работу с сайтом, Вы разрешаете использование cookie-файлов. Вы всегда можете отключить файлы cookie в настройках Вашего браузера.</p>
          <button className={"button cookie_accept"} onClick={handleClick}>Принять</button>
          <img className={"Logoimg"}  src={Logos}/>
        </div>)
       }
      }
    return(
        <div>
            <Header></Header>
            <div>
                <ChekListHabits>ЧЕК-ЛИСТ ПРИВЫЧЕК</ChekListHabits>
                <TextProgress>Прогресс привычек</TextProgress>

                <Slider value={50} max={100} min={0} type='range'></Slider>
                <div>
                    <BoxHow>
                        <ProgressOfHabits>Физическое здоровье</ProgressOfHabits>
                        {ViewPrivichki}
                    </BoxHow>
                    <BoxHow>
                        <ProgressOfHabits>Гидратация</ProgressOfHabits>
                        {ViewPrivichki}
                    </BoxHow>
                    <BoxHow>
                        <ProgressOfHabits>Прогресс привычек</ProgressOfHabits>
                        {ViewPrivichki}
                    </BoxHow>
                    <BoxHow>
                        <ProgressOfHabits>Прогресс привычек</ProgressOfHabits>
                        {ViewPrivichki}
                    </BoxHow>
                </div> 
            </div>
            {cookieNotification()}

        </div>
    );
}