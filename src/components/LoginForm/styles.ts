import styled from 'styled-components';

export const StyledForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 1rem;
    
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    input {
        padding: 1rem;
        border: 1px solid gray;
        background-color: white;
        outline: none;
    }
    
    p {
        font-size: 1.2rem;
    }

    span {
        color: #35A7FF;
    }

    button {
        background-color: #35A7FF;
        border: none;
        padding: 1rem 2rem;
        color: white;
        align-self: stretch;
        cursor: pointer;
    }

    .error {
        color: red;
    }

`;