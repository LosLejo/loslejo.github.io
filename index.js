// Project data
const projectsData = [
    {
        title: "FitTrack Gym Management System",
        category: "software",
        description: "Full-stack web application featuring secure member registration, profile management, password hashing, and a multi-database time-tracking system for real-time attendance monitoring.",
        tags: ["PHP", "MySQL", "JavaScript"],
        year: "2024",
        github: "#",
        demo: "#",
        documentation_pdf: "#",
        images: [
            { src: "Assets/Media/Fittrack/Fittrack-1.png", alt: "FitTrack Gym Management System" }
        ]
    },
    {
        title: "Educational Game Suite",
        category: "software",
        description: "Object-oriented, GUI-based suite of interactive educational games focusing on mathematical logic, linear algebra, and graph visualization with cross-platform compatibility.",
        tags: ["Python", "Pygame", "Docker"],
        year: "2024",
        github: "https://github.com/LosLejo/OOP-Game-Suite",
        demo: "#",
        documentation_pdf: "#",
        images: [
            { src: "Assets/Media/Game-Suite/OOP-DSA-1.png", alt: "Educational Game Suite" }
        ]
    },
    {
        title: "Pydew Valley: 2D Farming Simulation Game",
        category: "software",
        description: "Modular farming simulation game inspired by Stardew Valley with dynamic day/night cycle, weather mechanics, and functional soil and crop management systems.",
        tags: ["Python", "Pygame", "PyTMX"],
        year: "2024",
        github: "https://github.com/LosLejo/Pydew-Valley-Practice",
        demo: "#",
        documentation_pdf: "#",
        images: [
            { src: "Assets/Media/Pydew/Pydew-Valley-1.png", alt: "Pydew Valley: 2D Farming Simulation Game" }
        ]
    },
    {
        title: "Strikeflix: Video Streaming Platform",
        category: "software",
        description: "Full-featured video streaming web application with secure login, Google OAuth 2.0 integration, interactive watchlist dashboard, and strict backend security practices.",
        tags: ["PHP", "MySQL", "JavaScript"],
        year: "2025",
        github: "https://github.com/LosLejo/Strikeflix-Streaming-Website",
        demo: "#",
        documentation_pdf: "#",
        images: [
            { src: "Assets/Media/Strikeflix/Strikeflix-1.png", alt: "Strikeflix Video Streaming Platform" }
        ]
    },
    {
        title: "SAP-1 Computer Architecture Replication",
        category: "hardware",
        description: "Fully functional 8-bit SAP-1 computer utilizing self-made DIY PCBs with essential CPU components including Program Counter, ALU, RAM, Instruction Register, and custom Control Matrix. This project demonstrates deep understanding of digital logic, circuit design, and computer architecture fundamentals.",
        tags: ["PCB Design", "Digital Logic", "EagleCAD"],
        year: "2025",
        github: "#",
        demo: "#",
        documentation_pdf: "https://drive.google.com/drive/folders/1ur5h7yXiFs7vNpPnChR-dtW_hhV7Lauc?usp=sharing",
        images: [
            { src: "Assets/Media/SAP1/SAP1-1.jpg", alt: "SAP-1 Layout" },
            { src: "Assets/Media/SAP1/SAP1-2.jpg", alt: "Working SAP-1" },
            { src: "Assets/Media/SAP1/SAP1-3.jpg", alt: "Input and Mar" },
            { src: "Assets/Media/SAP1/SAP1-4.jpg", alt: "Output Register" }
        ]
    },
    {
        title: "Sentry: Digital Fingerprinting Station",
        category: "hardware",
        description: "Award-winning thesis project (Best Thesis of CPE Batch 2026). Dual-mode artifact acquisition station integrating Raspberry Pi Global Shutter Camera, custom LED illumination arrays for 2D photometric stereo and 3D photogrammetry. Features automated artifact scanning with high-torque servo motors and precision distance sensors for fingerprinting Cultural Artifacts to preserve historical heritage through digital archiving.",
        tags: ["Raspberry Pi", "Mechatronics", "GPIO"],
        year: "2026",
        github: "#",
        demo: "#",
        documentation_pdf: "#",
        images: [
            { src: "Assets/Media/Sentry/Sentry-1.jpg", alt: "Sentry Station Overall" },
            { src: "Assets/Media/Sentry/Sentry-2.png", alt: "Camera & Lighting System" },
            { src: "Assets/Media/Sentry/Sentry-3.jpg", alt: "Servo Motors & Sensors" },
            { src: "Assets/Media/Sentry/Sentry-4.png", alt: "Fingerprint Capture" },
            { src: "Assets/Media/Sentry/Sentry-5.png", alt: "Sentry Detail" }
        ]
    },
];

// Render projects
function renderProjects(filter = "all") {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";

    const filtered = filter === "all"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    filtered.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <div class="project-image">${project.images && project.images.length > 0 ? `<img src="${project.images[0].src}" alt="${project.images[0].alt}" style="width: 100%; height: 100%; object-fit: cover;">` : ""}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-footer">
                ${project.github !== "#" ? `<a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
                ${project.documentation_pdf !== "#" ? `<a href="${project.documentation_pdf}" class="project-link" target="_blank" rel="noopener noreferrer">📄 Manual</a>` : ""}
                ${project.demo !== "#" ? `<a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">${project.category === "hardware" ? "Documentation" : "Demo"}</a>` : ""}
                ${project.category === "hardware" ? `<button class="view-more-btn" data-index="${index}">View More</button>` : ""}
            </div>
        `;
        grid.appendChild(card);
    });

    // Add click handlers to View More buttons
    document.querySelectorAll(".view-more-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.index);
            openProjectModal(index);
        });
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

// Modal functionality
function openProjectModal(projectIndex) {
    const project = projectsData[projectIndex];
    const modal = document.getElementById("projectModal");

    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalYear").textContent = `Year: ${project.year}`;

    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
    document.getElementById("modalTags").innerHTML = tagsHTML;

    // Render gallery
    const galleryHTML = project.images
        ? project.images.map((img, idx) => `
            <div class="modal-gallery-item" style="cursor: pointer;" onclick="window.open('${img.src}', '_blank')">
                <img src="${img.src}" alt="${img.alt}" style="cursor: pointer;">
            </div>
        `).join("")
        : '<div class="modal-gallery-item placeholder"><div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">Image Gallery</div></div>';

    document.getElementById("modalGallery").innerHTML = galleryHTML;

    const linksHTML = `
        ${project.github !== "#" ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ""}
        ${project.documentation_pdf !== "#" ? `<a href="${project.documentation_pdf}" target="_blank" rel="noopener noreferrer" class="project-link">📄 Documentation</a>` : ""}
        ${project.demo !== "#" ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">${project.category === "hardware" ? "View Project" : "Demo"}</a>` : ""}
    `;
    document.getElementById("modalLinks").innerHTML = linksHTML;

    modal.classList.add("active");
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    modal.classList.remove("active");
}

function openPdfViewer(pdfUrl) {
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + '/' + pdfUrl)}`;
    window.open(viewerUrl, '_blank');
}

function initializeModal() {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".modal-close");
    const modalContent = document.querySelector(".modal-content");

    if (!modal || !closeBtn) {
        console.error("Modal or close button not found");
        return;
    }

    // Close button click
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeProjectModal();
    });

    // Close modal when clicking outside of it (on the modal background)
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Prevent closing when clicking on modal content
    modalContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeProjectModal();
        }
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
    initializeScrollAnimations();
    initializeModal();
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
