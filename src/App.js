import styled from "styled-components";
import { SignIn } from "./pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Account } from "./pages/Account";
import { Bookings } from "./pages/Bookings";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn/>
                </Route>

                <Container>
                    <Sidebar/>
                    <Content>
                        <Route exact path="/bookings">
                            <Bookings/>
                        </Route>
                        <Route exact path="/account">
                            <Account/>
                        </Route>
                    </Content>
                </Container>
            </Switch>
        </Router>
    );
};

const Container = styled.div`
  display: flex;
  margin: 30px;
`;

const Content = styled.div`
  margin: 30px;
`;

export default App;
