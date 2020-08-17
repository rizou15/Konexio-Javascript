var num = 8;

function passwordGen(num) {

    var password = "";
    
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 

    var randomly = "";

    randomly += password[Math.floor(Math.random() * (8 - 0 +1 )) + 0 ];

    for (var i = 0; i < password.length; i++) {

    }

    return randomly;

}


console.log(passwordGen(num));

