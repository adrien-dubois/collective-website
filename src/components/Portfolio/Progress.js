import styled from 'styled-components'

const  Progress  =  styled.div`
    position: relative;
    left: 10%;
    bottom: -6%;
    background:  linear-gradient(
        to right,
        rgba(231, 158, 57, .8) ${props => props.scroll},
        transparent  0);
    width:  500px;
    height:  14px;
    z-index:  3;
`;

export  default  Progress;