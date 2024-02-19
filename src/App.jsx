import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import Logos from './assets/logo.png';
import Header from './header/header.jsx';

const Maindiv = styled.div`
display: flex;
flex-direction: column;
`;
const Rowdiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`;

const InputTask = styled.input`
color: blue;
`;
var score = 0;
const question = [
  {
    text: "Курите?",
    thee: "Q1",
  },
 {
    text: "Злоупотребляете алкоголем ?",
    thee: "Q2",
  },
  {
    text: "Переедаете ?",
    thee: "Q3",
  },
  {
    text: "Недостаточное употребляете воду?",
    thee: "Q4",
  },
  {
    text: "Слишком долгое прослушиваете музыку в наушниках?",
    thee: "Q5",
  }
]
const cookies = new Cookies();

function TougleRadioButton(text, thee){
  const [checked, setChecked] = useState( (cookies.get(thee) == (thee + 'yes'))? true : false);
  const chengeCheckbox1 = (event) =>{
    const {name} = event.target;
    (name == (thee + "yes"))? setChecked(true):setChecked(false)
    if(name == (thee + "yes") && score >= 0){
      score+=1;
      cookies.set("Score", score, { path: '/' });
    } else if (score>= 0){ 
      score-=1;
      cookies.set("Score", score, { path: '/' });

    }
    cookies.set(thee, name, { path: '/' });
    console.log(cookies.get(thee));    
    console.log(score);    

  } 
  return(
  <div key={thee + 'yes'}>

      <h3>{text}</h3>
      <Rowdiv>
        <div>
          <InputTask checked={checked} onChange={chengeCheckbox1} type='radio' name= {thee + 'yes'} value={thee + 'yes'} />
          <label>Yes</label>
        </div>
        <div>
          <InputTask checked={!checked} onChange={chengeCheckbox1} type='radio' name={thee + 'no'} value={thee + "no"} />
          <label>No</label>
        </div>
      </Rowdiv>
    </div>
  )
}
function App() {
  const [seeCookie, setCookie] = useState(true);
  let status = cookies.get("Score");
  if( status != null || status != undefined || status != ""){
    score = cookies.get("Score")
  }
  else{
    cookies.set("Score", score, { path: '/' });
  }
  const renderList = question.map((value) =>{
    return TougleRadioButton(value.text, value.thee)
  })
 
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
  return (
    <div>
      <Header></Header>
      <div>
        {cookieNotification()}
      
        <Maindiv> 
          <h1>Score {score}</h1>
          {renderList}
        </Maindiv>
    </div>
   </div>

  )
}

export default App
