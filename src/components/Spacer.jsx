import styled from "styled-components";

export const Spacer = ({size}) => {
    return (
        <Container size={size}/>
    );
};

const Container = styled.div`
  margin: ${(props) => props.size || 10}px;
`;