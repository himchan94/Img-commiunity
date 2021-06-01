import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Search from "../shared/Search";
import Notification from "../pages/Notification";

import Permit from "./Permit";

import Header from "../components/Header";
import { Grid, Button } from "../elements";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/search" component={Search} />
          <Route path="/noti" component={Notification} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button
          _onClick={() => {
            history.push("/write");
          }}
          is_float
          text="+"
        ></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
