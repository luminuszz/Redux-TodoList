import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 15px 20px 10px;
  flex-direction: column;
  background: #b2b2b2;

  padding-top: 20px;
  input {
    display: flex;
    margin: 0;
    border-radius: 10%;
    height: 10px;
    width: 80px;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  li {
    list-style: none;
  }
`;
