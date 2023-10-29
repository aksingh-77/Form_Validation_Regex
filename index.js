

let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessages = document.querySelectorAll(".empty-field");
let showPwdButtton = document.querySelector(".btn");

let firstName, lastName, email, password;

//This are variable to store the input elements to add class with border red property in it
let fnTarget, lnTarget, emailTarget, pwdTarget;

//This are the flags we will use to check if the all the regex conditon is passed than redirect to success page 
let fnFlag, lnFlag, eFlag, pFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//                     digit    charcter        lowercase   uppercase   mimimum 8, maximum any
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//to add class with display none property in element
for(let errorMessage of errorMessages){
    //console.log(errorMessage)
    errorMessage.classList.add("d-none");
}

for(let emptyfieldMessage of emptyfieldMessages){
    console.log(emptyfieldMessage)
    emptyfieldMessage.classList.add("d-none");

}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();

    //here we are fetching the element on which event had happened
    field = event.target.dataset.key;

    //we used switch case as per the use case this was better option
    switch (field){
        case "firstName":
            //it fetched the value from the element on which event had happened.
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        //switch case is incomplete w/o default case
        default :
            firstName = lastName = email = password = "";
            break;
    }
})

//--------------------------------------------------------------------------------//
// event listener for the submitbutton action
submitButton.addEventListener("click", (event) =>{

    event.preventDefault();
    
    // test case for the first name
    if(firstName){
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            emptyfieldMessages[0].classList.add("d-none");
            errorMessages[0].classList.remove("d-none"); 
            fnFlag = false;
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            emptyfieldMessages[0].classList.add("d-none");
            fnFlag = true;
        }
    }
    else{
        //REason for commenting this is if we have not typed anything in input field than the event is not captured and fnTarget is empty
        //then we can't access classList for empty object whose value will be undefined
        //fnTarget.classList.add("error");
        errorMessages[0].classList.add("d-none");
        emptyfieldMessages[0].classList.remove("d-none");
        fnFlag=false;
    }
    //----------------------------------------------------------------------------------//


    //--------------------------------------------------------------------------------//
    //test case for the last name
    if(lastName){
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error")
            emptyfieldMessages[1].classList.add("d-none");
            errorMessages[1].classList.remove("d-none");
            lnFlag = false;
        }
        else{
            lnTarget.classList.remove("error")
            errorMessages[1].classList.add("d-none")
            emptyfieldMessages[1].classList.add("d-none")
            lnFlag = true;
        }
    }
    else{
        //REason for commenting this is if we have not typed anything in input field than the event is not captured and fnTarget is empty
        //then we can't access classList for empty object whose value will be undefined
        //lnTarget.classList.add("error");
        errorMessages[1].classList.add("d-none");
        emptyfieldMessages[1].classList.remove("d-none");
        lnFlag = false;
    }
    //-----------------------------------------------------------------------------//



    //-------------------------------------------------------------------------------//
    //test case for the email
    if(email){
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            emptyfieldMessages[2].classList.add("d-none");
            errorMessages[2].classList.remove("d-none");
            eFlag = false;
        }
        else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emptyfieldMessages[2].classList.add("d-none");
            eFlag = true;
        }
    }
    else{
        //emailTarget.classList.add("error")
        errorMessages[2].classList.add("d-none");
        emptyfieldMessages[2].classList.remove("d-none");
        eFlag = false;
    }
    //-----------------------------------------------------------------------------//


    //-----------------------------------------------------------------------------//
    //test case for password
    if(password){
        if(!passwordRegex.test(password)){
            pwdTarget.classList.add("error");
            emptyfieldMessages[3].classList.add("d-none");
            errorMessages[3].classList.remove("d-none");
            pFlag = false;
        }
        else{
            pwdTarget.classList.remove("error")
            errorMessages[3].classList.add("d-none")
            emptyfieldMessages[3].classList.add("d-none")
            pFlag = true;
        }
    }
    else{
        //pwdTarget.classList.add("error");
        errorMessages[3].classList.add("d-none");
        emptyfieldMessages[3].classList.remove("d-none");
        pFlag = false;
    }
    //-----------------------------------------------------------------------------//

    if(fnFlag && lnFlag && eFlag && pFlag){
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget = "";
        window.location.href = "/success.html";
    }


    
})


showPwdButtton.addEventListener("click", (event)=>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type", "password");
    }
    else{
        pwdTarget.setAttribute("type", "text");
    }

})