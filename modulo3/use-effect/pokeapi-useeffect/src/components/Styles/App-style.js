import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Tahoma;
`

export const PokeDex = styled.div`
  background-image: url("https://i.pinimg.com/564x/e6/5f/4a/e65f4a73e2a09c6ef3661d1197587f57.jpg");
  background-repeat: no-repeat;
  background-size: 15vw;
  width: 15vw;
  height: 56vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  select {
    color: white;
    margin-left: 0.5vw;
    width: 16vh;
    background-color: #ff363c;
    border: none;
  }

  option {
    background-color: #ff363c;
    border: none;
  }
`

export const Infos = styled.div`
    font-size: 12px;
    margin-top: 2vw;
    margin-left: 1vw;
    display: flex;
    flex-direction: column;;
    width: 19vw;
    height: 20vh;
`