import React from "react";
import { Route, Switch } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetup";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact >
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup" exact >
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" exact >
          <FavoritesPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
