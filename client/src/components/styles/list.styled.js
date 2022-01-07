import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/bg-desktop-dark.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 30%;
    /* margin-bottom: 9.3em; */
  }

  .mode-logo {
    font-size: 20px;
  }

  .logo {
    display: flex;
    justify-content: space-between;
  }

  .main-body {
    display: flex;
    align-items: center;
    border-bottom: 1px solid pink;
    padding: 0.5em 1em;
    overflow: scroll;
    /* justify-content: space-between; */
  }
  .remove {
    margin-left: auto;
  }

  .lists-detail {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
    font-size: 13px;

    .detail-mid {
      span {
        margin-right: 10px;
      }
    }
  }

  .input {
    margin-bottom: 1.2em;
  }
  input {
    outline: none;
    border: none;
    background: transparent;
    font-size: 13px;
  }

  span {
    cursor: pointer;
  }

  .list-display {
    /* border: 1px solid black; */
    max-height: 325px;
    border-bottom: pink solid 1px;
    /* overflow: scroll; */
  }

  .body {
    margin-top: 1em;
    border: 1px solid black;
    background-color: yellow;
  }
`;
