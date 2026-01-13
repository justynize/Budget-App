let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-value");
let tempAmount = 0;



totalAmountButton.addEventListener("click", () =>{
    tempAmount = tempAmount.value;

    if(tempAmount === "" || tempAmount <0){
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");

        amount.innerHTML = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        totalAmount.value = 0;
    }
})


const disableButtons = (bool) => {
    let editButons = document.getElementsByClassName("edit");
    Array.from(editButons).forEach((element) => {
        element.disabled = bool;
    });
}

const modifyElements = (element, edit = false) => {
    let parentDiv = element.parentElement.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpence = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;

    if(edit){
        let parentText = parentDiv.querySelector(".product-title").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableButtons(true);
    }


    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText = parseInt(currentExpence) - parseInt(parentAmount);
    parentDiv.remove();
};


const listCreator = (expenseName, expensevalue) => {
    let subListContent = document.createElement("div");
    subListContent.classList.add("sublist-content", "flex", "justify-space-between", "align-center", "mb-10");
    list.appendChild(subListContent);
    subListContent.innerHTML = `<p class="product">${expenseName}</p>
    <p class="amount">${expensevalue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fas", "fa-edit", "edit");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fas", "fa-trash", "delete");
    subListContent.appendChild(editButton);
    subListContent.appendChild(deleteButton);
}


