// Función de retroalimentación cuando el botón de búsqueda es presionado
document.getElementById("searchButton").addEventListener("click", () => {
    console.log("Botón de búsqueda activado");
    mostrarFeedback("Búsqueda iniciada. Abriendo el widget...");
});

// Función de retroalimentación cuando se presiona Enter en el campo de búsqueda
document.getElementById("searchWidgetTrigger").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        console.log("Enter presionado en el campo de búsqueda");
        mostrarFeedback("Búsqueda iniciada. Abriendo el widget...");
    }
});

// Función para mostrar alertas de retroalimentación
function mostrarFeedback(mensaje) {
    const alerta = document.createElement("div");
    alerta.className = "alert alert-info alert-dismissible fade show mt-3";
    alerta.role = "alert";
    alerta.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    const contenedor = document.querySelector(".search-container");
    contenedor.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}