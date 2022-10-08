console.log("spotify clone")


let audioElement= new Audio()

let play=document.querySelector("#play")
let pause=document.querySelector("#pause")
let forward=document.querySelector("#forward")
let rewind=document.querySelector("#rewind")
let seekBar=document.querySelector("#myProgressBar")
let songsList=[
{name:"NCS song 1", songImage:"Assets/covers/1.jpg",source:"Assets/songs/1.mp3"},
{name:"NCS song 2", songImage:"Assets/covers/2.jpg",source:"Assets/songs/2.mp3"},
{name:"NCS song 3", songImage:"Assets/covers/3.jpg",source:"Assets/songs/3.mp3"},
{name:"NCS song 4", songImage:"Assets/covers/4.jpg",source:"Assets/songs/4.mp3"},
{name:"NCS song 5", songImage:"Assets/covers/5.jpg",source:"Assets/songs/5.mp3"},
{name:"NCS song 6", songImage:"Assets/covers/6.jpg",source:"Assets/songs/6.mp3"},
{name:"NCS song 7", songImage:"Assets/covers/7.jpg",source:"Assets/songs/7.mp3"},
{name:"NCS song 8", songImage:"Assets/covers/8.jpg",source:"Assets/songs/8.mp3"}

]

forward.addEventListener("click",()=>{
    audioElement.currentTime+=2;
    
})

rewind.addEventListener("click",()=>{
    audioElement.currentTime-=2;
    seekBar.value=time
})

seekBar.addEventListener("change",()=>{
audioElement.currentTime=((seekBar.value/100)*audioElement.duration)
})
play.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
    }
    else if(seekBar.value==100){
        audioElement.pause()
        seekBar.value=0;
    }
})
pause.addEventListener("click",()=>{
    audioElement.pause()
    gif.style.opacity=0;
})
forward.addEventListener("click",()=>{
    audioElement.forward()
})



audioElement.addEventListener("timeupdate",()=>{
    let time = ((audioElement.currentTime/audioElement.duration)*100)
    seekBar.value=time
})

let songs=Array.from(document.getElementsByClassName("songItem"))

for  (let element in songs){
    // element.getElementsByClassName("coverSong")[0].src=songsList[element].songImage

    // console.log(element)
    // element.getElementsById("songss")[0].addEventListener("click",()=>{
    //     // audioElement.src=songs[index].source
    //     console.log("clicked")
    // })
    
    
(songs[element].querySelector("#songss").addEventListener('click',()=>{
    audioElement.src=songsList[element].source
    audioElement.play()
    let Sname=document.getElementById("songName")
    let gif=document.getElementById("gif")
    gif.style.opacity=1
    Sname.innerText=songsList[element].name


    
}))
}


