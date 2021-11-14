import styled from "styled-components";
import {
    AccessTime,
    CheckCircle,
    EventAvailable,
    KeyboardArrowRight,
    Receipt,
    Star,
    Telegram
} from "@mui/icons-material";
import { Links } from "../components/Links";
import { Spacer } from "../components/Spacer";
import { Card } from "../components/Card";
import bookingImg from "../assets/room.png";

export const Bookings = () => {

    const CardHeader = () => {
        return (
            <CardContainer>
                <CardTitle>The Green View</CardTitle>
                <CardDescription>
                    <CheckCircle sx={{fontSize: 17}}/>
                    Booking request received
                </CardDescription>
                <CardDescription color="#7C60FF">
                    <AccessTime sx={{fontSize: 17}}/>
                    Awaiting confirmation from Hotel
                </CardDescription>

                <Spacer size={30}/>

                <CardSubtitle>Superior Premium</CardSubtitle>
                <CardDetails>
                    <CardDetail>
                        <CardDetailTitle>
                            <EventAvailable sx={{fontSize: 15}}/>
                            Check-in
                        </CardDetailTitle>
                        <CardDetailDescription>July 9th, 2018</CardDetailDescription>
                    </CardDetail>
                    <CardDetail>
                        <CardDetailTitle>
                            <Receipt sx={{fontSize: 15}}/>
                            Reference
                        </CardDetailTitle>
                        <CardDetailDescription>#UC311K</CardDetailDescription>
                    </CardDetail>
                </CardDetails>
            </CardContainer>
        );
    };

    const CardContent = () => {
        return (
            <CardContainer>
                <CardList color="#42B72A">
                    <Star/>
                    Rate your stay
                </CardList>
                <Hr/>
                <CardList color="#8A8F9C">
                    <Telegram/>
                    Email the property
                </CardList>
            </CardContainer>
        );
    };

    return (
        <Container>
            <Title>Bookings</Title>

            <Spacer size={50}/>

            <Subtitle>Your current upcoming stays</Subtitle>

            <Spacer size={25}/>

            <Description>
                Please update with the property if your travel plans should change
                or if your wish to make any changes to your stay.
            </Description>

            <Spacer size={20}/>

            <Links>
                <KeyboardArrowRight/>
                Learn more about our premium subscription
            </Links>

            <Spacer size={30}/>

            <Card
                src={bookingImg}
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

const CardSubtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const CardDetails = styled.div`
  display: flex;
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 10px;
`;

const CardDetailTitle = styled.div`
  display: flex;
  gap: 5px;
  color: #8A8F9C;
  font-weight: lighter;
  margin-bottom: 7px;
`;

const CardDetailDescription = styled.div`
  font-weight: 500;
`;

const CardList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${(props => props.color)};
  padding: 20px;
`;

const Hr = styled.hr`
  border-top: 1px solid #EAEEF3;
`;