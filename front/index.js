const messageElement = document.getElementById("message");

fetch("http://localhost:5000/api/test")
    .then((response) => response.json())
    .then((data) => {
        messageElement.textContent = data.message;
    })
    .catch((error) => {
        messageElement.textContent = "Erreur : impossible de contacter le backend";
        console.error(error);
    });
