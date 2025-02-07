// Show section based on navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Store expenses in local storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Add new expense
document.getElementById('expense-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (description && amount) {
    const expense = { description, amount };
    expenses.push(expense);

    // Store updated expenses in local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Show success message
    document.getElementById('expense-message').textContent = 'Expense added!';
    setTimeout(() => {
      document.getElementById('expense-message').textContent = '';
    }, 2000);

    // Clear form inputs
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
  }

  showExpenses();
});

// Show expenses in reports section
function showExpenses() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.textContent = `${expense.description} - $${expense.amount.toFixed(2)}`;
    expenseList.appendChild(li);
  });
}

// Load expenses on page load
window.onload = function () {
  showExpenses();
};
