const mus = new Audio('song1.mp3');
//mus.play();
const songs=[
    {
    id:1,
    songName:'Melting <br> <div class="subtitle">Hiko</div>',
    poster: "1.png"
    },
    {
        id:2,
        songName:'Shape of you <br> <div class="subtitle">Ed sheeran</div>',
        poster: "2.png"
    },
    {
        id:3,
        songName:'Blank Space <br> <div class="subtitle">Taylor Swift</div>',
        poster: "1.png"
    },
    {
        id:4,
        songName:'Night Changes<br> <div class="subtitle">One Direction</div>',
        poster: "1.png"
    },
    {
        id:5,
        songName:'Attention <br> <div class="subtitle">Charlie Puth</div>',
        poster: "1.png"
    },
    {
        id:6,
        songName:'Butter <br> <div class="subtitle">BTS</div>',
        poster: "1.png"
    },
    {
        id:7,
        songName:'Calm Down <br> <div class="subtitle">Selena Gomez</div>',
        poster: "1.png"
    },
    {

        id:8,
        songName:'Feather<br> <div class="subtitle">Sabrina Carpenter</div>',
        poster: "1.png"
    },
    {
        id:9,
        songName:'Positions <br> <div class="subtitle">Ariana Grande</div>',
        poster: "1.png"
    },
    {
        id:10,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:11,
        songName:'Wanna<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:12,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:13,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:14,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:15,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:16,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:17,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:18,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:19,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:20,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
    {
        id:21,
        songName:'Wanna be yours<br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "1.png"
    },
]
Array.from(document.getElementsByClassName('Item')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterplay=document.getElementById('masterplay');
let pli=document.getElementById('pli');
masterplay.addEventListener('click',()=>{
    if ( mus.paused || mus.currentTime<=0)
    {
        mus.play();
        pli.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else
    {
        mus.pause();
        pli.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }

});
const makePlay=()=>{
    Array.from(document.getElementsByClassName('playitplay')).forEach((event)=>{
        event.classList.remove('bi-pause-circle');
        event.classList.add('bi-play-circle');
    })
}

const back=()=>{
    Array.from(document.getElementsByClassName('Item')).forEach((event)=>{
        event.style.background = 'rgb(174, 129, 129,.0)';
    })
}



let index=0;
let posterplay=document.getElementById('posterplay');
let downloadm=document.getElementById('downloadm');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playitplay')).forEach((element) => {
    element.addEventListener('click', (event) => {
        index= event.target.id;
        mus.src=`song${index}.mp3`;
        posterplay.src=`${index}.png`;
        mus.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        downloadm.href=`song${index}.mp3`;
        let songTitles=songs.filter((ele)=>{
            return ele.id==index;
        });
        songTitles.forEach(els=>{
            let {songName}=els;
            title.innerHTML=songName;
            downloadm.setAttribute('download',songName);
        });
        back();
        Array.from(document.getElementsByClassName('Item'))[index-1].style.background='rgb(174, 129, 129,.1)';
        makePlay();
        event.target.classList.remove('bi-play-circle');
        event.target.classList.add('bi-pause-circle');
        pli.classList.add('active1');
    });

});

let cur=document.getElementById('cur');
let end=document.getElementById('end');
let line=document.getElementById('line');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

mus.addEventListener('timeupdate',()=>{
    let mus_cur=mus.currentTime;
    let mud_dur=mus.duration;
    let min1=Math.floor(mud_dur/60);
    let sec1=Math.floor(mud_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    
    end.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(mus_cur/60);
    let sec2=Math.floor(mus_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    
    cur.innerText=`${min2}:${sec2}`;

    let progressBar=parseInt((mus_cur/mud_dur)*100);
    line.value = progressBar;
    
    let linebar=line.value;
    bar2.style.width =`${linebar}%`;
    dot.style.left=`${linebar}%`;
})
line.addEventListener('change',()=>{
    mus.currentTime=line.value*mus.duration/100;
});
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let volbar=document.getElementsByClassName('volbar')[0];
let voldot=document.getElementById('voldot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');

    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a=vol.value;
    volbar.style.width=`${vol_a}%`;
    voldot.style.left=`${vol_a}%`;
    mus.volume=vol_a/100;
});
let bak=document.getElementById('bak');
let next=document.getElementById('next');

bak.addEventListener('click',()=>{
        index-=1;
        if (index<1){
            index=Array.from(document.getElementsByClassName('Item')).length;
        }
        mus.src=`song${index}.mp3`;
        posterplay.src=`${index}.png`;
        mus.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((ele)=>{
            return ele.id==index;
        });
        songTitles.forEach(els=>{
            let {songName}=els;
            title.innerHTML=songName;
        });
        back();
        Array.from(document.getElementsByClassName('Item'))[index-1].style.background='rgb(174, 129, 129,.1)';
        makePlay();
        pli.classList.add('active1');
    })
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('Item')).length){
        index=1;
    }
    mus.src=`song${index}.mp3`;
        posterplay.src=`${index}.png`;
        mus.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((ele)=>{
            return ele.id==index;
        });
        songTitles.forEach(els=>{
            let {songName}=els;
            title.innerHTML=songName;
        });
        back();
        Array.from(document.getElementsByClassName('Item'))[index-1].style.background='rgb(174, 129, 129,.1)';
        makePlay();
        pli.classList.add('active1');

})











let pleft=document.getElementById('pleft');
let pright=document.getElementById('pright');
let psongs=document.getElementsByClassName('psongs')[0];
let aleft=document.getElementById('aleft');
let aright=document.getElementById('aright');
let it=document.getElementsByClassName('it')[0];
pright.addEventListener('click',()=>{
    psongs.scrollLeft+=330;
   } );
pleft.addEventListener('click',()=>{
    psongs.scrollLeft-=330;
   } );
aright.addEventListener('click',()=>{
    it.scrollLeft+=330;
   } );
aleft.addEventListener('click',()=>{
    it.scrollLeft-=330;
   } );
   