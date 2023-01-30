function register() {
    acnum = acnum.value
    uname = uname.value
    psw = psid.value



if (acnum in localStorage) {
    alert("User already present")
    window.location = "home.html"
}

else {
    userDetails = {acnum,uname,psw}
    localStorage.setItem(acnum, JSON.stringify(userDetails))
    alert("Account details are added")
    window.location = "home.html"
}
}

function login(){
    acnum=acnum.value
    password=pasid

    if(acnum in localStorage){
        userData=JSON.parse(localStorage.getItem(acnum))
        if(password==userData.password){
            window.location="home.html"
        }
        else{
            alert("incorrect password")
        }
        
    }
    else{
        alert("incorrect Account number")
    }
}