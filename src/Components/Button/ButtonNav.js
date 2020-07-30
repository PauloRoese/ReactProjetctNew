import styled from 'styled-components';

const ButtonNav = styled.button`
    background-color: blueviolet;
    border: 1px solid;
    /* color:rgb(206, 186, 11); */
    color: var(--primary);
    border: none;
    box-shadow: none;
    
    &:hover{border: .1rem solid whitesmoke;
    box-shadow: .2em .2em 5px black;
    }
`;

export default ButtonNav;