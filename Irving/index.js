function darkMode() {
  $("body").toggleClass("dark-css");

  var buttonTxt = $("button").html();

  if (buttonTxt === '<i class="fa-solid fa-moon"></i>') {
    $("button").html('<i class="fa-solid fa-sun"></i>');
  } else $("button").html('<i class="fa-solid fa-moon"></i>');
}

var x = 0;

function carouselPhotos(picker) {
  
  switch (picker) {
    case 'puertas':
      x++;
      if(x > 7)
        x = 1;
              var puertasSlide = document.getElementById('puertas');

              puertasSlide.setAttribute('src', './images/puertas/puerta'+ x +'.jpg');
              console.log('./images/puertas/puerta'+ x +'.jpg')
      break;
    case 'ventanas':
      break;
  }
}
