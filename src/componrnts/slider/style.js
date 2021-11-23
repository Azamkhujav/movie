import styled from "styled-components"

export  const Image = styled.div `
    background-image:  linear-gradient(180deg, rgba(22, 21, 29, 0) 0%, rgba(22, 21, 29, 0.8) 48.31%, #16151D 100%);
    background-image: url(${props => props.img});
    padding-top: 261px;
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    padding-bottom:150px
` ; 