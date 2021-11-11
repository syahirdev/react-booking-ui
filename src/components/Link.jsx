import styled from "styled-components";

export const Link = (props) => {
    return (
        <Container textSize={props.textSize}>
            {props.children}
            {props.text}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #168EEA;
  cursor: pointer;
  font-size: ${(props) => props.textSize || 12}px;
`;