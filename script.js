window.scrollTo(0, 0);
const mus = new Audio('song1.mp3');
//mus.play();
const songs=[
    {
    id:1,
    songName:'Shape of you <br> <div class="subtitle">Ed Sheeran</div>',
    poster: "1.png"
    },
    {
        id:2,
        songName:'Style <br> <div class="subtitle">Taylor Swift</div>',
        poster: "2.png"
    },
    {
        id:3,
        songName:'Calm Down <br> <div class="subtitle">Selena Gomez</div>',
        poster: "3.png"
    },
    {
        id:4,
        songName:'Night Changes<br> <div class="subtitle">One Direction</div>',
        poster: "4.png"
    },
    {
        id:5,
        songName:'Let her go X Husn<br> <div class="subtitle">Passenger X Anuv jain</div>',
        poster: "5.png"
    },
    {
        id:6,
        songName:'Dynamite <br> <div class="subtitle">BTS</div>',
        poster: "6.png"
    },
    {
        id:7,
        songName:'Wanna be yours <br> <div class="subtitle">Arctic Monkeys</div>',
        poster: "7.png"
    },
    {

        id:8,
        songName:'Tere bina<br> <div class="subtitle">Chinmayi</div>',
        poster: "8.png"
    },
    {
        id:9,
        songName:'Manchala <br> <div class="subtitle">Vishal-Shekhar,Shafqat Amanat Ali, Nupur Pant </div>',
        poster: "9.png"
    },
    {
        id:10,
        songName:'Haule Haule <br> <div class="subtitle">Sukhwinder singh</div>',
        poster: "10.png"
    },
    {
        id:11,
        songName:'Enchanted<br> <div class="subtitle">Taylor swift</div>',
        poster: "11.png"
    },
    {
        id:12,
        songName:'Paint the Town Red<br> <div class="subtitle">Doja Cat</div>',
        poster: "12.png"
    },
    {
        id:13,
        songName:'Melting <br> <div class="subtitle"> Hiko</div>',
        poster: "13.png"
    },
    {
        id:14,
        songName:'Cruel Summer <br> <div class="subtitle">Taylor Swift</div>',
        poster: "14.png"
    },
    {
        id:15,
        songName:'StarBoy<br> <div class="subtitle">The Weeknd</div>',
        poster: "15.png"
    },
    {
        id:16,
        songName:'Radio <br> <div class="subtitle">Lana Del Rey </div>',
        poster: "16.png"
    },
    {
        id:17,
        songName:'Positions <br> <div class="subtitle">Ariana Grande</div>',
        poster: "17.png"
    },
    {
        id:18,
        songName:'Closer <br> <div class="subtitle">The Chainsmokers</div>',
        poster: "18.png"
    },
    {
        id:19,
        songName:'Money <br> <div class="subtitle">Lisa</div>',
        poster: "19.png"
    },
    {
        id:20,
        songName:'A Thousand Years<br> <div class="subtitle">Christina Perri</div>',
        poster: "20.png"
    },
]
Array.from(document.getElementsByClassName('Item')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let search_results=document.getElementsByClassName('search_results')[0];
songs.forEach(element=>{
    const {id,songName,poster}=element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`<img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`
    ;
    search_results.appendChild(card);
})
let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent||as.innerHTML;
        if(text_value.toUpperCase().indexOf(input_value)>-1){
            items[index].style.display='flex';
        }
        else{
            items[index].style.display='none';

        }
        if(input_value==0){
            search_results.style.display='none';
        }
        else{
            search_results.style.display='';
        }
        
    }

})




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


