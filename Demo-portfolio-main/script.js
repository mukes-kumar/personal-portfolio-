var typed = new Typed(".typing",{
    strings: ["Java Developer","Backend Developer","Software Developer","Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})



// console.log("Runing....")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
     document.querySelector('.sidebar').classList.toggle('sidebarGo');
     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='inline';
        document.querySelector('.cross').style.display ='none';
    }else{
        setTimeout(() =>{
            document.querySelector('.cross').style.display ='inline'
        }, 330);
        document.querySelector('.ham').style.display ='none';
    }
})
