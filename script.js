const state = {
    locale: "en",
    student: {
        name: "Micah Johnson",
        studentId: "A20498112",
        email: "micah@student.aswe.edu",
        gpa: "3.84",
        mentalHealthTags: ["Anxiety support", "Peer wellness"],
    },
    mentors: [
        {
            id: "mentor-1",
            name: "Jordan Lee",
            major: "Computer Science",
            focus: "AI Mentor",
            email: "jordan.lee@aswe.edu",
            slots: ["Today, 3:00 PM", "Tomorrow, 11:00 AM"],
        },
        {
            id: "mentor-2",
            name: "Priya Shah",
            major: "Information Systems",
            focus: "Career Strategy",
            email: "priya.shah@aswe.edu",
            slots: ["Today, 5:00 PM", "Thursday, 2:00 PM"],
        },
        {
            id: "mentor-3",
            name: "Alex Nguyen",
            major: "Computer Science",
            focus: "Systems Design",
            email: "alex.nguyen@aswe.edu",
            slots: ["Wednesday, 10:00 AM", "Friday, 1:00 PM"],
        },
        {
            id: "mentor-4",
            name: "Marisol Chen",
            major: "Psychology",
            focus: "Wellness Coaching",
            email: "marisol.chen@aswe.edu",
            slots: ["Today, 2:00 PM", "Friday, 9:30 AM"],
        },
    ],
    selectedMentorId: "mentor-1",
    supportReports: [
        {
            concern: "Roommate conflict follow-up needed.",
            submittedBy: "Resident Assistant",
            studentId: "HR-2042",
            route: "Housing dashboard",
        },
    ],
    studyGroups: [
        { id: "group-1", code: "MATH 271", courseName: "Discrete Structures", members: 8 },
        { id: "group-2", code: "CMSC 204", courseName: "Object-Oriented Programming", members: 12 },
        { id: "group-3", code: "ENGL 101", courseName: "Academic Writing", members: 5 },
    ],
    supportCircles: [
        { id: "circle-1", name: "Transfer Students Meetup", visibility: "Public" },
        { id: "circle-2", name: "Night Owls Check-In", visibility: "Private/Invite Only" },
    ],
    supportCircleMessages: [
        {
            id: "message-1",
            circle: "Night Owls Check-In",
            preview: "Midnight study check-in and coping resources.",
        },
        {
            id: "message-2",
            circle: "Transfer Students Meetup",
            preview: "Question about first-semester advising hold.",
        },
    ],
    tutorProfile: {
        name: "Taylor Brooks",
        status: "Approved",
        searchable: true,
    },
    tutorDirectory: [
        { name: "Taylor Brooks", course: "MATH 271" },
        { name: "Nina Alvarez", course: "CMSC 202" },
    ],
    carpools: [
        { name: "Darius Hall", location: "Prince George's County", seats: 2 },
        { name: "Imani Ross", location: "Montgomery County", seats: 1 },
        { name: "Fatima Noor", location: "Prince George's County", seats: 3 },
    ],
    tutorRequests: [
        {
            id: "request-1",
            subject: "Calculus I Exam Review",
            tutor: "Taylor Brooks",
            ageHours: 53,
            responseRate: 92,
            status: "Waiting",
            flagged: false,
        },
        {
            id: "request-2",
            subject: "Java Lab Debugging",
            tutor: "Nina Alvarez",
            ageHours: 19,
            responseRate: 97,
            status: "Active",
            flagged: false,
        },
    ],
    incognito: false,
    events: [
        {
            id: "event-1",
            title: "STEM Mixer",
            location: "Student Union 201",
            startsAt: "Today, 6:00 PM",
        },
        {
            id: "event-2",
            title: "Transfer Welcome Session",
            location: "Library Commons",
            startsAt: "Today, 4:30 PM",
        },
    ],
    notifications: [],
    clubEvents: [
        {
            id: "club-1",
            title: "Open Volleyball Practice",
            location: "Rec Center Court A",
            publicDiscovery: true,
        },
    ],
};

const translations = {
    en: {
        // Header
        brandEyebrow: "ASWE Campus Platform",
        brandTitle: "Student Support Hub",
        brandTagline: "Prototype flows covering mentor search, support routing, study groups, tutoring, and student life.",
        // Nav
        navMentors: "Mentors",
        navSupport: "Support",
        navStudyGroups: "Study Groups",
        // Hero
        heroEyebrow: "Always-on community tooling",
        heroTitle: "One interface for academic help, wellness support, commuter coordination, and campus discovery.",
        heroCopy: "Each module below directly demonstrates one or more of the acceptance criteria you added.",
        heroActionStudyGroups: "Find a Study Group",
        heroActionNfr: "Review NFR Plan",
        activeLanguage: "EN",
        statsCriteria: "criteria represented",
        statsPublicCircles: "public circles",
        statsNotifications: "notifications",
        statsActiveLanguage: "active language",
        // NFR
        nfrEyebrow: "Non-Functional Readiness",
        nfrTitle: "Security, Privacy, Reliability, and Scale",
        nfrPill: "Architecture targets",
        nfrCard1Title: "Support Circles Encryption",
        nfrCard1Desc: "AES-256 encryption at rest, TLS 1.3 in transit, and role-gated message access.",
        nfrCard2Title: "FERPA-Compliant Student Data",
        nfrCard2Desc: "GPA and mental health tags are masked in the prototype and flagged as restricted academic records.",
        nfrCard3Title: "99.99% SOS Availability",
        nfrCard3Desc: "Emergency calling is isolated behind redundant routing and remains available during maintenance windows.",
        nfrCard4Title: "Scale and Recovery",
        nfrCard4Desc: "Targets include sub-1.5 second search under 1,000 concurrent users, support for 10,000 concurrent students, and a 15-minute database RPO.",
        // Compliance
        complianceEyebrow: "Prototype Guardrails",
        complianceTitle: "Compliance Snapshot",
        compliancePill: "Visible in UI",
        // Mentor Discovery
        mentorEyebrow: "F1 Mentor Search",
        mentorTitle: "Mentor Discovery",
        majorLabel: "Major",
        allMajors: "All majors",
        // Mentor Profile
        mentorProfileEyebrow: "F6 Coffee Chats",
        mentorProfileTitle: "Mentor Profile",
        mentorProfilePill: "Calendar demo",
        mentorProfileHint: "Pick an open slot to simulate a booking flow and create an invitation for both parties.",
        timeSlotLabel: "Open time slot",
        bookBtn: "Book",
        // Support Form
        supportEyebrow: "F2 Wellness Check",
        supportFormTitle: "Support Form",
        supportPill: "Routes to Housing dashboard",
        concernLabel: "Concern summary",
        concernPlaceholder: "Describe the concern for the Housing team.",
        anonymousLabel: "Submit Anonymously",
        submitBtn: "Submit",
        // Housing Queue
        housingEyebrow: "Housing Queue",
        housingTitle: "Routing Dashboard",
        housingPill: "Live intake",
        // Study Groups
        studyGroupsEyebrow: "F3 Study Group Filter",
        studyGroupsTitle: "Active Study Groups",
        courseFilterLabel: "Course filter",
        courseFilterPlaceholder: "Try MATH 271",
        // Support Circles
        circlesEyebrow: "F7 Support Circles",
        circlesTitle: "Create New Group",
        circlesPill: "Discovery feed aware",
        groupNameLabel: "Group name",
        groupNamePlaceholder: "First-Gen Support Circle",
        visibilityLabel: "Visibility",
        publicOption: "Public",
        privateOption: "Private/Invite Only",
        createGroupBtn: "Create Group",
        publicFeedTitle: "Public Discovery Feed",
        privateFeedTitle: "Private Group Registry",
        circleMessagesTitle: "Secure Support Circle Messages",
        // Tutor Verification
        tutorVerifyEyebrow: "F5 Tutor Verification",
        tutorVerifyTitle: "Tutor Profile Review",
        verificationDocLabel: "Verification document",
        submitReviewBtn: "Submit for Review",
        searchVisibilityTitle: "Search visibility",
        visibleInSearch: "Visible in search",
        // Carpool
        carpoolEyebrow: "F9 Carpool Finder",
        carpoolTitle: "Commuter Matching",
        destinationLabel: "Destination",
        destinationPlaceholder: "Prince George's County",
        // Tutor Requests
        tutorRequestsEyebrow: "F10 Report Ghosting",
        tutorRequestsTitle: "Tutor Requests",
        tutorRequestsPill: "48 hour escalation",
        // Privacy
        privacyEyebrow: "F11 Profile Privacy",
        privacyTitle: "Settings",
        incognitoLabel: "Incognito Mode",
        publicForumsTitle: "Public forums",
        groupListsTitle: "Group lists",
        restrictedRecordsTitle: "Restricted Records",
        // Notifications
        notificationsEyebrow: "F8 Push Notifications",
        notificationsTitle: "Today's Events",
        simulateBtn: "Simulate 1-hour Reminder",
        // Club Calendar
        clubEyebrow: "F12 Club Practice",
        clubTitle: "Club Calendar",
        clubPill: "Student Life feed sync",
        practiceTitleLabel: "Practice title",
        practiceTitlePlaceholder: "Open Badminton Practice",
        practiceLocationLabel: "Location",
        practiceLocationPlaceholder: "Rec Center Court B",
        addPracticeBtn: "Add Open Practice",
        clubCalendarTitle: "Club Calendar",
        studentLifeTitle: "Student Life Discovery",
        // SOS Modal
        sosEyebrow: "F4 Crisis SOS",
        sosTitleText: "Emergency Support",
        sosMutedText: "Immediate one-tap options are available from any screen.",
        sosCrisisLine: "Call Campus Crisis Line",
        sosCampusPolice: "Call Campus Police",
        sosClose: "Close",
        // Dynamic content
        noMentors: "No mentors match that major.",
        noStudyGroups: "No active study groups match that course filter.",
        noPublicGroups: "No public groups in discovery.",
        noPrivateGroups: "No private groups yet.",
        noTutors: "No tutors are currently searchable.",
        noCarpools: "No commuter matches found for that destination.",
        noNotifications: "No mobile notifications yet.",
        noDiscoveryPractices: "No open practices in discovery right now.",
        noMentorSelected: "No mentor selected",
        adjustMentorFilter: "Adjust the major filter to find an available mentor.",
        calendarSent: (mentorEmail, studentEmail, slot) => `Calendar invitation sent to ${mentorEmail} and ${studentEmail} for ${slot}.`,
        uploadPdfError: "Upload a PDF file before submitting for review.",
        verificationSuccess: (fileName) => `${fileName} uploaded. Profile status is now Pending Verification and hidden from search.`,
        notificationTitle: "Mobile notification",
        notificationBody: (title, location) => `${title} starts in 1 hour at ${location}.`,
        routeLabel: "Route",
        nameLabel: "Name",
        idLabel: "ID",
        activeMembers: "active members",
        seatsAvailable: "seats available",
        tutorLabel: "Tutor",
        openFor: "Open for",
        hours: "hours",
        responseRate: "Response rate",
        statusLabel: "Status",
        reportInactivity: "Report Inactivity",
        findNewTutor: "Prompt: Find a new tutor now.",
        incognitoEnabled: "Incognito enabled",
        publicIdentity: "Public identity",
        forumPost: "Posted in Wellness Forum",
        groupRoster: "Visible in Support Circle roster",
        ferpaGpa: "GPA record restricted under FERPA",
        ferpaTags: "Mental health tags restricted under FERPA",
        maskedField: "Masked from peer-facing views",
        encryptedAtRest: "Encrypted at rest",
        encryptedInTransit: "Encrypted in transit",
        accessLimited: "Access limited to authorized staff",
        complianceItems: [
            "WCAG AA color system with high-contrast text tokens.",
            "Responsive layouts for iOS, Android, and desktop breakpoints.",
            "Study Groups reachable from the home screen in 2 clicks.",
            "Emergency calling flow isolated from the main app shell.",
        ],
    },
    es: {
        // Header
        brandEyebrow: "ASWE Campus Platform",
        brandTitle: "Centro de Apoyo Estudiantil",
        brandTagline: "Flujos prototipo que cubren búsqueda de mentores, enrutamiento de apoyo, grupos de estudio, tutoría y vida estudiantil.",
        // Nav
        navMentors: "Mentores",
        navSupport: "Apoyo",
        navStudyGroups: "Grupos",
        // Hero
        heroEyebrow: "Herramientas comunitarias siempre activas",
        heroTitle: "Una interfaz para ayuda académica, apoyo de bienestar, coordinación de traslados y descubrimiento del campus.",
        heroCopy: "Cada módulo a continuación demuestra directamente uno o más de los criterios de aceptación que agregaste.",
        heroActionStudyGroups: "Buscar un grupo de estudio",
        heroActionNfr: "Ver plan NFR",
        activeLanguage: "ES",
        statsCriteria: "criterios representados",
        statsPublicCircles: "círculos públicos",
        statsNotifications: "notificaciones",
        statsActiveLanguage: "idioma activo",
        // NFR
        nfrEyebrow: "Preparación No Funcional",
        nfrTitle: "Seguridad, Privacidad, Confiabilidad y Escala",
        nfrPill: "Objetivos de arquitectura",
        nfrCard1Title: "Cifrado de Círculos de Apoyo",
        nfrCard1Desc: "Cifrado AES-256 en reposo, TLS 1.3 en tránsito y acceso a mensajes por roles.",
        nfrCard2Title: "Datos Estudiantiles Conformes con FERPA",
        nfrCard2Desc: "El GPA y las etiquetas de salud mental están enmascarados en el prototipo y marcados como registros académicos restringidos.",
        nfrCard3Title: "Disponibilidad SOS del 99.99%",
        nfrCard3Desc: "Las llamadas de emergencia están aisladas detrás de un enrutamiento redundante y permanecen disponibles durante las ventanas de mantenimiento.",
        nfrCard4Title: "Escala y Recuperación",
        nfrCard4Desc: "Los objetivos incluyen búsqueda de menos de 1.5 segundos con 1,000 usuarios simultáneos, soporte para 10,000 estudiantes y un RPO de base de datos de 15 minutos.",
        // Compliance
        complianceEyebrow: "Protecciones del Prototipo",
        complianceTitle: "Resumen de Cumplimiento",
        compliancePill: "Visible en la interfaz",
        // Mentor Discovery
        mentorEyebrow: "F1 Búsqueda de Mentores",
        mentorTitle: "Descubrimiento de Mentores",
        majorLabel: "Especialidad",
        allMajors: "Todas las especialidades",
        // Mentor Profile
        mentorProfileEyebrow: "F6 Charlas de Café",
        mentorProfileTitle: "Perfil del Mentor",
        mentorProfilePill: "Demo de calendario",
        mentorProfileHint: "Elige un horario disponible para simular un flujo de reserva y crear una invitación para ambas partes.",
        timeSlotLabel: "Horario disponible",
        bookBtn: "Reservar",
        // Support Form
        supportEyebrow: "F2 Control de Bienestar",
        supportFormTitle: "Formulario de Apoyo",
        supportPill: "Enruta al panel de vivienda",
        concernLabel: "Resumen de la preocupación",
        concernPlaceholder: "Describe la preocupación para el equipo de vivienda.",
        anonymousLabel: "Enviar de forma anónima",
        submitBtn: "Enviar",
        // Housing Queue
        housingEyebrow: "Cola de Vivienda",
        housingTitle: "Panel de Enrutamiento",
        housingPill: "Recepción en vivo",
        // Study Groups
        studyGroupsEyebrow: "F3 Filtro de Grupos de Estudio",
        studyGroupsTitle: "Grupos de Estudio Activos",
        courseFilterLabel: "Filtro de curso",
        courseFilterPlaceholder: "Prueba MATH 271",
        // Support Circles
        circlesEyebrow: "F7 Círculos de Apoyo",
        circlesTitle: "Crear Nuevo Grupo",
        circlesPill: "Visible en el feed de descubrimiento",
        groupNameLabel: "Nombre del grupo",
        groupNamePlaceholder: "Círculo de Apoyo Primera Generación",
        visibilityLabel: "Visibilidad",
        publicOption: "Público",
        privateOption: "Privado/Solo por invitación",
        createGroupBtn: "Crear Grupo",
        publicFeedTitle: "Feed de Descubrimiento Público",
        privateFeedTitle: "Registro de Grupos Privados",
        circleMessagesTitle: "Mensajes Seguros de Círculo de Apoyo",
        // Tutor Verification
        tutorVerifyEyebrow: "F5 Verificación de Tutor",
        tutorVerifyTitle: "Revisión del Perfil del Tutor",
        verificationDocLabel: "Documento de verificación",
        submitReviewBtn: "Enviar a revisión",
        searchVisibilityTitle: "Visibilidad en búsqueda",
        visibleInSearch: "Visible en la búsqueda",
        // Carpool
        carpoolEyebrow: "F9 Buscador de Carpooling",
        carpoolTitle: "Coincidencias de Traslado",
        destinationLabel: "Destino",
        destinationPlaceholder: "Prince George's County",
        // Tutor Requests
        tutorRequestsEyebrow: "F10 Reportar Desaparición",
        tutorRequestsTitle: "Solicitudes de Tutor",
        tutorRequestsPill: "Escalada a las 48 horas",
        // Privacy
        privacyEyebrow: "F11 Privacidad del Perfil",
        privacyTitle: "Configuración",
        incognitoLabel: "Modo incógnito",
        publicForumsTitle: "Foros públicos",
        groupListsTitle: "Listas de grupos",
        restrictedRecordsTitle: "Registros Restringidos",
        // Notifications
        notificationsEyebrow: "F8 Notificaciones Push",
        notificationsTitle: "Eventos de Hoy",
        simulateBtn: "Simular recordatorio de 1 hora",
        // Club Calendar
        clubEyebrow: "F12 Práctica del Club",
        clubTitle: "Calendario del Club",
        clubPill: "Sincronización con vida estudiantil",
        practiceTitleLabel: "Título de práctica",
        practiceTitlePlaceholder: "Práctica Abierta de Bádminton",
        practiceLocationLabel: "Ubicación",
        practiceLocationPlaceholder: "Cancha B del Centro Recreativo",
        addPracticeBtn: "Agregar Práctica Abierta",
        clubCalendarTitle: "Calendario del Club",
        studentLifeTitle: "Descubrimiento de Vida Estudiantil",
        // SOS Modal
        sosEyebrow: "F4 SOS de Crisis",
        sosTitleText: "Apoyo de Emergencia",
        sosMutedText: "Las opciones de un solo toque están disponibles desde cualquier pantalla.",
        sosCrisisLine: "Llamar a la Línea de Crisis del Campus",
        sosCampusPolice: "Llamar a la Policía del Campus",
        sosClose: "Cerrar",
        // Dynamic content
        noMentors: "No hay mentores que coincidan con esa especialidad.",
        noStudyGroups: "No hay grupos de estudio activos que coincidan con ese filtro.",
        noPublicGroups: "No hay grupos publicos en descubrimiento.",
        noPrivateGroups: "Todavia no hay grupos privados.",
        noTutors: "No hay tutores visibles en la busqueda.",
        noCarpools: "No se encontraron coincidencias para ese destino.",
        noNotifications: "Todavia no hay notificaciones moviles.",
        noDiscoveryPractices: "No hay practicas abiertas en descubrimiento ahora mismo.",
        noMentorSelected: "No hay mentor seleccionado",
        adjustMentorFilter: "Ajusta el filtro de especialidad para encontrar un mentor disponible.",
        calendarSent: (mentorEmail, studentEmail, slot) => `Invitacion de calendario enviada a ${mentorEmail} y ${studentEmail} para ${slot}.`,
        uploadPdfError: "Sube un archivo PDF antes de enviarlo a revision.",
        verificationSuccess: (fileName) => `${fileName} se cargo. El perfil ahora esta en Verificacion pendiente y oculto en la busqueda.`,
        notificationTitle: "Notificacion movil",
        notificationBody: (title, location) => `${title} comienza en 1 hora en ${location}.`,
        routeLabel: "Ruta",
        nameLabel: "Nombre",
        idLabel: "ID",
        activeMembers: "miembros activos",
        seatsAvailable: "asientos disponibles",
        tutorLabel: "Tutor",
        openFor: "Abierta por",
        hours: "horas",
        responseRate: "Tasa de respuesta",
        statusLabel: "Estado",
        reportInactivity: "Reportar inactividad",
        findNewTutor: "Aviso: busca un nuevo tutor ahora.",
        incognitoEnabled: "Modo incognito activado",
        publicIdentity: "Identidad publica",
        forumPost: "Publicado en el foro de bienestar",
        groupRoster: "Visible en la lista del circulo de apoyo",
        ferpaGpa: "Registro de GPA restringido por FERPA",
        ferpaTags: "Etiquetas de salud mental restringidas por FERPA",
        maskedField: "Oculto en vistas publicas",
        encryptedAtRest: "Cifrado en reposo",
        encryptedInTransit: "Cifrado en transito",
        accessLimited: "Acceso limitado al personal autorizado",
        complianceItems: [
            "Sistema de color WCAG AA con texto de alto contraste.",
            "Disenos responsivos para iOS, Android y escritorio.",
            "Grupos de estudio accesibles desde el inicio en 2 clics.",
            "Flujo de emergencia aislado del resto de la aplicacion.",
        ],
    },
};

const majorFilter = document.getElementById("majorFilter");
const mentorList = document.getElementById("mentorList");
const selectedMentorName = document.getElementById("selectedMentorName");
const selectedMentorMeta = document.getElementById("selectedMentorMeta");
const timeSlotSelect = document.getElementById("timeSlotSelect");
const coffeeChatForm = document.getElementById("coffeeChatForm");
const calendarInviteStatus = document.getElementById("calendarInviteStatus");
const supportForm = document.getElementById("supportForm");
const supportMessage = document.getElementById("supportMessage");
const anonymousToggle = document.getElementById("anonymousToggle");
const housingDashboard = document.getElementById("housingDashboard");
const courseFilter = document.getElementById("courseFilter");
const studyGroupList = document.getElementById("studyGroupList");
const groupForm = document.getElementById("groupForm");
const groupName = document.getElementById("groupName");
const groupVisibility = document.getElementById("groupVisibility");
const publicGroupList = document.getElementById("publicGroupList");
const privateGroupList = document.getElementById("privateGroupList");
const publicGroupsCount = document.getElementById("publicGroupsCount");
const tutorVerificationForm = document.getElementById("tutorVerificationForm");
const verificationFile = document.getElementById("verificationFile");
const tutorStatusBadge = document.getElementById("tutorStatusBadge");
const tutorVerificationMessage = document.getElementById("tutorVerificationMessage");
const tutorSearchList = document.getElementById("tutorSearchList");
const destinationSearch = document.getElementById("destinationSearch");
const carpoolResults = document.getElementById("carpoolResults");
const tutorRequestList = document.getElementById("tutorRequestList");
const incognitoToggle = document.getElementById("incognitoToggle");
const privacyBadge = document.getElementById("privacyBadge");
const forumPreview = document.getElementById("forumPreview");
const groupMemberPreview = document.getElementById("groupMemberPreview");
const eventList = document.getElementById("eventList");
const notificationCenter = document.getElementById("notificationCenter");
const notificationCount = document.getElementById("notificationCount");
const simulateNotification = document.getElementById("simulateNotification");
const practiceForm = document.getElementById("practiceForm");
const practiceTitle = document.getElementById("practiceTitle");
const practiceLocation = document.getElementById("practiceLocation");
const clubCalendarList = document.getElementById("clubCalendarList");
const studentLifeFeed = document.getElementById("studentLifeFeed");
const sosButton = document.getElementById("sosButton");
const sosModal = document.getElementById("sosModal");
const closeSosModal = document.getElementById("closeSosModal");
const languageSelect = document.getElementById("languageSelect");
const activeLanguageLabel = document.getElementById("activeLanguageLabel");
const complianceList = document.getElementById("complianceList");
const supportCircleMessages = document.getElementById("supportCircleMessages");
const ferpaRecordList = document.getElementById("ferpaRecordList");

renderAll();

majorFilter.addEventListener("change", renderMentors);
courseFilter.addEventListener("input", renderStudyGroups);
destinationSearch.addEventListener("input", renderCarpools);
languageSelect.addEventListener("change", () => {
    state.locale = languageSelect.value;
    renderAll();
});
incognitoToggle.addEventListener("change", () => {
    state.incognito = incognitoToggle.checked;
    renderPrivacy();
});

mentorList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mentor-id]");
    if (!button) {
        return;
    }

    state.selectedMentorId = button.dataset.mentorId;
    renderMentors();
    renderMentorProfile();
});

coffeeChatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const mentor = getSelectedMentor();
    const selectedSlot = timeSlotSelect.value;
    if (!mentor || !selectedSlot) {
        return;
    }

    calendarInviteStatus.innerHTML = createStatusMessage(
        "success",
        t().calendarSent(mentor.email, state.student.email, selectedSlot)
    );
});

supportForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const concern = supportMessage.value.trim();
    if (!concern) {
        return;
    }

    state.supportReports.unshift({
        concern,
        submittedBy: anonymousToggle.checked ? "Anonymous" : state.student.name,
        studentId: anonymousToggle.checked ? "Not attached" : state.student.studentId,
        route: "Housing dashboard",
    });

    supportForm.reset();
    renderHousingDashboard();
});

groupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = groupName.value.trim();
    if (!name) {
        return;
    }

    state.supportCircles.unshift({
        id: crypto.randomUUID(),
        name,
        visibility: groupVisibility.value,
    });

    groupForm.reset();
    renderSupportCircles();
});

tutorVerificationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const file = verificationFile.files?.[0];
    if (!file || !file.name.toLowerCase().endsWith(".pdf")) {
        tutorVerificationMessage.innerHTML = createStatusMessage("error", t().uploadPdfError);
        return;
    }

    state.tutorProfile.status = "Pending Verification";
    state.tutorProfile.searchable = false;
    tutorVerificationMessage.innerHTML = createStatusMessage(
        "success",
        t().verificationSuccess(file.name)
    );
    tutorVerificationForm.reset();
    renderTutorVerification();
});

tutorRequestList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-request-id]");
    if (!button) {
        return;
    }

    const request = state.tutorRequests.find((item) => item.id === button.dataset.requestId);
    if (!request || request.ageHours < 48) {
        return;
    }

    request.flagged = true;
    request.responseRate = Math.max(0, request.responseRate - 12);
    request.status = "Find new tutor";
    renderTutorRequests();
});

simulateNotification.addEventListener("click", () => {
    const todaysEvent = state.events[0];
    state.notifications.unshift({
        id: crypto.randomUUID(),
        message: t().notificationBody(todaysEvent.title, todaysEvent.location),
    });
    renderNotifications();
});

practiceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = practiceTitle.value.trim();
    const location = practiceLocation.value.trim();
    if (!title || !location) {
        return;
    }

    state.clubEvents.unshift({
        id: crypto.randomUUID(),
        title,
        location,
        publicDiscovery: true,
    });

    practiceForm.reset();
    renderClubEvents();
});

sosButton.addEventListener("click", openSosModal);
closeSosModal.addEventListener("click", closeModal);
sosModal.addEventListener("click", (event) => {
    if (event.target === sosModal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !sosModal.hidden) {
        closeModal();
    }
});

document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById(button.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

function renderAll() {
    renderLanguage();
    renderMentors();
    renderMentorProfile();
    renderHousingDashboard();
    renderStudyGroups();
    renderSupportCircles();
    renderTutorVerification();
    renderCarpools();
    renderTutorRequests();
    renderPrivacy();
    renderEvents();
    renderNotifications();
    renderClubEvents();
    renderCompliance();
}

function renderLanguage() {
    document.documentElement.lang = state.locale;
    languageSelect.value = state.locale;
    activeLanguageLabel.textContent = t().activeLanguage;

    document.querySelector('[data-jump="mentor-discovery"]').textContent = t().navMentors;
    document.querySelector('[data-jump="support-form"]').textContent = t().navSupport;
    document.querySelector('[data-jump="study-groups"]').textContent = t().navStudyGroups;

    const heroButtons = document.querySelectorAll('.hero-actions [data-jump]');
    heroButtons[0].textContent = t().heroActionStudyGroups;
    heroButtons[1].textContent = t().heroActionNfr;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (t()[key] !== undefined) {
            el.textContent = t()[key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        if (t()[key] !== undefined) {
            el.placeholder = t()[key];
        }
    });
}

function renderMentors() {
    const selectedMajor = majorFilter.value;
    const mentors = state.mentors.filter((mentor) => {
        return selectedMajor === "All" || mentor.major === selectedMajor;
    });

    mentorList.innerHTML = mentors.length
        ? mentors
            .map((mentor) => `
                <button type="button" class="list-card ${mentor.id === state.selectedMentorId ? "selected-card" : ""}" data-mentor-id="${mentor.id}">
                    <strong>${mentor.name}</strong>
                    <span>${mentor.major}</span>
                    <span>${mentor.focus}</span>
                </button>
            `)
            .join("")
        : createEmptyState(t().noMentors);

    if (!mentors.some((mentor) => mentor.id === state.selectedMentorId) && mentors[0]) {
        state.selectedMentorId = mentors[0].id;
    }
}

function renderMentorProfile() {
    const mentor = getSelectedMentor();
    if (!mentor) {
        selectedMentorName.textContent = t().noMentorSelected;
        selectedMentorMeta.textContent = t().adjustMentorFilter;
        timeSlotSelect.innerHTML = "";
        return;
    }

    selectedMentorName.textContent = mentor.name;
    selectedMentorMeta.textContent = `${mentor.major} • ${mentor.focus}`;
    timeSlotSelect.innerHTML = mentor.slots.map((slot) => `<option value="${slot}">${slot}</option>`).join("");
}

function renderHousingDashboard() {
    housingDashboard.innerHTML = state.supportReports
        .map((report) => `
            <article class="list-card static-card">
                <strong>${report.concern}</strong>
                <span>${t().routeLabel}: ${report.route}</span>
                <span>${t().nameLabel}: ${report.submittedBy}</span>
                <span>${t().idLabel}: ${report.studentId}</span>
            </article>
        `)
        .join("");
}

function renderStudyGroups() {
    const filterValue = courseFilter.value.trim().toLowerCase();
    const filteredGroups = state.studyGroups.filter((group) => {
        const searchableText = `${group.code} ${group.courseName}`.toLowerCase();
        return !filterValue || searchableText.includes(filterValue);
    });

    studyGroupList.innerHTML = filteredGroups.length
        ? filteredGroups
            .map((group) => `
                <article class="list-card static-card">
                    <strong>${group.code}</strong>
                    <span>${group.courseName}</span>
                    <span>${group.members} ${t().activeMembers}</span>
                </article>
            `)
            .join("")
        : createEmptyState(t().noStudyGroups);
}

function renderSupportCircles() {
    const publicGroups = state.supportCircles.filter((group) => group.visibility === "Public");
    const privateGroups = state.supportCircles.filter((group) => group.visibility !== "Public");

    publicGroupList.innerHTML = publicGroups.length
        ? publicGroups.map((group) => `<article class="list-card static-card"><strong>${group.name}</strong><span>${group.visibility}</span></article>`).join("")
        : createEmptyState(t().noPublicGroups);

    privateGroupList.innerHTML = privateGroups.length
        ? privateGroups.map((group) => `<article class="list-card static-card"><strong>${group.name}</strong><span>${group.visibility}</span></article>`).join("")
        : createEmptyState(t().noPrivateGroups);

    supportCircleMessages.innerHTML = state.supportCircleMessages
        .map((message) => `
            <article class="list-card static-card secure-card">
                <strong>${message.circle}</strong>
                <span>${message.preview}</span>
                <span>${t().encryptedAtRest} • ${t().encryptedInTransit}</span>
                <span>${t().accessLimited}</span>
            </article>
        `)
        .join("");

    publicGroupsCount.textContent = String(publicGroups.length);
}

function renderTutorVerification() {
    tutorStatusBadge.textContent = state.tutorProfile.searchable ? t().visibleInSearch : state.tutorProfile.status;
    tutorStatusBadge.classList.toggle("warning-pill", !state.tutorProfile.searchable);

    const visibleTutors = state.tutorDirectory.filter((tutor) => {
        if (tutor.name !== state.tutorProfile.name) {
            return true;
        }

        return state.tutorProfile.searchable;
    });

    tutorSearchList.innerHTML = visibleTutors.length
        ? visibleTutors.map((tutor) => `<article class="list-card static-card"><strong>${tutor.name}</strong><span>${tutor.course}</span></article>`).join("")
        : createEmptyState(t().noTutors);
}

function renderCarpools() {
    const query = destinationSearch.value.trim().toLowerCase();
    const matches = state.carpools.filter((student) => {
        return !query || student.location.toLowerCase().includes(query);
    });

    carpoolResults.innerHTML = matches.length
        ? matches
            .map((student) => `
                <article class="list-card static-card">
                    <strong>${student.name}</strong>
                    <span>${student.location}</span>
                    <span>${student.seats} ${t().seatsAvailable}</span>
                </article>
            `)
            .join("")
        : createEmptyState(t().noCarpools);
}

function renderTutorRequests() {
    tutorRequestList.innerHTML = state.tutorRequests
        .map((request) => {
            const canReport = request.ageHours >= 48;
            return `
                <article class="list-card static-card">
                    <strong>${request.subject}</strong>
                    <span>${t().tutorLabel}: ${request.tutor}</span>
                    <span>${t().openFor} ${request.ageHours} ${t().hours}</span>
                    <span>${t().responseRate}: ${request.responseRate}%</span>
                    <span>${t().statusLabel}: ${request.status}</span>
                    <button class="chip-btn" type="button" data-request-id="${request.id}" ${canReport ? "" : "disabled"}>${t().reportInactivity}</button>
                    ${request.flagged ? `<span class="danger-text">${t().findNewTutor}</span>` : ""}
                </article>
            `;
        })
        .join("");
}

function renderPrivacy() {
    const publicName = state.incognito ? "Anonymous Student" : state.student.name;
    privacyBadge.textContent = state.incognito ? t().incognitoEnabled : t().publicIdentity;
    forumPreview.innerHTML = `<article class="list-card static-card"><strong>${publicName}</strong><span>${t().forumPost}</span></article>`;
    groupMemberPreview.innerHTML = `<article class="list-card static-card"><strong>${publicName}</strong><span>${t().groupRoster}</span></article>`;
    ferpaRecordList.innerHTML = `
        <article class="list-card static-card secure-card">
            <strong>${t().ferpaGpa}</strong>
            <span>${t().maskedField}</span>
            <span>GPA: ••••</span>
        </article>
        <article class="list-card static-card secure-card">
            <strong>${t().ferpaTags}</strong>
            <span>${t().maskedField}</span>
            <span>Tags: ••••</span>
        </article>
    `;
}

function renderEvents() {
    eventList.innerHTML = state.events
        .map((eventItem) => `
            <article class="list-card static-card">
                <strong>${eventItem.title}</strong>
                <span>${eventItem.location}</span>
                <span>${eventItem.startsAt}</span>
            </article>
        `)
        .join("");
}

function renderNotifications() {
    notificationCenter.innerHTML = state.notifications.length
        ? state.notifications.map((notification) => `<article class="list-card static-card"><strong>${t().notificationTitle}</strong><span>${notification.message}</span></article>`).join("")
        : createEmptyState(t().noNotifications);

    notificationCount.textContent = String(state.notifications.length);
}

function renderClubEvents() {
    clubCalendarList.innerHTML = state.clubEvents
        .map((eventItem) => `<article class="list-card static-card"><strong>${eventItem.title}</strong><span>${eventItem.location}</span></article>`)
        .join("");

    const discoveryEvents = state.clubEvents.filter((eventItem) => eventItem.publicDiscovery);
    studentLifeFeed.innerHTML = discoveryEvents.length
        ? discoveryEvents.map((eventItem) => `<article class="list-card static-card"><strong>${eventItem.title}</strong><span>${eventItem.location}</span></article>`).join("")
        : createEmptyState(t().noDiscoveryPractices);
}

function renderCompliance() {
    complianceList.innerHTML = t().complianceItems
        .map((item) => `<article class="list-card static-card secure-card"><strong>NFR</strong><span>${item}</span></article>`)
        .join("");
}

function getSelectedMentor() {
    return state.mentors.find((mentor) => mentor.id === state.selectedMentorId) ?? null;
}

function createEmptyState(message) {
    return `<article class="list-card static-card empty-card"><span>${message}</span></article>`;
}

function createStatusMessage(type, message) {
    return `<div class="inline-status ${type}">${message}</div>`;
}

function t() {
    return translations[state.locale];
}

function openSosModal() {
    sosModal.hidden = false;
}

function closeModal() {
    sosModal.hidden = true;
}
