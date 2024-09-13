
function LoadingAnimation(){
    let tl = gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})
tl.from("#line1-part1,.line h2",{
    opacity:0,
    onStart:function(){
        let countdown = document.querySelector("h5");
        let count = 0;
        let timer = setInterval(()=>{
            count++;
            console.log(count);
            countdown.innerHTML = count;
            if(count>99){
                clearInterval(timer);
            }
        },35)
        
    },
});


tl.to("#loader",{
    opacity:0,
    delay:4,
    duration:0.2,
    display:"none"
});
tl.from("#page1",{
    y:1200,
    opacity:0,
    delay:0.2,
    ease:Power4
})

tl.from("#hero1  h1,#hero2 h1, #hero3 h2,#hero4 h1",{
    y:100,
    stagger:0.2
})
tl.from("#nav",{
    opacity:0
})  

}
function MouseHover(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
}

LoadingAnimation();
MouseHover();