import { createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }
  .menu-list .sub-menu{
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
  }
  #nav-menu-drawer.nav-wrapper.actual-nav {
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
}
.nav-content-wrapper1 ul li a{
  color: ${({ theme }) => theme.colors.button?.text};
}
.humenu{
  background-color: ${({ theme }) => theme.colors.text} !important;
}
  .menuMainChild a{
    color: ${({ theme }) => theme.colors.button?.text} !important;
  }
  .subchilds a{
    color: ${({ theme }) => theme.colors.button?.text} !important;
  }
  .icons a svg{
    color: ${({ theme }) => theme.colors.text} !important;
  }
 .bg-red-600 {
    --tw-bg-opacity: 1;
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
}
  .card__status{
    color: ${({ theme }) => theme.colors.text};
  }
  .homebanner-image-wrapper button {
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
  }

  .carreaux_presentation_light .deroul_soustitre span{
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
  }
  .carreaux_presentation_light .deroul_soustitre span:hover {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }

  .EndOfSeasonBanner button {
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
  }
  .EndOfSeasonBanner button:hover {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }
  .navLink a:hover{
    color: ${({ theme }) => theme.colors.text};
  }

  .navLink a, .ezrZtq .navAddStore a{
    color: ${({ theme }) => theme.colors.text};
  }
  .logo a{
    color: ${({ theme }) => theme.colors.text};
  }

  .react-multi-carousel-dot button {
    display: inline-block;
    width: 8px !important;
    height: 8px !important;
    border-radius: 50%;
    opacity: 1;
    padding: 5px 5px 5px 5px;
    box-shadow: none;
    transition: background 0.5s;
    border-width: 0px !important;
    border-style: solid;
    border-color: #515fdb !important;
    padding: 0;
    margin: 0;
    margin-right: 6px;
    outline: 0;
    cursor: pointer;
    background: #cacaca;
  }
  .react-multi-carousel-dot--active button {
    background-color: ${({ theme }) => theme.colors.button?.background} !important;
    width: 16px !important;
    border-radius: 16px !important;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
  }

  button.cancel {
    background-color: #ff0000;
    color: ${({ theme }) => theme.colors.button?.text};
  }

  button:disabled {
    background-color: #ebebeb;
    color: #333333;
  }

  button {
    border: 0;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button?.background};
    color: ${({ theme }) => theme.colors.button?.text};
    font-family: ${({ theme }) => theme.font};
    
  }

`;
