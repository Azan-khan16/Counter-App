let input=document.getElementById("data");
let count=0;

 function incre()
 {
    count++;
    input.innerHTML=count;

 }

 function decre()
 {
    count--;
    if(count<0)
    {
    count=0;

    }
    else{
        input.innerHTML=count;
    }
 }
 function res()
 {
    let check =window.confirm("do you want reset count ?");
    if(check==true)
    {
        count=0;

    }
    input.innerHTML=count;
}