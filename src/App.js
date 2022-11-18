import React from "react";
import { Route } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetup";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/">
        <AllMeetupPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </React.Fragment>
  );
};

export default App;
