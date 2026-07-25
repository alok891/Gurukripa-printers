/* ==========================================
   Main App & WhatsApp Form Handler
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Fetch Form Inputs
            const name = document.getElementById('custName').value.trim();
            const phone = document.getElementById('custPhone').value.trim();
            const service = document.getElementById('custService').value.trim();
            const msg = document.getElementById('custMsg').value.trim();

            // Destination WhatsApp Number
            const targetPhone = '919827268725';

            // Construct Pre-filled Message
            let formattedMessage = `*New Inquiry - Guru Kripa Printers*%0A%0A`;
            formattedMessage += `*Name:* ${encodeURIComponent(name)}%0A`;
            formattedMessage += `*Phone:* ${encodeURIComponent(phone)}%0A`;
            formattedMessage += `*Service Needed:* ${encodeURIComponent(service)}%0A`;
            
            if (msg) {
                formattedMessage += `*Details:* ${encodeURIComponent(msg)}%0A`;
            }

            // Generate WhatsApp URL
            const whatsappURL = `https://wa.me/${targetPhone}?text=${formattedMessage}`;

            // Redirect to WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }
});