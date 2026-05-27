// Asegurar que el script cargue después del DOM
document.addEventListener('DOMContentLoaded', () => {
    // Versículo inicial
    const versiculo = document.getElementById('versiculo');
    if (versiculo) {
        versiculo.innerText = ">> TODO LO PUEDO EN CRISTO QUE ME FORTALECE <<";
    }

    // Inicializar productos
    rotarProductos();
    setInterval(rotarProductos, 15000);
});

function validarAcceso() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const clave = (dia * 100) + (mes * 50) + 125;
    const ingreso = prompt("SOLICITUD DE ACCESO:\nIngrese su llave de autorización:");
    
    if (ingreso == clave) {
        document.getElementById('modalCuentas').style.display = 'flex';
    } else if (ingreso !== null) {
        alert("ACCESO DENEGADO");
    }
}

async function rotarProductos() {
    const display = document.getElementById('product-display');
    if (!display) return;

    try {
        const res = await fetch('productos.json');
        const data = await res.json();

        // Elegir 3 productos aleatorios
        const sel = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        display.innerHTML = sel.map(p => `
            <div class="product-card">
                <img src="${p.img}" class="product-image" alt="Producto">
                <div style="margin-bottom: 5px; font-weight: bold;">${p.nombre}</div>
                <a href="${p.link}" class="btn-amazon" target="_blank" style="color: #00ffcc; text-decoration: none; font-size: 12px;">[ VER DETALLES ]</a>
            </div>
        `).join('');
    } catch (e) {
        console.log("Error cargando productos");
    }
}

function sendWhatsApp() {
    const imei = document.getElementById('imeiField').value;
    if (imei.length < 15) {
        alert("Error: Se requiere un IMEI de 15 digitos.");
        return;
    }
    window.location.href = "https://wa.me/18098647903?text=" + encodeURIComponent(">> TICKET_SOLICITUD_IMEI: " + imei);
}
