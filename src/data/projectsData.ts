import { Project } from '../types/project';

export const projectsData: Project[] = [
    {
        id: "slim-system",
        title: "Slim System 대시보드 (기업용 R&D 소프트웨어 관리 플랫폼)",
        category: "vue",
        images: ["/images/slim.png", "/images/slim2.png"],
        description: [
            "다양한 기업을 위한 범용 R&D 소프트웨어 관리 대시보드입니다.",
            "Wijmo 라이브러리를 활용한 차트 및 그리드 기반의 실시간 사용량 모니터링, 소프트웨어 자산 관리, 어드민 계정 관리를 제공합니다.",
            "사용자별 드래그 앤 드롭 타일 커스터마이징, 직책별 권한 제어, 필터링 및 세션 저장소 기반 설정 저장 기능을 구현했습니다."
        ],
        role: "프론트엔드 리드 (백엔드 보조)",
        period: "2022.01 - 2024.12",
        techStack: ["Vue.js", "Vuex", "Vue Router", "Wijmo", "CSS", "Axios", "Java", "MSSQL"],
        techDetails: [
            { name: "Vuex 상태 관리", description: "대시보드 타일 설정, 사용자 권한, 필터 조건 등 전역 상태 모듈화", icon: "fas fa-project-diagram" },
            { name: "Vue Router & 권한 가드", description: "직책별 접근 페이지 동적 제한 및 비인가 접근 리디렉션", icon: "fas fa-route" },
            { name: "드래그 앤 드롭 타일", description: "대시보드 위젯 자유로운 배치·크기 조절 (사용자별 커스터마이징)", icon: "fas fa-grip" },
            { name: "직책별 권한 UI", description: "관리자·매니저·뷰어 역할에 따른 메뉴·데이터 접근 제어", icon: "fas fa-user-shield" },
            { name: "Wijmo 차트 & 그리드", description: "실시간 사용량 데이터를 차트/그리드로 시각화, 다중 조건 필터링", icon: "fas fa-chart-line" },
            { name: "세션 기반 사용자 설정", description: "로그인 유지, 필터 조건, 타일 배치 상태 저장", icon: "fas fa-database" },
            { name: "MSSQL 저장 프로시저", description: "소프트웨어 사용량 집계 및 분석 로직을 저장 프로시저로 구현, 성능 최적화", icon: "fas fa-database" },
            { name: "Java Apache Server API", description: "Apache 서버 기반 REST API 개발, 계정 관리 및 인증 처리", icon: "fas fa-server" }
        ],
        links: { demo: "https://slimsystem.co.kr/demo" }
    },
    {
        id: "mobis-dashboard",
        title: "현대모비스 전용 대시보드 (부서별 특화 커스텀)",
        category: "vue",
        images: ["/images/mobis.png", "/images/mobis2.png"],
        description: [
            "Slim System을 현대모비스의 기업 요구사항에 맞게 특화 개발한 커스텀 버전입니다.",
            "기업 아이덴티티에 맞춘 UI/UX 전면 재구성, 부서별 맞춤 메뉴 구성 및 권한 체계를 도입했으며, 기존 범용 버전 대비 차별화된 디자인과 워크플로우를 제공합니다.",
            "모듈별 분석 화면, 부서별 대시보드 템플릿 등 현대모비스 전용 기능을 추가 개발했습니다."
        ],
        role: "프론트엔드 리드",
        period: "2022.03 - 2024.12",
        techStack: ["Vue.js", "Vuex", "Vue Router", "Wijmo", "CSS", "Axios"],
        techDetails: [
            { name: "대기업 맞춤 디자인", description: "현대모비스 디자인 가이드라인 준수, UI/UX 전면 재구성", icon: "fas fa-paint-brush" },
            { name: "부서별 특화 메뉴", description: "부서별(연구소, 생산, 품질 등)로 다른 메뉴 구조 및 권한 부여", icon: "fas fa-sitemap" },
            { name: "모듈 전용 분석 화면", description: "특정 R&D 모듈의 사용량을 집중 모니터링하는 페이지 추가", icon: "fas fa-chart-bar" },
            { name: "Vuex 기반 상태 관리", description: "Slim System Vuex 스토어 구조 재사용 및 확장", icon: "fas fa-project-diagram" },
            { name: "라우트 및 권한 재구성", description: "현대모비스 조직도에 맞춰 라우트·권한 체계 재설계", icon: "fas fa-route" }
        ],
        links: {}
    },

    {
        id: "homebridge-smartthings",
        title: "Homebridge SmartThings OAuth 연동 + IR 제어",
        category: "iot",
        images: [ "https://youtube.com/shorts/Yc2hrBpyyG0?si=eTAI2kyQLeaaP_xY"],
        description: [
            "SmartThings PAT의 24시간 만료 문제를 해결하기 위해 OAuth 2.0 인증 프록시 서버를 직접 구현한 플러그인입니다.",
            "ngrok 서버로 OAuth 흐름을 처리하고 access/refresh token을 자동 갱신하여 장기간 안정적인 연동을 가능하게 했습니다.",
            "또한 기존 플러그인이 지원하지 않던 Galaxy Home Mini의 IR 신호를 분석, TV 및 셋톱박스 제어 기능까지 확장했습니다."
        ],
        role: "개인 프로젝트 (Node.js + OAuth + SmartThings API)",
        period: "2025.06 - 2026.02",
        techStack: ["Node.js", "JavaScript", "Homebridge API", "SmartThings API", "OAuth 2.0", "ngrok", "HTTP Server"],
        techDetails: [
            { name: "OAuth 2.0 인증 및 토큰 관리", description: "로컬 HTTP 서버로 OAuth 인증 흐름 직접 구현, access/refresh token 자동 갱신 시스템으로 24시간 만료 문제 해결", icon: "fas fa-shield-alt" },
            { name: "멀티 디바이스 타입 지원", description: "TV, 셋톱박스, 에어컨, 플러그, 스위치 등 6종 이상의 액세서리를 모듈화하여 지원 (TVAccessory, AirConAccessory 등)", icon: "fas fa-puzzle-piece" },
            { name: "IR 컨트롤러 확장", description: "Galaxy Home Mini의 IR 신호 분석 및 TV/셋톱박스 제어 기능 추가", icon: "fas fa-broadcast-tower" },
            { name: "안정성 개선", description: "하위 브릿지 자동 재시작 기능 구현, BaseAccessory 추상화로 코드 중복 제거", icon: "fas fa-sync-alt" }
        ],
        links: { github: "https://github.com/101Sean/homebridge-smartthings-device" }
    },
    {
        id: "homebridge-wallpad",
        title: "Homebridge 아파트 월패드 (RS485 패킷 분석)",
        category: "iot",
        images: [""],
        description: [
            "EW11 시리얼-이더넷 컨버터를 이용해 아파트 월패드의 RS485 통신을 직접 분석하고, 공동현관문 및 세대 초인종을 HomeKit에 연동한 플러그인입니다.",
            "패킷 리버스 엔지니어링을 통해 공동현관문 제어, 세대 호출 알림 등의 명령 구조를 파악하고 Homebridge 액세서리로 구현했습니다."
        ],
        role: "개인 프로젝트 (Node.js + RS485 + 패킷 분석)",
        period: "2025.11 - 2026.02",
        techStack: ["Node.js", "JavaScript", "Homebridge API", "RS485", "EW11", "TCP Socket"],
        techDetails: [
            { name: "RS485 패킷 분석", description: "EW11을 통해 월패드 시리얼 통신을 가로채 명령어 구조 분석 (리버스 엔지니어링)", icon: "fas fa-microchip" },
            { name: "Lock Mechanism 액세서리", description: "Homebridge 락 서비스로 공동현관문 제어", icon: "fas fa-door-open" },
            { name: "세대 호출 연동", description: "특정 패킷 감지로 세대 호출시 알림 기능 구현", icon: "fas fa-phone-alt" }
        ],
        links: { github: "https://github.com/101Sean/homebridge-wallpad" }
    },
    {
        id: "homebridge-heatingmat",
        title: "Homebridge BLE 전기매트 (패킷 리버싱)",
        category: "iot",
        images: [ "https://youtube.com/shorts/CuSvevZmTho?si=Xlry-Bj2mh7iDBwA"],
        description: [
            "블루투스 BLE 패킷을 리버스 엔지니어링하여 전기매트를 HomeKit에 연동한 플러그인입니다.",
            "온도 제어를 Thermostat 서비스에, 시간 예약 기능(HomeKit 미지원)을 Lightbulb 서비스에 매핑하는 창의적인 방식으로 구현했습니다.",
            "연결 유지 패킷과 Notification 패킷까지 분석하여 안정적인 양방향 통신을 보장합니다."
        ],
        role: "개인 프로젝트 (Node.js + BLE + HomeKit)",
        period: "2025.10 - 2026.01",
        techStack: ["Node.js", "JavaScript", "Homebridge API", "BLE", "noble"],
        techDetails: [
            { name: "BLE 패킷 리버스 엔지니어링", description: "온도/시간 조절, 연결 유지, Notification 패킷 분석하여 명령 구조 완전 파악", icon: "fas fa-bluetooth" },
            { name: "비표준 기능 매핑", description: "HomeKit 미지원 기능(시간 예약)을 Lightbulb 서비스에 매핑하는 독창적 해결", icon: "fas fa-lightbulb" },
            { name: "양방향 상태 동기화", description: "수동 조작 시 실시간 상태 수신하여 HomeKit UI에 즉시 반영", icon: "fas fa-sync-alt" }
        ],
        links: { github: "https://github.com/101Sean/homebridge-heatingmat" }
    },
    {
        id: "homebridge-wol",
        title: "Homebridge IPTIME WOL + SSH (웹 크롤링 기반)",
        category: "iot",
        images: [""],
        description: [
            "IPTIME 공유기의 웹 인터페이스를 직접 크롤링하여 WOL(Wake-on-Lan) 기능을 제어하고, SSH로 PC를 원격 종료하는 Homebridge 플러그인입니다.",
            "cheerio를 이용한 로그인, 세션ID 파싱, MAC 주소 조회, WOL 요청까지 전 과정을 자동화했습니다.",
            "SSH 포트 체크 방식을 도입하여 PC의 실제 전원 상태를 HomeKit에 정확히 반영합니다."
        ],
        role: "개인 프로젝트 (Node.js + 웹 크롤링 + SSH2)",
        period: "2025.12 - 2026.01",
        techStack: ["Node.js", "JavaScript", "Homebridge API", "cheerio", "axios", "SSH2", "WOL"],
        techDetails: [
            { name: "IPTIME 웹 인터페이스 직접 제어", description: "cheerio로 공유기 페이지 크롤링 → 로그인, 세션ID 획득, MAC 주소 조회, WOL 요청 자동화", icon: "fas fa-globe" },
            { name: "SSH 원격 종료", description: "ssh2 라이브러리로 PC에 안전하게 접속하여 shutdown 명령 실행", icon: "fas fa-terminal" },
            { name: "전원 상태 감시", description: "SSH 포트 체크 방식으로 PC의 on/off 상태를 정확히 감지하여 HomeKit에 전달", icon: "fas fa-heartbeat" }
        ],
        links: { github: "https://github.com/101Sean/homebridge-wol-ssh" }
    },

    {
        id: "devlog-qna",
        title: "DevLog QnA 웹사이트 (Spring Boot + WebSocket 채팅)",
        category: "backend",
        images: ["/images/devqna.png", "/images/devqna2.png", "/images/devqna3.png"],
        description: [
            "기술 블로그를 위한 비가입 기반 Q&A 플랫폼입니다.",
            "익명 질문/댓글, 비밀 질문, 태그 기반 분류, 질문 상태 워크플로우, 좋아요, 어드민 답변 및 이메일 알림을 구현했습니다.",
            "Redis 기반 캐싱 및 Rate Limiting, Spring Security + JWT 인증, WebSocket STOMP 실시간 1:1 채팅 상담 기능을 완료했습니다."
        ],
        role: "풀스택 개인 프로젝트",
        period: "2026.03 - 2026.07",
        techStack: [
            "Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA",
            "Thymeleaf", "WebSocket", "STOMP", "Redis", "MySQL",
            "JavaMailSender", "Swagger UI", "Gradle", "Docker Compose"
        ],
        techDetails: [
            { name: "JWT 인증 (Access + Refresh Token)", description: "Spring Security 기반 JWT 인증 구현, Access/Refresh Token 방식으로 보안 강화", icon: "fas fa-key" },
            { name: "Redis 캐싱 및 Rate Limiting", description: "Redis(Lettuce)를 활용한 데이터 캐싱 및 API Rate Limiting 구현", icon: "fas fa-database" },
            { name: "WebSocket STOMP 실시간 채팅", description: "WebSocket + STOMP 프로토콜로 실시간 1:1 채팅 상담 기능 구현 완료", icon: "fas fa-comments" },
            { name: "이메일 알림 발송", description: "JavaMailSender로 어드민 답변 시 Gmail SMTP 기반 이메일 알림 발송", icon: "fas fa-envelope" },
            { name: "JPA 엔티티 설계", description: "질문-댓글, 질문-태그(다대다), 질문 상태 워크플로우 연관관계 매핑", icon: "fas fa-table" },
            { name: "Docker Compose 환경", description: "MySQL + Redis 컨테이너로 개발/배포 환경 구성", icon: "fas fa-docker" }
        ],
        links: { github: "https://github.com/101Sean/devlog-qna" }
    }
];