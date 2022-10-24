$('.interface').on('click', function(){
    // console.log('działa');
    // console.log(this);
    console.log($(this).attr("class"));
    // console.log(this.className);

    if ($(this).hasClass("orange")) {
        console.log("prawda pomarańczowy");
        // $('body').toggleClass("orange");
        // $('body').css("background-color", "orange");
        $('body').attr("class","orange");
        // $('body').css({
        //     "background-color": "orange"  
        // })
        // $('p').css({
        //     "font-size": "130px"
        // })
    }
    if ($(this).hasClass("green")) {
        console.log("prawda zielony");
        // $('body').css({
        //     "background-color": "green"  
        // })
        $('body').attr("class","green");
    }
    if($(this).hasClass("increase")) {
        console.log("pradwa");
        $('.text').animate({
            "font-size": "+=2"
        },500)
    }
    if($(this).hasClass("move")) {
        console.log("pradwa");
        $('.text').animate({
            "left": "+=15px",
            "letter-sapcing": "+=2px"
        },500)
    }
})

    
