import styled from 'styled-components';

export const Container = styled.div `
`;


export const Card = styled.div `
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffedaf;
    margin: 0 50vh;
    height: 60%;

    @media (max-width: 1312px ) {
        margin: 0 30vh;
    }


    @media (max-width: 1083px ) {
        margin: 0 20vh;
    }

    @media (max-width: 875px ) {
        margin: 0 10vh;
    }

    @media (max-width: 589px ) {
        margin: 0 5vh;
    }

    @media (max-width: 440px ) {
        margin: 0 2vh;
    }

    
`;

export const Info = styled.div `
    #types {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        background-color: #ff914d;
        color: #fff;
    }

    #icon {
        font-size: 8vh;
        cursor: pointer;
        color: #cfc1c1;
    }

    #iconCatched {
        font-size: 8vh;
        cursor: pointer;
        color: red;
    }
`;

export const Imgs = styled.div `
    display: flex;
    justify-content: center;
`;

export const Types = styled.div `
    h2 {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }
`;

export const Return = styled.div `
    text-align: center;
    margin-top: 20px;

    button {
        letter-spacing: 0.1rem;
        outline: none;
        outline: none;
        cursor: pointer;
        border-radius: 9px;
        height: 5vh;
        width: 17vh;
    }
`;