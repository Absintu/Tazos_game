import React, {Component} from 'react';
import Web3 from 'web3'
import './App.css';
import Tazo from './abis/Tazo.json'
import logo from './logo.jpg'

class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask')
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
  }

  constructor(props){
    super(props)
    this.state = {
      account: '0x0'
    }
  }

  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/Absintu/Tazos_game"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img className="App-header" src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Tazos Game
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-muted"><span id="account">{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/Absintu/Tazos_game"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tazos Game..... Still just a boilerplate 
          </a>
        </header>
      </div>
    );
  }
}

export default App;
