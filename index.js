// let panelsCHANGE = document.querySelectorAll(".panel");

// panelsCHANGE.forEach((elements) => {

//   elements.addEventListener("click", function () {

//     removeActiveClasses();

//     elements.classList.add("active");

//   });

// });


// function removeActiveClasses() {

//   panelsCHANGE.forEach((elements) => {

//     elements.classList.remove("active");

//   });
  
// }





let panelc = document.querySelectorAll(".panel")

for (let i = 0; i < panelc.length; i++){
    

    panelc[i].addEventListener("click" , function (){
        removeClases();
        panelc[i].classList.add("active");
    } )

}


function removeClases(){
  for (let i = 0; i < panelc.length; i++){
    panelc[i].classList.remove("active");
  }
    

}
