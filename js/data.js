// Dữ liệu Đại học Bách Khoa Hà Nội (HUST)

const HUST_DATA = {
    overview: {
        name: "Đại học Bách Khoa Hà Nội",
        enName: "Hanoi University of Science and Technology (HUST)",
        slogan: "Một tình yêu, một Bách Khoa",
        established: 1956,
        address: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
        phone: "(+84) 24 3869 4242",
        admissionsHotline: "(+84) 938 69 2015",
        email: "hust@hust.edu.vn",
        admissionEmail: "tuyensinh@hust.edu.vn",
        website: "https://hust.edu.vn"
    },

    stats: [
        { id: "stat-1", value: 1956, label: "Năm thành lập", suffix: "", icon: "calendar" },
        { id: "stat-2", value: 35000, label: "Sinh viên & Học viên", suffix: "+", icon: "users" },
        { id: "stat-3", value: 1700, label: "Cán bộ & Giảng viên", suffix: "+", icon: "award" },
        { id: "stat-4", value: 75, label: "Chương trình đào tạo", suffix: "+", icon: "book-open" },
        { id: "stat-5", value: 26, label: "Héc-ta khuôn viên trung tâm", suffix: " ha", icon: "map-pin" },
        { id: "stat-6", value: 1, label: "Top ĐH Kỹ thuật tại VN", suffix: "st", icon: "trophy" }
    ],

    coreValues: [
        {
            title: "Trách nhiệm (Responsibility)",
            desc: "Trách nhiệm với người học, với sự phát triển bền vững của xã hội và vị thế khoa học công nghệ của đất nước.",
            icon: "shield-check"
        },
        {
            title: "Sáng tạo (Creativity)",
            desc: "Không ngừng đổi mới, tiên phong đón đầu các xu thế công nghệ mới và kiến tạo giải pháp đột phá.",
            icon: "sparkles"
        },
        {
            title: "Chính trực (Integrity)",
            desc: "Minh bạch, trung thực và liêm chính trong học thuật, quản trị đại học và mọi hoạt động nghiên cứu.",
            icon: "check-circle-2"
        },
        {
            title: "Xuất sắc (Excellence)",
            desc: "Khát vọng vươn tới chuẩn mực chất lượng quốc tế cao nhất trong đào tạo, nghiên cứu và phụng sự.",
            icon: "medal"
        }
    ],

    schools: [
        {
            id: "soict",
            code: "SoICT",
            name: "Trường Công nghệ Thông tin & Truyền thông",
            enName: "School of Information and Communication Technology",
            category: "school",
            icon: "cpu",
            color: "from-blue-600 to-indigo-700",
            bgSoft: "bg-blue-50 text-blue-700",
            badge: "Top 1 CNTT Việt Nam",
            shortDesc: "Đơn vị đào tạo và nghiên cứu CNTT số một Việt Nam, dẫn đầu về Khoa học máy tính, AI và An toàn thông tin.",
            fullDesc: "Thành lập năm 1995 (tiền thân là Khoa CNTT) và nâng cấp thành Trường thuộc ĐH Bách Khoa Hà Nội năm 2021. SoICT là lá cờ đầu cả nước về nguồn nhân lực công nghệ số chất lượng cao, hợp tác chiến lược với các tập đoàn công nghệ hàng đầu thế giới.",
            majors: ["IT1 - Khoa học Máy tính", "IT2 - Kỹ thuật Máy tính", "IT-E10 - Khoa học Dữ liệu & AI", "IT-E6 - Công nghệ Thông tin Việt - Nhật", "IT-E7 - CNTT Global ICT"],
            facilities: "Phòng thí nghiệm Trí tuệ nhân tạo (BKAI), Lab An toàn thông tin, Trung tâm Nghiên cứu Quốc tế về AI (hợp tác với NAVER)."
        },
        {
            id: "seee",
            code: "SEEE",
            name: "Trường Điện - Điện tử",
            enName: "School of Electrical and Electronic Engineering",
            category: "school",
            icon: "zap",
            color: "from-amber-600 to-red-600",
            bgSoft: "bg-amber-50 text-amber-700",
            badge: "Lõi Công nghệ & Bán dẫn",
            shortDesc: "Trung tâm đào tạo tinh hoa về Điện, Tự động hóa, Vi mạch bán dẫn và Viễn thông tại Việt Nam.",
            fullDesc: "Hợp nhất từ Viện Điện và Viện Điện tử - Viễn thông danh tiếng, SEEE sở hữu đội ngũ nhà khoa học hùng hậu, đóng vai trò nòng cốt trong chiến lược quốc gia phát triển ngành công nghiệp Bán dẫn & Chip vi mạch.",
            majors: ["EE1 - Kỹ thuật Điện", "EE2 - Kỹ thuật Điều khiển & Tự động hóa", "ET1 - Kỹ thuật Điện tử - Viễn thông", "ET-E16 - Kỹ thuật Vi điện tử & Công nghệ Bán dẫn", "ET-E9 - Hệ thống nhúng & IoT"],
            facilities: "Phòng Lab Thiết kế Vi mạch Bán dẫn, Hệ thống Lưới điện thông minh Smart Grid, Phòng Lab Robot công nghiệp."
        },
        {
            id: "sme",
            code: "SME",
            name: "Trường Cơ khí",
            enName: "School of Mechanical Engineering",
            category: "school",
            icon: "cog",
            color: "from-emerald-600 to-teal-700",
            bgSoft: "bg-emerald-50 text-emerald-700",
            badge: "Kỹ thuật Công nghiệp Nòng cốt",
            shortDesc: "Cái nôi chế tạo máy, Cơ điện tử, Kỹ thuật Hàng không và Công nghệ Ô tô hiện đại bậc nhất.",
            fullDesc: "Trường Cơ khí kế thừa truyền thống vẻ vang từ những ngày đầu lập trường năm 1956. Ngày nay, SME tiên phong trong cuộc cách mạng Công nghiệp 4.0 với Cơ điện tử, Robot tự hành, Thiết kế ô tô điện và Hàng không vũ trụ.",
            majors: ["ME1 - Kỹ thuật Cơ điện tử", "ME2 - Kỹ thuật Cơ khí", "TX1 - Kỹ thuật Ô tô", "TE1 - Kỹ thuật Hàng không", "MS2 - Kỹ thuật Hàng không & Vũ trụ"],
            facilities: "Xưởng gia công CNC 5 trục công nghệ cao, Trung tâm Mô phỏng CAD/CAM/CAE, Phòng Thí nghiệm Động cơ & Ô tô hiện đại."
        },
        {
            id: "scls",
            code: "SCLS",
            name: "Trường Hóa và Khoa học Sự sống",
            enName: "School of Chemistry and Life Sciences",
            category: "school",
            icon: "flask-conical",
            color: "from-teal-600 to-cyan-700",
            bgSoft: "bg-teal-50 text-teal-700",
            badge: "Y sinh - Hóa - Môi trường",
            shortDesc: "Đột phá trong Công nghệ Hóa chất, Kỹ thuật Sinh học, Công nghệ Thực phẩm và Môi trường xanh.",
            fullDesc: "Thành lập trên cơ sở sáp nhập Viện Kỹ thuật Hóa học, Viện Công nghệ Sinh học & Công nghệ Thực phẩm và Viện Khoa học & Công nghệ Môi trường. Đơn vị nghiên cứu giải quyết các bài toán lớn về an ninh lương thực, sức khỏe và biến đổi khí hậu.",
            majors: ["CH1 - Kỹ thuật Hóa học", "BF1 - Kỹ thuật Sinh học", "BF2 - Kỹ thuật Thực phẩm", "EV1 - Kỹ thuật Môi trường", "CH-E11 - Kỹ thuật Hóa dược"],
            facilities: "Hệ thống Pilot sản xuất thực phẩm & đồ uống, Phòng phân tích sắc ký khối phổ hiện đại, Lab Nghiên cứu Y sinh và Dược phẩm."
        },
        {
            id: "smse",
            code: "SMSE",
            name: "Trường Vật liệu",
            enName: "School of Materials Science and Engineering",
            category: "school",
            icon: "layers",
            color: "from-purple-600 to-pink-700",
            bgSoft: "bg-purple-50 text-purple-700",
            badge: "Vật liệu Tiên tiến & Năng lượng mới",
            shortDesc: "Nghiên cứu vật liệu bán dẫn thế hệ mới, vật liệu polymer nanocomposite, pin năng lượng và dệt may thông minh.",
            fullDesc: "Được thành lập trên cơ sở liên kết Viện Khoa học & Kỹ thuật Vật liệu, Viện Dệt may - Da giầy & Thời trang. Đón đầu cuộc đua toàn cầu về vật liệu xanh, pin lithium, siêu tụ điện và vật liệu bán dẫn.",
            majors: ["MS1 - Kỹ thuật Vật liệu", "TX2 - Công nghệ Dệt May", "MS-E3 - Khoa học & Kỹ thuật Vật liệu Tiên tiến"],
            facilities: "Kính hiển vi điện tử quét phát xạ trường FE-SEM, Phòng sạch chế tạo màng mỏng bán dẫn, Trung tâm Thử nghiệm vật liệu tiêu chuẩn quốc tế."
        },
        {
            id: "sem",
            code: "SEM",
            name: "Viện Kinh tế & Quản lý",
            enName: "School of Economics and Management",
            category: "institute",
            icon: "trending-up",
            color: "from-rose-600 to-orange-600",
            bgSoft: "bg-rose-50 text-rose-700",
            badge: "Quản trị Kỹ thuật & Kinh tế số",
            shortDesc: "Đào tạo các nhà quản lý, lãnh đạo doanh nghiệp sở hữu tư duy công nghệ và năng lực số sắc bén.",
            fullDesc: "Cung cấp các chương trình đào tạo Quản trị Kinh doanh, Tài chính - Ngân hàng, Logistics và Chuỗi cung ứng với thế mạnh độc đáo: kết hợp sâu sắc giữa tư duy quản lý kinh tế và năng lực công nghệ dữ liệu.",
            majors: ["EM1 - Quản trị Kinh doanh", "EM3 - Kế toán", "EM4 - Tài chính - Ngân hàng", "EM5 - Logistics & Quản lý Chuỗi cung ứng"],
            facilities: "Phòng mô phỏng sàn giao dịch tài chính số, Lab Phân tích Dữ liệu Kinh doanh (Business Analytics Lab)."
        },
        {
            id: "sofl",
            code: "SOFL",
            name: "Khoa Ngoại ngữ",
            enName: "Faculty of Foreign Languages",
            category: "faculty",
            icon: "globe-2",
            color: "from-sky-600 to-blue-700",
            bgSoft: "bg-sky-50 text-sky-700",
            badge: "Ngoại ngữ Chuyên ngành",
            shortDesc: "Cầu nối toàn cầu cho kỹ sư Bách Khoa, đào tạo Tiếng Anh chuyên ngành Khoa học Kỹ thuật và Công nghệ.",
            fullDesc: "Đảm trách đào tạo cử nhân Tiếng Anh KHKT & Công nghệ (FL1) và Tiếng Anh Chuyên nghiệp quốc tế (FL2), đồng thời phụ trách toàn bộ chuẩn đầu ra ngoại ngữ (TOEIC, IELTS) cho sinh viên toàn trường.",
            majors: ["FL1 - Tiếng Anh KHKT & Công nghệ", "FL2 - Tiếng Anh Chuyên nghiệp Quốc tế"],
            facilities: "Phòng Lab học tiếng đa phương tiện hiện đại, Câu lạc bộ tiếng Anh HUST English Zone."
        },
        {
            id: "sam",
            code: "SAM & SEP",
            name: "Khoa Toán - Tin & Vật lý Kỹ thuật",
            enName: "Faculty of Applied Mathematics & Engineering Physics",
            category: "faculty",
            icon: "binary",
            color: "from-indigo-600 to-violet-800",
            bgSoft: "bg-indigo-50 text-indigo-700",
            badge: "Khoa học Cơ bản & Ứng dụng",
            shortDesc: "Nền tảng toán học, giải thuật tính toán và vật lý lượng tử cho mọi ngành kỹ thuật mũi nhọn.",
            fullDesc: "Nơi ươm mầm các tài năng đạt giải Olympic Toán học, Vật lý sinh viên toàn quốc; đào tạo Toán Tin ứng dụng, Kỹ thuật Hạt nhân và Vật lý bán dẫn.",
            majors: ["MI1 - Toán - Tin", "MI2 - Hệ thống thông tin quản lý", "PH1 - Vật lý Kỹ thuật", "PH2 - Kỹ thuật Hạt nhân"],
            facilities: "Phòng tính toán hiệu năng cao (HPC), Lab Quang học & Laser lượng tử, Trung tâm Vật lý ứng dụng."
        }
    ],

    majors: [
        {
            code: "IT1",
            name: "Khoa học Máy tính",
            school: "Trường CNTT & TT (SoICT)",
            schoolId: "soict",
            program: "Chuẩn / Cử nhân - Kỹ sư",
            duration: "4 - 5 năm",
            tsaScore: "75+ / 100",
            thptScore: "28.5+ / 30",
            tags: ["AI", "Thuật toán", "Phần mềm", "Hàng đầu"],
            career: "Kỹ sư phần mềm cao cấp, Kiến trúc sư hệ thống, Chuyên gia Trí tuệ nhân tạo, Nhà nghiên cứu thuật toán tại các tập đoàn quốc tế.",
            desc: "Chương trình đào tạo danh giá nhất Việt Nam về CNTT với tỷ lệ sinh viên tốt nghiệp có việc làm 100%, mức lương khởi điểm thuộc hàng cao nhất."
        },
        {
            code: "IT-E10",
            name: "Khoa học Dữ liệu và Trí tuệ Nhân tạo (DS&AI)",
            school: "Trường CNTT & TT (SoICT)",
            schoolId: "soict",
            program: "Chương trình Tiên tiến (Dạy bằng Tiếng Anh)",
            duration: "4 - 5 năm",
            tsaScore: "78+ / 100",
            thptScore: "28.8+ / 30",
            tags: ["AI", "Data Science", "Machine Learning", "Elitech"],
            career: "Kỹ sư AI/ML, Nhà khoa học dữ liệu, Chuyên gia Big Data tại Google, Meta, VinAI, NAVER, FPT.",
            desc: "Được thiết kế theo chuẩn giáo trình của các đại học hàng đầu thế giới (Stanford, MIT), học tập hoàn toàn bằng tiếng Anh với các giáo sư đầu ngành."
        },
        {
            code: "IT2",
            name: "Kỹ thuật Máy tính",
            school: "Trường CNTT & TT (SoICT)",
            schoolId: "soict",
            program: "Chuẩn / Cử nhân - Kỹ sư",
            duration: "4 - 5 năm",
            tsaScore: "73+ / 100",
            thptScore: "27.8+ / 30",
            tags: ["Nhúng", "IoT", "Phần cứng & Mềm", "Robotics"],
            career: "Kỹ sư thiết kế vi mạch số, Lập trình viên hệ thống nhúng, Kỹ sư IoT, Chuyên gia mạng máy tính.",
            desc: "Kết hợp hài hòa giữa phần cứng và phần mềm máy tính, đón đầu xu thế thiết kế chip thông minh và internet vạn vật."
        },
        {
            code: "EE2",
            name: "Kỹ thuật Điều khiển & Tự động hóa",
            school: "Trường Điện - Điện tử (SEEE)",
            schoolId: "seee",
            program: "Chuẩn & Chương trình Tiên tiến",
            duration: "4 - 5 năm",
            tsaScore: "74+ / 100",
            thptScore: "28.0+ / 30",
            tags: ["Tự động hóa", "Robot", "Smart Factory", "PLC"],
            career: "Kỹ sư tự động hóa nhà máy, Kỹ sư điều khiển robot công nghiệp, Quản lý dây chuyền sản xuất thông minh.",
            desc: "Ngành học xương sống của nền công nghiệp hiện đại, luôn có nhu cầu tuyển dụng cực lớn từ Samsung, LG, VinFast, ABB, Siemens."
        },
        {
            code: "ET-E16",
            name: "Kỹ thuật Vi điện tử & Công nghệ Bán dẫn",
            school: "Trường Điện - Điện tử (SEEE)",
            schoolId: "seee",
            program: "Chương trình Tiên tiến (Elitech)",
            duration: "4 - 5 năm",
            tsaScore: "72+ / 100",
            thptScore: "27.5+ / 30",
            tags: ["Bán dẫn", "Thiết kế Chip", "Vi mạch", "Hot Trend"],
            career: "Kỹ sư thiết kế vi mạch (IC Design), Kỹ sư kiểm thử bán dẫn, Chuyên gia công nghệ vật liệu bán dẫn tại Synopsys, Qualcomm, NVIDIA, Marvell.",
            desc: "Ngành học đón đầu làn sóng đầu tư bán dẫn trị giá hàng tỷ USD vào Việt Nam, cam kết học bổng và cơ hội việc làm toàn cầu."
        },
        {
            code: "ME1",
            name: "Kỹ thuật Cơ điện tử",
            school: "Trường Cơ khí (SME)",
            schoolId: "sme",
            program: "Chuẩn & Hợp tác Quốc tế",
            duration: "4 - 5 năm",
            tsaScore: "71+ / 100",
            thptScore: "27.2+ / 30",
            tags: ["Robotics", "Cơ điện tử", "Công nghệ 4.0"],
            career: "Kỹ sư thiết kế Robot, Kỹ sư tích hợp hệ thống cơ điện tử, Trưởng nhóm R&D tại các công ty chế tạo máy chính xác.",
            desc: "Sự giao thoa đỉnh cao giữa Cơ khí chính xác, Điện tử thông minh và Lập trình điều khiển hiện đại."
        },
        {
            code: "TX1",
            name: "Kỹ thuật Ô tô",
            school: "Trường Cơ khí (SME)",
            schoolId: "sme",
            program: "Chuẩn / Elitech Ô tô điện",
            duration: "4 - 5 năm",
            tsaScore: "70+ / 100",
            thptScore: "26.9+ / 30",
            tags: ["Ô tô điện", "Autonomous Car", "Cơ khí"],
            career: "Kỹ sư nghiên cứu phát triển xe điện, Kỹ sư khí động học và an toàn ô tô tại VinFast, Toyota, Honda, Hyundai.",
            desc: "Nơi đào tạo các thế hệ kỹ sư ô tô số 1 Việt Nam, đón đầu kỷ nguyên xe điện và phương tiện giao thông tự hành thông minh."
        },
        {
            code: "CH1",
            name: "Kỹ thuật Hóa học",
            school: "Trường Hóa & KH Sự sống (SCLS)",
            schoolId: "scls",
            program: "Chuẩn / Cử nhân - Kỹ sư",
            duration: "4 - 5 năm",
            tsaScore: "62+ / 100",
            thptScore: "25.0+ / 30",
            tags: ["Lọc hóa dầu", "Polyme", "Hóa chất", "Mỹ phẩm"],
            career: "Kỹ sư vận hành nhà máy hóa chất, chuyên viên nghiên cứu và phát triển sản phẩm (R&D) tại các tập đoàn dầu khí, sơn, mỹ phẩm, hóa chất.",
            desc: "Ngành học nền tảng tạo ra mọi nguyên vật liệu xung quanh đời sống con người, đóng góp lớn vào nền kinh tế công nghiệp quốc gia."
        },
        {
            code: "BF1",
            name: "Kỹ thuật Sinh học",
            school: "Trường Hóa & KH Sự sống (SCLS)",
            schoolId: "scls",
            program: "Chuẩn & Tiên tiến",
            duration: "4 - 5 năm",
            tsaScore: "63+ / 100",
            thptScore: "25.2+ / 30",
            tags: ["Y sinh", "Dược phẩm", "Vaccine", "BioTech"],
            career: "Kỹ sư công nghệ sinh học y dược, nghiên cứu viên sản xuất vaccine, giám đốc chất lượng tại các công ty dược và chế phẩm sinh học.",
            desc: "Ứng dụng các công nghệ phân tử hiện đại vào y dược, nông nghiệp công nghệ cao và giải pháp bảo vệ môi trường sinh thái."
        },
        {
            code: "MS1",
            name: "Kỹ thuật Vật liệu",
            school: "Trường Vật liệu (SMSE)",
            schoolId: "smse",
            program: "Chuẩn / Hợp tác Quốc tế",
            duration: "4 - 5 năm",
            tsaScore: "60+ / 100",
            thptScore: "24.5+ / 30",
            tags: ["Vật liệu Nano", "Pin Năng lượng", "Luyện kim"],
            career: "Kỹ sư nghiên cứu pin thế hệ mới, kỹ sư kiểm soát chất lượng vật liệu, chuyên gia vật liệu bán dẫn.",
            desc: "Được trang bị phòng thí nghiệm hiện đại chuẩn quốc tế, đón đầu xu hướng vật liệu siêu nhẹ, siêu bền và pin lưu trữ năng lượng xanh."
        },
        {
            code: "EM1",
            name: "Quản trị Kinh doanh (Logistics / Marketing / Phân tích)",
            school: "Viện Kinh tế & Quản lý (SEM)",
            schoolId: "sem",
            program: "Chuẩn & Chương trình Liên kết Quốc tế",
            duration: "4 năm",
            tsaScore: "65+ / 100",
            thptScore: "26.0+ / 30",
            tags: ["Kinh tế số", "Quản trị", "Logistics", "Khởi nghiệp"],
            career: "Chuyên viên phân tích kinh doanh, Quản lý chuỗi cung ứng, Giám đốc dự án công nghệ, Nhà sáng lập startup.",
            desc: "Sự khác biệt vượt trội: Sinh viên được đào tạo tư duy kinh doanh hiện đại song hành cùng kỹ năng phân tích dữ liệu và hiểu biết công nghệ kỹ thuật."
        },
        {
            code: "FL1",
            name: "Tiếng Anh Khoa học Kỹ thuật & Công nghệ",
            school: "Khoa Ngoại ngữ (SOFL)",
            schoolId: "sofl",
            program: "Cử nhân (4 năm)",
            duration: "4 năm",
            tsaScore: "64+ / 100",
            thptScore: "25.8+ / 30",
            tags: ["Biên phiên dịch", "English for Tech", "Giao lưu QT"],
            career: "Biên phiên dịch kỹ thuật công nghệ cao, Chuyên viên đối ngoại doanh nghiệp FDI, Cán bộ dự án quốc tế, Giảng viên tiếng Anh.",
            desc: "Chương trình duy nhất tại Việt Nam trang bị chuyên sâu vốn từ vựng và tư duy tiếng Anh trong các lĩnh vực kỹ thuật, công nghệ và chuyển giao tri thức."
        }
    ],

    historyTimeline: [
        {
            year: "1956",
            title: "Thành lập Trường Đại học Bách Khoa",
            desc: "Ngày 15/10/1956, Lễ khai giảng khóa 1 Trường ĐH Bách Khoa Hà Nội được tổ chức trọng thể tại Việt Nam Học xá. Đây là trường đại học kỹ thuật đa ngành đầu tiên của nước Việt Nam Dân chủ Cộng hòa."
        },
        {
            year: "1958 - 1962",
            title: "Chủ tịch Hồ Chí Minh về thăm trường 3 lần",
            desc: "Bác Hồ đã 3 lần về thăm thầy và trò Bách Khoa (1958, 1960, 1962), để lại lời căn dặn thiêng liêng: 'Đoàn kết chặt chẽ, cố gắng học tập, tiến bộ không ngừng, phục vụ nhân dân'."
        },
        {
            year: "1965 - 1975",
            title: "Vừa giảng dạy, vừa nghiên cứu phục vụ kháng chiến",
            desc: "Hàng ngàn cán bộ, sinh viên Bách Khoa lên đường nhập ngũ ('Xẻ dọc Trường Sơn đi cứu nước'). Các nhà khoa học Bách Khoa chế tạo thành công thiết bị rà phá bom từ trường, khí tài quân sự góp phần giải phóng miền Nam."
        },
        {
            year: "2006",
            title: "Đón nhận Huân chương Sao Vàng",
            desc: "Nhân dịp kỷ niệm 50 năm thành lập, Đảng và Nhà nước trao tặng danh hiệu cao quý nhất: Huân chương Sao Vàng vì những cống hiến to lớn cho sự nghiệp xây dựng và bảo vệ Tổ quốc."
        },
        {
            year: "2022",
            title: "Chuyển đổi thành 'Đại học Bách Khoa Hà Nội'",
            desc: "Ngày 02/12/2022, Thủ tướng Chính phủ ký Quyết định số 1512/QĐ-TTg chuyển Trường Đại học Bách Khoa Hà Nội thành Đại học Bách Khoa Hà Nội, hoạt động theo mô hình đại học đa ngành, đa lĩnh vực tự chủ kiểu mới."
        },
        {
            year: "Hiện nay",
            title: "Tiên phong Đổi mới Sáng tạo & Vươn tầm Thế giới",
            desc: "HUST giữ vững vị thế số 1 Việt Nam trong nhóm ngành Kỹ thuật & Công nghệ (QS Rankings), dẫn dắt mạng lưới đào tạo nhân lực Bán dẫn, Trí tuệ Nhân tạo và Năng lượng xanh của quốc gia."
        }
    ],

    campusHighlights: [
        {
            title: "Tòa nhà C1 - Trái tim Bách Khoa",
            sub: "Biểu tượng lịch sử & Trung tâm điều hành",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
            desc: "Tòa nhà C1 với kiến trúc đặc trưng hướng ra Quảng trường C1 rợp bóng cây cổ thụ, là nơi diễn ra các sự kiện trang trọng nhất và lưu giữ ký ức của bao thế hệ sinh viên HUST."
        },
        {
            title: "Cổng Parabol Giải Phóng",
            sub: "Cánh cổng tri thức vươn tới tương lai",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
            desc: "Cổng Parabol nổi tiếng nằm trên đường Giải Phóng mô phỏng đồ thị hàm số toán học, tượng trưng cho trí tuệ logic, khát vọng khám phá đỉnh cao khoa học của dân kỹ thuật."
        },
        {
            title: "Thư viện Tạ Quang Bửu",
            sub: "Thư viện đại học hiện đại bậc nhất",
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
            desc: "Tòa nhà 10 tầng rộng hơn 37.000m² lưu trữ hàng triệu đầu sách giáo trình, tạp chí quốc tế, phòng đọc số, không gian học nhóm 24/7 và hệ sinh thái tài nguyên số tiên tiến."
        },
        {
            title: "Khuôn viên xanh & Hồ Tiền thơ mộng",
            sub: "26 héc-ta xanh mướt giữa lòng Thủ đô",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
            desc: "Giữa những phòng thí nghiệm hiện đại là hàng cây xanh mát, Hồ Tiền phẳng lặng, tạo nên bầu không khí thanh bình giúp sinh viên thư giãn sau những giờ học căng thẳng."
        },
        {
            title: "Khu liên hợp Thể thao & SVĐ Bách Khoa",
            sub: "Nơi tôi luyện tinh thần thể thao BK",
            image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
            desc: "Bao gồm Sân vận động tiêu chuẩn, bể bơi bốn mùa, nhà thi đấu đa năng hiện đại - cái nôi của giải bóng đá sinh viên HUST Cup cuồng nhiệt."
        },
        {
            title: "Ký túc xá Bách Khoa thân thương",
            sub: "Ngôi nhà thứ hai của sinh viên xa nhà",
            image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
            desc: "Khu nội trú khang trang đáp ứng chỗ ở cho hàng nghìn sinh viên, đầy đủ tiện ích căng tin, phòng tự học, sân bóng rổ và an ninh 24/24."
        }
    ],

    admissionsMethods: [
        {
            number: "01",
            title: "Kỳ thi Đánh giá Tư duy (TSA)",
            target: "Chiếm 50 - 60% tổng chỉ tiêu",
            badge: "Đặc sản Bách Khoa",
            badgeColor: "bg-red-100 text-red-700",
            desc: "Bài thi trắc nghiệm khách quan trên máy tính gồm 3 phần: Tư duy Toán học (60 phút), Tư duy Đọc hiểu (30 phút) và Tư duy Khoa học/Giải quyết vấn đề (60 phút). Điểm thi TSA được hơn 40 trường đại học hàng đầu công nhận xét tuyển.",
            points: [
                "Thi trắc nghiệm 100% trên máy tính hiện đại",
                "Đánh giá năng lực tư duy cốt lõi, không nặng học vẹt",
                "Được tổ chức nhiều đợt thi (từ tháng 12 đến tháng 5 hàng năm)",
                "Kết quả thi có giá trị xét tuyển trong vòng 2 năm"
            ]
        },
        {
            number: "02",
            title: "Xét tuyển Tài năng (XTTN)",
            target: "Chiếm 20% tổng chỉ tiêu",
            badge: "Dành cho học sinh xuất sắc",
            badgeColor: "bg-amber-100 text-amber-700",
            desc: "Dành cho học sinh đạt giải quốc gia/quốc tế, học sinh trường chuyên có thành tích học tập xuất sắc kết hợp chứng chỉ quốc tế (SAT, ACT, A-Level, AP) hoặc phỏng vấn trực tiếp.",
            points: [
                "Xét tuyển thẳng học sinh giỏi quốc gia/quốc tế",
                "Xét tuyển dựa trên chứng chỉ quốc tế (SAT >= 1250, ACT, IB...)",
                "Xét hồ sơ năng lực kết hợp phỏng vấn chuyên sâu",
                "Cơ hội nhận học bổng tài năng lên tới 100% học phí"
            ]
        },
        {
            number: "03",
            title: "Điểm thi Tốt nghiệp THPT",
            target: "Chiếm 20 - 30% tổng chỉ tiêu",
            badge: "Phương thức truyền thống",
            badgeColor: "bg-blue-100 text-blue-700",
            desc: "Áp dụng theo quy chế tuyển sinh chung của Bộ GD&ĐT với các tổ hợp chính: A00 (Toán, Lý, Hóa), A01 (Toán, Lý, Anh), B00 (Toán, Hóa, Sinh), D01 (Toán, Văn, Anh)...",
            points: [
                "Áp dụng cho thí sinh toàn quốc tham dự kỳ thi tốt nghiệp THPT",
                "Công thức tính điểm ưu tiên môn Toán hệ số nhân",
                "Chỉ tiêu phân bổ công bằng, công khai và minh bạch",
                "Quy đổi điểm chứng chỉ ngoại ngữ IELTS/TOEFL thay thế bài thi Anh"
            ]
        }
    ],

    quizQuestions: [
        {
            id: 1,
            question: "Khi đối mặt với một vấn đề hóc búa, bạn thích giải quyết nó theo cách nào nhất?",
            options: [
                { text: "Viết thuật toán máy tính, tối ưu hóa code và xây dựng ứng dụng phần mềm", category: "soict" },
                { text: "Mở mạch điện tử, tìm hiểu cách dòng điện và chip bán dẫn truyền tín hiệu", category: "seee" },
                { text: "Lắp ráp động cơ, mô phỏng kết cấu 3D và quan sát các chi tiết chuyển động cơ học", category: "sme" },
                { text: "Tìm hiểu phản ứng hóa sinh, thí nghiệm vật liệu nano mới hay công nghệ bảo vệ môi trường", category: "scls_smse" },
                { text: "Lập kế hoạch kinh doanh, phân tích số liệu tài chính và quản trị đội ngũ", category: "sem_sofl" }
            ]
        },
        {
            id: 2,
            question: "Công nghệ tương lai nào khiến bạn cảm thấy hào hứng và muốn dấn thân nghiên cứu nhất?",
            options: [
                { text: "Trí tuệ nhân tạo (Generative AI, Large Language Models) và Khoa học dữ liệu", category: "soict" },
                { text: "Chip bán dẫn Made-in-Vietnam, Mạng không dây 6G và Lưới điện thông minh", category: "seee" },
                { text: "Xe ô tô điện tự hành, Robot công nghiệp hình người và Tàu vũ trụ hàng không", category: "sme" },
                { text: "Vaccine thế hệ mới, Pin lưu trữ năng lượng xanh và Vật liệu siêu dẫn lượng tử", category: "scls_smse" },
                { text: "Kinh tế số, Thương mại điện tử xuyên biên giới và Quản lý chuỗi cung ứng toàn cầu", category: "sem_sofl" }
            ]
        },
        {
            id: 3,
            question: "Môi trường làm việc lý tưởng trong mơ của bạn sau 5 năm nữa là gì?",
            options: [
                { text: "Tại tập đoàn công nghệ lớn (Google, Microsoft, FPT) với ly cà phê và chiếc laptop cấu hình khủng", category: "soict" },
                { text: "Trong phòng Lab thiết kế vi mạch bán dẫn hoặc trung tâm điều khiển tự động hóa hiện đại", category: "seee" },
                { text: "Tại tổ hợp sản xuất xe hơi thông minh, trung tâm nghiên cứu hàng không hoặc xưởng cơ khí chính xác", category: "sme" },
                { text: "Phòng thí nghiệm hóa dược y sinh, nhà máy thực phẩm xanh hoặc viện nghiên cứu vật liệu tiên tiến", category: "scls_smse" },
                { text: "Văn phòng quản lý dự án quốc tế, quỹ đầu tư khởi nghiệp hoặc tập đoàn Logistics đa quốc gia", category: "sem_sofl" }
            ]
        },
        {
            id: 4,
            question: "Môn học hoặc kỹ năng nào bạn cảm thấy tự tin và hứng thú nhất ở trường THPT?",
            options: [
                { text: "Toán học giải thuật, Tin học và tư duy logic trừu tượng", category: "soict" },
                { text: "Vật lý phần Điện từ học, Quang học và kỹ năng mày mò mạch điện", category: "seee" },
                { text: "Vật lý phần Cơ học, Động lực học và vẽ kỹ thuật hình học không gian", category: "sme" },
                { text: "Hóa học các phản ứng, Sinh học tế bào di truyền và vật liệu", category: "scls_smse" },
                { text: "Toán thống kê xác suất, Tiếng Anh giao tiếp và kỹ năng thuyết trình", category: "sem_sofl" }
            ]
        }
    ],

    quizResults: {
        soict: {
            title: "Trường Công nghệ Thông tin & Truyền thông (SoICT)",
            badge: "Lập trình viên / Kỹ sư AI tương lai",
            color: "text-blue-600",
            bg: "bg-blue-50 border-blue-200",
            desc: "Bạn có tư duy logic sắc bén, đam mê thuật toán và khát khao sáng tạo ra các giải pháp số làm thay đổi thế giới. Bạn cực kỳ phù hợp với thế giới mã nguồn của SoICT!",
            suggestedMajors: [
                { code: "IT1", name: "Khoa học Máy tính" },
                { code: "IT-E10", name: "Khoa học Dữ liệu & AI (DS&AI)" },
                { code: "IT2", name: "Kỹ thuật Máy tính" }
            ]
        },
        seee: {
            title: "Trường Điện - Điện tử (SEEE)",
            badge: "Kỹ sư Bán dẫn & Tự động hóa tiên phong",
            color: "text-amber-600",
            bg: "bg-amber-50 border-amber-200",
            desc: "Bạn bị cuốn hút bởi các bảng mạch vi xử lý, chip bán dẫn và điều khiển dòng năng lượng. SEEE chính là bệ phóng hoàn hảo cho bạn đón đầu làn sóng công nghệ bán dẫn quốc gia!",
            suggestedMajors: [
                { code: "ET-E16", name: "Kỹ thuật Vi điện tử & Công nghệ Bán dẫn" },
                { code: "EE2", name: "Kỹ thuật Điều khiển & Tự động hóa" },
                { code: "ET1", name: "Kỹ thuật Điện tử - Viễn thông" }
            ]
        },
        sme: {
            title: "Trường Cơ khí (SME)",
            badge: "Kỹ sư Cơ điện tử & Ô tô thông minh",
            color: "text-emerald-600",
            bg: "bg-emerald-50 border-emerald-200",
            desc: "Bạn yêu thích việc biến những ý tưởng cơ học thành những cỗ máy chuyển động thực thụ, từ cánh tay robot đến những chiếc xe điện thông minh hay khí tài hàng không!",
            suggestedMajors: [
                { code: "ME1", name: "Kỹ thuật Cơ điện tử" },
                { code: "TX1", name: "Kỹ thuật Ô tô" },
                { code: "TE1", name: "Kỹ thuật Hàng không" }
            ]
        },
        scls_smse: {
            title: "Trường Hóa & KH Sự sống / Trường Vật liệu",
            badge: "Nhà khoa học Vật liệu & Công nghệ Xanh",
            color: "text-teal-600",
            bg: "bg-teal-50 border-teal-200",
            desc: "Bạn tò mò về cấu trúc nguyên tử, các phản ứng sinh hóa vi mô và khao khát phát triển các vật liệu siêu bền, pin năng lượng xanh và dược phẩm cứu sống con người!",
            suggestedMajors: [
                { code: "CH1", name: "Kỹ thuật Hóa học" },
                { code: "MS-E3", name: "Khoa học & Kỹ thuật Vật liệu Tiên tiến" },
                { code: "BF1", name: "Kỹ thuật Sinh học" }
            ]
        },
        sem_sofl: {
            title: "Viện Kinh tế Quản lý & Khoa Ngoại ngữ",
            badge: "Nhà Quản trị Công nghệ & Hội nhập Toàn cầu",
            color: "text-rose-600",
            bg: "bg-rose-50 border-rose-200",
            desc: "Bạn có tài năng lãnh đạo, tư duy phân tích chiến lược kinh doanh và khả năng ngôn ngữ vượt trội. Bạn sẽ là cầu nối đưa sản phẩm công nghệ Việt Nam ra thị trường quốc tế!",
            suggestedMajors: [
                { code: "EM1", name: "Quản trị Kinh doanh" },
                { code: "EM5", name: "Logistics & Quản lý Chuỗi cung ứng" },
                { code: "FL1", name: "Tiếng Anh KHKT & Công nghệ" }
            ]
        }
    }
};
