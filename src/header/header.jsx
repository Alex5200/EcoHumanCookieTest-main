import ImgLogo from "../assets/icon/logo.png"
import { useState } from 'react';
import styled from "styled-components";


const MainText = styled.a`
    font-size: 1.688em;
    color: #4A860B;
    font-family: 'Gilroy';
`
const StrongColor = styled.strong`
    font-family: 'Cygre-Black';
    color: #B4D21C;
`;
const TextNav = styled.li`
    font-size: 1.25em;
    color: #4A860B;
    font-family: 'Gilroy';
`
export default function Header(){
    const [stateNav, setStateNav] = useState(false);
    function clicks(){
        setStateNav(!stateNav);
        console.log(stateNav);
    }
    function visibility(){
        if(stateNav){
            return (
            <nav className="navigation">
                <ul id="primary-navigation" data-visible="true" className="primary-navigation flex">
                <li >
                    <TextNav href="#main">
                      здоровье
                    </TextNav>
                </li>
                <li className="navigation__list-item">
                    <a href="#cure">
                      тесты
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a href="#license">
                      ресуры
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a>
                      чек лист привычек
                    </a>
                </li>
            </ul> 
        </nav>   
            )
        }else{
        return(
            <nav className="navigation"> 
            <ul id="primary-navigation" data-visible="false" className="primary-navigation flex">
                <li className="navigation__list-item active">
                    <a  href="#main">
                    здоровье
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a  href="#cure">
                    тесты
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a href="#license">
                    ресуры
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a  >
                    чек лист привычек
                    </a>
                </li>
            </ul>  
            </nav>  
            )
        }
    }
    function visibilityButton(){
        if(stateNav){
            return(
            <button className="mobile-nav-toggle" onClick={clicks} aria-controls="primary-navigation" aria-expanded="true"><span className="sr-only"></span></button>)
    
        }else{
            return(
            <button className="mobile-nav-toggle" onClick={clicks} aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only"></span></button>)
        }
    }
    return(
        <header className="primary-header flex">
            <div className="logoImg-container">
                <img src={ImgLogo}  loading="lazy" alt="logoImg" className="logoImg" />
                <MainText>ЭКО<StrongColor>СОЗНАНИЕ</StrongColor></MainText>
            </div>
            {visibilityButton()}        
            {visibility()}
        </header>
    )
}