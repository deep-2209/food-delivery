var item_name_list = ["Fruit Salad","Cup Cake","Chinese Special","Weight Loss Special","Non-veg Salad","Healthy vegees","Rich stuff","Protien Diet","Eat it up"];
var item_price_list = ["350","300","300","200","200","200","600","100","200"];
var item_name = "";
var price_label = "";
var price = 0;
function addtocart(clicked){
	var a = item_name_list[clicked];
	var temp_price = item_price_list[clicked];
	price = price + Number(item_price_list[clicked]);
	item_name = item_name + a + "<br/>";
	price_label = price_label + temp_price + "<br/>";
	document.getElementById("item").innerHTML = item_name;
	document.getElementById("price").innerHTML = price_label;
	document.getElementById("totalprice").innerHTML = price;
	alert(item_name_list[clicked] + " added");
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {

  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("change-bg");
    $(".collapse").toggleClass("change-bg");
  });


});

$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


function validateForm() {
  var x = document.forms["myForm"]["user"].value;
  console.log("Its working");
  var y = document.forms["myForm"]["pass"].value;
  if (x != "User") {
    alert("User does not exist");
    return false;
  }
  if (y != "User123") {
    alert("Wrong Password");
    return false;
  }
}


function validate() {
  var num = document.forms["contact-form"]["telnum"].value;
  var phoneformat = /^\d{10}$/;
  if(!num.value.match(phoneformat)){
	  alert("Phone Number is Not valid!");
	  return false;
  } 
};

function empty(){
	price = 0; 
	item_name = "";
	price_label = "";
	document.getElementById("item").innerHTML = "";
	document.getElementById("price").innerHTML = "";
	document.getElementById("totalprice").innerHTML = "";
}

function validateForm1(){
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var email = document.getElementById("email");
	if(email.value.match(mailformat)){
		var cardno = /^\d{12}$/;
		var ccnumber = document.getElementById("ccno")
		if(ccnumber.value.match(cardno)){
	      		var phoneformat = /^\d{10}$/; 
			    var ph = document.getElementById("phonet");
			    if(ph.value.match(phoneformat)){  
				    if(price != 0){	
				    	var pinformat = /(^\d{6}$)/;
				    	var pin = document.getElementById("pincode");
				    	if(pin.value.match(pinformat)){
							var dt = document.getElementById("edate").value;
							if(new Date(dt).getTime() > Date.now()){                 
								return true;
							}
							else{
								alert("your card is expired");
								return false;
							}
				    	}
				    	else{
				    		alert("Invalid pincode");
				    		return false;
				    	}
				    }
				    else{	
				        alert("cart is empty"); 
				        return false; 
				    } 
				}
				else
				{
					alert("Your Mobile Number Is Not Valid."); 
        			return false; 
				}
			}
		else{
			alert("Not a valid Creditcard number!");
       		return false;
		} 
	}
    else{
		alert("You have entered an invalid email address!");
		return false;
	} 
} 
