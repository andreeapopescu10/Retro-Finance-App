document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    // Selectează toate butoanele
    let buttons = document.querySelectorAll(".nav-btn");

    // Adaugă event listener pentru fiecare buton
    buttons[0].addEventListener("click", function () {
        console.log("Home button clicked");
        window.location.href = "home.html"; // Modifică dacă ai altă pagină
    });

    buttons[1].addEventListener("click", function () {
        console.log("Add Expense button clicked");
        alert("Deschide formularul de adăugare!"); // Test alert
    });

    buttons[2].addEventListener("click", function () {
        console.log("Reports button clicked");
        window.location.href = "reports.html"; // Modifică dacă ai altă pagină
    });
});
