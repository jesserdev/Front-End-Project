$( document ).ready(function() {
    console.log( "ready!" );
    $( "#searchoption" )
    .keypress(function() {
        console.log( "Handler for .keypress() called." );
        console.log ($('#searchoption').val());
      });
      
});

function myFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById('searchoption');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

   
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}