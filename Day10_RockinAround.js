/* HTML:

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎄 Rockin' Around</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link href="index.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="container">
    <h1>🎄 Christmas Jukebox</h1>
    <iframe id="player" type="text/html" width="320" height="180" src="https://www.youtube.com/embed/PoAjmmD89Vw?autoplay=1" frameborder="0"></iframe>
    
    <div class="songs">
        <button onclick="playSong('PoAjmmD89Vw')">White Christmas</button>
        <button onclick="playSong('1qYz7rfgLWE')">Rockin' Around The Christmas Tree</button>
        <button onclick="playSong('R_vmuL0gjU0')">Jingle Bell Rock</button>
        <button onclick="playSong('WaNwEkCeZrE')">It's Beginning to Look a Lot Like Christmas</button>
        <button onclick="playSong('AN_R4pR1hck')">It's the Most Wonderful Time of the Year</button>
    </div>
  </div>
  
  <script src="index.js"></script>
</body>

</html>

CSS:

html, body {
    margin: 0;
    padding: 0;
}

body {
    background-color: #0F0F0F;
    font-family: 'Inter', sans-serif;
}

h1 {
    font-size: 25px;
    color: #DEEAEE;
    text-align: center;
}

.container {
    max-width: 320px;
    margin: 0 auto;
}

#player {
  background-color: #DEEAEE;
}

button {
    font-family: 'Inter', sans-serif;
    background-color: #BDD59B;
    border: 0;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px 0;
}

button:hover {
    background-color: #FF9492;
    cursor: pointer;
}

.songs {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 10px;
}

*/

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  
  //iframe id:
  const player = document.getElementById("player")
  //new yt video source with new id:
  const newSrc = `https://www.youtube.com/embed/${id}?autoplay=1`
  console.log(id)
  //set the src attribute of the iframe to play the new video
  player.src = newSrc
}




