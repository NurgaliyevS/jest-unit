import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        main
      </Link>
      <Link to="/about-page" data-testid="main-about">
        about
      </Link>
      <Link to="/users" data-testid="users-about">
        users
      </Link>
      <AppRouter />
    </div>
  );
};

export default App;
