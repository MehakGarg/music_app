var songs = [{
										'name': 'Ik Vaari Aa',
										'artist': 'Arijit Singh & Pritam',
										'album': 'Raabta',
										'duration': '4:34',
									   'fileName': 'song1.mp3',
									   'image' : 'song1.jpg'
									},
									{
										'name': 'Mubarakan',
										'artist': 'Juggy D, Yash Narvekar, Badshah, Sukriti Kakkar',
										'album': 'Mubarakan',
										'duration': '3:11',
										'fileName': 'song2.mp3',
										'image' : 'song2.jpg'
									},
									{
										'name': 'O Sona Tere Liye',
										'artist': 'A.R. Rahman, Shashaa Tirupati',
										'album': 'Mom',
										'duration': '5:19',
										'fileName': 'song3.mp3',
										'image' : 'song3.jpg'
									},
									{
										'name': 'Raabta',
										'artist': 'Pritam, Arijit Singh , Nikita Gandhi',
										'album': 'Raabta',
										'duration': '4:57',
										'fileName': 'song4.mp3',
										'image' : 'song4.jpg'
									},
									 {
										'name': 'Baarish',
										'artist': 'Tanishk Bagchi, Ash King & Shashaa Tirupati',
										'album': 'Half Girlfriend ',
										'duration': '4:35',
									   'fileName': 'song5.mp3',
									   'image' : 'song5.jpg'
									},
									{
										'name': 'Kudi Gujarat Di',
										'artist': 'Jasbir Jassi, Sonia Sharma, Akasa Singh, KD & Jaidev Kumar',
										'album': 'Sweetiee Weds NRI',
										'duration': '3:42',
										'fileName': 'song6.mp3',
										'image' : 'song6.jpg'
									},
									{
										'name': 'Main Tera Boyfriend',
										'artist': 'Arijit Singh, Neha Kakkar, Sourav Roy , Sohrabuddin',
										'album': 'Raabta',
										'duration': '4:36',
										'fileName': 'song7.mp3',
										'image' : 'song7.jpg'
									},
									{
										'name': 'Phir Bhi Tumko Chahunga',
										'artist': 'Arijit Singh, Mithoon , Shashaa',
										'album': 'Half Girlfriend',
										'duration': '5:51',
										'fileName': 'song8.mp3',
										'image' : 'song8.jpg'
									}]

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
								 				     function changeCurrentSongDetails(songObj) {
								 								// Code goes here
								 								 $('.current-song-image').attr('src','img/'+ songObj.image)
								 								 $('.current-song-name').text(songObj.name)
								 								 $('.current-song-album').text(songObj.album)
								 							}

								 				        function updateCurrentTime() {
								 						var song = document.querySelector('audio');
								 						var currentTime = Math.floor(song.currentTime);
								 						currentTime = fancyTimeFormat(currentTime);
								 						var duration = Math.floor(song.duration);
								 						duration = fancyTimeFormat(duration)
								 						$('.time-elapsed').text(currentTime);
								 						$('.song-duration').text(duration);
								 					}


								 					function addSongNameClickEvent(songObj,position) {
								 				    var songName = songObj.fileName; // New Variable
								 					var id = '#song' + position;
								 							$(id).click(function() {
								 							var audio = document.querySelector('audio');
								 							var currentSong = audio.src;
								 							if(currentSong.search(songName) != -1)
								 							{
								 							toggleSong();
								 							}
								 							else {
								 							audio.src = songName;
								 							toggleSong();
								 							changeCurrentSongDetails(songObj); // Function Call
								 							}
								 							});
								                         }


								 				                window.onload = function() {

								 								changeCurrentSongDetails(songs[0]);

								 					         	updateCurrentTime();
								 								setInterval(function() {
								 								updateCurrentTime();
								 								},1000);




								 								for(var i =0; i < songs.length;i++) {
								 									var obj = songs[i];
								 									var name = '#song' + (i+1);
								 									var song = $(name);
								 									song.find('.song-name').text(obj.name);
								 									song.find('.song-artist').text(obj.artist);
								 									song.find('.song-album').text(obj.album);
								 									song.find('.song-length').text(obj.duration);
								 									addSongNameClickEvent(obj,i+1);
								     }

								 								//addSongNameClickEvent(fileNames[0],1);
								 								//addSongNameClickEvent(fileNames[1],2);
								 								//addSongNameClickEvent(fileNames[2],3);
								 								//addSongNameClickEvent(fileNames[3],4);
								 								//addSongNameClickEvent(fileNames[4],5);
								 								//addSongNameClickEvent(fileNames[5],6);
								 								//addSongNameClickEvent(fileNames[6],7);

								 								//for (var i = 0; i < fileNames.length ; i++) {
								 								//addSongNameClickEvent(fileNames[i],i+1);
								 							         //}

								 									$('#songs').DataTable({
								 									paging: false
								 								});

								 		                          }


								     $('.welcome-screen button').on('click', function() {
								         var name = $('#name-input').val();
								         if (name.length > 2) {
								             var message = "Welcome, " + name;
								             $('.main .user-name').text(message);
								             $('.welcome-screen').addClass('hidden');
								             $('.main').removeClass('hidden');
								         } else {
								             $('#name-input').addClass('error');
								         }
								     });
								 						$('.play-icon').on('click', function() {
								 							toggleSong();
								 						});


								 						$('body').on('keypress', function(event) {
								 									if (event.keyCode == 32) {
								 										toggleSong();
								 									}
								 								});
