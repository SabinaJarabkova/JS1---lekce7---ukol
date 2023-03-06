console.log('nalinkovan');

//UKOL 1
const salary = (wage, hours, days) => {
    const hrubaMzda = wage * hours * days;
    return hrubaMzda;
}

const taxed = (salary, taxes) => {
    //salary = salary();
    const netSalary = salary * ((100 - taxes) / 100);
    return netSalary;
}

const newSalary = salary(300,8,21);
//console.log(newSalary);
const finalSalary = taxed(newSalary, 15);
console.log(finalSalary);


//UKOL 2
const calculate = (number1, operation, number2) => {
    const num1 = Number(number1);
    const op = String(operation);
    const num2 = Number(number2);
    
    if (op === '+') {
        const result = num1 + num2;
        //console.log(result);
        return result;
    } else if (op === '-') {
        const result = num1 - num2;
        //console.log(result);
        return result;
    } else if (op === '*') {
        const result = num1 * num2;
        //console.log(result);
        return result;
    } else if (op === '/') {
        const result = num1 / num2;
        //console.log(result);
        return result;
    } else {
        console.log('neznámý operátor')
        return null
    }
}

console.log(calculate(16,'/',8));

//UKOL 3
const selectPlan = (planNumber) => {

    const selectedNumber = String(planNumber);

    const selectedPlan1 = document.querySelector('#plan1');
    selectedPlan1.classList.remove("plan--selected");
    const selectedPlan2 = document.querySelector('#plan2');
    selectedPlan2.classList.remove("plan--selected");
    const selectedPlan3 = document.querySelector('#plan3');
    selectedPlan3.classList.remove("plan--selected");

    if (selectedNumber === '1') {
        const selectedPlan = document.querySelector('#plan1');
        //console.log(selectedPlan);
        selectedPlan.classList.add("plan--selected");
        }
    else {
        if (selectedNumber === '2') {
            const selectedPlan = document.querySelector('#plan2');
            //console.log(selectedPlan);
            selectedPlan.classList.add("plan--selected");
        } else {

            if (selectedNumber === '3') {
                const selectedPlan = document.querySelector('#plan3');
                //console.log(selectedPlan);
                selectedPlan.classList.add("plan--selected");
            }
            }
    }
    
}

selectPlan(5);



