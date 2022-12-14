import styled from "styled-components";
export const Tabs = styled.div`
//   overflow: hidden;
//   background: #fff;
//   font-family: Open Sans;
//   height: 3em;

display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        border-right: 0.5px solid #8E9CB7;
`;

export const Tab = styled.button`
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 21px;
    font-weight: 400;
    color: #363636;


// border-inline-start: 3px solid red;
padding-bottom: 15px;
border-bottom: 1px solid #1A2841;
// width: 60%;
width: 100%;
background: #FAF7F2;
padding-top: 15px;
    
//   border: 1px solid red;
//   outline: none;
  cursor: pointer;
//   width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
//   border: ${props => (props.active ? "1px solid #ccc" : "")};
//   border-bottom: ${props => (props.active ? "none" : "")};
//   background-color: ${props => (props.active ? "white" : "lightgray")};
//   height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
//   transition: background-color 0.5s ease-in-out;

  :hover {
    // background-color: white;
    color: #F27665;
    border-inline-start: 4px solid red;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
