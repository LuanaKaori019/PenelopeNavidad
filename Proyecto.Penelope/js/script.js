document.getElementById('customization-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const prenda = document.getElementById('prenda').value;
    const color = document.getElementById('color').value;
    const talle = document.getElementById('talle').value;

    // Crear el mensaje para enviar a WhatsApp
    const message = `Hola! Quiero encargar una prenda personalizada.\nPrenda: ${prenda}\nColor: ${color}\nTalle: ${talle}`;
    
    // URL de WhatsApp con el número y el mensaje
    const phoneNumber = '5492465520310';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
})
function toggleProductInfo(card) {
    const productInfo = card.querySelector('.product-info'); // Busca la información del producto dentro de la tarjeta
    // Alterna la clase 'show' para mostrar u ocultar la información
    productInfo.classList.toggle('show');
}



