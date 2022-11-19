import React from "react";
import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import AllMeetupPage from "./pages/AllMeetup";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

const App = () => {
  return (
    <React.Fragment>
        <MainNavigation/>
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
