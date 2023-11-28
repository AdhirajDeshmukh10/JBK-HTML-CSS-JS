a=32;
while(a<=40)
{
    a+=6
}
console.log(a)

function validate()
{
    usernm=document.getElementById("user").value
    pass=document.getElementById("pass").value
    if(usernm=="JBK" && pass=="JBK@123")
    {
       window.location.href="Login.html"
    }
    else
    {
    //document.getElementById("err").innerText="Invalid Credentials erntered..."  ;
      document.querySelector(".err_msg").innerText="Invalid Credentials erntered...";//(".class"),("#IdName"),("tagName")
    }
}
