document.addEventListener('DOMContentLoaded', function () {

    // 1. Selección de Elementos del DOM
    // ... (selectores sin cambios) ...
    const dateCardsWrapper = document.getElementById('date-cards-wrapper');

    // 2. Datos y Coordenadas
    const defaultCoords = [4.7082200, -74.2278925];
    const eventsData = [
        // ... (la lista completa de eventos se mantiene igual) ...
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'Feria Gastronómica', time: '5:00 p.m. a 12:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'CONCIERTO INAUGURAL', time: '5:00 p.m. a 12:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.7106, lng: -74.2319, location: 'Sector El Remanso', name: 'Jornada de embellecimiento ambiental', time: '8:00 a.m. a 12:00 m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71032, lng: -74.21855, location: 'I.E. La Armonía', name: 'Exposición Vigías del Patrimonio', time: '9:00 a.m. a 10:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.7103, lng: -74.2269, location: 'Salón de alcaldes', name: 'Taller "Masti Mastodonte"', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.7011, lng: -74.2334, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '5:00 p.m. a 9:00 p.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.70371, lng: -74.23117, location: 'Coliseo Lucio Amórtegui', name: 'YOGA FEST', time: '6:00 p.m. a 8:00 p.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'CUMPLEAÑOS MOSQUERA', time: '8:00 a.m. a 11:00 a.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'Zona Beautiful', time: '3:00 p.m. a 6:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'CONCIERTO GOSPEL', time: '4:00 p.m. a 12:00 a.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.7153, lng: -74.223, location: 'Parqueadero Novaterra', name: 'MASTER CLASS actividad física', time: '7:00 a.m. a 7:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.7048, lng: -74.231, location: 'Parque Acuático', name: 'Festival de natación y paranatación', time: '7:00 a.m. a 4:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.7042, lng: -74.2315, location: 'Patinódromo', name: 'Feria de emprendimientos deportivos', time: '7:00 a.m. a 7:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.7001, lng: -74.241, location: 'Placa deportiva Cartagenita', name: 'Festival Voleibol piso', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.7135, lng: -74.215, location: 'Parque El Trébol', name: 'Festival Voleibol arena', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.719, lng: -74.22, location: 'Parque Ciudad Sabana', name: 'Festival Fútbol', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.711, lng: -74.228, location: 'Teatro Municipal', name: 'II encuentro de vigías del patrimonio', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.721, lng: -74.23, location: 'Los Puentes', name: 'Jornada de siembra', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.698, lng: -74.25, location: 'Parcelas', name: 'Juegos campesinos', time: '9:00 a.m. a 1:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.698, lng: -74.25, location: 'Parcelas', name: 'Muestra de danza Adulto Mayor', time: '1:00 p.m. a 3:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.70371, lng: -74.23117, location: 'Coliseo Lucio Amórtegui', name: 'Torneo Voleibol Piso 4x4', time: '2:00 p.m. a 8:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
        { lat: 4.7011, lng: -74.2334, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '6:00 p.m. a 9:00 p.m.', date: '2025-09-27', img: 'marcador.jpg' },
    ];

    let mapInstance;
    let visibleMarkers = L.layerGroup();
    let selectedDate = null;
    let selectedTimeFilter = 'all';

    let todayString, pastDates = [], futureDates = [];

    // 3. Flujo Principal (sin cambios)
    // ...

    // 4. Lógica del Mapa y Filtros
    function inicializarMapa(coords, userLocationFound) {
        document.body.style.overflow = 'auto';
        mainContainer.style.display = 'block';

        mapInstance = L.map('mapa').setView(coords, 14);

        // ... (código de inicialización de mapa y tema sin cambios) ...

        visibleMarkers.addTo(mapInstance);

        setupDynamicDateFilter();
        setupCarouselButtons();
        setupTimeFilterButtons();

        if (userLocationFound) {
            // ... (código del marcador de usuario sin cambios) ...
        }

        // Simula un clic en la tarjeta "Hoy" al iniciar
        document.querySelector('.date-card[data-date-type="today"]').click();
    }

    // 👇 --- LÓGICA DEL NUEVO FILTRO DE FECHA DINÁMICO --- 👇
    function setupDynamicDateFilter() {
        // Establece la fecha de "hoy"
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normaliza la hora para comparaciones
        todayString = today.toISOString().split('T')[0];

        // Obtiene todas las fechas únicas de los eventos y las ordena
        const allEventDates = [...new Set(eventsData.map(e => e.date))].sort();

        // Separa las fechas en pasadas y futuras
        allEventDates.forEach(dateStr => {
            const eventDate = new Date(`${dateStr}T00:00:00-05:00`);
            if (eventDate < today) {
                pastDates.push(dateStr);
            } else if (eventDate > today) {
                futureDates.push(dateStr);
            }
        });

        // Muestra la vista inicial del carrusel
        showInitialDateView();
    }

    function showInitialDateView() {
        dateCardsWrapper.innerHTML = ''; // Limpia el carrusel

        // Tarjeta de "Anteriores"
        if (pastDates.length > 0) {
            const pastCard = createNavCard('‹ Anteriores', 'past');
            pastCard.addEventListener('click', () => showDateCards(pastDates, 'past'));
            dateCardsWrapper.appendChild(pastCard);
        }

        // Tarjeta de "Hoy"
        const todayCard = createDateCard(todayString);
        todayCard.querySelector('.date-day').textContent = 'Hoy';
        todayCard.dataset.dateType = 'today';
        dateCardsWrapper.appendChild(todayCard);

        // Tarjeta de "Futuros"
        if (futureDates.length > 0) {
            const futureCard = createNavCard('Futuros ›', 'future');
            futureCard.addEventListener('click', () => showDateCards(futureDates, 'future'));
            dateCardsWrapper.appendChild(futureCard);
        }
    }

    function showDateCards(datesToShow, type) {
        dateCardsWrapper.innerHTML = '';

        // Botón para volver a la vista inicial
        const backCard = createNavCard('‹ Volver', 'back');
        backCard.addEventListener('click', showInitialDateView);
        dateCardsWrapper.appendChild(backCard);

        // Genera las tarjetas de fecha
        datesToShow.forEach(dateStr => {
            const dateCard = createDateCard(dateStr);
            dateCardsWrapper.appendChild(dateCard);
        });
    }

    function createNavCard(text, type) {
        const card = document.createElement('div');
        card.className = 'date-card nav-card';
        card.dataset.dateType = type;
        card.textContent = text;
        return card;
    }

    function createDateCard(dateString) {
        const date = new Date(`${dateString}T00:00:00-05:00`);
        const card = document.createElement('div');
        card.className = 'date-card';
        card.dataset.date = dateString;

        card.innerHTML = `
            <img src="FECHA.png" alt="Icono de fecha">
            <p class="date-day">${date.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</p>
            <p class="date-full">${date.toLocaleString('es-ES', { month: 'short' })}</p>
        `;

        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se disparen otros clics
            document.querySelectorAll('.date-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedDate = dateString;
            updateMapMarkers();
        });
        return card;
    }

    // El resto de funciones (updateMapMarkers, parseTime, etc.) se mantienen igual.
    // ...
    function updateMapMarkers() {
        if (!selectedDate) return;
        visibleMarkers.clearLayers();
        let eventosDelDia = eventsData.filter(event => event.date === selectedDate);
        let eventosFiltradosPorHora = eventosDelDia.filter(event => {
            if (selectedTimeFilter === 'all') return true;
            const [startHour, endHour] = parseTime(event.time);
            if (startHour === null) return true;
            if (selectedTimeFilter === 'am') return startHour < 12;
            if (selectedTimeFilter === 'pm') return endHour >= 12;
            return false;
        });
        const eventosAgrupados = agruparEventos(eventosFiltradosPorHora);
        mostrarMarcadores(eventosAgrupados);
    }
    function parseTime(timeString) {
        try {
            const cleanTime = timeString.replace(/\./g, '').toLowerCase();
            const parts = cleanTime.split(' a ');
            let startHour = parseInt(parts[0].split(':')[0]);
            let endHour = parseInt(parts[1].split(':')[0]);
            if (parts[0].includes('p.m.') && startHour !== 12) startHour += 12;
            if (parts[0].includes('m.') && startHour == 12) startHour = 12;
            if (parts[0].includes('a.m.') && startHour === 12) startHour = 0;
            if (parts[1].includes('p.m.') && endHour !== 12) endHour += 12;
            if (parts[1].includes('a.m.') && endHour === 12) endHour = 24;
            if (parts[1].includes('m.') && endHour == 12) endHour = 12;
            return [startHour, endHour];
        } catch (e) {
            return [null, null];
        }
    }
    function agruparEventos(eventos) {
        return eventos.reduce((acc, event) => {
            const key = `${event.lat},${event.lng}`;
            if (!acc[key]) {
                acc[key] = { location: event.location, lat: event.lat, lng: event.lng, img: event.img, events: [] };
            }
            acc[key].events.push({ name: event.name, time: event.time });
            return acc;
        }, {});
    }
    function mostrarMarcadores(eventosAgrupados) {
        Object.values(eventosAgrupados).forEach(group => {
            const icon = L.divIcon({ className: 'marker-wrapper', html: `<img src="${group.img}" style="width: 75px; height: auto;">`, iconSize: [75, 62], iconAnchor: [37, 62] });
            const marker = L.marker([group.lat, group.lng], { icon: icon });
            const cronogramaUrl = 'https://web.facebook.com/share/p/1A22k4xkwH/';
            let popupContent = `<div class="event-popup-content"><h3>${group.location}</h3>`;
            group.events.forEach(event => {
                popupContent += `<p><strong>${event.name}</strong><br><span>${event.time}</span></p>`;
            });
            popupContent += `<a href="${cronogramaUrl}" target="_blank" class="cronograma-btn">Ver cronograma completo</a></div>`;
            marker.bindPopup(popupContent);
            let tooltipContent = group.location;
            marker.bindTooltip(tooltipContent, { permanent: true, direction: 'top', offset: [0, -70], className: 'permanent-label' });
            visibleMarkers.addLayer(marker);
        });
    }
    function setupCarouselButtons() { /* ... */ }
    function setupTimeFilterButtons() { /* ... */ }
    function mostrarMensajesIntroductorios() { /* ... */ }
});