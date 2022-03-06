import styled from 'styled-components';
import Wallpaper from '../../assets/img/collective/wallpaper.png'

export const Section = styled.section`
    background-image: url(${Wallpaper});
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
`;