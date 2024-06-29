let music_data = [
    {  
     "music_id":101,
     "type":"Instrumental",
     "name":"Without You",
     "artist":'Best Artist',
     "srcUrl": './assets/audio/music1.mp3',
     "imageUrl": "./assets/images/music1.jpg"
     },
    {  
     "music_id":102,
     "type":"Instrumental",
     "name":"Without You",
     "artist":'Best Artist',
     "srcUrl": './assets/audio/music1.mp3',
     "imageUrl": "./assets/images/music1.jpg"
     },
    {  
     "music_id":103,
     "type":"Instrumental",
     "name":"Without You",
     "artist":'Best Artist',
     "srcUrl": './assets/audio/music1.mp3',
     "imageUrl": "./assets/images/music1.jpg"
     },
    {  
     "music_id":104,
     "type":"Instrumental",
     "name":"Without You",
     "artist":'Best Artist',
     "srcUrl": './assets/audio/music1.mp3',
     "imageUrl": "./assets/images/music1.jpg"
     },
    {  
     "music_id":105,
     "type":"Instrumental",
     "name":"Without You",
     "artist":'Best Artist',
     "srcUrl": './assets/audio/music1.mp3',
     "imageUrl": "./assets/images/music1.jpg"
     },
]

let currentlyPlayingIndex = 0
let current_music_number = document.querySelector('.current-music-number')
let total_songs_element = document.querySelector('.total-songs')
let music_type = document.querySelector('.music-type')
let music_name = document.querySelector('.music-name')
let music_artist = document.querySelector('.music-artist')
let music_image = document.querySelector('.music-image')
let previous_btn = document.querySelector('.previous-btn')
let play_btn = document.querySelector('.play-btn')
let pause_btn = document.querySelector('.pause-btn')
let next_btn = document.querySelector('.next-btn')
let musicAudioElement = document.querySelector('#music')


function onLoad() {
    loadCurrentMusic()
    handleMusicControls()
}


function loadCurrentMusic() {
    secureCurrentlyPlayingIndex()
    pause_btn.style.display = 'none'
    play_btn.style.display = 'inline'
    current_music_number.innerText = currentlyPlayingIndex+1
    total_songs_element.innerText = music_data.length
    music_type.innerText = music_data[currentlyPlayingIndex].type
    music_name.innerText = music_data[currentlyPlayingIndex].name
    music_artist.innerText = music_data[currentlyPlayingIndex].artist
    music_image.setAttribute('src', music_data[currentlyPlayingIndex].imageUrl)
    musicAudioElement.setAttribute('src',music_data[currentlyPlayingIndex].srcUrl)
}

function handleMusicControls(){
    play_btn.addEventListener('click',function() {
        this.style.display = 'none'
        pause_btn.style.display = 'inline'
        musicAudioElement.play()
    })

    pause_btn.addEventListener('click',function() {
        this.style.display = 'none'
        play_btn.style.display = 'inline'
        musicAudioElement.pause()
    })
    
    previous_btn.addEventListener('click',function() {
        currentlyPlayingIndex--
        loadCurrentMusic()
    })
    
    
    next_btn.addEventListener('click',function() {
        currentlyPlayingIndex++
        loadCurrentMusic()
    })
}


function secureCurrentlyPlayingIndex() {
    if(currentlyPlayingIndex>=music_data.length || currentlyPlayingIndex<0) {
        currentlyPlayingIndex = 0
    }
}