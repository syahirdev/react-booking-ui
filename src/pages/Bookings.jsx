import styled from "styled-components";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "../components/Link";
import { Spacer } from "../components/Spacer";

export const Bookings = () => {
    return (
        <Container>
            <Title>Bookings</Title>
            <Spacer size={30}/>
            <Subtitle>Your current upcoming stays</Subtitle>
            <Description>
                Please update with the property if your travel plans should change
                or if your wish to make any changes to your stay.
            </Description>

            <Link>
                <KeyboardArrowRight/>
                Learn more about our premium subscription
            </Link>
        </Container>
    );
};

const Container = styled.div`
`;

const Title = styled.div`
  font-size: 30px;
`;

const Subtitle = styled.div`
`;

const Description = styled.div`
`;