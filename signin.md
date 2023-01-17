## Sign up
> Create a new account to save your players.
<style>
    error {
        display: block;
    }
</style>

<script>
    function create_Usr(){
        const usr = document.getElementById("usr").value;
        const passw1 = document.getElementById("passw1").value;
        const passw2 = document.getElementById("passw2").value;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
            },
        };
        // code which will check if the passwords entered are the same
        if (passw1 !== passw2) {
            document.getElementById("passerr").style.display = "inline"; 
            // need to find a way to prevent user from going on
        }
        // will switch to different screen
        var url=window.location.href='{{ site.baseurl }}/logged';
        /* response.json().then(data => {
                console.log(data);
                for (let user in data) {
                    if (user[name] !== usr) {
                        document.getElementById("uerr").style.display="inline"; 
                    }
        This is an outline for code which would allow us to check if the username isn't taken.
                    */
    }
</script>

<label for="usr">Username</label>
<input type="text" id="usr" value=''/>
<br>
<br>
<label for="passw1">Password</label>
<input type="text" id="passw1" value=''/>
<br>
<br>
<label for="passw2">Confirm Password</label>
<input type="text" id="passw2" value=''/>
<br>
<br>
<button type="button" onclick="create_Usr()">Sign Up</button>
<br>
<br>
<p class="error" id="passerr" style="display: none;">Passwords do not match.</p>
<p class="error" id="uerr" style="display: none;">Username already exists.</p>