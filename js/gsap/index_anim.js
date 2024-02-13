$(document).ready(function()
{
    $("#logo_container").hide()
    $("#main_content").hide()
    $(".btn").hide()
    
   
    page_load_animation()
})


function page_load_animation()
{
    $("#logo_container").fadeIn(200)    
    $("#main_content").fadeIn(200)   
    $("#equipment_btn").hide() 
    
    /**LOGO ANIMATION */
    var logo_intro = gsap.timeline()
    logo_intro.fromTo('#logo_img',{y:-600}, { duration: 0.2,y:50})
    .fromTo('#logo_img',{y:50}, { duration: 0.2,y:0})

    //gsap.to("#logo_img", {scale: 1.5, duration: 1.5});

    /**INTRO TEXT ANIMATION */
    var intro_text = gsap.timeline()
    intro_text.fromTo('#logo_title_container',{y:600}, { duration: 0.2,y:-50})
    .fromTo('#logo_title_container',{y:-50}, { duration: 0.2,y:0})    

    var btn = gsap.timeline()
    btn.fromTo('.btn_container',{y:600}, { duration: 0.2,y:-50})
    .fromTo('.btn_container',{y:-50}, { duration: 0.2,y:0})    

    /**BUTTONS ANIMATION */
    setTimeout(() => 
    {         
        $("#maneuver_btn").fadeIn(200)         

        var btn1 = gsap.timeline()
        btn1.fromTo('#maneuver_btn',{y:600}, { duration: 0.2,y:-50})
        .fromTo('#maneuver_btn',{y:-50}, { duration: 0.2,y:0})
        
        setTimeout(() => 
        {
            $("#equipment_btn").fadeIn(200)

            var btn2 = gsap.timeline()
            btn2.fromTo('#equipment_btn',{y:600}, { duration: 0.2,y:-50})
            .fromTo('#equipment_btn',{y:-50}, { duration: 0.2,y:0})
        },150);   
        
    },150);
}