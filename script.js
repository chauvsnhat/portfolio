/**
 * Portfolio Interactive Logic & Case Study Management
 * Developed for IT / Software Engineer Internship candidate
 */

// --- 1. Project Case Studies Data (Crucial for Tech Interviews) ---
const projectsData = {
  p1: {
    title: "Smart Restaurant - Hệ thống Đặt món QR & Màn hình Bếp KDS Real-time",
    image: "assets/images/project-restaurant.jpg",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/kcsuZZ6qF3s?rel=0&modestbranding=1",
    videoDirectUrl: "https://www.youtube.com/watch?v=kcsuZZ6qF3s",
    role: "Full-Stack Developer (Đồ án Hệ thống Thực tế)",
    timeline: "Đồ án chuyên sâu (3-4 tháng)",
    techStack: ["React / Next.js", "Node.js (Express)", "Socket.IO", "PostgreSQL / MongoDB", "Passport.js & JWT", "Payment Gateway (ZaloPay, MoMo)", "Redis", "Docker"],
    demoUrl: "https://www.youtube.com/watch?v=kcsuZZ6qF3s",
    githubUrl: "https://github.com",
    overview: "Hệ thống gọi món tại bàn thông minh qua mã QR dành cho nhà hàng dine-in. Thực khách quét mã QR để duyệt thực đơn, tùy chọn món/topping và thanh toán sau bữa ăn qua ví điện tử. Hệ thống tự động gộp đơn theo phiên bàn (Single Table Session), đồng bộ tức thời đến bồi bàn duyệt và màn hình bếp (Kitchen Display System - KDS) qua Socket.IO.",
    challenges: [
      {
        problem: "Quản lý phiên gọi món liên tục (Single Order per Table Session) khi khách muốn gọi thêm nhiều đợt trước khi thanh toán.",
        solution: "Thiết kế State Machine theo dõi phiên bàn, gom các lần gọi thêm vào một Order ID duy nhất, đảm bảo tính toàn vẹn trạng thái và chống xung đột dữ liệu."
      },
      {
        problem: "Đồng bộ trạng thái đơn tức thời giữa 4 tác nhân: Khách hàng - Bồi bàn - Bếp KDS - Quản lý.",
        solution: "Sử dụng WebSocket (Socket.IO) phân chia theo Room bàn và KDS Channel, giảm độ trễ cập nhật xuống dưới 150ms, giúp bồi bàn và bếp phối hợp chuẩn xác."
      }
    ],
    lessons: [
      "Làm chủ kiến trúc phân quyền đa vai trò (Multi-role RBAC: Super Admin, Admin nhà hàng, Bồi bàn, Bếp).",
      "Kinh nghiệm xử lý dữ liệu thời gian thực (Real-time Event-Driven) và tích hợp cổng thanh toán trực tuyến an toàn.",
      "Tư duy tối ưu hóa luồng nghiệp vụ thực tế (Dine-in Order Lifecycle) nhằm giảm thiểu thời gian chờ đợi cho thực khách."
    ]
  },

  p2: {
    title: "Ticketbox Mocking - Nền tảng Đặt vé Sự kiện Kiến trúc Microservices",
    image: "assets/images/project-ticketbox.jpg",
    role: "Backend Engineer (Nhóm 4 thành viên)",
    timeline: "06/2026 - 07/2026",
    techStack: ["Node.js", "TypeScript", "Microservices Architecture", "Redis (Distributed Locks)", "RabbitMQ", "BullMQ", "Docker", "API Gateway"],
    demoUrl: null,
    githubUrl: null,
    overview: "Nền tảng đặt vé sự kiện và vé ca nhạc phân tán mô phỏng hệ thống Ticketbox với kiến trúc Microservices (Booking Service, Payment Service, Ticket Service, AI Service) kết nối thông qua API Gateway trung tâm, tối ưu hóa cho bài toán chịu tải cao khi mở bán vé đợt cao điểm.",
    challenges: [
      {
        problem: "Tranh chấp ghế (Race condition / Concurrency contention) và ngăn chặn bán vượt số lượng vé (overselling) khi hàng ngàn người dùng cùng giữ chỗ đồng thời.",
        solution: "Triển khai Redis Distributed Locks với TTL chính xác kết hợp hàng đợi bất đồng bộ Event-Driven qua RabbitMQ & BullMQ để tuần tự hóa giao dịch thanh toán vé an toàn."
      },
      {
        problem: "Bảo đảm tính sẵn sàng cao và khả năng tự phục hồi của toàn bộ hệ sinh thái Microservices khi có dịch vụ thành phần gặp nghẽn.",
        solution: "Tích hợp mẫu thiết kế Circuit Breakers và Rate Limiting tại tầng API Gateway, đồng thời xây dựng cơ chế offline QR check-in tự động đồng bộ khi khôi phục mạng."
      }
    ],
    lessons: [
      "Thiết kế kiến trúc hệ thống phân tán (Distributed System Design) và giao tiếp Message Broker phi đồng bộ.",
      "Xử lý bài toán Concurrency, Distributed Caching và tối ưu hóa thời gian phản hồi giao dịch.",
      "Kinh nghiệm phối hợp kỹ thuật trong nhóm 4 người theo quy trình Git-flow chuẩn."
    ]
  },

  p3: {
    title: "Booking Platform - Nền tảng Đặt phòng Khách sạn Chuẩn Phân tầng",
    image: "assets/images/project-booking.jpg",
    role: "Full-Stack Developer (Dự án Cá nhân)",
    timeline: "08/2026",
    techStack: ["Java Spring Boot", "React.js", "Spring Security", "JWT Authentication", "MySQL", "Cloudinary API", "RESTful APIs"],
    demoUrl: null,
    githubUrl: null,
    overview: "Ứng dụng web đặt phòng khách sạn full-stack xây dựng theo kiến trúc phân tầng chuẩn mực (Layered Architecture: Controller - Service - Repository) tuân thủ triệt để các nguyên lý Clean Code và thiết kế hướng đối tượng.",
    challenges: [
      {
        problem: "Kiểm tra tính khả dụng phòng trống (Room Availability Check) chính xác theo khoảng thời gian linh hoạt (Check-in / Check-out).",
        solution: "Thiết kế cơ sở dữ liệu MySQL chuẩn hóa, đánh Index trên các trường ngày và trạng thái phòng kết hợp truy vấn tối ưu, loại trừ triệt để tình trạng trùng lịch đặt."
      },
      {
        problem: "Bảo mật thông tin người dùng và phân quyền đa cấp độ giữa Khách hàng và Ban quản trị.",
        solution: "Triển khai Spring Security kết hợp Stateless JWT Authentication, phân quyền rạch ròi theo Role (Admin, Customer) và tích hợp Cloudinary API để nén và tải ảnh phòng tốc độ cao."
      }
    ],
    lessons: [
      "Làm chủ kiến trúc phân tầng trong hệ sinh thái Java Spring Boot và Spring Data JPA/Hibernate.",
      "Kinh nghiệm kết nối Frontend React hiện đại với RESTful API Backend bảo mật.",
      "Tư duy thiết kế cơ sở dữ liệu quan hệ SQL chuẩn hóa và tối ưu hiệu năng truy vấn."
    ]
  },

  p4: {
    title: "DormDeli - Ứng dụng Giao đồ ăn Ký túc xá Sinh viên",
    image: "assets/images/project-dormdeli.jpg",
    role: "Mobile Developer (Nhóm 5 thành viên)",
    timeline: "01/2026",
    techStack: ["Kotlin", "Jetpack Compose", "Android Architecture Components", "Student ID Verification", "Cloudinary API", "RESTful API"],
    demoUrl: null,
    githubUrl: null,
    overview: "Ứng dụng di động chuyên biệt phục vụ nhu cầu đặt và giao đồ ăn nội khu ký túc xá sinh viên, được phát triển bằng ngôn ngữ Kotlin và thư viện Jetpack Compose theo mô hình Declarative UI hiện đại.",
    challenges: [
      {
        problem: "Đảm bảo tính an ninh và chỉ phục vụ cư dân sinh viên cư trú trong khuôn viên ký túc xá.",
        solution: "Tích hợp luồng xác thực mã số sinh viên (Student ID Verification) bảo mật và cơ chế xác thực tài khoản chặt chẽ ngay từ bước đăng ký."
      },
      {
        problem: "Quản lý luồng cập nhật thực đơn và đơn đặt hàng tức thì cho các đối tác gian hàng (Vendors).",
        solution: "Xây dựng Module Quản lý Vendor hoàn chỉnh cho phép đối tác cập nhật danh mục món ăn, tải ảnh món qua Cloudinary và theo dõi tiến độ giao hàng trực quan."
      }
    ],
    lessons: [
      "Làm chủ lập trình Android hiện đại với Kotlin và Jetpack Compose.",
      "Kỹ năng làm việc nhóm 5 thành viên, phân chia module và hợp nhất mã nguồn qua Git.",
      "Tư duy thiết kế trải nghiệm người dùng di động mượt mà, phản hồi nhanh và thân thiện."
    ]
  }
};

// --- 2. Initial Setup on DOM Content Loaded ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initialize Modules
  initThemeToggle();
  initTypingAnimation();
  initProjectFilters();
  initCaseStudyModal();
  initCvModal();
  initContactForm();
  initNavbarScroll();
  initStatsCounter();
  initBackToTop();
  initMobileMenu();
});

// --- 3. Theme Toggle (Dark / Light) ---
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    htmlEl.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    htmlEl.setAttribute("data-theme", "light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      htmlEl.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio-theme", newTheme);

      // Refresh icons if needed
      if (window.lucide) lucide.createIcons();
      showToast(`Đã chuyển sang giao diện ${newTheme === "dark" ? "Tối" : "Sáng"}`);
    });
  }
}

// --- 4. Typing Animation in Hero ---
function initTypingAnimation() {
  const targetEl = document.getElementById("typed-role");
  if (!targetEl) return;

  const roles = [
    "Backend Developer (Spring Boot)",
    "Software Engineer (HCMUS)",
    "Microservices & Scalable Systems",
    "Distributed Systems Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      targetEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      targetEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// --- 5. Project Filtering ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active button style
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categoryAttr = card.getAttribute("data-category") || "";
        const categories = categoryAttr.split(" ");
        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// --- 6. Project Case Study Modal ---
function initCaseStudyModal() {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-project-content");
  const closeBtn = document.getElementById("modal-close-btn");
  const viewBtns = document.querySelectorAll(".view-details-btn");

  if (!modal || !modalContent) return;

  function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const mediaHtml = project.videoEmbedUrl ? `
      <div class="case-study-media-container">
        <div class="case-study-video-wrapper">
          <iframe 
            src="${project.videoEmbedUrl}" 
            title="${project.title} Video Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="case-study-video-hint">
          <span class="video-badge"><i data-lucide="play-circle"></i> Video Demo (Không công khai / Unlisted)</span>
          ${project.videoDirectUrl ? `
            <a href="${project.videoDirectUrl}" target="_blank" rel="noopener noreferrer" class="video-external-link">
              Mở xem trên YouTube <i data-lucide="external-link"></i>
            </a>
          ` : ''}
        </div>
      </div>
    ` : `
      <div class="case-study-hero">
        <img src="${project.image}" alt="${project.title}">
      </div>
    `;

    modalContent.innerHTML = `
      ${mediaHtml}

      <h3 class="case-study-title">${project.title}</h3>
      <div class="case-study-role">
        <strong>Vai trò:</strong> ${project.role} | <strong>Thời gian:</strong> ${project.timeline}
      </div>

      <div class="case-study-section">
        <h4><i data-lucide="layers"></i> Công nghệ sử dụng</h4>
        <div class="skill-tags">
          ${project.techStack.map(t => `<span class="skill-tag high-competence">${t}</span>`).join("")}
        </div>
      </div>

      <div class="case-study-section">
        <h4><i data-lucide="info"></i> Tổng quan & Mục tiêu</h4>
        <p>${project.overview}</p>
      </div>

      <div class="case-study-section">
        <h4><i data-lucide="alert-triangle"></i> Khó khăn gặp phải & Giải pháp đã thực hiện</h4>
        <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 1rem;">
          ${project.challenges.map((c, idx) => `
            <li style="background: var(--bg-surface); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--accent-cyan);">
              <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.3rem;">
                Thách thức ${idx + 1}: ${c.problem}
              </div>
              <div style="color: var(--text-secondary); font-size: 0.92rem;">
                👉 <strong>Cách giải quyết:</strong> ${c.solution}
              </div>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="case-study-section">
        <h4><i data-lucide="graduation-cap"></i> Bài học kinh nghiệm rút ra</h4>
        <ul>
          ${project.lessons.map(l => `<li>${l}</li>`).join("")}
        </ul>
      </div>

      <div class="case-study-actions">
        ${project.githubUrl ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <i data-lucide="github"></i> Xem mã nguồn GitHub
          </a>
        ` : `
          <span class="btn btn-secondary" style="opacity: 0.7; cursor: not-allowed;" title="Mã nguồn dự án đang được chuẩn bị">
            <i data-lucide="lock"></i> Mã nguồn: Đang cập nhật
          </span>
        `}
        ${project.demoUrl ? `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i data-lucide="external-link"></i> Trải nghiệm Demo
          </a>
        ` : `
          <span class="btn btn-outline" style="opacity: 0.7; cursor: not-allowed;" title="Bản demo đang được chuẩn bị">
            <i data-lucide="clock"></i> Demo: Đang chuẩn bị
          </span>
        `}
      </div>
    `;

    // Render newly injected icons
    if (window.lucide) lucide.createIcons();

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    // Immediately stop any video audio by clearing iframe src
    const iframes = modal.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      iframe.src = "";
    });

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    setTimeout(() => {
      if (!modal.classList.contains("active")) {
        modalContent.innerHTML = "";
      }
    }, 250);
  }

  viewBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = btn.getAttribute("data-project");
      openProjectModal(projId);
    });
  });

  const watchVideoBtns = document.querySelectorAll(".watch-video-btn");
  watchVideoBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const projId = btn.getAttribute("data-project");
      openProjectModal(projId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// --- 7. Quick CV Modal ---
function initCvModal() {
  const cvBtn = document.getElementById("btn-quick-cv");
  const cvModal = document.getElementById("cv-modal");
  const cvCloseBtn = document.getElementById("cv-modal-close");

  if (!cvModal) return;

  function openCvModal() {
    cvModal.classList.add("active");
    cvModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  function closeCvModal() {
    cvModal.classList.remove("active");
    cvModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (cvBtn) {
    cvBtn.addEventListener("click", openCvModal);
  }

  if (cvCloseBtn) {
    cvCloseBtn.addEventListener("click", closeCvModal);
  }

  cvModal.addEventListener("click", (e) => {
    if (e.target === cvModal) closeCvModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModal.classList.contains("active")) {
      closeCvModal();
    }
  });
}

// --- 8. Contact Form Handling & Validation ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("sender-name");
  const emailInput = document.getElementById("sender-email");
  const subjectInput = document.getElementById("sender-subject");
  const messageInput = document.getElementById("sender-message");
  const submitBtn = document.getElementById("btn-submit-contact");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setFieldError(fieldId, errorMsg) {
    const errorEl = document.getElementById(fieldId);
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.toggle("active", Boolean(errorMsg));
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (!nameInput.value.trim()) {
      setFieldError("error-name", "Vui lòng nhập họ tên hoặc tên công ty");
      isValid = false;
    } else {
      setFieldError("error-name", "");
    }

    // Email validation
    if (!emailInput.value.trim()) {
      setFieldError("error-email", "Vui lòng nhập địa chỉ email");
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      setFieldError("error-email", "Địa chỉ email không đúng định dạng (VD: hr@tech.com)");
      isValid = false;
    } else {
      setFieldError("error-email", "");
    }

    // Subject validation
    if (!subjectInput.value.trim()) {
      setFieldError("error-subject", "Vui lòng nhập tiêu đề thư");
      isValid = false;
    } else {
      setFieldError("error-subject", "");
    }

    // Message validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setFieldError("error-message", "Nội dung tin nhắn cần tối thiểu 10 ký tự");
      isValid = false;
    } else {
      setFieldError("error-message", "");
    }

    if (!isValid) return;

    // Simulate sending with loading state
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Đang gửi thông tin...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
      form.reset();
      showToast("✨ Đã gửi tin nhắn thành công! Cảm ơn nhà tuyển dụng đã quan tâm, tôi sẽ phản hồi trong thời gian sớm nhất.", "success");
    }, 1200);
  });
}

// --- 9. Toast Notification System ---
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : type === "error" ? "toast-error" : ""}`;
  
  const iconMarkup = type === "success" ? "✓" : "ℹ";
  toast.innerHTML = `<span style="font-weight: bold; color: var(--accent-cyan);">${iconMarkup}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// --- 10. Navbar Scroll Effect & Active Section Spy ---
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    // Navbar glass blur intensification on scroll
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active Section Spy
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

// --- 11. Animated Stats Counter ---
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(el => {
          const target = parseFloat(el.getAttribute("data-target"));
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const format = el.getAttribute("data-format");
            if (format === "decimal1") {
              el.textContent = current.toFixed(1);
            } else if (format === "scholarship") {
              el.textContent = "HK1";
            } else if (isDecimal) {
              el.textContent = current.toFixed(2);
            } else if (el.textContent.includes("+")) {
              el.textContent = Math.floor(current) + "+";
            } else if (el.textContent.includes("%")) {
              el.textContent = Math.floor(current) + "%";
            } else {
              el.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --- 12. Back to Top Button ---
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.pointerEvents = "auto";
    } else {
      backToTopBtn.style.opacity = "0.5";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// --- 13. Mobile Menu Navigation ---
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}
