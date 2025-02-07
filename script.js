document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    // Selectează butoanele
    let buttons = document.querySelectorAll(".nav-btn");

    // Array pentru a stoca cheltuielile
    let expenses = [];

    // Selectează elementele din formularul de adăugare a cheltuielilor
    const expenseNameInput = document.getElementById("expenseName");
    const expenseAmountInput = document.getElementById("expenseAmount");
    const addExpenseBtn = document.getElementById("addExpenseBtn");
    const reportsList = document.getElementById("reportsList");

    // Adăugăm eveniment pentru butonul de "Add Expense"
    addExpenseBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Previne comportamentul implicit al formularului

        const expenseName = expenseNameInput.value;
        const expenseAmount = parseFloat(expenseAmountInput.value);

        if (expenseName && !isNaN(expenseAmount)) {
            // Adaugă cheltuiala în array
            expenses.push({ name: expenseName, amount: expenseAmount });

            // Curăță câmpurile formularului
            expenseNameInput.value = "";
            expenseAmountInput.value = "";

            alert("Cheltuială adăugată cu succes!");
        } else {
            alert("Te rog să completezi toate câmpurile corect!");
        }
    });

    // Adăugăm eveniment pentru butonul de "Reports"
    buttons[2].addEventListener("click", function () {
        console.log("Reports button clicked");

        // Golește lista de rapoarte
        reportsList.innerHTML = "";

        // Verifică dacă există cheltuieli și le adaugă în raport
        if (expenses.length > 0) {
            expenses.forEach(function (expense) {
                const li = document.createElement("li");
                li.textContent = `${expense.name}: ${expense.amount} RON`;
                reportsList.appendChild(li);
            });
        } else {
            reportsList.innerHTML = "<li>Nu există cheltuieli adăugate.</li>";
        }
    });

    // Adaugă event listener pentru celelalte butoane
    buttons[0].addEventListener("click", function () {
        console.log("Home button clicked");
        window.location.href = "index.html";
    });

    buttons[1].addEventListener("click", function () {
        console.log("Add Expense button clicked");
        alert("Deschide formularul de adăugare!");
    });
});
