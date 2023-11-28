a="js file"
console.log(a);
function validate(name,age){
    console.log("name = "+name+" , age ="+age);

}
validate("Adhiraj",22)
for(i=1;i<=5;i++)
{
    console.log("simple for-loop");
}

fruits=["apple","banana","orange","pineapple","watermelon"];
for(var frt in fruits) // follows index //ecmascript -- it is standard of java script --java script is based on this 
{
    f=document.getElementById("idoffruit") // selects the parent tag -- in this case <ol>

    l=document.createElement("li");// creates the child tag -----in this case<li>

    l.textContent = fruits[frt]; //provides content to child tag

    f.appendChild(l)// establishes the relation between  parent tag and child tag
    console.log(fruits[frt]);
}
cities=["Mumbai","Pune","Nashik","Nagpur","beed"];

for(var city of cities)// follows values
{
    f=document.getElementById("idofcity");

    l=document.createElement("li");

    l.textContent = city;

    f.appendChild(l);
    console.log(city);
}