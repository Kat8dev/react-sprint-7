import styled from "styled-components";

export const PannelDiv = styled.div`
    padding: 20px;
    border: solid 3px black;
    border-radius: 10px;
`

export const PannelInput = styled.input`
    width: 50px;
    margin: 5px;   
`

export const PStyledButton = styled.button`
    background-color: #e76f51; 
    border: none;
    color: white;
    cursor: pointer;
    font-size: 30px;
    border-radius: 8px;
    width: 35px;
`

export const InfoBtn = styled.button`
  border: none;
  color: white;
  background-color: #aa998f;
  padding: 2px 8px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 3px;
`

export const OVERLAY_STYLES = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);  
`
export const MODAL_STYLES = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    padding: 20px 200px;
    border: solid 3px black;
    border-radius: 15px;
`

export const BUTTON_STYLES = styled.button`
    position: fixed;
    right: 0;
    top: 0;
    border-radius: 15px;
` 