// Дані карток - 100 термінів для тестувальника JavaScript
const allCardData = [
    // Загальні терміни тестування (1-20)
    {
        id: 1,
        term: "Тестування",
        english: "Testing",
        greek: "Δοκιμές (Dokimés)",
        transcription: "ДокімЕс",
        category: "general",
        notes: "Також використовується англіцизм: Τεστάρισμα (Testárisma)"
    },
    {
        id: 2,
        term: "Тестувальник",
        english: "Tester",
        greek: "Δοκιμαστής (Dokimastís)",
        transcription: "ДокімастІс",
        category: "general",
        notes: "Часто використовується англіцизм: Tester (Τέστερ)"
    },
    {
        id: 3,
        term: "Помилка / Баг",
        english: "Error / Bug",
        greek: "Σφάλμα (Sfálma), Λάθος (Láthos)",
        transcription: "СфАлма, ЛАтос",
        category: "general",
        notes: "Також використовується: Μπαγκ (Bug)"
    },
    {
        id: 4,
        term: "Звіт про помилку",
        english: "Bug Report",
        greek: "Αναφορά σφάλματος (Anaforá sfálmatos)",
        transcription: "АнафорА сфАлматос",
        category: "general",
        notes: "Bug Report (Μπαγκ Ριπόρτ)"
    },
    {
        id: 5,
        term: "Функціональне тестування",
        english: "Functional Testing",
        greek: "Λειτουργική δοκιμή (Leitourgikí dokimí)",
        transcription: "Літургікі докімІ",
        category: "general",
        notes: "Functional Testing"
    },
    {
        id: 6,
        term: "Регресійне тестування",
        english: "Regression Testing",
        greek: "Δοκιμή παλινδρόμησης (Dokimí palindrómisis)",
        transcription: "ДокімІ паліндромісіс",
        category: "general",
        notes: "Regression Testing"
    },
    {
        id: 7,
        term: "Димове тестування",
        english: "Smoke Testing",
        greek: "Δοκιμή καπνού (Dokimí kapnoú)",
        transcription: "ДокімІ капну",
        category: "general",
        notes: "Smoke Testing"
    },
    {
        id: 8,
        term: "Тест-кейс",
        english: "Test Case",
        greek: "Περίπτωση δοκιμής (Períptosi dokimís)",
        transcription: "Періптосі докімІс",
        category: "general",
        notes: "Test Case (Τεστ Κέις)"
    },
    {
        id: 9,
        term: "Тест-план",
        english: "Test Plan",
        greek: "Σχέδιο δοκιμών (Schédio dokimón)",
        transcription: "Схедіо докімон",
        category: "general",
        notes: "Test Plan"
    },
    {
        id: 10,
        term: "Вимоги",
        english: "Requirements",
        greek: "Απαιτήσεις (Apaitíseis)",
        transcription: "Апайтісеіс",
        category: "general",
        notes: "Requirements (Ρεκουάιρμεντς)"
    },
    {
        id: 11,
        term: "Верифікація",
        english: "Verification",
        greek: "Επαλήθευση (Epalíthefsi)",
        transcription: "Епалітефсі",
        category: "general",
        notes: "Verification"
    },
    {
        id: 12,
        term: "Валідація",
        english: "Validation",
        greek: "Επικύρωση (Epikírosi)",
        transcription: "Епікіросі",
        category: "general",
        notes: "Validation"
    },
    {
        id: 13,
        term: "Тест-дизайн",
        english: "Test Design",
        greek: "Σχεδιασμός δοκιμών (Schediasmós dokimón)",
        transcription: "Схедіазмос докімон",
        category: "general",
        notes: "Test Design"
    },
    {
        id: 14,
        term: "Критерій прийняття",
        english: "Acceptance Criteria",
        greek: "Κριτήρια αποδοχής (Kritíria apodochís)",
        transcription: "Крітіріа аподохіс",
        category: "general",
        notes: "Acceptance Criteria"
    },
    {
        id: 15,
        term: "Чек-лист",
        english: "Checklist",
        greek: "Λίστα ελέγχου (Lísta elénchou)",
        transcription: "Ліста еленху",
        category: "general",
        notes: "Checklist"
    },
    {
        id: 16,
        term: "Дефект",
        english: "Defect",
        greek: "Ελάττωμα (Eláttoma)",
        transcription: "Елаттома",
        category: "general",
        notes: "Defect"
    },
    {
        id: 17,
        term: "Пріоритет",
        english: "Priority",
        greek: "Προτεραιότητα (Proteraiótita)",
        transcription: "Протерайотіта",
        category: "general",
        notes: "Priority"
    },
    {
        id: 18,
        term: "Серйозність",
        english: "Severity",
        greek: "Σοβαρότητα (Sovarótita)",
        transcription: "Соваротіта",
        category: "general",
        notes: "Severity"
    },
    {
        id: 19,
        term: "Відтворення",
        english: "Reproduction",
        greek: "Αναπαραγωγή (Anaparagogí)",
        transcription: "Анапарагогі",
        category: "general",
        notes: "Reproduction"
    },
    {
        id: 20,
        term: "Сценарій",
        english: "Scenario",
        greek: "Σενάριο (Senário)",
        transcription: "Сенаріо",
        category: "general",
        notes: "Scenario"
    },
    // Фронтенд та браузер (21-40)
    {
        id: 21,
        term: "Браузер",
        english: "Browser",
        greek: "Περιηγητής (Periigitís)",
        transcription: "ПеріїгітІс",
        category: "frontend",
        notes: "Часто використовується англіцизм: Μπράουζερ (Browser)"
    },
    {
        id: 22,
        term: "Консоль браузера",
        english: "Browser Console",
        greek: "Κονσόλα (Konsóla)",
        transcription: "Консола",
        category: "frontend",
        notes: "Developer Tools - Інструменти розробника"
    },
    {
        id: 23,
        term: "Веб-додаток",
        english: "Web Application",
        greek: "Διαδικτυακή εφαρμογή (Diadiktyskí efarmogí)",
        transcription: "Діадіктіакі ефармогі",
        category: "frontend",
        notes: "Також: Web App (Γουέμπ Απ)"
    },
    {
        id: 24,
        term: "Інтерфейс (UI)",
        english: "User Interface (UI)",
        greek: "Διεπαφή χρήστη (Diepafí chrísti)",
        transcription: "Діепафі христі",
        category: "frontend",
        notes: "Скорочення: UI (Γιου-Аϊ)"
    },
    {
        id: 25,
        term: "Користувацький досвід (UX)",
        english: "User Experience (UX)",
        greek: "Εμπειρία χρήστη (Ebeiría chrísti)",
        transcription: "Ебіріа христі",
        category: "frontend",
        notes: "UX (Γιу-Екс)"
    },
    {
        id: 26,
        term: "Адаптивний дизайн",
        english: "Responsive Design",
        greek: "Ανταποκρινόμενη σχεδίαση (Antapokrinómeni schedíasi)",
        transcription: "Андапокріномені схедіасі",
        category: "frontend",
        notes: "Responsive Design"
    },
    {
        id: 27,
        term: "Кнопка",
        english: "Button",
        greek: "Κουμπί (Koubí)",
        transcription: "Кубі",
        category: "frontend",
        notes: "Також: Μπάτον (Button)"
    },
    {
        id: 28,
        term: "Поле введення",
        english: "Input Field",
        greek: "Πεδίο εισαγωγής (Pedío eisagogís)",
        transcription: "Педіо ісагогіс",
        category: "frontend",
        notes: "Input Field (Ίνπουτ Φιλντ)"
    },
    {
        id: 29,
        term: "Форма",
        english: "Form",
        greek: "Φόρμα (Fórma)",
        transcription: "Форма",
        category: "frontend",
        notes: "Φόρμα (Form)"
    },
    {
        id: 30,
        term: "Посилання",
        english: "Link",
        greek: "Σύνδεσμος (Sýndesmos)",
        transcription: "Сіндесмос",
        category: "frontend",
        notes: "Link (Λинк)"
    },
    {
        id: 31,
        term: "Зображення",
        english: "Image",
        greek: "Εικόνα (Eikóna)",
        transcription: "Ікона",
        category: "frontend",
        notes: "Image (Ιμέιτζ)"
    },
    {
        id: 32,
        term: "Заголовок",
        english: "Title",
        greek: "Τίτλος (Títlos)",
        transcription: "Тітлос",
        category: "frontend",
        notes: "Title (Τάιτλ)"
    },
    {
        id: 33,
        term: "Меню",
        english: "Menu",
        greek: "Μενού (Menu)",
        transcription: "Мену",
        category: "frontend",
        notes: "Menu (Μενού)"
    },
    {
        id: 34,
        term: "Футер",
        english: "Footer",
        greek: "Υποσέλιδο (Yposélido)",
        transcription: "Іпоселідо",
        category: "frontend",
        notes: "Footer (Φούτερ)"
    },
    {
        id: 35,
        term: "Хедер",
        english: "Header",
        greek: "Κεφαλίδα (Kefalída)",
        transcription: "Кефаліда",
        category: "frontend",
        notes: "Header (Χέιντερ)"
    },
    {
        id: 36,
        term: "Модальне вікно",
        english: "Modal Window",
        greek: "Παράθυρο διαλόγου (Paráthyro dialógou)",
        transcription: "Паратіро діалогу",
        category: "frontend",
        notes: "Modal Window (Μοντάλ Γουίντοου)"
    },
    {
        id: 37,
        term: "Випадаючий список",
        english: "Dropdown List",
        greek: "Πτυσσόμενη λίστα (Ptyssómeni lísta)",
        transcription: "Птісомені ліста",
        category: "frontend",
        notes: "Dropdown List (Ντρόπνταουν Λіст)"
    },
    {
        id: 38,
        term: "Прапорець",
        english: "Checkbox",
        greek: "Πλαίσιο ελέγχου (Pléisio elénchou)",
        transcription: "Плесіо еленху",
        category: "frontend",
        notes: "Checkbox (Τσέκμποξ)"
    },
    {
        id: 39,
        term: "Перемикач",
        english: "Radio Button",
        greek: "Κουμπί επιλογής (Koubí epilogís)",
        transcription: "Кубі епілогіс",
        category: "frontend",
        notes: "Radio Button (Ρέιντιο Μπάτον)"
    },
    {
        id: 40,
        term: "Повзунок",
        english: "Slider",
        greek: "Δρομέας (Droméas)",
        transcription: "Дромеас",
        category: "frontend",
        notes: "Slider (Σλάιντερ)"
    },
    // JavaScript та тестування (41-70)
    {
        id: 41,
        term: "JavaScript",
        english: "JavaScript",
        greek: "Ιάβα Σκριπτ (Iáva Script)",
        transcription: "Іава Скріпт",
        category: "javascript",
        notes: "JavaScript (τζάβασκριπт)"
    },
    {
        id: 42,
        term: "Модульне тестування",
        english: "Unit Testing",
        greek: "Δοκιμή μονάδων (Dokimí monádon)",
        transcription: "Докімі монадон",
        category: "testing",
        notes: "Unit Testing (Γιουνίτ Τεστίνγκ)"
    },
    {
        id: 43,
        term: "Інтеграційне тестування",
        english: "Integration Testing",
        greek: "Δοκιμή ολοκλήρωσης (Dokimí oloklírosis)",
        transcription: "Докімі олокліросіс",
        category: "testing",
        notes: "Integration Testing"
    },
    {
        id: 44,
        term: "End-to-End тестування",
        english: "End-to-End Testing",
        greek: "Δοκιμή από άκρη σε άκρη (Dokimí apó ákri se ákri)",
        transcription: "Докімі апо акрі се акрі",
        category: "testing",
        notes: "E2E Testing (Ε-του-Ε Τεστίνγκ)"
    },
    {
        id: 45,
        term: "Автоматизоване тестування",
        english: "Automated Testing",
        greek: "Αυτοματοποιημένες δοκιμές (Aftomatopiiménes dokimés)",
        transcription: "Афтоматопійменес докімес",
        category: "testing",
        notes: "Automation Testing (Οτομέισον Τεστίνγκ)"
    },
    {
        id: 46,
        term: "Ручне тестування",
        english: "Manual Testing",
        greek: "Χειροκίνητες δοκιμές (Cheirokínites dokimés)",
        transcription: "Хірокінітес докімес",
        category: "testing",
        notes: "Manual Testing (Μάνουαλ Τεστίνγκ)"
    },
    {
        id: 47,
        term: "Фреймворк для тестування",
        english: "Testing Framework",
        greek: "Πλαίσιο δοκιμών (Pléisio dokimón)",
        transcription: "Плесіо докімон",
        category: "testing",
        notes: "Testing Framework (Τεστινγκ Φρέιмуορк)"
    },
    {
        id: 48,
        term: "Jest",
        english: "Jest",
        greek: "Τζεστ",
        transcription: "Джест",
        category: "testing",
        notes: "Jest - популярний фреймворк для тестування JavaScript"
    },
    {
        id: 49,
        term: "Cypress",
        english: "Cypress",
        greek: "Σάιπρες",
        transcription: "Сайпрес",
        category: "testing",
        notes: "Cypress - інструмент для End-to-End тестування"
    },
    {
        id: 50,
        term: "Playwright",
        english: "Playwright",
        greek: "Πλέιραιτ",
        transcription: "Плейрайт",
        category: "testing",
        notes: "Playwright - інструмент для автоматизації браузера"
    },
    {
        id: 51,
        term: "Скрипт (тестовий)",
        english: "Test Script",
        greek: "Σενάριο δοκιμής (Senário dokimís)",
        transcription: "Сенаріо докімІс",
        category: "testing",
        notes: "Test Script (Τεστ Σκριπτ)"
    },
    {
        id: 52,
        term: "Твердження (Assertion)",
        english: "Assertion",
        greek: "Ισχυρισμός (Ischyrismós)",
        transcription: "Ісхірізмос",
        category: "testing",
        notes: "Assertion (Ασέρσιον)"
    },
    {
        id: 53,
        term: "Заглушка (Mock/Stub)",
        english: "Mock/Stub",
        greek: "Αντικαταστάτης (Antikatastátis)",
        transcription: "Антікатастатіс",
        category: "testing",
        notes: "Mock / Stub (Μοκ / Σταμπ)"
    },
    {
        id: 54,
        term: "Відлагодження",
        english: "Debugging",
        greek: "Εντοπισμός σφαλμάτων (Entopismós sfalmáton)",
        transcription: "Ентопісмос сфалматон",
        category: "javascript",
        notes: "Debugging (Ντέμπαγκινγκ)"
    },
    {
        id: 55,
        term: "Лог (журнал)",
        english: "Log",
        greek: "Αρχείο καταγραφής (Archeío katagrafís)",
        transcription: "Архіо катаграфіс",
        category: "javascript",
        notes: "Λογκ (Log)"
    },
    {
        id: 56,
        term: "Стек викликів",
        english: "Call Stack",
        greek: "Στοίβα κλήσεων (Stíva klíseon)",
        transcription: "Стіва клісеон",
        category: "javascript",
        notes: "Κωλ Στέικ (Call Stack)"
    },
    {
        id: 57,
        term: "Асинхронний код",
        english: "Async Code",
        greek: "Ασύγχρονος κώδικας (Asýnchronos kódikas)",
        transcription: "Асінхронос кодікас",
        category: "javascript",
        notes: "Async Code (Άσινκ Κόουντ)"
    },
    {
        id: 58,
        term: "Обіцянка (Promise)",
        english: "Promise",
        greek: "Υπόσχεση (Ypóschesi)",
        transcription: "Іпосхесі",
        category: "javascript",
        notes: "Також: Πρόμις (Promise)"
    },
    {
        id: 59,
        term: "API",
        english: "API",
        greek: "Διεπαφή Προγραμματισμού Εφαρμογών (Diepafí Programmatismoú Efarmogón)",
        transcription: "Діепафі Програматізму Ефармогон",
        category: "javascript",
        notes: "API (Εϊ-Πι-Άϊ)"
    },
    {
        id: 60,
        term: "HTTP-запит",
        english: "HTTP Request",
        greek: "Αίτημα HTTP (Aítima HTTP)",
        transcription: "Етіма HTTP",
        category: "javascript",
        notes: "HTTP Request (Ρίκουεστ)"
    },
    {
        id: 61,
        term: "Статус-код",
        english: "Status Code",
        greek: "Κωδικός κατάστασης (Kodikós katástasis)",
        transcription: "Кодікос катастасіс",
        category: "javascript",
        notes: "Status Code (Στέιτας Κόουντ)"
    },
    {
        id: 62,
        term: "JSON",
        english: "JSON",
        greek: "Τζέισον",
        transcription: "Джейсон",
        category: "javascript",
        notes: "JSON (JavaScript Object Notation)"
    },
    {
        id: 63,
        term: "Функція",
        english: "Function",
        greek: "Συνάρτηση (Synártisi)",
        transcription: "Сінартісі",
        category: "javascript",
        notes: "Function (Φάνκσιον)"
    },
    {
        id: 64,
        term: "Змінна",
        english: "Variable",
        greek: "Μεταβλητή (Metavlití)",
        transcription: "Метавліті",
        category: "javascript",
        notes: "Variable (Βέιριαμπλ)"
    },
    {
        id: 65,
        term: "Масив",
        english: "Array",
        greek: "Πίνακας (Pínakas)",
        transcription: "Пінакас",
        category: "javascript",
        notes: "Array (Έрει)"
    },
    {
        id: 66,
        term: "Об'єкт",
        english: "Object",
        greek: "Αντικείμενο (Antikeímeno)",
        transcription: "Антікімено",
        category: "javascript",
        notes: "Object (Όμπτζεκт)"
    },
    {
        id: 67,
        term: "Метод",
        english: "Method",
        greek: "Μέθοδος (Méthodos)",
        transcription: "Методос",
        category: "javascript",
        notes: "Method (Μέθοδ)"
    },
    {
        id: 68,
        term: "Властивість",
        english: "Property",
        greek: "Ιδιότητα (Idiótita)",
        transcription: "Ідіотіта",
        category: "javascript",
        notes: "Property (Προπέρτι)"
    },
    {
        id: 69,
        term: "Цикл",
        english: "Loop",
        greek: "Βρόχος (Vróchos)",
        transcription: "Врохос",
        category: "javascript",
        notes: "Loop (Λουп)"
    },
    {
        id: 70,
        term: "Умова",
        english: "Condition",
        greek: "Συνθήκη (Synthíki)",
        transcription: "Сінсікі",
        category: "javascript",
        notes: "Condition (Κονδίσιον)"
    },
    // Додаткові терміни (71-100)
    {
        id: 71,
        term: "Компонент",
        english: "Component",
        greek: "Συστατικό (Systatikó)",
        transcription: "Сістатіко",
        category: "frontend",
        notes: "Component (Κομπονέντ)"
    },
    {
        id: 72,
        term: "Стан",
        english: "State",
        greek: "Κατάσταση (Katástasi)",
        transcription: "Катастасі",
        category: "javascript",
        notes: "State (Στέιт)"
    },
    {
        id: 73,
        term: "Рендеринг",
        english: "Rendering",
        greek: "Αποτύπωση (Apotýposi)",
        transcription: "Апотіпосі",
        category: "frontend",
        notes: "Rendering (Ρέντερινγκ)"
    },
    {
        id: 74,
        term: "Хук",
        english: "Hook",
        greek: "Γάντζος (Gántzos)",
        transcription: "Гандзос",
        category: "javascript",
        notes: "Hook (Хуук)"
    },
    {
        id: 75,
        term: "Ефект",
        english: "Effect",
        greek: "Επίδραση (Epídrasi)",
        transcription: "Епідрасі",
        category: "javascript",
        notes: "Effect (Ефект)"
    },
    {
        id: 76,
        term: "Контекст",
        english: "Context",
        greek: "Περιβάλλον (Perivállon)",
        transcription: "Перівалон",
        category: "javascript",
        notes: "Context (Контекст)"
    },
    {
        id: 77,
        term: "Маршрутизація",
        english: "Routing",
        greek: "Δρομολόγηση (Dromológisi)",
        transcription: "Дромологісі",
        category: "frontend",
        notes: "Routing (Роутинг)"
    },
    {
        id: 78,
        term: "Маршрут",
        english: "Route",
        greek: "Διαδρομή (Diadromí)",
        transcription: "Діадромі",
        category: "frontend",
        notes: "Route (Рут)"
    },
    {
        id: 79,
        term: "Параметр",
        english: "Parameter",
        greek: "Παράμετρος (Parámetros)",
        transcription: "Параметрос",
        category: "javascript",
        notes: "Parameter (Параметр)"
    },
    {
        id: 80,
        term: "Аргумент",
        english: "Argument",
        greek: "Όρισμα (Órisma)",
        transcription: "Орісма",
        category: "javascript",
        notes: "Argument (Аргумент)"
    },
    {
        id: 81,
        term: "Повертаєме значення",
        english: "Return Value",
        greek: "Τιμή επιστροφής (Timí epistrofís)",
        transcription: "Тімі епістрофіс",
        category: "javascript",
        notes: "Return Value (Повертаєме значення)"
    },
    {
        id: 82,
        term: "Зворотний виклик",
        english: "Callback",
        greek: "Κλήση επιστροφής (Klísi epistrofís)",
        transcription: "Клісі епістрофіс",
        category: "javascript",
        notes: "Callback (Колбек)"
    },
    {
        id: 83,
        term: "Обробник подій",
        english: "Event Handler",
        greek: "Χειριστής συμβάντων (Cheiristís symvánton)",
        transcription: "Хірістіс симвантон",
        category: "javascript",
        notes: "Event Handler (Обробник подій)"
    },
    {
        id: 84,
        term: "Подія",
        english: "Event",
        greek: "Συμβάν (Symván)",
        transcription: "Сімван",
        category: "javascript",
        notes: "Event (Подія)"
    },
    {
        id: 85,
        term: "Документ",
        english: "Document",
        greek: "Έγγραφο (Éngrafo)",
        transcription: "Енграфо",
        category: "frontend",
        notes: "Document (Документ)"
    },
    {
        id: 86,
        term: "Елемент (DOM)",
        english: "Element (DOM)",
        greek: "Στοιχείο (Stoicheío)",
        transcription: "Стіхіо",
        category: "frontend",
        notes: "Також: Element (Елемент)"
    },
    {
        id: 87,
        term: "Селектор",
        english: "Selector",
        greek: "Επιλογέας (Epilogéas)",
        transcription: "Епілогеас",
        category: "frontend",
        notes: "Selector (Селектор)"
    },
    {
        id: 88,
        term: "Атрибут",
        english: "Attribute",
        greek: "Ιδιότητα (Idiótita)",
        transcription: "Ідіотіта",
        category: "frontend",
        notes: "Attribute (Атрибут)"
    },
    {
        id: 89,
        term: "Клас",
        english: "Class",
        greek: "Τάξη (Táxi)",
        transcription: "Таксі",
        category: "frontend",
        notes: "Class (Клас)"
    },
    {
        id: 90,
        term: "Ідентифікатор",
        english: "Identifier",
        greek: "Αναγνωριστικό (Anagnoristikó)",
        transcription: "Анагнорістіко",
        category: "frontend",
        notes: "Identifier (Ідентифікатор)"
    },
    {
        id: 91,
        term: "Стилі",
        english: "Styles",
        greek: "Στυλ (Styl)",
        transcription: "Стіл",
        category: "frontend",
        notes: "Styles (Стилі)"
    },
    {
        id: 92,
        term: "Анімація",
        english: "Animation",
        greek: "Κινούμενα σχέδια (Kinoúmena schédia)",
        transcription: "Кінумена схедіа",
        category: "frontend",
        notes: "Animation (Анімація)"
    },
    {
        id: 93,
        term: "Перехід",
        english: "Transition",
        greek: "Μετάβαση (Metávasi)",
        transcription: "Метавасі",
        category: "frontend",
        notes: "Transition (Перехід)"
    },
    {
        id: 94,
        term: "Завантаження",
        english: "Loading",
        greek: "Φόρτωση (Fórtosi)",
        transcription: "Фортосі",
        category: "frontend",
        notes: "Loading (Завантаження)"
    },
    {
        id: 95,
        term: "Помилка завантаження",
        english: "Loading Error",
        greek: "Σφάλμα φόρτωσης (Sfálma fórtosis)",
        transcription: "Сфалма фортосіс",
        category: "frontend",
        notes: "Loading Error (Помилка завантаження)"
    },
    {
        id: 96,
        term: "Таймаут",
        english: "Timeout",
        greek: "Χρονικό όριο (Chronikó ório)",
        transcription: "Хроніко оріо",
        category: "javascript",
        notes: "Timeout (Таймаут)"
    },
    {
        id: 97,
        term: "Інтервал",
        english: "Interval",
        greek: "Διάστημα (Diástima)",
        transcription: "Діастіма",
        category: "javascript",
        notes: "Interval (Інтервал)"
    },
    {
        id: 98,
        term: "Сховище",
        english: "Storage",
        greek: "Αποθήκη (Apothíki)",
        transcription: "Апосікі",
        category: "javascript",
        notes: "Storage (Сховище)"
    },
    {
        id: 99,
        term: "Куки",
        english: "Cookies",
        greek: "Μπισκότα (Biskóta)",
        transcription: "Біскота",
        category: "javascript",
        notes: "Cookies (Куки)"
    },
    {
        id: 100,
        term: "Сесія",
        english: "Session",
        greek: "Συνεδρία (Synedría)",
        transcription: "Сінедріа",
        category: "javascript",
        notes: "Session (Сесія)"
    }
];