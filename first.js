let shruti=prompt("Enter shruti age");
let khwaja=prompt("Enter khwaja age");
let krish=prompt("Enter krish age");
if(shruti>khwaja)
{
    console.log("shruti is older");
    if(khwaja>krish)
    {
        console.log("khwaja is old")
    }
}

else{
    if(krish>khwaja)
    {
        console.log("krish is old");

    }
    else{
        console.log("khwaja is old");
    }
}