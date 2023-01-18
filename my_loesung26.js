"use strict";

$(document).ready(function(){  

	//+++++++++++++++++++++++++++++++++++++++++++++++++
	//box2
	$("#box div p").css({
		"background-color":"#fff",
		"margin-bottom":"2px"
	});
	//------------
	$("#box div").hide();
	//------------
	$("#box h2").click(function(){
		//$(this).next().fadeToggle();
		$(this).next().animate({"opacity":"toggle","height":"toggle"},1000);
	});
//++++++++++++++++++++++++++++++++++++++++++++++++++
//infoBereich
//parent() -> elternElement
$("#info div").hide();
$("#info h3").click(function(){
	//$(this).next().slideToggle().parent().siblings("li").find("div").slideUp();
	$(this).next().slideToggle();
	$(this).parent().siblings("li").find("div").slideUp();
		//---------
});

	
});//ende ready
