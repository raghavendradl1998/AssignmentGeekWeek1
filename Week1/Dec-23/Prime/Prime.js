function PrimeNumber(number){
	
    let isPrime = true;
    if (number === 1) {
        console.log("Nothing");
    }
    
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log("prime number");
            alert("Prime Number")
        } else {
            console.log("Not PrimeNumber");
            alert("Not PrimeNumber")
        }
    }
    else {
        console.log("Not PrimeNumber");
        alert("Not PrimeNumber")
    }
    
    }
    
PrimeNumber(23);