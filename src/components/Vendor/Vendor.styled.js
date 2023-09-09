import styled from "styled-components";

export const VendorStyled = styled.div`
border-radius: 15px;
width: 100%;
height: 500px;

.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 15px;

}

nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vendorType{
    width: 100%;
    color: white;
    font-size: 2rem;
}
`;