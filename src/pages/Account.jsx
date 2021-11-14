import styled from "styled-components";
import { AccountCircle, KeyboardArrowRight } from "@mui/icons-material";
import { Links } from "../components/Links";
import { Spacer } from "../components/Spacer";
import { Card } from "../components/Card";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

export const Account = () => {
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const CardHeader = () => {
        return (
            <CardContainer>
                <Component style={{marginRight: "15px"}}>
                    <AccountCircle sx={{color: "#8A8F9C", fontSize: 40}}/>
                </Component>
                <Component>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>
                        Please make sure these details are up to date
                        as they'll be used for your bookings and communications with the hotels.
                    </CardDescription>
                </Component>
            </CardContainer>
        );
    };

    const CardContent = () => {
        return (
            <CardForm>
                <CardRow>
                    <CardInput>
                        <Label>Your Name</Label>
                        <Input placeholder="John Doe"/>
                    </CardInput>
                    <CardInput>
                        <Label>Email Address</Label>
                        <Input placeholder="john.doe@domain.tld"/>
                    </CardInput>
                </CardRow>

                <CardRow>
                    <CardInput>
                        <Label>Country</Label>
                        <CountryDropdown
                            style={{
                                border: "1px solid #f3f3f3",
                                borderRadius: "5px",
                                padding: "12px",
                                maxWidth: "300px"
                            }}
                            value={country}
                            onChange={(val) => setCountry(val)}/>
                    </CardInput>
                    <CardInput>
                        <Label>Phone Number</Label>
                        <PhoneInput
                            buttonStyle={{
                                border: "1px solid #f3f3f3",
                                borderRadius: "5px",
                                height: "44px"
                            }}
                            inputStyle={{
                                border: "1px solid #f3f3f3",
                                borderRadius: "5px",
                                height: "44px"
                            }}
                            country="my"
                            countryCodeEditable={false}
                            value={phoneNumber}
                            onChange={value => {
                                console.log(value);
                                setPhoneNumber(value);
                            }}
                        />
                    </CardInput>
                </CardRow>

                <CardRow>
                    <CardInput>
                        <Label>Current Password</Label>
                        <Input type="password" placeholder="*****"/>
                    </CardInput>
                    <CardInput>
                        <Label>New Password</Label>
                        <Input type="password" placeholder="New password"/>
                    </CardInput>
                </CardRow>

                <CardFooter>
                    <FooterText>
                        Your data will be
                        <span style={{color: "#168EEA"}}> handled with care</span>
                    </FooterText>
                    <FooterButton>Update</FooterButton>
                </CardFooter>
            </CardForm>
        );
    };

    return (
        <Container>
            <Title>Account</Title>

            <Spacer size={50}/>

            <Subtitle>Review and update our account details</Subtitle>

            <Spacer size={25}/>

            <Description>
                Please make sure these details are up to date
                as they'll be used for your bookings and communications with the hotels.
            </Description>

            <Spacer size={20}/>

            <Links>
                <KeyboardArrowRight/>
                Learn more about our premium subscription
            </Links>

            <Spacer size={30}/>

            <Card
                header={<CardHeader/>}
                content={<CardContent/>}
            />
        </Container>
    );
};

const Container = styled.div`
  color: #262626;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 35px;
`;

const Subtitle = styled.div`

`;

const Description = styled.div`
  color: #59626A;
  font-weight: lighter;
  font-size: 14px;
`;

const CardContainer = styled.div`
  display: flex;
`;

const Component = styled.div`
  flex: auto;
`;

const CardTitle = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const CardDescription = styled.div`
  color: ${(props => props.color || "#8A8F9C")};
  font-weight: lighter;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CardForm = styled.div`
  padding: 50px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 30px;
`;

const CardInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  padding: 12px;
  min-width: 274px;

  &:focus {
    outline: 1px solid #786AFF;
    box-shadow: 0px 0px 3px #786AFF;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterText = styled.div`
  font-size: 14px;
  color: #838EAB;
`;

const FooterButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  padding: 15px 25px;
  border: none;
  border-radius: 7px;
  color: white;
  background-color: #7C60FF;
`;