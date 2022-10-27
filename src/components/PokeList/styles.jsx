import styled from 'styled-components';

export const Container = styled.div `
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const List = styled.div `
    background-color: #ff914d;
    color: #fff;
    margin: 10px;
    padding: 0 30px;
    width: 40%;
    border-radius: 15px;
    cursor: pointer;


    h2 {
        letter-spacing: 0.1rem;
    }
`;