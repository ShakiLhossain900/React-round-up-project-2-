import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetupPage from "./pages/AllMeetup";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

// next time adding a from 023 for next