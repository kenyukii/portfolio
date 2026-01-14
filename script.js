// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close nav when clicking a link (on mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// Smooth scroll offset adjustment for sticky header (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const headerOffset = 70;
    const rect = target.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

// Contact form - opens email client with pre-filled content
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (form && formNote) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !email || !message) {
      formNote.textContent = "Please fill in all fields.";
      formNote.style.color = "var(--accent)";
      return;
    }
    
    // Create mailto link with subject and body
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${name}`);
    const body = encodeURIComponent(
      `Hello Kenth,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    const mailtoLink = `mailto:kenthjoshalegrado87@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    formNote.textContent = "Opening your email client...";
    formNote.style.color = "var(--text-muted)";
    
    // Reset form after a moment
    setTimeout(() => {
      form.reset();
      formNote.textContent = "";
    }, 2000);
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

