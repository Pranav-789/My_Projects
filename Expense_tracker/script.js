let reset = document.getElementById("resetBtn");
let showBal = document.getElementById("WATER");
let TransactionCount = 0;
reset.addEventListener("click", ()=>{
    updateWater(0, 0);
    
    showBal.innerHTML=`<p>NO UPDATE</p>`;
    saveStatusInLocalStorage(0, 0);

    localStorage.removeItem("transactions");
    TransactionCount = 0;
    document.querySelector(".transaction-history").innerHTML = "";
})

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];   

function updateTime(){
    const now = new Date();
    let date = document.getElementById("date");
    let Time = document.getElementById("Time");
    let year = document.getElementById("year");

    date.innerText = `${now.getDate()} ${monthNames[now.getMonth()]}`;
    year.innerText=now.getFullYear();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    Time.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
}

setInterval(updateTime, 1000);
updateTime();

let gain = 0;
let spend = 0;

const updateBtn = document.querySelector("#update");

updateBtn.addEventListener("click", ()=>{
    const input = document.querySelector("#amount_exp");
    const sign = document.querySelector("#expense_type");
    const commentRem = document.querySelector("#remark");

    if(input.value===""){
        return;
    }
    let comment = commentRem.value;
    let amount = Number(input.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        input.value="";
        return;
    }

    if(sign.value==="income"){
        gain += amount;
    }
    else if(sign.value==="Reimbursed"){
        spend -= amount;
    }
    else{
        spend += amount;
    }
    
    addToHistory(comment, amount, sign.value);

    input.value = "";
    commentRem.value = "";

    saveTransactionInLocalStorage(TransactionCount, amount, comment, sign.value);
    showBal.innerHTML=`<p>${gain-spend}/${gain}</p>`;
    updateWater(gain, spend);
    saveStatusInLocalStorage(gain, spend);
})

function addToHistory(comment, amount, ipsign){
    TransactionCount++;
    let transactionDiv = document.createElement("div");
    transactionDiv.classList.add("transactionDiv");
    let transactionNum = document.createElement('div');
    let commentPara = document.createElement("div");
    let transactedAmount = document.createElement("div");
    let transactionType = document.createElement("div");

    transactionNum.innerText = `${TransactionCount}.`;
    commentPara.innerText = comment;
    transactedAmount.innerText = `₹${amount}`;
    transactionType.innerText = ipsign;

    if (ipsign === "income" || ipsign ==="Reimbursed") {
        transactedAmount.style.color = "green";    
    }
    else{
        transactedAmount.style.color = "red";  
    }

    transactionDiv.appendChild(transactionNum);
    transactionDiv.appendChild(commentPara);
    transactionDiv.appendChild(transactedAmount);
    transactionDiv.appendChild(transactionType);

    let historyDiv = document.querySelector(".transaction-history");
    historyDiv.appendChild(transactionDiv);
    localStorage.setItem("TransactionCount", TransactionCount);
}

function updateWater(totalGain, totalSpent){
    gain = totalGain;
    spend = totalSpent;
    let totalBalance = totalGain;
    let balance = totalGain-totalSpent;
    let track = document.getElementById("TRACKER");
    if(totalBalance===0){
        track.style.setProperty("--water-level", "0%");
    }
    else{
        track.style.setProperty("--water-level", `${(balance / totalBalance) * 100}%`);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    loadStatus();
    loadTransactions();
})

function saveStatusInLocalStorage(gain, spend){
    let status = {totalGains: gain, totalSpend: spend};
    localStorage.setItem("status", JSON.stringify(status));
}

function saveTransactionInLocalStorage(id, transferAmt, transacRemark, transacType){
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push({id, tAmount: transferAmt, tRemark: transacRemark, tType: transacType});
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadTransactions(){
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    TransactionCount = 0;
    transactions.forEach(transaction => {
        addToHistory(transaction.tRemark, transaction.tAmount, transaction.tType);
    });
}

function loadStatus(){
    let status = JSON.parse(localStorage.getItem("status")) || {totalGains: 0, totalSpend: 0};
    gain = status.totalGains;
    spend = status.totalSpend;
    if(gain === 0 && spend === 0){
        updateWater(0, 0);
        
        showBal.innerHTML=`<p>NO UPDATE</p>`;
        saveStatusInLocalStorage(0, 0);
    }else{
        
        showBal.innerHTML=`<p>${gain-spend}/${gain}</p>`;
        updateWater(gain, spend);
    }
}


