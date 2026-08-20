/**
 * script.js
 * JavaScript murni (Vanilla JS) untuk fungsionalitas dasar website portofolio.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Navbar Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            
            // Ubah icon menu saat ditekan
            if (navbar.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '☰'; 
            }
        });
    }

    // 2. Tutup menu mobile jika mengklik di luar navbar
    document.addEventListener('click', function(event) {
        if (navbar && navbar.classList.contains('active')) {
            const isClickInsideNavbar = navbar.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNavbar && !isClickOnToggle) {
                navbar.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        }
    });

    // 3. Penanganan Simulasi Form Kontak (Mencegah Inline JS)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah reload halaman
            alert('Formulir berhasil disimulasikan! (Backend belum terhubung)');
            contactForm.reset(); // Mengosongkan form setelah "terkirim"
        });
    }
});