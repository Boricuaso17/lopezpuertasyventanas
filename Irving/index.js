function darkMode (){
    $("body").toggleClass("dark-css");

    var buttonTxt = $("button").html();

    if(buttonTxt === '<i class="fa-solid fa-moon"></i>') {
        $("button").html('<i class="fa-solid fa-sun"></i>');
    }
    else 
    $("button").html('<i class="fa-solid fa-moon"></i>');
}