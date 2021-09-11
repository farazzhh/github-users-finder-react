import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import { About } from "./Pages/about/About";
import UsersPage from "./Pages/users/UsersPage";
import UserPage from "./Pages/user/UserPage";
import { Contact } from "./Pages/contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [showSpinner, setSpinner] = useState(false);

  async function searchData(textInput) {
    setSpinner(true);
    const searchUser = await axios.get(
      `https://api.github.com/search/users?q=${textInput}&clinet_id=${process.env.REACT_APP_GITHUB_REACT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_REACT_CLIENT_SECRET}`
    );
    setUsers(searchUser.data.items);
    setSpinner(false);
    console.log(searchUser);
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/">
          <UsersPage searchData={searchData} showSpinner={showSpinner} />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/:login" component={UserPage} />
      </div>
    </Router>
  );
}

export default App;
