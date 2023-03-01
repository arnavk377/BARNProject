work
<style>
  .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


</style>
<script>
import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      playerName: null,
      playerStats: {}
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.getPlayerId()
  console.log(this.state.playerName)
}

handleChange = (event) => {
  const replace = event.target.value.split(" ").join("_");
  if(replace.length > 0){
    this.setState({playerName: replace})
  } else {
    alert("Please type players name!")
  }
}

  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      // console.log(res.data.data)
      if(res.data.data[0] === undefined){
        alert("This player is either injured or hasn't played yet!")
      } else if(res.data.data.length > 1){
        alert("Pleases specify the name more!")
      } else{
        await this.getPlayerStats(res.data.data[0].id)

      }
    }).catch(err => {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({ playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }
  
  render(){
  return (
    <div className="App">
     <form onSubmit={this.handleSubmit}>
       <label>
         Name
         <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="please enter players name"
         />
       </label>
       <input type="submit" value="Submit"/>
     </form>
     games played: {this.state.playerStats["games_played"]}
     <br />
     points averaged: {this.state.playerStats["pts"]}
     <br />
     rebounds averaged: {this.state.playerStats["reb"]}
     <br />
     assists averaged: {this.state.playerStats["ast"]}
    </div>
  );
}
}
export default App;
</script>

<script>
  import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      playerName: null,
      playerStats: {}
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.getPlayerId()
  console.log(this.state.playerName)
}

handleChange = (event) => {
  const replace = event.target.value.split(" ").join("_");
  if(replace.length > 0){
    this.setState({playerName: replace})
  } else {
    alert("Please type players name!")
  }
}

  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      // console.log(res.data.data)
      if(res.data.data[0] === undefined){
        alert("This player is either injured or hasn't played yet!")
      } else if(res.data.data.length > 1){
        alert("Pleases specify the name more!")
      } else{
        await this.getPlayerStats(res.data.data[0].id)

      }
    }).catch(err => {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({ playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }
  
  render(){
  return (
    <div className="App">
     <form onSubmit={this.handleSubmit}>
       <label>
         Name
         <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="please enter players name"
         />
       </label>
       <input type="submit" value="Submit"/>
     </form>
     games played: {this.state.playerStats["games_played"]}
     <br />
     points averaged: {this.state.playerStats["pts"]}
     <br />
     rebounds averaged: {this.state.playerStats["reb"]}
     <br />
     assists averaged: {this.state.playerStats["ast"]}
    </div>
  );
}
}
export default App;

</script>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files insidek the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>