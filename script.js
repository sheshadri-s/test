const time=document.querySelector('#time')
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const firstPageAnim=()=>{
    tl=gsap.timeline();
    tl.from(".navbar",{
        y:'-10',
        opacity:0,
        // delay:-1,
        duration:2,
        ease:Expo.easeInOut
    })
    .to("#boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        delay:-1,
        duration:2,
        stagger:.3
    })
    .from(".footer",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        delay:-.8,
        duration:2
    })
    .to('#boundingelem1',{
        y:'0',
        ease:Expo.easeInOut,
        delay:-1,
        duration:2,
        stagger:.3
    }
    )
}

setInterval(()=>{
let date = new Date()
hours=date.getHours()
minutes=date.getMinutes()
seconds=date.getSeconds()
formattedHours=hours>12 ? `${hours-12}`:(hours===0 ? 12:hours )
let AMPM=formattedHours>=12 ? `AM` : `PM`
formattedminutes=minutes<10 ? `0${minutes}`: minutes;
formattedSeconds=seconds<10 ? `0${seconds}`: seconds;
date=`${formattedHours}:${formattedminutes}:${formattedSeconds} ${AMPM} `
time.innerHTML=date
},1000)
firstPageAnim()
