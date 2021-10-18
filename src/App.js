import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue")
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
        }}
      >
      <Router>
        <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-peru-500 to-red-500">
          <Link className="text-6xl text-white hover:text-gray-200" to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);