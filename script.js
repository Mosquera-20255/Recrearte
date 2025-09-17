document.addEventListener('DOMContentLoaded', function () {

    // 1. Selección de Elementos del DOM
    const welcomeBanner = document.getElementById('welcome-banner');
    const getLocationBtn = document.getElementById('get-location-btn');
    const skipLocationBtn = document.getElementById('skip-location-btn');
    const loaderContainer = document.getElementById('loader-container');
    const introVideo = document.getElementById('intro-video');
    const mainContainer = document.querySelector('.main-container');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const skipBtn = document.getElementById('skip-video-btn');
    const dateCardsWrapper = document.getElementById('date-cards-wrapper');
    const dateFilterContainer = document.getElementById('date-filter-container');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
    const timeFilterButtons = document.querySelectorAll('.time-filter-btn');

    // 2. Datos y Coordenadas
    const defaultCoords = [4.7082200, -74.2278925];
    const eventsData = [
        // Viernes 26 de Septiembre
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'Feria Gastronómica', time: '5:00 p.m. a 12:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71003, lng: -74.22675, location: 'Parque Principal', name: 'CONCIERTO INAUGURAL', time: '5:00 p.m. a 12:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.7106, lng: -74.2319, location: 'Sector El Remanso', name: 'Jornada de embellecimiento ambiental', time: '8:00 a.m. a 12:00 m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.71032, lng: -74.21855, location: 'I.E. La Armonía', name: 'Exposición Vigías del Patrimonio', time: '9:00 a.m. a 10:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.7103, lng: -74.2269, location: 'Salón de alcaldes', name: 'Taller "Masti Mastodonte"', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.7011, lng: -74.2334, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '5:00 p.m. a 9:00 p.m.', date: '2025-09-26', img: 'marcador.jpg' },
        { lat: 4.70371, lng: -74.23117, location: 'Coliseo Lucio Amórtegui', name: 'YOGA FEST', time: '6:00 p.m. a 8:00 p.m.', date: '2025-09-26', img: 'marcador.jpg' },

        // Sábado 27 de Septiembre
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

    // 3. Flujo Principal (Video -> Banner -> Mapa)
    introVideo.addEventListener('ended', irAlBannerDeUbicacion);
    introVideo.addEventListener('error', irAlBannerDeUbicacion);
    skipBtn.addEventListener('click', irAlBannerDeUbicacion);

    function irAlBannerDeUbicacion() {
        if (loaderContainer.style.display === 'none') return;
        loaderContainer.style.display = 'none';
        welcomeBanner.style.display = 'flex';
    }

    getLocationBtn.addEventListener('click', () => {
        welcomeBanner.style.display = 'none';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => inicializarMapa([position.coords.latitude, position.coords.longitude], true),
                () => {
                    alert('No se pudo obtener tu ubicación. Mostrando mapa con la ubicación por defecto.');
                    inicializarMapa(defaultCoords, false);
                }
            );
        } else {
            alert('La geolocalización no es soportada por tu navegador.');
            inicializarMapa(defaultCoords, false);
        }
    });

    skipLocationBtn.addEventListener('click', () => {
        welcomeBanner.style.display = 'none';
        inicializarMapa(defaultCoords, false);
    });

    // 4. Lógica del Mapa y Filtros
    function inicializarMapa(coords, userLocationFound) {
        document.body.style.overflow = 'auto';
        mainContainer.style.display = 'block';

        mapInstance = L.map('mapa').setView(coords, 14);
        
        const lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
            attribution: '&copy; OpenStreetMap contributors' 
        }).addTo(mapInstance);
        const darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        });

        themeBtn.addEventListener('click', function () {
            if (mapInstance.hasLayer(lightLayer)) {
                mapInstance.removeLayer(lightLayer);
                darkLayer.addTo(mapInstance);
                this.textContent = 'Cambiar a Mapa Claro';
            } else {
                mapInstance.removeLayer(darkLayer);
                lightLayer.addTo(mapInstance);
                this.textContent = 'Cambiar a Mapa Oscuro';
            }
        });
        
        visibleMarkers.addTo(mapInstance);

        generarTarjetasDeFecha();
        setupCarouselButtons();
        setupTimeFilterButtons();

        if (userLocationFound) {
            const userIcon = L.divIcon({ className: 'user-location-marker', iconSize: [20, 20] });
            L.marker(coords, { icon: userIcon }).addTo(mapInstance)
                .bindTooltip('Estás aquí', { permanent: true, direction: 'top', offset: [0, -15], className: 'permanent-label' }).openTooltip();
        }
        
        document.querySelector('.date-card').click();
    }

    function setupCarouselButtons() {
        const scrollAmount = 300;
        scrollLeftBtn.addEventListener('click', () => {
            dateFilterContainer.scrollLeft -= scrollAmount;
        });
        scrollRightBtn.addEventListener('click', () => {
            dateFilterContainer.scrollLeft += scrollAmount;
        });
    }

    function setupTimeFilterButtons() {
        timeFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                timeFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                selectedTimeFilter = button.dataset.filter;
                updateMapMarkers();
            });
        });
    }
    
    function generarTarjetasDeFecha() {
        const startDate = new Date('2025-09-26T00:00:00-05:00');
        const endDate = new Date('2025-10-05T00:00:00-05:00');
        
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateString = d.toISOString().split('T')[0];
            const card = document.createElement('div');
            card.className = 'date-card';
            card.dataset.date = dateString;

            card.innerHTML = `
                <img src="FECHA.png" alt="Icono de fecha">
                <p class="date-day">${d.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</p>
                <p class="date-full">${d.toLocaleString('es-ES', { month: 'short' })}</p>
            `;
            
            card.addEventListener('click', () => {
                document.querySelectorAll('.date-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedDate = dateString;
                updateMapMarkers();
            });
            dateCardsWrapper.appendChild(card);
        }
    }

    function updateMapMarkers() {
        if (!selectedDate) return;

        visibleMarkers.clearLayers();
        
        let eventosDelDia = eventsData.filter(event => event.date === selectedDate);
        
        let eventosFiltradosPorHora = eventosDelDia.filter(event => {
            if (selectedTimeFilter === 'all') return true;
            
            const [startHour, endHour] = parseTime(event.time);
            if (startHour === null) return true;

            if (selectedTimeFilter === 'am') {
                return startHour < 12;
            }
            if (selectedTimeFilter === 'pm') {
                return endHour >= 12;
            }
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
                acc[key] = {
                    location: event.location,
                    lat: event.lat,
                    lng: event.lng,
                    img: event.img,
                    events: []
                };
            }
            acc[key].events.push({ name: event.name, time: event.time });
            return acc;
        }, {});
    }

    function mostrarMarcadores(eventosAgrupados) {
        Object.values(eventosAgrupados).forEach(group => {
            const icon = L.divIcon({
                className: 'marker-wrapper',
                html: `<img src="${group.img}" style="width: 75px; height: auto;">`,
                iconSize: [75, 62], iconAnchor: [37, 62]
            });
            const marker = L.marker([group.lat, group.lng], { icon: icon });

            const cronogramaUrl = 'https://web.facebook.com/share/p/1A22k4xkwH/';
            let popupContent = `<div class="event-popup-content"><h3>${group.location}</h3>`;
            group.events.forEach(event => {
                popupContent += `<p><strong>${event.name}</strong><br><span>${event.time}</span></p>`;
            });
            popupContent += `<a href="${cronogramaUrl}" target="_blank" class="cronograma-btn">Ver cronograma completo</a></div>`;
            
            marker.bindPopup(popupContent);

            // --- 👇 LÍNEA MODIFICADA ---
            // El tooltip ahora siempre muestra el nombre del lugar.
            let tooltipContent = group.location;
            // --- FIN DE LA LÍNEA MODIFICADA ---
            
            marker.bindTooltip(tooltipContent, { permanent: true, direction: 'top', offset: [0, -70], className: 'permanent-label' });
            
            visibleMarkers.addLayer(marker);
        });
    }

    function mostrarMensajesIntroductorios() {
        const zoomControl = document.querySelector('.leaflet-control-zoom');
        if (zoomControl) {
            const rect = zoomControl.getBoundingClientRect();
            const tooltipZoom = document.createElement('div');
            tooltipZoom.className = 'intro-tooltip right';
            tooltipZoom.innerHTML = 'Usa esto para acercar o alejar';
            document.body.appendChild(tooltipZoom);
            tooltipZoom.style.left = `${rect.right + 15}px`;
            tooltipZoom.style.top = `${rect.top + rect.height / 2 - tooltipZoom.offsetHeight / 2}px`;
            setTimeout(() => {
                tooltipZoom.classList.add('fade-out');
                setTimeout(() => tooltipZoom.remove(), 1500);
            }, 6000);
        }

        const fullscreenControl = document.querySelector('.leaflet-control-fullscreen');
        if (fullscreenControl) {
            const rect = fullscreenControl.getBoundingClientRect();
            const tooltipFullscreen = document.createElement('div');
            tooltipFullscreen.className = 'intro-tooltip right';
            tooltipFullscreen.innerHTML = 'Úsalo para ver en pantalla completa';
            document.body.appendChild(tooltipFullscreen);
            tooltipFullscreen.style.left = `${rect.right + 15}px`;
            tooltipFullscreen.style.top = `${rect.top + rect.height / 2 - tooltipFullscreen.offsetHeight / 2}px`;
            setTimeout(() => {
                tooltipFullscreen.classList.add('fade-out');
                setTimeout(() => tooltipFullscreen.remove(), 1500);
            }, 6000);
        }
    }
});