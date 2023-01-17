## User Login
> Allows the user to log in to save their favorite players.
<style>
    error {
        display: none;
    }
</style>

<script>
    function create_Usr(){
        const usr = document.getElementById("usr").value;
        const passw = document.getElementById("passw").value;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
            },
        };
        var url=window.location.href='{{ site.baseurl }}/logged';
        /* response.json().then(data => {
                console.log(data);
                for (let user in data) {
                    if (user[password] !== passw) {
                        document.getElementById("err1").style.display="inline"; 
                    }
        This is an outline for code which would allow us to check if the username and password combination is correct.
                    */
    }
</script>

<label for="usr">Username</label>
<input type="text" id="usr" value=''/>
<br>
<br>
<label for="passw">Password</label>
<input type="text" id="passw" value=''/>
<br>
<br>
<button type="button" onclick="create_Usr()">Log In</button>
<br>
<br>
## New?
[Make an account!]({{ site.baseurl }}/signin)

