import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {default as NextLink} from "next/link";

export default function App() {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NextLink href="/">
                    <a>Portal</a>
                  </NextLink>
                </li>
                <li>
                  <Link to="/admin">Home</Link>
                </li>
                <li>
                  <Link to="/admin/about">About</Link>
                </li>
                <li>
                  <Link to="/admin/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/admin/about">
                <About />
              </Route>
              <Route path="/admin/users">
                <Users />
              </Route>
              <Route path="/admin">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
