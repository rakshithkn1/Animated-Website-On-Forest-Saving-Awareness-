// document.addEventListener('mousemove',function(dets){
//     console.log(dets.y);

// })

let c=document.querySelector('html')
c.addEventListener('mousemove',(e)=>{
    crsr.style.left=e.x+'px'
   
    crsr.style.top=e.y+'px'
    crsrblurr.style.left=e.x-150+'px'
    crsrblurr.style.top=e.y-150+'px'
})
var crsr=document.querySelector('#cursor')
var crsrblurr=document.querySelector('#cursorblurr')





// let ccc=document.querySelector('body')
// ccc.addEventListener('mousemove',(dets)=>{
//     crsr.style.left=dets.x+'px'
//     crsr.style.top=dets.y+'px'

// })


gsap.to('#nav',{
    backgroundColor:'black',
    duration:0.1,
    height:'70px',
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        markers:true,
        start:'top -10%',
        end:'top -11%',
        scrub:1
        
    }
    
})

gsap.to('#main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        markers:true,
        start:'top -50%',
        end:'top -80%',
        scrub:2
    }
})

gsap.from('#bout-us-in,#about-us img',{
    y:50,
   
    opacity:0,
    duration:1
,stagger:0.4,
scrollTrigger:{
    trigger:'#about-us',
    // markers:true,
    start:'top 60%',
    end:'top 58%',
    scrub:2
}

})
gsap.from('.card',{
    scale:0.8,
    
    opacity:0,
    duration:1,

// stagger:0.4,
scrollTrigger:{
    trigger:'.card',
    // markers:true,
    start:'top 70%',
    end:'top 65%',
    scrub:2
}

})

gsap.from('#page3 p',{
scale:0.8,
opacity:0,
duration:0.2,
scrollTrigger:{
    trigger:'#page3 p',
    scroller:'body',
    start:'top 70%',
    end:'top 65%',
    scrub:2
}
})