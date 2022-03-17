import styled from 'styled-components';

export const Div = styled.div`
    .loader-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--black-chocolate);
        color: #dbd8d6;

        h1{
            font-size: 1.5vw;
            text-transform: uppercase;
            font-family: var(--poppins-font);
            font-weight: 600;
        }

        h2{
            font-size: 1.5vw;
            text-transform: uppercase;
            font-family: var(--ubuntu-font);
            font-style: italic;
            margin-top: 10px;
        }
    }
    .absolute{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        z-index: 1;
    }
`;