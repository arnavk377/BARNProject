<div>
        <head>
                <meta charset="utf-8">
                <title>Higher-Lower Game</title>
        <style>
                body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                }
                h1 {
                        margin-top: 20px;
                }
                .container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        margin-top: 20px;
                }
                .player {
                        margin: 10px;
                        padding: 10px;
                        border: 2px solid #ccc;
                        border-radius: 5px;
                        cursor: pointer;
                }
                .player-box {
                display: inline-block;
                margin: 10px;
                padding: 10px;
                border: 2px solid black;
                border-radius: 10px;
                text-align: center;
                }
                .player-img-container {
                        width: 200px;
                        height: 200px;
                        margin-bottom: 10px;
                }
                .player-box p {
                        font-size: 20px;
                        font-weight: bold;
                }
                .selected {
                        border-color: #4CAF50;
                }
                button {
                        margin-top: 20px;
                        padding: 10px 20px;
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                }
                button:hover {
                        background-color: #3e8e41;
                }
        </style>
        </head>
        <body>
                <h1>Higher-Lower Game</h1>
                <p>Click on the player you think has the higher statistic:</p>
                <p id="stat"><p>
		<div class="players">
			<button class="player-box">
				<img id="player1" src="" alt="Player 1">
				<p id="player1-stat"></p>
			</button>
			<button class="player-box">
				<img id="player2" src="" alt="Player 2">
				<p id="player2-stat"></p>
			</button>
		</div>
                <script>
                        window.onload = fetchPlayers;
                        async function fetchPlayers() {
                        const response = await fetch('https://barn.nighthawkcodingsociety.com/api/users/');
                        const data = await response.json();
                        const players = data;
                        const playerOne = players[Math.floor(Math.random() * players.length)];
                        const playerTwo = players[Math.floor(Math.random() * players.length)];
                        const statToCompare = ['atts', 'comps', 'tds', 'yards'][Math.floor(Math.random() * 4)];
                        document.getElementById("stat").textContent = statToCompare;
                        const buttonOne = document.createElement('button');
                        buttonOne.type = 'button';
                        buttonOne.addEventListener('click', () => {
                                if (playerOne[statToCompare] > playerTwo[statToCompare]) {
                                        alert('You Win!');
                                } else {
                                        alert('You Lose!');
                                }
                                fetchPlayers();
                                });
                        const imgOne = document.createElement('img');
                        imgOne.src = playerOne.pimage;
                        imgOne.alt = playerOne.name;
                        buttonOne.appendChild(imgOne);
                        const buttonTwo = document.createElement('button');
                        buttonTwo.type = 'button';
                                buttonTwo.addEventListener('click', () => {
                                if (playerTwo[statToCompare] > playerOne[statToCompare]) {
                                        alert('You Win!');
                                } else {
                                        alert('You Lose!');
                                }
                                fetchPlayers();
                                });
                        const imgTwo = document.createElement('img');
                        imgTwo.src = playerTwo.pimage;
                        imgTwo.alt = playerTwo.name;
                        buttonTwo.appendChild(imgTwo);
                        document.getElementById('player1').innerHTML = '';
                        document.getElementById('player1').appendChild(buttonOne);
                        document.getElementById('player2').innerHTML = '';
                        document.getElementById('player2').appendChild(buttonTwo);
    }
</script>



<!--
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
    <img class="image" src="{{ site.baseurl }}/images/ae.png" id="aeid">
    <img class="image" src="{{ site.baseurl }}/images/as.png" id="asid">
    <img class="image" src="{{ site.baseurl }}/images/aw.jpeg" id="awid">
    <img class="image" src="{{ site.baseurl }}/images/an.jpeg" id="anid">
    <img class="image" src="{{ site.baseurl }}/images/ne.jpeg" id="neid">
    <img class="image" src="{{ site.baseurl }}/images/ns.png" id="nsid">
    <img class="image" src="{{ site.baseurl }}/images/nw.png" id="nwid">
    <img class="image" src="{{ site.baseurl }}/images/nn.png" id="nnid">
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
-->