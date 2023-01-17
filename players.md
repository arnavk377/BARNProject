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
        output.innerHTML += "<tr><td>"+name+"</td><td>"+team+"</td>"+"<td>"+league+"</td><td>"+age+"</td></tr>"
}

</script>
<table id="output">
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="team">Pro Team</label></th>
        <th><label for="league">Professional League</label></th>
        <th><label for="age">Age</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="team" name="team" id="team" ></td>
        <td><input type="league" name="league" id="league" required></td>
        <td><input type="age" name="age" id="age"></td>
        <td ><button onclick="add_Player()">Add Player</button></td>
    </tr>
</table>