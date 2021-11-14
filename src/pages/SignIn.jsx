import styled from "styled-components";
import background from "../assets/background.svg";
import { Avatar } from "../components/Avatar";
import { KeyboardArrowRight, VpnKey } from "@mui/icons-material";
import { mobile, tablet } from "../responsive";
import { Spacer } from "../components/Spacer";
import { Links } from "../components/Links";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
    const history = useHistory();
    return (
        <Container>
            <LeftContainer>
                <Content>
                    <Avatar>
                        <VpnKey/>
                    </Avatar>
                    <Title>Hi there!</Title>
                    <Spacer size={20}/>
                    <Subtitle>
                        Sign in to manage your listings and booking
                        requests on Nomad Rental
                    </Subtitle>
                    <Spacer size={20}/>
                    <Links text="Learn more about our premium subscription" textSize={14}>
                        <KeyboardArrowRight/>
                    </Links>
                    <Spacer/>
                </Content>
                <Form>
                    <FormContent>
                        <Label>Email address</Label>
                        <Input placeholder="Email"/>
                        <Spacer/>
                        <Flex jc="space-between">
                            <Label>Password</Label>
                            <Links text="Forgot your password?"/>
                        </Flex>
                        <Input type="password" placeholder="Password"/>

                        <Button onClick={() => history.push("/bookings")}>Sign in</Button>

                        <Spacer size={20}/>

                        <Flex jc="center" ac="center">
                            <FooterText>Don't have an account?</FooterText>
                            <Links text="Sign up now" style={{fontWeight: "500"}}/>
                        </Flex>
                    </FormContent>
                </Form>
            </LeftContainer>
            <RightContainer>
                <Image src={background}/>
            </RightContainer>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const RightContainer = styled.div`
  flex: 1;
  height: 100%;
  ${tablet({display: "none"})}
  ${mobile({display: "none"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
`;

const Title = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
  color: #262626;
  font-size: 20px;
`;

const Subtitle = styled.div`
  color: #59626A;
  font-size: 14px;
`;

const FooterText = styled.div`
  color: #59626A;
  font-size: 12px;
  margin-right: 5px;
`;

const FormContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin: 30px 50px;
`;

const Form = styled.div`
  background-color: #F5F6F7;
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${(props => props.jc || "flex-start")};
  align-content: ${(props => props.ac || "flex-start")};
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: none;
  padding: 12px;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #786AFF;
    box-shadow: 0px 0px 3px #786AFF;
  }
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: 15px;
  padding: 10px;
  border: none;
  border-radius: 7px;
  color: white;
  background-color: #786AFF;

  &:hover {
    transition: all 0.2s ease-in;
    color: #f1f0ff;
    background-color: #7C60FF;
  }
`;