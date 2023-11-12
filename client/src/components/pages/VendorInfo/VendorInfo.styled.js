import styled from "styled-components";

export const VendorInfoStyled = styled.div`
  color: black;

  h2 {
    width: 80%;
    margin: 0 auto;
    padding: 2em 0;
    font-weight: 200;
    font-size: 20px;
  }

  a {
    color: white;
    background: black;
    padding: 0.6em;
    font-size: 24px;
    border-radius: 15px;
  }
  .vendorFormContainer {
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    .VendorInfoContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }
`;
