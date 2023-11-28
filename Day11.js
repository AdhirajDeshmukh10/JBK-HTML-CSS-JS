//QUERY SELECTOR WHICH IS IN DAY09.js WAS TAUGHT IN THIS LECTURE

//alert(" I am in alert box");

//************************************************************************************************************/

/*a=confirm("do you want to continue")// deals with boolean value if you click ok "returns" true and if you click "cancle" it returns false

if(a == true)
{
    window.location.href="Login.html";
}
else{
    document.getElementById("msg").innerText="You Canclled to continue on same page....";
}*/

/****************************************************************************************************** */

// p = prompt("enter your name");

// console.log(p);

/****************************************************************************************************** */

day=prompt("enter day :");
switch(day.toLowerCase())
{
    case "monday":
        console.log("week start");
        document.getElementById("msg").innerText="week start";
        break;
    
    case "tuesday":
        console.log("Tuesday : its a 2nd day of week");
        document.getElementById("msg").innerText="Tuesday : its a 2nd day of week";
        break;

    case "wednesday":
        console.log("Wednesday : its a 3rd day of week");
        document.getElementById("msg").innerText="Wednesday : its a 3rd day of week";
        break;

    case "thursday":
        console.log("Thursday : its a 4th day of week");
        document.getElementById("msg").innerText="Thursday : its a 4th day of week";
        break;

    case "friday":
        console.log("Friday : its a 5th day of week");
        document.getElementById("msg").innerText="Friday : its a 5th day of week";
        break;

    case "saturday":
        console.log("Saturday : 1st day of week end");
        document.getElementById("msg").innerText="Saturday : 1st day of week end";
        break;

    case "sunday":
        console.log("Sunday : 2nd day of week end.........HOLIDAY");
        document.getElementById("msg").innerText="Sunday : 2nd day of week end.........HOLIDAY";
        break;

    default:
        console.log("Invalid Input"); //javascript is not case sensitive but is case sensitive in case of switch case or where there is need to check
        document.getElementById("msg").innerText="Invalid Input";
    }           

for(i = 0; i < 5; i++){

    if(i==2)
    {
        //continue; o/p -->  0  1   2   3   4
        
        break;  //  o/p -->  0  1 
    }
    else{
        console.log(i);
    }
    
}