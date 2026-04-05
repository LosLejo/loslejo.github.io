// Project data
const projectsData = [
    {
        title: "E-Commerce Platform",
        category: "web",
        description: "Full-stack online store with shopping cart, payment integration, and admin dashboard.",
        tags: ["React", "Node.js", "MongoDB"],
        year: "2024",
        github: "#",
        demo: "#",
    },
    {
        title: "Task Management App",
        category: "mobile",
        description: "Mobile app for managing daily tasks with reminders and priority settings.",
        tags: ["React Native", "Firebase", "Redux"],
        year: "2024",
        github: "#",
        demo: "#",
    },
    {
        title: "Weather Dashboard",
        category: "web",
        description: "Real-time weather information with forecasts and interactive maps.",
        tags: ["React", "OpenWeather API", "Tailwind"],
        year: "2024",
        github: "#",
        demo: "#",
    },
    {
        title: "Social Media Clone",
        category: "web",
        description: "Instagram-inspired social platform with posts, likes, and comments.",
        tags: ["Next.js", "PostgreSQL", "Prisma"],
        year: "2024",
        github: "#",
        demo: "#",
    },
    {
        title: "Machine Learning Model",
        category: "other",
        description: "Predictive model for house price estimation using regression algorithms.",
        tags: ["Python", "Scikit-learn", "Pandas"],
        year: "2023",
        github: "#",
        demo: null,
    },
    {
        title: "Recipe Finder App",
        category: "mobile",
        description: "Discover recipes based on ingredients you have at home.",
        tags: ["Flutter", "Dart", "REST API"],
        year: "2023",
        github: "#",
        demo: null,
    },
];

// Render projects
function renderProjects(filter = "all") {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";

    const filtered = filter === "all"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-image"></div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-footer">
                ${project.github !== "#" ? `<a href="${project.github}" class="project-link">GitHub</a>` : ""}
                ${project.demo !== "#" ? `<a href="${project.demo}" class="project-link">Demo</a>` : ""}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter functionality
function initializeFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProjects(btn.dataset.filter);
        });
    });
}

// Smooth scroll for nav links
function initializeNavigation() {
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Also for btn links
    const buttons = document.querySelectorAll("a.btn[href^='#']");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const href = btn.getAttribute("href");
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Here you would normally send to a backend
            // For now, just show success message
            alert(`Thanks for reaching out, ${data.name}! I'll get back to you soon.`);
            form.reset();
        });
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-up");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards
    document.querySelectorAll(".project-card").forEach(card => {
        card.style.opacity = "0";
        observer.observe(card);
    });

    // Observe highlight cards
    document.querySelectorAll(".highlight-card").forEach((card, index) => {
        card.style.opacity = "0";
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe section titles
    document.querySelectorAll(".section-title").forEach(title => {
        title.style.opacity = "0";
        observer.observe(title);
    });

    // Observe about content
    const aboutText = document.querySelector(".about-text");
    if (aboutText) {
        aboutText.style.opacity = "0";
        observer.observe(aboutText);
    }

    const aboutSkills = document.querySelector(".about-skills");
    if (aboutSkills) {
        aboutSkills.style.opacity = "0";
        observer.observe(aboutSkills);
    }

    // Observe contact info
    document.querySelectorAll(".contact-item").forEach((item, index) => {
        item.style.opacity = "0";
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    initializeFilters();
    initializeNavigation();
    initializeContactForm();
    initializeScrollAnimations();
});

// Add scroll animation to nav
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
        navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    }
});
