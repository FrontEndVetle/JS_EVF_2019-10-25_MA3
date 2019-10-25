//Use RegEx to validate form
function validate()
{

var first = document.form1.fName.value;
var surname = document.form1.sName.value;    
if (first === "" || surname === "")
    {
    alert("Please input First name and Surname");
    return false;
    }
else 
    {
   alert('Thank you!');
    return true; 
    }

}

function formRegex(){
    var phoneNumber = document.getElementById("phoneNumb").value;
    var email = document.getElementById("email").value;
    var phoneRGEX = /^[0-9]{8}$/;
    var emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    var emailResult = emailRGEX.test(email);

    if (phoneResult === false) { 
        alert('Please enter a valid number')
        return false;
     }
    if (emailResult === false) {
        alert('That email is not valid')
        return false;
    }
    else{ 
        return true;
         }
    }



//Console.log out elements in JSON file

	var  video = [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]

    

    
for (var i = 0; i < video.length; i++){
        console.log(video[i]);
    }
     
     