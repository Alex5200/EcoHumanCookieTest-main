import { useState } from "react";
import "./Test.css";
import Cookies from "universal-cookie";
import CookiesAlert from "../cookieAlert/cookie";
import { question } from "./quests"; // Хранение вопросов для теста
import LogoRed from "../assets/logoRed.png";
import LogoGreen from "../assets/LogoGreen.png";
import Header from "../header/header";
import {
  Maindiv,
  ColumnDivQuest,
  DivQuest,
  TextQuest,
  NamedQuest,
  InputTask,
  Answer,
  IconsBackRed,
  IconsBackGrenn,
  TextMain,
  AboutText,
} from "./styledcomponents";
const cookies = new Cookies();

function TougleRadioButton(text, thee) {
  const [checked, setChecked] = useState(
    cookies.get(thee) == thee + "yes" ? true : false,
  );
  const chengeCheckbox1 = (event) => {
    const { name } = event.target;
    name == thee + "yes" ? setChecked(true) : setChecked(false);
    cookies.set(thee, name, { path: "/" });
    console.log(cookies.get(thee));
  };

  return (
    <DivQuest>
      <TextQuest>{text}</TextQuest>
      <ColumnDivQuest>
        <NamedQuest>
          <InputTask
            checked={checked}
            onChange={chengeCheckbox1}
            type="radio"
            name={thee + "yes"}
            value={thee + "yes"}
          />
          <Answer>Да</Answer>
        </NamedQuest>
        <NamedQuest>
          <InputTask
            checked={!checked}
            onChange={chengeCheckbox1}
            type="radio"
            name={thee + "no"}
            value={thee + "no"}
          />
          <Answer>Нет</Answer>
        </NamedQuest>
      </ColumnDivQuest>
    </DivQuest>
  );
}
function Test() {
  const renderList = question.map((value) => {
    return TougleRadioButton(value.text, value.thee);
  });

  return (
    <div>
      <Header></Header>
      <CookiesAlert />
      <IconsBackRed src={LogoRed} />
      <IconsBackGrenn src={LogoGreen} />
      <Maindiv>
        <TextMain>СОБЛЮДЕНИЕ ЗДОРОВОГО ОБРАЗА</TextMain>
        <AboutText>Проверка на соблюдение здорового образа жизни</AboutText>
        {renderList}
      </Maindiv>
    </div>
  );
}

export default Test;
