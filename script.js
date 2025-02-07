document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    // Selectează butoanele de navigare
    document.querySelector(".nav-btn:nth-child(1)").addEventListener("click", function () {
        window.location.href = "home.html"; // Înlocuiește cu pagina reală
    });

    document.querySelector(".nav-btn:nth-child(2)").addEventListener("click", function () {
        toggleExpenseForm();
    });

    document.querySelector(".nav-btn:nth-child(3)").addEventListener("click", function () {
        window.location.href = "reports.html"; // Înlocuiește cu pagina reală
    });

    // Funcție pentru afișarea formularului de adăugare cheltuieli
    function toggleExpenseForm() {
        let form = document.querySelector(".form-container");
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    }

    // Funcție pentru adăugarea unei cheltuieli (exemplu simplu)
    document.querySelector(".add-btn").addEventListener("click", function () {
        let desc = document.querySelector("#desc").value;
        let amount = document.querySelector("#amount").value;

        if (desc === "" || amount === "") {
            alert("Completează toate câmpurile!");
            return;
        }

        alert(`Cheltuială adăugată: ${desc} - ${amount}$`);
    });
});
