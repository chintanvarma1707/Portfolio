// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.5)";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.32)";
    }
});

// Toggle Mobile Menu

document.querySelectorAll('.nav-close').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: false
        });
        bsCollapse.hide();
    });
});



// Open Disclaimer Modal (Bootstrap way)
document.getElementById('termsBtn').addEventListener('click', () => {
    const disclaimerModal = new bootstrap.Modal(
        document.getElementById('disclaimerModal')
    );
    disclaimerModal.show();
});

// View More / View Less Logic
const viewMoreBtn = document.getElementById('viewMoreBtn');
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        const hiddenCerts = document.querySelectorAll('.more-certs');
        const isExpanded = viewMoreBtn.getAttribute('data-expanded') === 'true';

        hiddenCerts.forEach(cert => {
            if (isExpanded) {
                cert.classList.add('d-none');
            } else {
                cert.classList.remove('d-none');
            }
        });

        if (isExpanded) {
            viewMoreBtn.innerHTML = 'View More <i class="fas fa-chevron-down"></i>';
            viewMoreBtn.setAttribute('data-expanded', 'false');
        } else {
            viewMoreBtn.innerHTML = 'View Less <i class="fas fa-chevron-up"></i>';
            viewMoreBtn.setAttribute('data-expanded', 'true');
        }
    });
}



// ================= PRELOADER =================

window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");

        // Slide up effect
        preloader.classList.add("slide-up");

        setTimeout(() => {
            preloader.style.display = "none";

            // Reveal site
            document.body.classList.add("loaded");

            // Start animations
            AOS.init({
                duration: 1000,
                once: true,
            });

        }, 1000);
    }, 2500); // Wait a moment for smooth reveal
});