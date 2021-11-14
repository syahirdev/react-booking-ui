import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Bookings } from "./Bookings";

export const Home = () => {
    return (
        <Container>
            <Sidebar/>
            <Content>
                <Bookings/>
            </Content>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  margin: 30px;
`;

const Content = styled.div`
  margin: 30px;
`;