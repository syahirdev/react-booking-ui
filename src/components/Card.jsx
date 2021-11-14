import styled from "styled-components";

export const Card = (props) => {
    return (
        <Container>
            {
                props.src &&
                <LeftComponent>
                    <Image src={props.src}/>
                </LeftComponent>
            }
            <RightComponent>
                <Header>
                    {props.header}
                </Header>
                <Content>
                    {props.content}
                </Content>
            </RightComponent>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  box-shadow: 2px 2px 10px 1px #f3f3f3;
  border-radius: 7px;
  overflow: hidden;
`;

const LeftComponent = styled.div`
  flex: 2;
`;

const RightComponent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 50px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;