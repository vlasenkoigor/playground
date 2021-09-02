
import {Howl, Howler} from 'howler';
let audio = null;

const load = ()=>{
     audio = new Howl({
        src: 'popup.mp3',
        autoplay : false
    })
        .on('load', () => {
            console.log(`+++ loaded`);
        })
        .on('loaderror', (id, message) => {
            console.log(`+++ error -> ${message}`);
        });
}

const play = ()=>{
    audio.play()
}


/////////
load()

document.querySelector('#btn').addEventListener('click', ()=>{
    play();
})

