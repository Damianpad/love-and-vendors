import styled from "styled-components";

export const VendorListingStyled = styled.div`
  color: black;

  .CoverPhotoContainer {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CoverPhotoContainer img {
    width: 95%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .VendorNameContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
  }

  .VendorNameContainer h2, h3 {
    margin: 0;
    font-weight: 200;
  }
`;
