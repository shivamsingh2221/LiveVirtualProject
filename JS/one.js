function validateForm()

{
   
    var x=document.getElementById("eng").value; var x1=parseInt(x);
    var y=document.getElementById("gk").value;  var y1=parseInt(y);
    var z=document.getElementById("math").value; var z1=parseInt(z);
    var res=parseInt(x)+ parseInt(y)+ parseInt(z);

    if(!isNaN(res))
    document.forms['form1']['name'].value = res;
    else
    alert("enter a valid number");

    var p=res/3;
    document.forms['form1']['per'].value = p;


    if(x>y && x>z)
    document.forms['form1']['high'].value = x1;
    else if(y>x && y>z)
    document.forms['form1']['high'].value = y1;
    else
    document.forms['form1']['high'].value = z1;
}


function disp()
{
    var x = document.forms[0];
    var sum=0;
    for (i = 0; i < x.length; i++) {                

        if(x[i].checked)
        sum=sum+2;
    }
    document.getElementById("res").value ="You Got "+ sum+" marks";

}

function validate(){
    if((document.registerationform.fnametxt.value==""))
 {
  document.getElementById('une').innerHTML = "First name or Second name should not be empty";
  registerationform.fnametxt.focus();
  return(false);
 }
}




function jfun1(){
    var per=prompt("enter your name");

}

function jfun2()
{
    var x=0;
    var cb1=document.getElementById("one");
    var cb2=document.getElementById("two");
    var cb3=document.getElementById("three");
    var cb4=document.getElementById("four");
    var cb5=document.getElementById("five");
    if(cb1.checked==true)
    x=x+1;

    if(cb2.checked==true)
    x=x+1;
    
    if(cb3.checked==true)
    x=x+1;
    
    if(cb4.checked==true)
    x=x+1;
    
    if(cb5.checked==true)
    x=x+1;

    if(x==0)
    alert("only one selected");
    else if(x<3)
    alert("select more");
    else
    alert("GOOD WORK");
}



function jfun3()
{
    var x=document.getElementById("sear");
    var t1=x.options[x.selectedIndex].value;
    var t2=document.getElementById("s");

    if(t1=="G")
    window.location="https://www.google.com/search?q="+escape(t2.value);

    else if(t1=="Y")
    window.location="https://in.search.yahoo.com/search?p="+escape(t2.value);
}