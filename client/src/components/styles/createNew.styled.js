import styled from "styled-components";

export const Container = styled.div`
  background-color: #24273d;
  border-radius: 5px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);

  .newTodo {
    width: 100%;
  }

  .input {
    all: unset;
    font-size: 1rem;
    width: 100%;
    letter-spacing: 0.1px;
    margin-left: 12px;
    padding: 18px 0;
    caret-color: #3a7cfd;
    color: #494c6b;
  }
`;
