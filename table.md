## Favorite Players Table
<meta charset="UTF-8">
<h3>List your favorite players here!</h3>
<h3>Current Table</h3>
<style>
    table, th, td, tr {
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
        padding: 8px
    }
</style>    
<table>
  <thead>
  <tr>
    <th>User</th>
    <th>Player Name</th>
    <th>Position</th>
    <th>Team</th>
    <th>League</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<h3 style="color:#784518;">Add your favorite players to the table!</h3>

<form action="javascript:create_player()">
    <p><label>
        User:
        <input type="text" name="user" id="user" required>
    </label></p>
    <p><label>
        Player Name:
        <input type="text" name="player" id="player" required>
        Verify Player Name:
        <input type="text" name="playerV" id="playerV" required>
    </label></p>
    <p><label>
        Position:
        <input type="text" name="position" id="position" required>
    </label></p>
    <p><label>
        Team:
        <input type="text" name="team" id="team" required>
    </label></p>
    <p>
    <p><label>
        League:
        <input type="text" name="league" id="league" required>
    </label></p>
    <p>
        <button>Create</button>
    </p>


<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");
  // prepare URL's to allow easy switch from deployment and localhost
  const url = "https://barn.nighthawkcodingsociety.com/api/players"
  const create_fetch = url + '/create';
  const read_fetch = url + '/';

  // Load users on page entry
  read_players();


  // Display User Table, data is fetched from Backend Database
  function read_players() {
    // prepare fetch options
    const read_options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
    };

    // fetch the data from API
    fetch(read_fetch, read_options)
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database read error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            return;
        }
        // valid response will have json data
        response.json().then(data => {
            console.log(data);
            for (let row in data) {
              console.log(data[row]);
              add_row(data[row]);
            }
        })
    })
    // catch fetch errors (ie ACCESS to server blocked)
    .catch(err => {
      console.error(err);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = err;
      tr.appendChild(td);
      resultContainer.appendChild(tr);
    });
  }

  function create_player(){
    //Validate Password (must be 6-20 characters in len)
    //verifyPassword("click");
    const body = {
        user: document.getElementById("user").value,
        player: document.getElementById("player").value,
        position: document.getElementById("position").value,
        team: document.getElementById("team").value,
        league: document.getElementById("league").value
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // URL for Create API
    // Fetch API call to the database to create a new user
    fetch(create_fetch, requestOptions)
      .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            //add a table row for the new/created userid
            add_row(data);
        })
    })
  }

  function add_row(data) {
    const tr = document.createElement("tr");
    const user = document.createElement("td");
    const player = document.createElement("td");
    const position = document.createElement("td")
    const team = document.createElement("td");
    const league = document.createElement("td");
  

    // obtain data that is specific to the API
    user.innerHTML = data.user; 
    player.innerHTML = data.player; 
    position.innerHTML = data.position;
    team.innerHTML = data.team; 
    league.innerHTML = data.league; 

    // add HTML to container
    tr.appendChild(user);
    tr.appendChild(player);
    tr.appendChild(position);
    tr.appendChild(team);
    tr.appendChild(league);

    resultContainer.appendChild(tr);
  }

</script>
