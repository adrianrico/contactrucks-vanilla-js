$(document).ready(function()
{
    $("#logo_container").hide()
    $("#btnSection").hide()
    $("#request_maneuver").hide()

   
    page_load_animation()
})


function page_load_animation()
{
    $("#logo_container").fadeIn(200)    
    $("#btnSection").fadeIn(200)

    /**LOGO ANIMATION */
    var logo_intro = gsap.timeline()
    logo_intro.fromTo('#logo_img',{x:-600}, { duration: 0.2,x:50})
    .fromTo('#logo_img',{x:50}, { duration: 0.2,x:0})

    gsap.to('#logo_img',{duration:0.075,y:-1,repeat:-1,yoyo:true})

    /**INTRO TEXT ANIMATION */
    var intro_text = gsap.timeline()
    intro_text.fromTo('#logo_title_container',{y:600}, { duration: 0.2,y:-50})
    .fromTo('#logo_title_container',{y:-50}, { duration: 0.2,y:0})    

    /* var text_timeline = gsap.timeline()
    text_timeline.fromTo('#btnSection_txtContainer',{x:600}, { duration: 0.2,x:-50})
    .fromTo('#btnSection_txtContainer',{x:-50}, { duration: 0.2,x:0})

    var btn_timeline = gsap.timeline()
    btn_timeline.fromTo('#request_equipment',{y:600}, { duration: 0.2,y:-50})
    .fromTo('#request_equipment',{y:-50}, { duration: 0.2,y:0})

    setTimeout(() => 
    {
        $("#request_maneuver").fadeIn()
        var btn_timeline = gsap.timeline()
        btn_timeline.fromTo('#request_maneuver',{y:600}, { duration: 0.2,y:-50})
        .fromTo('#request_maneuver',{y:-50}, { duration: 0.2,y:0})
       
    }, 50); */

    /* //Button animation only 
    var button_timeline = gsap.timeline()
    button_timeline.fromTo('#step1_2_step2_container',{y:600},{duration:0.24, y:0, delay:1})

    $('#step1_2_step2_container').on("click",function()
    {
        button_timeline.reverse()        
        logo_timeline.reverse()

        var water_unfill = gsap.timeline()
        water_unfill.fromTo('#water',{y:0, rotation:0}, { duration: 0.5,y:500})

        setTimeout(() => 
        {
            $('#step_one').hide()
            enter_step_two()
        }, 500);
    }) */
}