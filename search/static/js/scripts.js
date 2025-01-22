document.addEventListener("DOMContentLoaded", () => {
    const searchTrigger = document.getElementById("searchWidgetTrigger");
    const searchButton = document.getElementById("searchButton");
    const searchWidget = document.querySelector("gen-search-widget");
  

    setAuthToken();
  
    function setAuthToken() {
      fetch("/get-auth-token/")
        .then((response) => {
          if (!response.ok) throw new Error("Error al obtener el token");
          return response.json();
        })
        .then((data) => {
          if (data.token) {
            searchWidget.authToken = data.token;
            console.log("Token configurado:", data.token);
          } else {
            console.error("No se proporcionó un token válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener el token:", error);
          mostrarFeedback("No se pudo obtener el token de autenticación.");
        });
    }
  
    function toggleWidget(show) {
      searchWidget.hidden = !show;
    }
  
    function mostrarFeedback(mensaje) {
      const alerta = document.createElement("div");
      alerta.className = "alert alert-info alert-dismissible fade show mt-3";
      alerta.role = "alert";
      alerta.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      const contenedor = document.querySelector(".container");
      contenedor.appendChild(alerta);
      setTimeout(() => alerta.remove(), 5000);
    }
  });