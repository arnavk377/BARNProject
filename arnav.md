## Higher Lower Game

<div>
        <style>
                p-image {
                        display: 40%;
                        margin: 25px;
                }
        </style>
        <p>Who has more</p>
        <p>Receptions</p>

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
