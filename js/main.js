// Logic tương tác chính cho Website Giới thiệu Đại học Bách Khoa Hà Nội (HUST)

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderStats();
    renderCoreValues();
    renderSchools();
    renderMajors();
    renderTimeline();
    renderAdmissions();
    renderCampusGallery();
    initMajorSearchFilter();
    initQuiz();
    initContactForm();

    // Khởi tạo các icon từ Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

/* -------------------------------------------------------------
 * 1. NAVIGATION & SCROLL
 * ------------------------------------------------------------- */
function initNavigation() {
    const navbar = document.getElementById("main-navbar");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Hiệu ứng đổ bóng và mờ khi cuộn trang
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("shadow-md", "bg-white/95");
            navbar.classList.remove("bg-white/85");
        } else {
            navbar.classList.remove("shadow-md");
            navbar.classList.add("bg-white/85");
        }
    });

    // Bật/tắt menu mobile
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }
}

/* -------------------------------------------------------------
 * 2. STATS & ANIMATED COUNTER
 * ------------------------------------------------------------- */
function renderStats() {
    const container = document.getElementById("stats-grid");
    if (!container) return;

    container.innerHTML = HUST_DATA.stats.map(stat => `
        <div class="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center text-white card-hover-effect">
            <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center">
                <i data-lucide="${stat.icon}" class="w-6 h-6"></i>
            </div>
            <div class="text-3xl lg:text-4xl font-black mb-1 font-mono tracking-tight">
                <span class="counter-val" data-target="${stat.value}">0</span>${stat.suffix}
            </div>
            <div class="text-xs lg:text-sm text-slate-200 font-medium">${stat.label}</div>
        </div>
    `).join("");

    // Kích hoạt animation đếm số khi cuộn tới
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = container.querySelectorAll(".counter-val");
                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    const duration = 1800; // ms
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.innerText = target.toLocaleString('vi-VN');
                            clearInterval(timer);
                        } else {
                            counter.innerText = Math.floor(current).toLocaleString('vi-VN');
                        }
                    }, stepTime);
                });
                obs.disconnect(); // Chỉ chạy 1 lần
            }
        });
    }, { threshold: 0.3 });

    observer.observe(container);
}

/* -------------------------------------------------------------
 * 3. CORE VALUES (GIÁ TRỊ CỐT LÕI)
 * ------------------------------------------------------------- */
function renderCoreValues() {
    const container = document.getElementById("core-values-grid");
    if (!container) return;

    container.innerHTML = HUST_DATA.coreValues.map(item => `
        <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-red-300 transition-all card-hover-effect">
            <div class="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <i data-lucide="${item.icon}" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">${item.title}</h4>
            <p class="text-slate-600 text-sm leading-relaxed">${item.desc}</p>
        </div>
    `).join("");
}

/* -------------------------------------------------------------
 * 4. SCHOOLS & COLLEGES (CÁC TRƯỜNG & VIỆN THÀNH VIÊN)
 * ------------------------------------------------------------- */
function renderSchools() {
    const container = document.getElementById("schools-grid");
    if (!container) return;

    container.innerHTML = HUST_DATA.schools.map(school => `
        <div class="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm card-hover-effect group">
            <div class="h-3 bg-gradient-to-r ${school.color}"></div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <span class="px-2.5 py-1 text-xs font-bold rounded-lg ${school.bgSoft}">
                            ${school.code}
                        </span>
                        <span class="text-xs font-semibold text-red-600 flex items-center gap-1">
                            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${school.badge}
                        </span>
                    </div>

                    <h3 class="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-1">
                        ${school.name}
                    </h3>
                    <p class="text-xs text-slate-500 italic mb-4 font-sans">${school.enName}</p>

                    <p class="text-slate-600 text-sm leading-relaxed mb-4">
                        ${school.shortDesc}
                    </p>
                </div>

                <div class="pt-4 border-t border-slate-100">
                    <div class="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Nhóm ngành tiêu biểu:</div>
                    <div class="flex flex-wrap gap-1.5 mb-5">
                        ${school.majors.slice(0, 3).map(m => `
                            <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                                ${m.split(" - ")[0]}
                            </span>
                        `).join("")}
                        ${school.majors.length > 3 ? `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-xs font-medium">+${school.majors.length - 3}</span>` : ""}
                    </div>

                    <button onclick="openSchoolModal('${school.id}')" class="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-700 hover:bg-red-700 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                        <span>Khám phá chi tiết</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

/* -------------------------------------------------------------
 * 5. MAJORS & ADMISSIONS SEARCH / FILTER
 * ------------------------------------------------------------- */
let currentCategoryFilter = "all";
let currentSearchQuery = "";

function initMajorSearchFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("major-search-input");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategoryFilter = btn.getAttribute("data-category");
            renderMajors();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            renderMajors();
        });
    }
}

function renderMajors() {
    const container = document.getElementById("majors-grid");
    const emptyState = document.getElementById("majors-empty-state");
    if (!container) return;

    let filtered = HUST_DATA.majors.filter(major => {
        const matchesCategory = currentCategoryFilter === "all" || major.schoolId === currentCategoryFilter;
        const matchesSearch = !currentSearchQuery || 
            major.name.toLowerCase().includes(currentSearchQuery) ||
            major.code.toLowerCase().includes(currentSearchQuery) ||
            major.tags.some(t => t.toLowerCase().includes(currentSearchQuery)) ||
            major.school.toLowerCase().includes(currentSearchQuery);

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = "";
        if (emptyState) emptyState.classList.remove("hidden");
        return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    container.innerHTML = filtered.map(major => `
        <div class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm card-hover-effect">
            <div>
                <div class="flex items-start justify-between gap-3 mb-2">
                    <span class="px-2.5 py-1 rounded-lg bg-red-50 text-red-700 font-mono font-bold text-sm border border-red-200">
                        ${major.code}
                    </span>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        ${major.duration}
                    </span>
                </div>

                <h4 class="text-lg font-bold text-slate-900 mb-1 hover:text-red-700 transition-colors">
                    ${major.name}
                </h4>
                <div class="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1">
                    <i data-lucide="building-2" class="w-3.5 h-3.5"></i> ${major.school}
                </div>

                <p class="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                    ${major.desc}
                </p>

                <div class="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                        <span class="text-slate-400 block font-medium">Điểm chuẩn TSA:</span>
                        <span class="font-bold text-red-700 font-mono text-sm">${major.tsaScore}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block font-medium">Điểm THPT QG:</span>
                        <span class="font-bold text-slate-800 font-mono text-sm">${major.thptScore}</span>
                    </div>
                </div>

                <div class="flex flex-wrap gap-1 mb-4">
                    ${major.tags.map(t => `<span class="text-[11px] px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-medium">#${t}</span>`).join("")}
                </div>
            </div>

            <button onclick="openMajorModal('${major.code}')" class="w-full py-2 rounded-xl bg-slate-900 hover:bg-red-700 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5">
                <span>Xem chuẩn đầu ra & cơ hội việc làm</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </button>
        </div>
    `).join("");

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/* -------------------------------------------------------------
 * 6. ADMISSIONS METHODS (PHƯƠNG THỨC XÉT TUYỂN)
 * ------------------------------------------------------------- */
function renderAdmissions() {
    const container = document.getElementById("admissions-grid");
    if (!container) return;

    container.innerHTML = HUST_DATA.admissionsMethods.map(method => `
        <div class="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 relative shadow-sm card-hover-effect flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-4xl font-black font-mono text-red-100 select-none">
                        ${method.number}
                    </span>
                    <span class="text-xs font-bold px-3 py-1 rounded-full ${method.badgeColor}">
                        ${method.badge}
                    </span>
                </div>

                <h3 class="text-xl font-bold text-slate-900 mb-1">
                    ${method.title}
                </h3>
                <div class="text-sm font-semibold text-red-600 mb-3 flex items-center gap-1">
                    <i data-lucide="pie-chart" class="w-4 h-4"></i> ${method.target}
                </div>

                <p class="text-slate-600 text-sm leading-relaxed mb-6">
                    ${method.desc}
                </p>

                <ul class="space-y-2.5 mb-6 text-sm text-slate-700">
                    ${method.points.map(pt => `
                        <li class="flex items-start gap-2">
                            <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                            <span>${pt}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>

            <a href="https://ts.hust.edu.vn" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 rounded-xl border border-slate-300 hover:border-red-600 hover:text-red-700 text-slate-800 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5">
                <span>Tra cứu đề án tuyển sinh chi tiết</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>
    `).join("");
}

/* -------------------------------------------------------------
 * 7. TIMELINE HISTORY (LỊCH SỬ PHÁT TRIỂN)
 * ------------------------------------------------------------- */
function renderTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    container.innerHTML = HUST_DATA.historyTimeline.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return `
            <div class="relative flex flex-col md:flex-row items-center mb-8 last:mb-0">
                <!-- Timeline Node Marker -->
                <div class="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white z-10">
                    ${idx + 1}
                </div>

                <!-- Content Left / Right -->
                <div class="w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:hidden'}">
                    ${isEven ? `
                        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm card-hover-effect inline-block text-left">
                            <span class="px-3 py-1 bg-red-100 text-red-700 font-mono font-bold text-sm rounded-full mb-2 inline-block">${item.year}</span>
                            <h4 class="text-lg font-bold text-slate-900 mb-1">${item.title}</h4>
                            <p class="text-slate-600 text-sm leading-relaxed">${item.desc}</p>
                        </div>
                    ` : ''}
                </div>

                <div class="w-full md:w-1/2 pl-14 md:pl-12 ${!isEven ? '' : 'hidden md:block'}">
                    ${!isEven ? `
                        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm card-hover-effect">
                            <span class="px-3 py-1 bg-amber-100 text-amber-800 font-mono font-bold text-sm rounded-full mb-2 inline-block">${item.year}</span>
                            <h4 class="text-lg font-bold text-slate-900 mb-1">${item.title}</h4>
                            <p class="text-slate-600 text-sm leading-relaxed">${item.desc}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join("");
}

/* -------------------------------------------------------------
 * 8. CAMPUS HIGHLIGHTS GALLERY
 * ------------------------------------------------------------- */
function renderCampusGallery() {
    const container = document.getElementById("campus-gallery");
    if (!container) return;

    container.innerHTML = HUST_DATA.campusHighlights.map((spot, idx) => `
        <div class="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer card-hover-effect" onclick="openGalleryModal(${idx})">
            <img src="${spot.image}" alt="${spot.title}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span class="text-xs font-semibold text-amber-300 uppercase tracking-wide mb-1">${spot.sub}</span>
                <h4 class="text-lg font-bold group-hover:text-amber-300 transition-colors">${spot.title}</h4>
            </div>
            <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <i data-lucide="zoom-in" class="w-4 h-4"></i>
            </div>
        </div>
    `).join("");
}

/* -------------------------------------------------------------
 * 9. MINI QUIZ: "BẠN HỢP VỚI TRƯỜNG/NGÀNH NÀO TẠI HUST?"
 * ------------------------------------------------------------- */
let currentQuizStep = 0;
let userAnswers = {};

function initQuiz() {
    currentQuizStep = 0;
    userAnswers = {};
    renderQuizQuestion();

    const restartBtn = document.getElementById("quiz-restart-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            currentQuizStep = 0;
            userAnswers = {};
            document.getElementById("quiz-result-box").classList.add("hidden");
            document.getElementById("quiz-card-step").classList.remove("hidden");
            renderQuizQuestion();
        });
    }
}

function renderQuizQuestion() {
    const qData = HUST_DATA.quizQuestions[currentQuizStep];
    const totalQ = HUST_DATA.quizQuestions.length;

    const progressEl = document.getElementById("quiz-progress-bar");
    const stepLabel = document.getElementById("quiz-step-label");
    const questionTitle = document.getElementById("quiz-question-title");
    const optionsContainer = document.getElementById("quiz-options-container");

    if (!qData || !progressEl || !optionsContainer) return;

    progressEl.style.width = `${((currentQuizStep + 1) / totalQ) * 100}%`;
    stepLabel.innerText = `Câu hỏi ${currentQuizStep + 1} / ${totalQ}`;
    questionTitle.innerText = qData.question;

    optionsContainer.innerHTML = qData.options.map((opt, i) => `
        <button onclick="handleQuizAnswer('${opt.category}')" class="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-red-600 hover:bg-red-50/60 transition-all font-medium text-slate-800 text-sm flex items-start gap-3 group">
            <span class="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
                ${String.fromCharCode(65 + i)}
            </span>
            <span class="mt-0.5 leading-relaxed">${opt.text}</span>
        </button>
    `).join("");

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

window.handleQuizAnswer = function(category) {
    userAnswers[category] = (userAnswers[category] || 0) + 1;

    if (currentQuizStep < HUST_DATA.quizQuestions.length - 1) {
        currentQuizStep++;
        renderQuizQuestion();
    } else {
        showQuizResult();
    }
};

function showQuizResult() {
    document.getElementById("quiz-card-step").classList.add("hidden");
    const resultBox = document.getElementById("quiz-result-box");
    resultBox.classList.remove("hidden");

    // Tìm category có điểm số cao nhất
    let bestCat = "soict";
    let maxScore = -1;
    for (const [cat, count] of Object.entries(userAnswers)) {
        if (count > maxScore) {
            maxScore = count;
            bestCat = cat;
        }
    }

    const res = HUST_DATA.quizResults[bestCat] || HUST_DATA.quizResults["soict"];

    document.getElementById("quiz-result-badge").innerText = res.badge;
    document.getElementById("quiz-result-title").innerText = res.title;
    document.getElementById("quiz-result-desc").innerText = res.desc;

    const majorsContainer = document.getElementById("quiz-suggested-majors");
    majorsContainer.innerHTML = res.suggestedMajors.map(m => `
        <div class="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
            <span class="font-bold text-slate-800 text-sm">${m.name}</span>
            <span class="px-2 py-0.5 rounded bg-red-100 text-red-700 font-mono font-bold text-xs">${m.code}</span>
        </div>
    `).join("");

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/* -------------------------------------------------------------
 * 10. MODALS (TRƯỜNG VIỆN, NGÀNH HỌC, HÌNH ẢNH)
 * ------------------------------------------------------------- */
const mainModal = document.getElementById("universal-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

window.openSchoolModal = function(schoolId) {
    const school = HUST_DATA.schools.find(s => s.id === schoolId);
    if (!school || !mainModal) return;

    modalTitle.innerHTML = `
        <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-md ${school.bgSoft} text-xs font-bold font-mono">${school.code}</span>
            <span class="text-slate-900">${school.name}</span>
        </div>
    `;

    modalBody.innerHTML = `
        <div class="space-y-4 text-slate-700 text-sm leading-relaxed">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div class="text-xs text-slate-400 font-medium uppercase mb-1">Tên tiếng Anh:</div>
                <div class="font-semibold text-slate-800">${school.enName}</div>
            </div>

            <div>
                <h5 class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i data-lucide="info" class="w-4 h-4 text-red-600"></i> Giới thiệu & Sứ mệnh:
                </h5>
                <p>${school.fullDesc}</p>
            </div>

            <div>
                <h5 class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i data-lucide="microscope" class="w-4 h-4 text-amber-600"></i> Cơ sở vật chất & Phòng Lab nghiên cứu:
                </h5>
                <p>${school.facilities}</p>
            </div>

            <div>
                <h5 class="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <i data-lucide="graduation-cap" class="w-4 h-4 text-blue-600"></i> Danh mục các ngành đào tạo:
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${school.majors.map(m => `
                        <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200/70 text-xs font-medium text-slate-800 flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            <span>${m}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `;

    openModal();
};

window.openMajorModal = function(code) {
    const major = HUST_DATA.majors.find(m => m.code === code);
    if (!major || !mainModal) return;

    modalTitle.innerHTML = `
        <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold font-mono">${major.code}</span>
            <span class="text-slate-900">${major.name}</span>
        </div>
    `;

    modalBody.innerHTML = `
        <div class="space-y-4 text-slate-700 text-sm leading-relaxed">
            <div class="p-4 bg-red-50/50 rounded-xl border border-red-100">
                <div class="text-xs text-slate-500 font-medium">Đơn vị quản lý:</div>
                <div class="font-bold text-red-800 text-base">${major.school}</div>
                <div class="mt-2 flex flex-wrap gap-2 text-xs">
                    <span class="px-2 py-0.5 rounded bg-white font-medium border border-slate-200">Thời gian: <strong>${major.duration}</strong></span>
                    <span class="px-2 py-0.5 rounded bg-white font-medium border border-slate-200">Hệ đào tạo: <strong>${major.program}</strong></span>
                </div>
            </div>

            <div>
                <h5 class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i data-lucide="file-text" class="w-4 h-4 text-slate-700"></i> Tổng quan chương trình:
                </h5>
                <p>${major.desc}</p>
            </div>

            <div>
                <h5 class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <i data-lucide="briefcase" class="w-4 h-4 text-emerald-600"></i> Chuẩn đầu ra & Vị trí việc làm:
                </h5>
                <p class="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-emerald-950 font-medium">
                    ${major.career}
                </p>
            </div>

            <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span class="text-xs text-slate-500 block mb-0.5">Điểm sàn kỳ thi TSA (tham khảo)</span>
                    <span class="text-xl font-bold font-mono text-red-700">${major.tsaScore}</span>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span class="text-xs text-slate-500 block mb-0.5">Điểm chuẩn THPT (tham khảo)</span>
                    <span class="text-xl font-bold font-mono text-slate-900">${major.thptScore}</span>
                </div>
            </div>
        </div>
    `;

    openModal();
};

window.openGalleryModal = function(index) {
    const item = HUST_DATA.campusHighlights[index];
    if (!item || !mainModal) return;

    modalTitle.innerText = item.title;
    modalBody.innerHTML = `
        <div class="space-y-4">
            <img src="${item.image}" alt="${item.title}" class="w-full h-80 object-cover rounded-xl shadow-md">
            <div>
                <div class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">${item.sub}</div>
                <p class="text-slate-700 text-sm leading-relaxed">${item.desc}</p>
            </div>
        </div>
    `;

    openModal();
};

function openModal() {
    if (!mainModal) return;
    mainModal.classList.remove("modal-hidden");
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

window.closeUniversalModal = function() {
    if (!mainModal) return;
    mainModal.classList.add("modal-hidden");
};

/* -------------------------------------------------------------
 * 11. CONTACT FORM & TOAST
 * ------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById("hust-contact-form");
    const toast = document.getElementById("toast-notification");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Giả lập gửi form thành công
        const btn = form.querySelector("button[type='submit']");
        const originalBtnText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Đang gửi thông tin...`;
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalBtnText;
            form.reset();

            // Hiển thị Toast
            if (toast) {
                toast.classList.remove("hide-toast");
                setTimeout(() => {
                    toast.classList.add("hide-toast");
                }, 4500);
            }
        }, 800);
    });
}
