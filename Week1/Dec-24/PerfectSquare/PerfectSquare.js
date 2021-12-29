function checkperfectsquare(n)
{
     
    // If ceil and floor are equal
    // the number is a perfect
    // square
    if (Math.ceil(Math.sqrt(n)) ==
        Math.floor(Math.sqrt(n)))
    {
        console.log("perfect square");
    }
    else
    {
        console.log("not a perfect square");
    }
}
 

let n =  2555;
 
checkperfectsquare(n);