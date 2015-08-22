$(document).ready(function(){
    $("#load_test").click(function(){
        $("#comingSoon_body").load("http://localhost:8080/IdeaLab/application/views/SoftwareFreedomDay/index.php");
    });
    
    $("#coming-soon-head").fadeIn(1000,function(){
        $("#coming-soon-body").delay(500).fadeIn(1000);
        $(".page-footer").delay(500).fadeIn(1000);
    });
    
    $("#btn_starterKit").on("click", function(){
        $(".page-footer").fadeOut();
        $("#coming-soon-body").fadeOut(function(){
            $("#coming-soon-starterKit").fadeIn();
            $(".page-footer").css("margin-top","150px");
            $(".page-footer").toggle();
            
            $('.scrollspy').scrollSpy();
            $('#navigation_1').pushpin({ top: $('#navigation_1').offset().top });
        });
    });
    
    $(".nav-btn").on("click", function(){
        var id = $(this).attr("id");
        var kitX = null;
        var navX = null;
        
        var kitY = null;
        var navY = null;
        
        if(id == "btn_nav1_next"){
            kitX = "#starterKit_1";
            navX = "#navigation_1";
            
            kitY = "#starterKit_2";
            navY = "#navigation_2";    
        }
        else{
            kitX = "#starterKit_2";
            navX = "#navigation_2";
            
            kitY = "#starterKit_1";
            navY = "#navigation_1";
        }
        
        $(kitX).fadeOut(function(){
            var items = $(navX).find(".active");
            
            $.each(items, function(){
                $(this).removeClass("active");
            });
            
            $(kitY).fadeIn(function(){
                $(navY).pushpin({ top: $(navY).offset().top }); 
            });
            
            $('html,body').animate({scrollTop: $("#coming-soon-head-title").offset().top}, 400);
            
            return false;
        });
    
    });
    
    var options = [
//        {selector: '#howIdeaLabWorks', offset: 0 ,callback: 'Materialize.fadeInImage("#howIdeaLabWorks")'},
        {selector: '#ideationProgram', offset: 0, callback: 'Materialize.fadeInImage("#ideationProgram")'},
        {selector: '#servantProgram', offset: 0, callback: 'Materialize.fadeInImage("#servantProgram")'},
        {selector: '#volunteerProgram', offset: 0, callback: 'Materialize.fadeInImage("#volunteerProgram")'},
        {selector: '#facilitationProgram', offset: 0, callback: 'Materialize.fadeInImage("#facilitationProgram")'},
        {selector: '#capstoneProject', offset: 0, callback: 'Materialize.fadeInImage("#capstoneProject")'},
        {selector: '#whatIdeaLabExpects', offset: 0 ,callback: 'Materialize.fadeInImage("#whatIdeaLabExpects")'},
        {selector: '#fellowshipStarterKit', offset: 0 ,callback: 'Materialize.fadeInImage("#fellowshipStarterKit")'},
        {selector: '#verbTest', offset: 0, callback: 'Materialize.fadeInImage("#verbTest")'},
        {selector: '#leadershipStory', offset: 0, callback: 'Materialize.fadeInImage("#leadershipStory")'},
        {selector: '#whyHowWhat', offset: 0 ,callback: 'Materialize.fadeInImage("#whyHowWhat")'},
        {selector: '#strengthsTest', offset: 0 ,callback: 'Materialize.fadeInImage("#strengthsTest")'}
    ];
    
    Materialize.scrollFire(options);
});