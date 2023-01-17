{% include loggedin.html %}

## Player Table
> Log your favorite players

<script>
function add_Player(){
    // extract data from inputs
        const name = document.getElementById("name").value;
        const team = document.getElementById("team").value;
        const league = document.getElementById("league").value;
        const age = document.getElementById("age").value;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
            },
        };
    //url for Create API
    //Async fetch API call to the database to create a new user
        fetch(url, requestOptions).then(response => {
        // prepare HTML search result container for new output
            const resultContainer = document.getElementById("result");
        // trap error response from Web API
            if (response.status !== 200) {
                const errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
            // Email must be unique, no duplicates allowed
            }
        // response contains valid result
            response.json().then(data => {
                console.log(data);
            //add a table row for the new/created userId
                const tr = document.createElement("tr");
                for (let key in data) {
                    if (key !== 'query') {
                    //create a DOM element for the data(cells) in table rows
                        const td = document.createElement("td");
                        console.log(data[key]);
                    //truncate the displayed password to length 20
                        if (key === 'password'){
                            td.innerHTML = data[key].substring(0,17)+"...";
                        }
                        else{
                            td.innerHTML = data[key];}
                    //add the DOM data element to the row
                        tr.appendChild(td);
                    }
                }
            //append the DOM row to the table
                table.appendChild(tr);
            })
        })
    }
</script>
<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="team">Pro Team</label></th>
        <th><label for="league">Professional League</label></th>
        <th><label for="age">Age</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="team" name="team" id="team" ></td>
        <td><input type="league" name="league" id="leagu" required></td>
        <td><input type="age" name="age" id="age"></td>
        <td ><button onclick="add_Player()">Add Player</button></td>
    </tr>
</table>