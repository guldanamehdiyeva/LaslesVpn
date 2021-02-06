/*header sticky*/
$(window).scroll(e =>{
    $(".header").toggleClass("sticky",window.scrollY > 0)
})


/*data animation*/
AOS.init();

/*menu*/
$(".fa-align-right").click(e =>{
    $(".menu").css("left","0");
})
$(".fa-times").click(e =>{
    $(".menu").css("left","-100%");
})
$(".fa-align-right").click(e =>{
    $(".backgroundmenu").css("left","0");
})
$(".fa-times").click(e =>{
    $(".backgroundmenu").css("left","-100%");
})


/*counter-up*/
$(document).ready(e => {
    $('.num').counterUp({
        delay: 10,
        time: 1000,
        beginAt:0
    });
});


/*form*/
$('.mysignup-form').parsley();


$(".first-btn").click(e =>{
    $(".signupform").css("top","50%")
    $(".backgroundmenu").css("left","0")
})

$('.mysignup-form').on('submit', e => {
    
        $(".signupform").css("top","-100%");
        $(".window").css("top","50%");
    
})


$(".closewindow").click(e =>{
    $(".window").css("top","-100%")
})



$(".closewindow").click(e =>{
    $(".backgroundmenu").css("left","-100%")
})


$('.mysignin-form').parsley();

$(".signin").click(e =>{
    $(".signinform").css("top","50%")
    $(".backgroundmenu").css("left","0")
})

$(".four-btn").click(e =>{
    $(".signinform").css("top","-100%")
    $(".backgroundmenu").css("left","-100%")
})

$(".closeall").click(e=>{
    $(".signupform").css("top","-100%")
    $(".signinform").css("top","-100%")
    $(".backgroundmenu").css("left","-100%")
})



/*pricing*/
$(".plus").click(e=>{
    $(".plus").css("display","none")
    $(".minus").css("display","inline-block")
    $(".plan").css("display","block");
});

$(".minus").click(e=>{
    $(".plus").css("display","inline-block")
    $(".minus").css("display","none")
    $(".plan").css("display","none");
});

$(".plus1").click(e=>{
    $(".plus1").css("display","none")
    $(".minus1").css("display","inline-block")
    $(".plan1").css("display","block");
});

$(".minus1").click(e=>{
    $(".plus1").css("display","inline-block")
    $(".minus1").css("display","none")
    $(".plan1").css("display","none");
});

$(".plus2").click(e=>{
    $(".plus2").css("display","none")
    $(".minus2").css("display","inline-block")
    $(".plan2").css("display","block");
});

$(".minus2").click(e=>{
    $(".plus2").css("display","inline-block")
    $(".minus2").css("display","none")
    $(".plan2").css("display","none");
});


/*slider*/
var swiper= new Swiper("#slider",{
    
    
    autoplay:{
        delay:1500,
        disableOnInteraction:false
    },
    
    loop:true

})

var swiper= new Swiper("#slider2",{
    slidesPerView: 2.5,
    spaceBetween: 5,
    
    breakpoints:{
        665: {
            slidesPerView: 1.7,
        },

        767: {
            slidesPerView: 1,
        },
    },


    pagination:{
        el:".swiper-pagination",
        clickable:true,
        type: "bullets",
        bulletClass: "swiper-pagination-bullets",
        bulletActiveClass: "swiper-pagination-bullets-active"
        
    },
    
    autoplay:{
        delay:1500,
        disableOnInteraction:false
    },

    width:400,
    loop:true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})


/*tooltip*/
$('.facebook').tipso({
    content  : 'Facebook',
    animationIn  : 'flipInX',
    animationOut : 'flipOutX',
    background : '#F53838',
	color : '#ffffff',
	width : 120,
});

$('.twitter').tipso({
    content  : 'Twitter',
    animationIn  : 'flipInX',
    animationOut : 'flipOutX',
    background : '#F53838',
	color : '#ffffff',
	width : 120,
});

$('.instagram').tipso({
    content  : 'Instagram',
    animationIn  : 'flipInX',
    animationOut : 'flipOutX',
    background : '#F53838',
	color : '#ffffff',
    width : 120,
    tooltipHover: true,
    
});


    
       
    
/*arrow-up*/
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.arrow-up').fadeIn();
        }
        else{
            $('.arrow-up').fadeOut();
        }
    });

    $('.arrow-up').click(e=>{
        $('html,body').animate({scrollTop:0},800);
    })
})



