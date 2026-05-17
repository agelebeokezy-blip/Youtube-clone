// header2 scroll js

const prevBtn = document.querySelector('.lftarw');
const nextBtn = document.querySelector('.fa-angle-right');
const container = document.querySelector('.header2')
const overlay = document.querySelector('.overlay');

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -100, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: 100, behavior: 'smooth' });
});

container.addEventListener('scroll', () =>{
  
  if (container.scrollLeft==0) {
    prevBtn.style.display = 'none';
  } 
  else {
    prevBtn.style.display = 'block';
  }

    // At the end
  const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  
  if(atEnd){
    nextBtn.style.display='none'
  }
  else{
    nextBtn.style.display="block"
  }
})


// left button click function 

    const button = document.querySelector('.fa-bars');
    const element = document.querySelector('.dbar');
    const element1 = document.querySelector('.hbar');
    const main = document.querySelector('.video-section');
    const left = document.querySelector('.left-section');
    const head2 = document.querySelector('.header2');
    const grid = document.querySelector('.main-div');
    const grid1 = document.querySelectorAll('.main-div')[1];
    const short = document.querySelector('.short-box');
    const dots = document.querySelectorAll('.profile-photo .fa-ellipsis-vertical')
    const hhome = document.querySelector('.dhome')
    const shorth =document.querySelector('.short-header')
    const rburger = document.querySelector('.rmenulogo .fa-bars')
    const body = document.querySelector("body")


rburger.addEventListener("click", () => {
      left.classList.toggle("active");
      overlay.classList.add('active');

  // Disable scrolling
  document.body.style.overflow = 'hidden';
  
  });

    
    button.addEventListener("click", () => {

      
      if (element.style.display === 'none' || element.classList.contains('hidden')) {
        element.style.display = 'block'; 
        element1.style.display = 'none';   
        main.style.marginLeft = '0em'; 
        left.style.width = '4.2em';
        left.style.marginTop = '0.6em'
        head2.style.marginLeft = '5.2em';
        head2.style.width = "94%"
        grid.style.gridTemplateColumns = 'repeat(3, 30vw)';
        grid1.style.gridTemplateColumns = 'repeat(3, 30vw)';
        short.style.gridTemplateColumns = 'repeat(5, 17.3vw)';
        nextBtn.style.marginLeft ="116rem"
        prevBtn.style.marginLeft ="5rem"
        grid1.style.marginLeft = "5.2em"
        grid.style.marginLeft = "5.2em"
        short.style.marginLeft = "5.2em"
        shorth.style.marginLeft = "5.2em"
        hhome.style.display = "block"
        hhome.style.display = "grid"
        hhome.style.gap = "1em"
        dots.forEach (dot=> {
          dot.style.marginLeft = '4em'
        });
      } 
      
      else {
        element.style.display = 'none'; 
        element1.style.display ='block';   
        main.style.marginLeft = '0em'; 
        left.style.width = '15em'; 
        left.style.marginTop = '-4em'
        left.style.paddingTop = '0em'
        head2.style.marginLeft = '16em';
        head2.style.width = "85.5%"
        grid.style.gridTemplateColumns = 'repeat(3, 27vw)';
        grid.style.marginLeft = "16em"
        grid1.style.marginLeft = "16em"
        shorth.style.marginLeft = "16em"
        grid1.style.gridTemplateColumns = 'repeat(3, 27vw)';
        short.style.gridTemplateColumns = 'repeat(5, 15.5vw)';
        short.style.marginLeft = "16em"
        nextBtn.style.marginLeft ="116.7rem"
        prevBtn.style.marginLeft ="15.9rem"
        hhome.style.display = "none"
        dots.forEach (dot=> {
          dot.style.marginLeft = '1em'
        });
      }
    });

   

    

    // main video hover to play

     const videos = document.querySelectorAll('.vvideo');
     const vvideos = document.querySelectorAll('.vvvideo');
    
      videos.forEach(video => video.addEventListener("mouseenter", () =>{

        video.play()
        }))
      
        videos.forEach(video => video.addEventListener("mouseleave", () =>{

        video.pause()
        video.currentTime = 0;
        }))

// shorts hover to play

       vvideos.forEach(video => video.addEventListener("mouseenter", () => {
        
        video.play()
        }))

         vvideos.forEach(video => video.addEventListener("mouseleave", () => {
        
        video.pause()
        video.currentTime = 0;
        }))


document.querySelector(".fa-solid.fa-circle-user.ctheme").addEventListener("click", (e)=>{
  alert("hbhjhgvjhjbj")
  console.log("JHbhbn")
  document.querySelector("body").classList.toggle("theme_mode")
})