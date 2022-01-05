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
    border: 1px solid pink;
    padding: 0.5em 1em;
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
    outline: none;
  }

  span {
    cursor: pointer;
  }
`;
