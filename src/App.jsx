import "./styles.css";
import React from "react";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contacts from "./components/contacts";
import Articles from "./components/articles";
import NotFoundPage from "./components/notFoundPage";
import ArticleDetails from "./components/articleDetails";

export default function App() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="*" element={<NotFoundPage />} />

                <Route
                  path="/articles/:name"
                  element={<ArticleDetails users={users} />}
                />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}
