// 1. Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.5)";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.32)";
    }
});

// 1.5 Toggle Mobile Menu

document.querySelectorAll('.nav-close').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: false
        });
        bsCollapse.hide();
    });
});

// 2. Handle Contact Form
// document.getElementById('contactForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const statusMsg = document.getElementById('statusMsg');
//     statusMsg.innerText = "Sending message...";
//     statusMsg.style.color = "white";

//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value
//     };

//     try {
//         const response = await fetch('/api/contact', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//             statusMsg.innerText = "Thanks! I'll contact you soon.";
//             statusMsg.style.color = "#00ff88"; // Green
//             document.getElementById('contactForm').reset();
//         } else {
//             statusMsg.innerText = "Something went wrong.";
//             statusMsg.style.color = "#ff4d4d"; // Red
//         }
//     } catch (err) {
//         console.error(err);
//         statusMsg.innerText = "Server error.";
//     }
// });

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


