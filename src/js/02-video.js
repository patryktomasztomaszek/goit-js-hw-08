// Alocating iframe with vimeo player in variable and passing it to Vimeo.player constructor
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// Setting current video playtime from local storage
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

// initalizing listener for video playtime saving function
player.on('timeupdate', _.throttle((saveCurrentPlayimeThrottled) => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds); //Saving current playback time in local storage
    }).catch(function(error) {
        // an error occurred
    });
}, 1000));
