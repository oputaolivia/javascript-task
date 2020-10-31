
// Calculating salary //
function monthlySalary(extraHours) {
    var firstName = 'Faith';
    var daysWorked = 26;
    var dailyHours = 4;
    var hoursWorked = dailyHours * daysWorked;
    var workedSalary = 1000 * hoursWorked;
    var extraSalary = 200 * extraHours;
    var totalSalary = workedSalary + extraSalary;
    
    console.log(firstName + ' earns ₦' + totalSalary + ' from SideHustle monthly with ₦' + workedSalary + ' as actual salary and ₦' 
    + extraSalary + ' as extra salary from extra worked hours.');
    
}
monthlySalary(12)


// Calculating daily wages //
function dailyWage(dailyHoursWorked, dailyExtraHours) {
    var firstName = 'Faith';
    var amountPerHour = 1000;
    var extraAmountPerHour = 200;
    var dailyPay = dailyHoursWorked * amountPerHour;
    var extraPay = dailyExtraHours * extraAmountPerHour
    var totalWage = dailyPay + extraPay;

    console.log(firstName + ' earns ₦' + totalWage + ' from SideHustle daily with ₦' + dailyPay + ' as daily pay and ₦' 
    + extraPay + ' as extra pay from extra worked hours.');
    
}
dailyWage(4, 2)






















