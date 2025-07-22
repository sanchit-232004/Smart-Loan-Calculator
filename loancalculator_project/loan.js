document.addEventListener('DOMContentLoaded',()=>{
    
const calculatebtn=document.getElementById("calculatebtn");
const amountInput=document.getElementById("amount");
const interestInput=document.getElementById("interest");
const yearsInput=document.getElementById("years");
const monthlyEMI=document.getElementById("monthly");
const totalpayment=document.getElementById("total");
const totalInterestPayment=document.getElementById("totalInterest")


function calculateloan(){
    const principal=parseFloat(amountInput.value);
    const interest=parseFloat(interestInput.value)/100/12;
    const payments=parseFloat(yearsInput.value)*12;
    if(isNaN(principal) || isNaN(interest) || isNaN(payments)){
        alert('please enter valid number');
        return;
    }
    const x=Math.pow(1+interest,payments);
    const monthly=(principal*x*interest)/(x-1);
    if(isFinite(monthly)){
        const total=monthly*payments;
        const totalInterest=total-principal;
        monthlyEMI.textContent=monthly;
        totalpayment.textContent=total;
        totalInterestPayment.textContent=totalInterest;
    }
}

calculatebtn.addEventListener('click',calculateloan);
});