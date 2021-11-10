import styled from "styled-components";

export const Avatar = ({children}) => {
    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    );
};

const Container = styled.div`
  color: white;
  background-color: #7C59FF;
  margin: 30px;
  padding: 5px;
  transform: rotate(45deg);
  text-align: center;
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

const Content = styled.div`
  display: table-cell;
  transform: rotate(-45deg);
  vertical-align: middle;
  width: 40px;
  height: 40px;
`;