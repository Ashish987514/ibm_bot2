
var cookie = document.cookie;

		
setTimeout(function () {
	
	//alert("ww");
	if (cookie.indexOf('visited=', 0) == -1) {
    //var expiration = new Date();
	var date = new Date();
	
	//alert(date);
	date.setTime(date.getTime()+(60*
	00));
	
   var expiration = "; expires="+date.toGMTString();

    //expiration.setDate(expiration.getDate()+1);
	//alert(expiration);
    document.cookie = 'visited=1;' + expiration + ';path=/';
    $(".cover").show()
	
	}
},2000);



var cookie = document.cookie;
setTimeout(

    function()

    {
		
		if (cookie.indexOf('visited=', 0) == -1) {
    //var expiration = new Date();
	var date = new Date();
	
	//alert(date);
	date.setTime(date.getTime()+(24*60*60*1000));
	
   var expiration = "; expires="+date.toGMTString();

    //expiration.setDate(expiration.getDate()+1);
	//alert(expiration);
    document.cookie = 'visited=1;' + expiration + ';path=/';
    document.getElementById('popup').style.display = 'block';   
 } 
 
	}

,2000);

//window.onload = show_popup;


function close()
{
 $("#popup").hide("slow");  
$("#overlay").hide("slow");
	}