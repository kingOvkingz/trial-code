let display = document.getElementById("display");
let label = document.getElementById("label");
let admin = document.getElementById("admin");
let adminStatus = false

document.getElementById("remove").onclick = function() {
    document.getElementById("mobileView").style.display = "none" 
}

document.getElementById("1").onclick = function(){
    display.value += 1;
}
document.getElementById("2").onclick = function(){
    display.value += 2;
}
document.getElementById("3").onclick = function(){
    display.value += 3;
}
document.getElementById("4").onclick = function(){
    display.value += 4;
}
document.getElementById("5").onclick = function(){
    display.value += 5;
}
document.getElementById("6").onclick = function(){
    display.value += 6;
}
document.getElementById("7").onclick = function(){
    display.value += 7;
}
document.getElementById("8").onclick = function(){
    display.value += 8;
}
document.getElementById("9").onclick = function(){
    display.value += 9;
}

document.getElementById("0").onclick = function(){
    display.value += 0;
}

admin.onclick = function(){
    if(adminStatus == false) {
        adminStatus = true;
        console.log("admin mode: Active");
        admin.style.background = "red"
        label.innerHTML = "ADMIN MODE"
        label.style.color = "red"
    }
    else{
        adminStatus = false;
        console.log("admin mode: Inactive");
        admin.style.background = "white"
        label.innerHTML = ""
    }
}

document.getElementById("enter").onclick = function(){
    if(adminStatus == true){
        if(display.value == 8080){
            label.innerHTML = "Wecome back Kelvin"
            label.style.color = "blue"
            console.log("AdminPassword: correct")
        }
        else{
            label.innerHTML = "Wrong Password"
            label.style.color = "red"
            label.className = "wrong"
            console.log("AdminPassword: incorrect")
        }
        display.value = "";
    }
    else{
        if(display.value == 1421){
            label.innerHTML = "Correct Password";
            label.style.color = "green"
            console.log("correct password")
            setTimeout(() => {
                label.innerHTML = "...3"
                setTimeout(() => {
                    label.innerHTML = "...2"
                    setTimeout(() => {
                        label.innerHTML = "...1"
                        setTimeout(() => {
                            document.getElementById("user").click()
                        },1000)
                    },1000)
                },1000)
            },1000)
        }
        else{
            label.innerHTML = "Wrong Password"
            label.style.color = "red"
            label.className = "wrong"
            console.log("wrong password")
        }
        display.value = "";
    }
}