
const screen1 = document.querySelector(".screen1") 
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function(e) { 
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetclick() 
  }
  })

  function handleTryClick(event) {
    
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    screen2.style.maxHeight = "100%";
    

    screen2.classList.add("show");

  }

  function handleResetClick(event) {
    screen2.classList.add("hide");
    screen1.classList.remove("hide");
   
  }

