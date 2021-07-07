import styled from "styled-components";

export const SmurfFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    background: lightgrey;
    padding: 20px;
    input {
      margin-bottom: 10px;
    }
    button {
      width: 150px;
      margin: 0 auto;
      border: none;
      padding: 5px;
      color: white;
      background: dodgerblue;
      font-weight: bold;
    }
  }
`;
export const NavBar = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    text-decoration: none;
    font-weight: bold;
    color: black;
    li {
      padding: 10px;
    }
    a {
      text-decoration: none;
      color: black;
      border: 1px solid lightblue;
      padding: 5px;
      background: lightblue;
    }
    a.active {
      color: white;
    }
  }
`;
export const SmurfCard = styled.div`
  width: 350px;
  background: lightgrey;
  padding: 15px;
  margin: 10px auto;
`;
