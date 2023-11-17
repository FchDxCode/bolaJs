<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gim Bola</title>
    <style>
    body {
        background-image: url('bg.png');
        display: flex;
        align-items: flex-start; 
        justify-content: flex-start; 
        height: 100vh;
        margin: 0;
    }

    .clock {
        font-family: 'Arial', sans-serif;
        font-size: 2em;
        color: white;
        border: 2px solid white;
        padding: 5px;
        border-radius: 5px;
        margin: 10px;
    }

    .score {
        position: inherit;
        color: aliceblue;
        top: 10px;
        margin: 10px;
        font-family: 'Poppins';
        font-size: 35px;
    }
    
    .img {
        position: absolute;
        transition: top 0.5s ease;

    }

    .atas {
        width: 20%;
        height: 20%;
    }

    .bawah {
        width: 100%;
        height: 15%;
        position: fixed;
        bottom: 0;
    }

    #img {
        justify-content: center;
    }
    </style>
</head>

<body>
    <div class="atas">
       <div class="clock">
            <div class="time" id="time"></div>
       </div>
       <h3 class="score" id="score">Skor: </h3>
    </div>
    <div class="bawah">
        <img src="bola.png" id="tendang" class="img" width="80px">
        <img src="bola.png" id="img" class="img" width="80px">
    </div>
</body>

</html>
<script src="main.js?1"></script>