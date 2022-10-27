import styled from 'styled-components';

export const Container = styled.div `
`;

export const Logo = styled.div `
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: space-between;

    img {
        height: 10vh;
    }
`;


export const Navbar = styled.div `
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 13px;
    
    img {
        height: 10vh;
    }

    input {
        border: none;
        outline: none;
        height: 4vh;
        width: 50%;
        border-radius: 6px;
    }

    @media (max-width: 600px ) {
        input {
            width: 30vh;
        }

`;

export const Return = styled.div `
        align-items: center;
        text-align: center;

        button {
            letter-spacing: 0.1rem;
            width: 80vh;
            background-color: #ffedaf;
            cursor: pointer;
            outline: none;
            border: none;
            border-radius: 6px;
            color: red;
            margin-bottom: 30px;
            text-transform: uppercase;
            height: 8vh;
            font-size: 28px;
        }
    
        @media (max-width: 1480px ) {
            button {
                width: 40vh;
            }
        }
    
        @media (max-width: 358px ) {
            button {
                width: 30vh;
            }
        }
    `;

export const Pokelist = styled.div `
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const PaginationAction = styled.div `
    align-items: center;
    text-align: center;
    margin: 15px;
`;