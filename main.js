$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 3) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});

                function toggleSong() {
                var song = document.querySelector('audio');
                if(song.paused == true) {
                console.log('Playing');
                $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                song.play();
                }
                else {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                song.pause();
                }
                }
                  function fancyTimeFormat(time)
                  {
                      // Hours, minutes and seconds
                      var hrs = ~~(time / 3600);
                      var mins = ~~((time % 3600) / 60);
                      var secs = time % 60;

                      // Output like "1:01" or "4:03:59" or "123:03:59"
                      var ret = "";

                      if (hrs > 0) {
                          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                      }

                      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                      ret += "" + secs;
                      return ret;
                  }
                      function addSongNameClickEvent(songName,position) {
                        console.log(songName);
                        console.log(position);
                        var id = '#song' + position;
                        console.log(id);
                      $(id).click(function() {
                      var audio = document.querySelector('audio');
                      console.log(audio)
                      var currentSong = audio.src;
                      if(currentSong.search(songName) != -1)
                      {
                      toggleSong();
                      console.log('if statement is  runninn');
                      }
                      else {
                      audio.src = songName;
                      toggleSong();
                      console.log('else is excuting');
                      }
                      });
                      }




var songList = ['Ik vaari Aa', 'Mubarakan', 'O Sona Tere Liye', 'The Breakup Song'];
var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

var artistList = [' Arijit Singh & Pritam','Juggy D, Yash Narvekar, Badshah','A.R. Rahman, Shashaa Tirupati','Pritam, Arijit Singh & Nikita Gandhi'];





   $('.play-icon').on('click', function() {
       toggleSong();
   });
   $('body').on('keypress', function(event) {
               if (event.keyCode == 32) {
                   toggleSong();
               }
           });



           function updateCurrentTime() {
         var song = document.querySelector('audio');
         var currentTime = Math.floor(song.currentTime);
         currentTime = fancyTimeFormat(currentTime);
         var duration = Math.floor(song.duration);
         duration = fancyTimeFormat(duration)
         $('.time-elapsed').text(currentTime);
         $('.song-duration').text(duration);
     }


           window.onload = function() {
             for(var i =0; i < songList.length;i++) {
          var name = '#song' + (i+1);
          var song = $(name);
          var albumList = ['Raabta','Mubarakan','Mom','Raabta'];
var durationList = ['4:34','3:11','5:19','4:57'];
          song.find('.song-name').text(songList[i]);
          song.find('.song-artist').text(artistList[i]);
          song.find('.song-album').text(albumList[i]); // Added
        song.find('.song-length').text(durationList[i]); // Added
      }
           updateCurrentTime();
           for (var i = 0; i < fileNames.length ; i++) {
    addSongNameClickEvent(fileNames[i],i+1)
}






           setInterval(function() {
           updateCurrentTime();
           },1000);
           }
