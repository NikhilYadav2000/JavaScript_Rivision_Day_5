// there might be a chance when the page is still loading and we performed a task, in that case use this

// 3 types of selector
// element, id, class selector

$(document).ready(function () {
  console.log("We are using JQuery");
  // $('selector').action()
//   $("p").click(function () {
    // console.log("U clicked on p",this);
    // $(this).hide();
//   });
//   $('#sec').click();
// $('.th').click(); // we are calling the function automatically

// $('*').click(); 
// $('p:first').click();
//   $('p:first').hover(function(){
//     console.log("You came!!!",this);
//   },
//   function(){
//     console.log("You left!!!",this);
//   });
    // $('p').on(
    //     {
    //         click:function(){
    //             console.log("You Clicked",this);
    //         },
    //         mouseleave:function(){
    //             console.log("Mouse Leave",this);
    //         }
    //     })

    // $('#wiki').hide(1000,function(){
    //     console.log("Hidden"); // after referesh it will be hidden in a sec
    // })
    // $('#wiki').show(1000,function(){
    //     console.log("Hidden"); // after referesh it will be shown in a sec
    // })

    // $("#bt").click(function(){
    //     $("#wiki").toggle();
    // })

        // $("#wiki").animate({opacity:0.3,height:'150px'},"fast");
        // $("#wiki").animate({opacity:0.3,height:'150px'},1000); // happens simulataneosuly
        // $("#wiki").animate({opacity:0.3},1000);
        // $("#wiki").animate({height:'150px'},1000); // one after the other
        // console.log($('#wiki').text("I m Nikhil")); // This changes the text inside the div
        // console.log($('html').text("I m Nikhil")); // changes the entire html 
    //    $('#ta').val(); // gives value inside ta 
    //    $('#ta').val('a'); // changes value inside ta 
    //    $('#ta').empty(); // empties value inside ta 
    // $("#wiki").text('av'); // changes value
    // $("#wiki").remove(); // removes 
    // $("#wiki").addClass("abc"); // adds class look in elements beside console
    // $("#wiki").removeClass("abc"); // removes class look in elements beside console
    // $("#wiki").toggleClass("abc"); // toggles
    // $("#wiki").css("background-color","red"); 

    // $.get('https://code.jquery.com/jquery-3.3.1.js',function(data,status){alert(data)}) // data pops up
    // $.get('https://code.jquery.com/jquery-3.3.1.js',function(data,status){alert(status)}) // status that success or not pops up
    $.post('https://code.jquery.com/jquery-3.3.1.js',{name:'Nikhil',age:'23'},function(data,status){alert(status)});




});

