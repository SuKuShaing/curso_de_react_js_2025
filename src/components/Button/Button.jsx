import styled from "styled-components";

const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    color: white;
    font-weight: bold;
    background-color: ${(props) => (props.blue ? "blue" : "gray")};

    &:hover {
        background-color: ${(props) => (props.blue ? "lightblue" : "lightgray")};
        cursor: pointer;
    }
`;

const Button = ({ children, blue }) => {
    return <StyledButton blue={blue}>{children}</StyledButton>;
};

export default Button;