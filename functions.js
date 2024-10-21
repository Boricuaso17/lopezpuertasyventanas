// function darkMode() {
//   $("body").toggleClass("dark-css");

//   var buttonTxt = $("button").html();

//   if (buttonTxt === '<i className="fa-solid fa-moon"></i>') {
//     $("button").html('<i className="fa-solid fa-sun"></i>');
//   } else $("button").html('<i className="fa-solid fa-moon"></i>');
// }

var x = 0;

function carouselPhotos(picker) {
  
  switch (picker) {
    case 'inicio':
      x++;
      if(x > 7)
        x = 1;
              var puertasSlide = document.getElementById('puertas');

              puertasSlide.setAttribute('src', './images/homePage/homePhoto'+ x +'.jpg');
              console.log('./images/homePage/homePhoto'+ x +'.jpg')
      break;
      
    case 'puertas':
      x++;
      if(x > 7)
        x = 1;
              var puertasSlide = document.getElementById('puertas');

              puertasSlide.setAttribute('src', './images/puertas/puerta'+ x +'.jpg');
              console.log('./images/puertas/puerta'+ x +'.jpg')
      break;

    case 'ventanas':
      x++;
      if(x > 7)
        x = 1;
              var puertasSlide = document.getElementById('puertas');

              puertasSlide.setAttribute('src', './images/ventanas/ventana'+ x +'.jpg');
              console.log('./images/ventanas/ventana'+ x +'.jpg')
      break;
  }
}

function inputStructure() {
  var name = $('name').text();
  var lname = $('lname').text();
  var lname2 = $('lname2').text();

  

}
