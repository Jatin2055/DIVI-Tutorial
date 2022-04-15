function ageFactor(age) {
    if (age <=19) {
        alert('Your age should be more than 19')
    }   else if (age >= 20 && age < 25) {
        console.log('Congratulations!! You are eligible to get a bonus of 10%')
    }   else if (age >= 25 && age < 35) {
        console.log('Congratulations!! You are eligible to get a bonus of 12%')
    }   else if (age >= 35 && age < 45) {
        console.log('Congratulations!! You are eligible to get a bonus of 14%')
    }
        else if(age >= 45 && age < 55) {
        console.log('Congratulations!! You are eligible to get a bonus of 16%')
    }
        else if(age >= 55){
        console.log('Congratulations!! You are eligible for our pension program, Click to know more');
    }
};

