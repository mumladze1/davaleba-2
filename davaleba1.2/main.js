
// davaleba 1

// function compare(a, b) {
//     if (a === b) {
//         return "tolia";
//     } else {
//         return "ar aris toli";
//     }
// }






// let result1 = compare(2, 7);
// console.log(result1); 


// let result2 = compare(5, 5);
// console.log(result2); 








// davaleba 2


// function tem( Fahrenheit,Celsius){ 
//     if(typeof Fahrenheit==='string' ) {return false}
//     if(typeof Celsius ==='string' ) {return false}
//     return Celsius
    



// }


// console.log(tem(1,180))
// console.log(tem('dd',180))





// davaleba 3


// function calculate(num1,num2) {
// if(typeof num1==='string'){ return false}
// if(typeof num2==='string'){ return false}
// return num1+num2

// }

// console.log( calculate(10,40))
// console.log( calculate("dm",40))
// console.log( calculate("20",40))





    function yPN(users) {
        if (users.length === 0) {
            return null; 
        }
    
        
        let minAge = users[0].age;
        let youngestName = users[0].name;
    
        
        for (let i = 1; i < users.length; i++) {
            if (users[i].age < minAge) {
                minAge = users[i].age;
                youngestName = users[i].name;
            }
        }
    
        return youngestName;
    }
    
    
    const users = [
        { name: 'Temo', age: 25 },
        { name: 'Lasha', age: 21 },
        { name: 'Ana', age: 28 }
    ];
    
    console.log(yPN(users));







    function User2(orUser) {
        
        const newUser = { ...orUser };
        return newUser;
    }
    
    
    const user = { name: 'dachi', age: 17, email: 'mumladze81@.gmail' };
    const newUser = User2(user);
    
    console.log(newUser); 
    console.log(newUser !== user); 


   




    

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}


function playGame(targetNumber) {
    let triesA = 0;
    let triesB = 0;
    let resultA = 0;
    let resultB = 0;

   
    while (resultA !== targetNumber) {
        resultA = rollDie();
        triesA++;
    }
    
    
    while (resultB !== targetNumber) {
        resultB = rollDie();
        triesB++;
    }
    
   
    if (triesA < triesB) {
        console.log(`momxmarebelma A moigo ${triesA} samianit!`);
    } else if (triesB < triesA) {
        console.log(`momxmarebelma B moigo ${triesB} samianit!`);
    } else {
        console.log(`prea! orivem erTnairi raodenobis ${triesA} samiani dasves.`);
    }
}


const samianNumber = 6; 


playGame(samianNumber);
