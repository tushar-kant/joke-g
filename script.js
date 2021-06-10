const genJokeBtn = document.getElementById('gen-joke-btn');
genJokeBtn.addEventListener('click', jokeGenHandler);

function jokeGenHandler(){
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let joke, jokeDelivery;
        if(data.joke){
            joke = data.joke;
            jokeDelivery = "";
        } else {
            joke = data.setup;
            jokeDelivery = data.delivery;
        }
        document.getElementById('category').innerHTML = data.category;
        document.getElementById('setup').innerHTML = joke;
        document.getElementById('delivery').innerHTML = jokeDelivery;
    });
}

jokeGenHandler();