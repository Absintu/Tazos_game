## This project is still a boilerplate to create some type of generic app on react that works with ERC721 Tokens (aka Non-Fungible Tokens)<br>
Contracts inherited from @openzeppelin<br>

### If you don't have npm installed please install NodeJS 12 from https://nodejs.org/en/<br>
## then open the terminal and install yarn with the command:<br>

'npm install -g yarn git'
'cd your_dev_apps_dir'
'git clone 'https://github.com/Absintu/Tazos_game/'
'cd Tazos_game'

#" *** (Optional) If you just want to test the frontend skip this part<br>
If you want to test, deploy contracts or interact with them, first install truffle:<br>
'yarn'
'npm install -g truffle'
'truffle compile'
Install ganache from their website: https://www.trufflesuite.com/ganache and start the client
make a .secret file wich contains your 12 word mnemonic and paste it on the project root folder
'truffle migrate'

If you want to test the contracts just run:
'truffle test'

Et voilá: now you should have your contracts deployed on yout local blockchain and are ready to interact with them<br>
*************************************************************************************


# To test the front-end:

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Absintu out!
