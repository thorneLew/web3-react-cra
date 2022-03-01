import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import MetaMaskCard from './components/connectors/MetaMaskCard'
import NetworkCard from './components/connectors/NetworkCard'
import PriorityExample from './components/connectors/PriorityExample'
import WalletConnectCard from './components/connectors/WalletConnectCard'
import WalletLinkCard from './components/connectors/WalletLinkCard'



export default function App() {
  return (
    <Router basename={(window as any).__POWERED_BY_QIANKUN__ ? '/react2' : '/'}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">sub-react1-Home</Link>
            </li>
            <li>
              <Link to="/about">sub-react1-About</Link>
            </li>
            <li>
              <Link to="/users">sub-react1-Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <>
    <h2>react2 - Home</h2>;
    <PriorityExample />
    <MetaMaskCard />
    <WalletConnectCard />
    <WalletLinkCard />
    <NetworkCard />
  </>
  
}

function About() {
  return <h2>react2 - About</h2>;
}

function Users() {
  return <h2>react2 - Users</h2>;
}
