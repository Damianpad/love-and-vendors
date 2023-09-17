import styled from "styled-components";

export const VendorInfoFormStyled = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2em;

  input {
    padding: 1em;
    color: black;
    background: white;
    border: 1px solid black;
    margin: 1em;
    font-size: 15px;
  }

  :-ms-input-placeholder {
    color: white;
  }

  .vendorName {
    display: flex;
  }

  .businessName {
    display: flex;
  }

  .imgPicker {
    border: none;
  }


  .imgUploadContainer label {
    display: flex;
    flex-direction: row;
  }

  select {
    padding: 2em;
    border-radius: 15px;
    border: 1px solid black;
    margin: 1em;
    color: black;
    background: white;
  }
  span {
    font-size: 20px;
  }
`;
