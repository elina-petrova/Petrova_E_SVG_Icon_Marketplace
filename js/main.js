(()=> {


    console.log("some message - from JavaScript");
  
    let allSVGs = document.querySelectorAll(".img-wrapper"),
        allContainers = document.querySelectorAll(".container")
  
    function logSVG(){
        console.log(this.id);
      
    }
    function star(){
        this.classList.toggle("selected");
      
    }


    // when I do 'click' event possible (pointer-event: none;), my hover animation is
    // lost because all css was written inside svg file, that's why I use mouseenter 
    // instead of click
    allSVGs.forEach(item => item.addEventListener("mouseenter", logSVG));
    allContainers.forEach(item => item.addEventListener("click", star));

  

  
  })();