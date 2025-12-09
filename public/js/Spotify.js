console.log("wel come to Spotify")
//initilize the variable 
let songIndex=1;
let audioElement=new Audio('songs/m1.mp3');
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let myp=document.getElementById('myp');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');



let songs=[
    {songName:"Shiya Ram Nam Se Bani",filePath:"songs/m1.mp3" , coverPath:"cover/cover.jpeg"},
    {songName:"Ram Ji Padhare",filePath:"songs/m2.mp3" , coverPath:"cover/cover.jpeg"},
    {songName:"Dhanya Dhany Duwarika Wala",filePath:"songs/m3.mp3" , coverPath:"cover/cover.jpeg"},
    {songName:"Dhun Lagi",filePath:"songs/m4.mp3" , coverPath:"cover/cover.jpeg"},
    {songName:"Dil Jum Jum",filePath:"songs/m5.mp3" , coverPath:"cover/cover.jpeg"},
    {songName:"Hanuman Chalis",filePath:"songs/m6.mp3" , coverPath:"cover/cover.jpeg"}

]

songItem.forEach((element,i)=>{
    //element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;


})

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');     
        gif.style.opacity=0;  
    }
})

//Lisent to event
audioElement.addEventListener('timeupadate',()=>{
    //upadate sikebar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myp.value==progress;
    
})

myp.addEventListener('change',()=>{
    audioElement.currentTime=myp.value*audioElement.duration/100;
})

const makeAllPalys =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');    
        element.classList.remove('fa-pause');    

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPalys();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/m${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause'); 

    })
})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=9)
{
    songIndex=0;
}else
{
    songIndex+=1;
}
audioElement.src=`songs/m${songIndex}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play');
masterPlay.classList.add('fa-pause'); 

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }else
    {
        songIndex-=1;
    }
    audioElement.src=`songs/m${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 
    
    })