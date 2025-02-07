document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    // Selectează butoanele de navigare
    let buttons = document.querySelectorAll(".nav-btn");

    // Array pentru a stoca cheltuielile
    let expenses = [];

    // Selectează elementele din formularul de adăugare a cheltuielilor
    const expenseNameInput = document.getElementById("desc");
    const expenseAmountInput = document.getElementById("amount");
    const addExpenseBtn = document.getElementById("addExpenseBtn");
    const reportsList = document.getElementById("reportsList");
    const reportsSection = document.getElementById("reportsSection");
    const addExpenseForm = document.getElementById("addExpenseForm");

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

        // Arată secțiunea de rapoarte
        addExpenseForm.style.display = "none"; // Ascunde formularul
        reportsSection.style.display = "block"; // Afișează secțiunea de rapoarte

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

    // Adăugăm eveniment pentru butonul de "Home"
    buttons[0].addEventListener("click", function () {
        console.log("Home button clicked");
        location.reload(); // Reîncarcă pagina pentru a reveni la formularul de cheltuieli
    });

    // Adăugăm eveniment pentru butonul de "Add Expense" (pentru a reveni la formular)
    buttons[1].addEventListener("click", function () {
        console.log("Add Expense button clicked");

        // Ascunde secțiunea de rapoarte și arată formularul
        reportsSection.style.display = "none";
        addExpenseForm.style.display = "block";
    });
});
