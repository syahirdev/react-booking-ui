import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { ConnectWithoutContact, ExitToApp, Help, Hotel, Inbox, ManageAccounts } from "@mui/icons-material";
import { Avatar } from "./Avatar";
import { Spacer } from "./Spacer";
import { NavLink, useHistory } from "react-router-dom";

export const Sidebar = () => {
    const history = useHistory();
    const [name] = useState("John Doe");
    const [status] = useState("Premium Nomad");

    return (
        <Container>
            <Image src={logo} width="170em"/>

            <Spacer size={40}/>

            <Avatar>JD</Avatar>
            <Name>{name}</Name>
            <Status>{status}</Status>

            <Spacer size={20}/>

            <NavLink to="/bookings" className="link" activeClassName="active-link">
                <Inbox/>
                <Text>Bookings</Text>
            </NavLink>

            <Spacer size={20}/>

            <Component>
                <Hotel/>
                <Text>Refer and Earn</Text>
            </Component>
            <NavLink to="/account" className="link" activeClassName="active-link">
                <ManageAccounts/>
                <Text>Account Settings</Text>
            </NavLink>

            <Spacer size={20}/>

            <ComponentTitle>SUPPORT</ComponentTitle>
            <Component>
                <ConnectWithoutContact/>
                <Text>Contact us</Text>
            </Component>
            <Component>
                <Help/>
                <Text>FAQ</Text>
            </Component>

            <Component
                style={{justifySelf: "flex-end"}}
                onClick={() => history.push("/")}
            >
                <ExitToApp/>
                <Text>Sign out</Text>
            </Component>
        </Container>
    );
};

const Container = styled.div`
  height: 100vh;
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: #707070;
  letter-spacing: 1px;
`;

const Image = styled.img`
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 5px;
`;

const Status = styled.div`
  font-weight: lighter;
  font-size: 12px;
  margin: 5px;
`;

const Component = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5px;
  color: ${(props => props.isActive && "white")};
  background-color: ${(props => props.isActive && "#7C60FF")};
`;

const Text = styled.div`
  margin-left: 7px;
`;

const ComponentTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;