## Higher Lower Game

<div>
        <style>
                .p-image {
                        width: 50%;
                        height: auto;
                }
                .p-row{
                        display: flex;
                }
                .p-column{
                        float: left;
                        width: 45%;
                        margin: 10px
                }
        </style>
        <script>
        const apiurl = "http://barn.nighthawkcodingsociety.com/api/users/"
        window.onload = APIsync()
        function APIsync(){
                fetch(apiurl)
                .then(response => {
                response.json().then(data => {
                        console.log(data)
                        console.log(data.results)
                })
        })
        }
        async function startGame() {
                let players = [];
                let score = 0;
                let selectedStatistic = selectStatistic();
        try {
                let response = await fetch("http://10.8.134.71:8953/api/qbs");
                let playerData = await response.json();
                playerData.forEach(player => {
                players.push(new Player(player));
        });
        while (true) {
                let playersToChooseFrom = generatePlayers(players);
                console.log("Player 1: " + playersToChooseFrom[0].name + ", " + selectedStatistic + ": " + playersToChooseFrom[0][selectedStatistic]);
                console.log("Player 2: " + playersToChooseFrom[1].name + ", " + selectedStatistic + ": " + playersToChooseFrom[1][selectedStatistic]);
                let playerChoice = prompt("Choose the player with a higher value of " + selectedStatistic + ": 1 or 2");
                if (playersToChooseFrom[playerChoice - 1][selectedStatistic] > playersToChooseFrom[(playerChoice % 2)][selectedStatistic]) {
                        console.log("Correct!");
                        score++;
                } else {
                        console.log("Incorrect. The game is over. Your final score is " + score + ".");
                        break;
                }
        }
        } catch (error) {
                console.error("An error occurred while trying to fetch player data: " + error);
        }
        }
        </script>
        <p display="center">Who has more</p>
        <p display="center" id="stat">Receptions</p>
        <br>
        <div class="p-row">
                <div class="p-column">
                        <img class="p-image" id="lplayer" src="/images/ae.png" />
                </div>
                <div class="p-column">
                        <img class="p-image" id="rplayer" src="/images/an.jpeg" />
                </div>
        </div>

</div>

## Map of the NFL
![](/images/teamsmap.webp)
> These are the locations of all 32 NFL teams on a map.
<div>
    <style>
        .image {
            display: none;
        }
        .button {
            width: 20%;
            margin-left: 5px;
            margin-bottom: 5px;
        }
    </style>
    <row style="align-center">
        <button class="button" type="button" onclick="shownn()" id="btnID"> NFC North </button>
        <button class="button" type="button" onclick="showns()" id="btnID"> NFC South </button>
        <button class="button" type="button" onclick="showne()" id="btnID"> NFC East </button>
        <button class="button" type="button" onclick="shownw()" id="btnID"> NFC West </button>
    </row>
    <row>
        <button class="button" onclick="showan()" id="btnID"> AFC North </button>
        <button class="button" onclick="showas()" id="btnID"> AFC South </button>
        <button class="button" onclick="showae()" id="btnID"> AFC East </button>
        <button class="button" onclick="showaw()" id="btnID"> AFC West </button>
    </row>
    <img class="image" src="/images/ae.png" id="aeid">
    <img class="image" src="/images/as.png" id="asid">
    <img class="image" src="/images/aw.jpeg" id="awid">
    <img class="image" src="/images/an.jpeg" id="anid">
    <img class="image" src="/images/ne.jpeg" id="neid">
    <img class="image" src="/images/ns.png" id="nsid">
    <img class="image" src="/images/nw.png" id="nwid">
    <img class="image" src="/images/nn.png" id="nnid">
    <script>
        function shownn() {
            document.getElementById('nnid')
                    .style.display = "block";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function showns() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "block";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function showne() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "block";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function shownw() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "block";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function showan() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "block";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function showas() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "block";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function showae() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "block";
            document.getElementById('awid')
                    .style.display = "none";      
        }
        function showaw() {
            document.getElementById('nnid')
                    .style.display = "none";
            document.getElementById('nsid')
                    .style.display = "none";
            document.getElementById('neid')
                    .style.display = "none";
            document.getElementById('nwid')
                    .style.display = "none";
            document.getElementById('anid')
                    .style.display = "none";
            document.getElementById('asid')
                    .style.display = "none";
            document.getElementById('aeid')
                    .style.display = "none";
            document.getElementById('awid')
                    .style.display = "block";      
        }
    </script>
</div>
