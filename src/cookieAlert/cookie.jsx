import { useState } from 'react'
import Logos from '../assets/logo.png';

export default function CookiesAlert() {
    const [seeCookie, setCookie] = useState(true);
    function handleClick() {
      setCookie(false)
    }
    if(seeCookie){ 
      return(
    <div id="cookie_notification">
      <p>Для улучшения работы сайта и его взаимодействия с пользователями мы используем файлы cookie. Продолжая работу с сайтом, Вы разрешаете использование cookie-файлов. Вы всегда можете отключить файлы cookie в настройках Вашего браузера.</p>
      <button className={"button cookie_accept"} onClick={handleClick}>Принять</button>
      <img className={"Logoimg"}  src={Logos}/>
    </div>)
   }
  }