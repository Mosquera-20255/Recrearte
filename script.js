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
    const categoryFilterButtons = document.querySelectorAll('.category-filter-btn');

    // 2. Datos y Coordenadas
    const defaultCoords = [4.704936, -74.230412];

    const preMapImages = {
        '2025-09-26': ['26-09-2025.jpg'],
        '2025-09-27': ['27-09-2025.jpg', '27-09-20251.jpg'],
        '2025-09-28': ['28-09-2025.jpg', '28-09-20251.jpg'],
        '2025-09-29': ['29-09-2025.jpg'],
        '2025-09-30': ['30-10-2025.jpg'],
        '2025-10-01': ['01-10-2025.jpg', '01-10-20251.jpg'],
        '2025-10-02': ['02-10-2025.jpg', '02-10-20251.jpg'],
        '2025-10-03': ['03-10-2025.jpg', '03-10-20251.jpg'],
        '2025-10-04': ['04-10-2025.jpg', '04-10-20251.jpg', '04-10-20252.jpg'],
        '2025-10-05': ['05-10-2025.jpg']
    };

    const eventsData = [
        
        // Viernes 26 de Septiembre
        { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'CONCIERTO INAUGURAL', time: '5:00 p.m. a 12:00 a.m.', date: '2025-09-26', category: 'cultura', img: 'img/inaugural.jpg' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-09-26', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'EXPOARTE: "Mosquera Artesanal... Raíces y Tradición".', time: '8:00 a.m. a 8:00 p.m.', date: '2025-09-26', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Gastronómica', time: '5:00 p.m. a 12:00 a.m.', date: '2025-09-26', category: 'cultura', img: 'img/comida.png' },
            { lat: 4.724202, lng: - 74.224764, location: 'Sector El Remanso - Calle 23 con Carrera 16', name: 'Jornada de embellecimiento ambiental', time: '8:00 a.m. a 12:00 m.', date: '2025-09-26', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.727441, lng: -74.228158, location: 'I.E. La Armonía', name: 'Exposición experiencia pedagógica Vigías del Patrimonio Cultural', time: '9:00 a.m. a 10:00 a.m.', date: '2025-09-26', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.7100829560832915, lng: -74.22597757694139, location: 'Salón de alcaldes', name: 'Taller de Servicio Geológico "Masti Mastodonte"', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-26', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'YOGA FEST', time: '6:00 p.m. a 8:00 p.m.', date: '2025-09-26', category: 'cultura', img: 'img/meditacion.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '5:00 p.m. a 9:00 p.m.', date: '2025-09-26', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Sábado 27 de Septiembre
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'CONCIERTO GOSPEL', time: '4:00 p.m. a 12:00 a.m.', date: '2025-09-27', category: 'cultura', img: 'img/gospel.jpg' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-09-27', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'CUMPLEAÑOS MOSQUERA "Día de la Identidad Mosqueruna".', time: '8:00 a.m. a 11:00 a.m.', date: '2025-09-27', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Zona Beautiful - Conecta con lo mejor de ti', time: '3:00 p.m. a 6:00 p.m.', date: '2025-09-27', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.702222, lng: -74.229273, location: 'Patinódromo', name: 'Feria de emprendimientos deportivos', time: '7:00 a.m. a 7:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/aerobicos.png' },
            { lat: 4.704811, lng: -74.229501, location: 'Teatro Municipal', name: 'II encuentro de vigías del patrimonio cultural', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.683269, lng: -74.257089, location: 'Los Puentes', name: 'Jornada de siembra', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-27', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.660638, lng: -74.241552, location: 'Parcelas', name: 'Juegos campesinos', time: '9:00 a.m. a 1:00 p.m.', date: '2025-09-27', category: 'cultura', img: 'img/deporte.png' },
            { lat: 4.660638, lng: -74.241552, location: 'Parcelas', name: 'Muestra de danza Adulto Mayor', time: '1:00 p.m. a 3:00 p.m.', date: '2025-09-27', category: 'cultura', img: 'img/aerobicos.png' },
            { lat: 4.695958, lng: -74.234397, location: 'Parqueadero Novaterra - Parque Cultural', name: 'MASTER CLASS actividad física', time: '7:00 a.m. a 7:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/aerobicos.png' },
            { lat: 4.710342, lng: -74.226286, location: 'Parque acuático', name: 'Festival de natación y paranatación', time: '7:00 a.m. a 4:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/natacion.png' },
            { lat: 4.705296, lng: -74.226535, location: 'Placa deportiva Cartagenita', name: 'Festival de deporte formativo Voleibol piso', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.708470, lng: -74.223776, location: 'Parque El Trébol', name: 'Festival de deporte formativo Voleibol arena', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.726306, lng: -74.227977, location: 'Parque Ciudad Sabana', name: 'Festival de deporte formativo Fútbol', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo Voleibol Piso 4x4', time: '2:00 p.m. a 8:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '6:00 p.m. a 9:00 p.m.', date: '2025-09-27', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Domingo 28 de Septiembre

            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 7:00 p.m.', date: '2025-09-28', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.726306, lng: -74.227977, location: 'Parque Ciudad Sabana', name: 'Juego del buen vecino', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-28', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.726306, lng: -74.227977, location: 'Parque Ciudad Sabana', name: 'Muestra y clase de Capoeira', time: '11:00 a.m. a 12:00 m.', date: '2025-09-28', category: 'cultura', img: 'img/musica.png' },
            { lat: 4.704811, lng: -74.229501, location: 'Teatro Municipal', name: 'Festival Potencia Creativa', time: '1:00 p.m. a 7:00 p.m.', date: '2025-09-28', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.693033, lng: -74.173478, location: 'Centro Cultural de Oriente', name: 'Recrearte al barrio - Noche de humor con Camilo Cifuentes', time: '4:00 p.m. a 10:00 p.m.', date: '2025-09-28', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.696874, lng: -74.286838, location: 'Pista Laguna de La Herrera - Cerro del Petroglifo', name: 'Festival push bike', time: '7:00 a.m. a 9:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.696874, lng: -74.286838, location: 'Los Puentes Barro Blanco, La Palma - salida desde Cerro del Petroglifo', name: 'Recrearte MTB Race', time: '7:00 a.m. a 11:00 a.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.702222, lng: -74.229273, location: 'Patinódromo', name: 'Festival de deporte formativo Patinaje de carreras', time: '7:00 a.m. a 4:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Hybrid Challenge/Fitness Race', time: '7:00 a.m. a 5:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/aerobicos.png' },
            { lat: 4.726306, lng: -74.227977, location: 'Parque Ciudad Sabana', name: 'Festival de deporte formativo Fútbol', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.714676, lng: -74.218045, location: 'Lote Zapatoca', name: 'Festival de deporte formativo Disco Volador', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo Voleibol piso 4x4', time: '8:00 a.m. a 5:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.710908, lng: -74.225786, location: 'Parqueadero Auditorio', name: 'Jumping en aeróbicos', time: '9:00 a.m. a 11:00 a.m.', date: '2025-09-28', category: 'deporte', img: 'img/aerobicos.png' },
            { lat: 4.708470, lng: -74.223776, location: 'Parque El Trébol', name: 'Carrera de observación recreativa', time: '11:00 a.m. a 2:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '6:00 p.m. a 9:00 p.m.', date: '2025-09-28', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Lunes 29 de Septiembre

            { lat: 4.710428, lng: -74.225928, location: 'Auditorio y Teatro Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 12:00 m.', date: '2025-09-29', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.704751, lng: -74.229559, location: 'Auditorio y Teatro Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 12:00 m.', date: '2025-09-29', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Digital Tech', time: '8:00 a.m. a 4:00 p.m.', date: '2025-09-29', category: 'cultura', img: 'img/tic.png' },
            { lat: 4.704910, lng: -74.229717, location: 'Concejo Municipal', name: 'Exposición Alfarería y orfebrería Muisca', time: '9:00 a.m.', date: '2025-09-29', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.706880, lng: -74.229576, location: 'Casa de las Artes', name: 'Exposición Habitando la historia', time: '6:00 p.m.', date: '2025-09-29', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.690551, lng: -74.176264, location: 'Campos de Plata', name: 'Carrera de observación recreativa', time: '7:00 a.m. a 1:00 p.m.', date: '2025-09-29', category: 'deporte', img: 'img/cultura.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Maratón de actividad física', time: '8:00 a.m. a 10:00 a.m.', date: '2025-09-29', category: 'deporte', img: 'img/aerobicos.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo baloncesto 3x3', time: '7:00 p.m. a 10:00 p.m.', date: '2025-09-29', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '6:00 p.m. a 9:00 p.m.', date: '2025-09-29', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Martes 30 de Septiembre

            { lat: 4.710428, lng: -74.225928, location: 'Auditorio y Teatro Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 12:00 m.', date: '2025-09-30', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.704751, lng: -74.229559, location: 'Auditorio y Teatro Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 12:00 m.', date: '2025-09-30', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Digital Tech', time: '7:00 a.m. a 1:00 p.m.', date: '2025-09-30', category: 'cultura', img: 'img/tic.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'RegioLab (Cultura Regio)', time: '8:00 a.m. a 10:00 a.m.', date: '2025-09-30', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.704811, lng: -74.229501, location: 'Teatro Municipal', name: 'Proyección película "Tundama"', time: '2:00 p.m. a 4:00 p.m.', date: '2025-09-30', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.726306, lng: -74.227977, location: 'Parque Ciudad Sabana', name: 'Recrearte al barrio - Noche de humor con el Show de Tato', time: '4:00 p.m. a 9:00 p.m.', date: '2025-09-30', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.693660, lng: -74.180896, location: 'Planadas Acanto', name: 'Zona Beautiful - Conecta con lo mejor de ti', time: '5:00 p.m. a 7:00 p.m.', date: '2025-09-30', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.710342, lng: -74.226286, location: 'Parque Acuático', name: 'Waterpolo', time: '8:00 a.m. a 12:00 m.', date: '2025-09-30', category: 'deporte', img: 'img/natacion.png' },
            { lat: 4.719027, lng: -74.227780, location: 'Parque de las Aguas', name: 'Carrera de observación recreativa', time: '9:00 a.m. a 3:00 p.m.', date: '2025-09-30', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Gala de boxeo', time: '5:00 p.m. a 9:00 p.m.', date: '2025-09-30', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.693660, lng: -74.180896, location: 'Planadas Acanto', name: 'Rumba neón', time: '6:00 p.m. a 8:00 p.m.', date: '2025-09-30', category: 'deporte', img: 'img/musica.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno Fútbol de salón', time: '6:00 p.m. a 9:00 p.m.', date: '2025-09-30', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo baloncesto 3x3', time: '7:00 a.m. a 10:00 p.m.', date: '2025-09-30', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Miércoles 01 de Octubre

            { lat: 4.710428, lng: -74.225928, location: 'Auditorio y Teatro Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 12:00 m.', date: '2025-10-01', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.704751, lng: -74.229559, location: 'Auditorio y Teatro Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 12:00 m.', date: '2025-10-01', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.710428, lng: -74.225928, location: 'Auditorio y Teatro Municipal', name: 'Función de Teatro "Casi Cuarentones" de rafael leal, vlacho, gufi', time: '7:00 p.m. a 9:00 a.m.', date: '2025-10-01', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 3:00 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Educateca con La Mega y El Sol', time: '1:00 p.m. a 9:00 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/musica.png' },
            { lat: 4.694286, lng: -74.184300, location: 'I.E. Mayor de Mosquera', name: 'Mariposario', time: '8:00 a.m. a 1:00 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.7100829560832915, lng: -74.22597757694139, location: 'Salón de alcaldes', name: 'De la cerámica al papel, ilustrando esculturas', time: '9:00 a.m. a 11:00 a.m.', date: '2025-10-01', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.702346, lng: -74.228115, location: 'Casa Social de La Mujer', name: 'Pinceladas de igualdad de género', time: '9:00 a.m. a 7:00 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705530966613768, lng: -74.22993205094703, location: 'Salón blanco I.E. La Merced', name: 'Desafío de saberes', time: '1:00 p.m. a 9:00 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.704811, lng: -74.229501, location: 'Teatro Municipal', name: 'Taller práctico: formas del patrimonio a la ruralidad', time: '1:30 p.m. a 3:30 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.701992102032353, lng: -74.21170150422444, location: 'Polideportivo El Rubí', name: 'Recrearte al barrio - Noche de humor con Franco Bonilla', time: '4:00 p.m. a 9:00 p.m.', date: '2025-10-01', category: 'cultura', img: 'img/musica.png' },
            { lat: 4.710342, lng: -74.226286, location: 'Parque Acuático', name: 'Waterpolo', time: '7:00 a.m. a 3:00 p.m.', date: '2025-10-01', category: 'deporte', img: 'img/natacion.png' },
            { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'Rumba Kids', time: '9:00 a.m. a 11:00 a.m.', date: '2025-10-01', category: 'deporte', img: 'img/musica.png' },
            { lat: 4.712550, lng: -74.221479, location: 'Centro Comercial Ecoplaza', name: 'Festival de deporte formativo Porrismo', time: '5:00 p.m. a 8:00 p.m.', date: '2025-10-01', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '7:00 p.m. a 9:00 p.m.', date: '2025-10-01', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo baloncesto 3x3', time: '7:00 p.m. a 10:00 p.m.', date: '2025-10-01', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Jueves 02 de Octubre

            { lat: 4.707795, lng: -74.228978, location: 'Colegio Salesiano', name: 'Intercolegiados de artes', time: '7:00 a.m. a 2:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 3:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Un trago por la vida', time: '5:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.702880, lng: -74.230018, location: 'Casa del Adulto Mayor', name: 'Charla Taller de archivo personal', time: '9:00 a.m. a 11:00 a.m.', date: '2025-10-02', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'CONCIERTO KIDS', time: '10:00 a.m. a 12:00 m.', date: '2025-10-02', category: 'cultura', img: 'img/adulto.jpg' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'CONCIERTO ADULTO MAYOR', time: '4:00 p.m. a 10:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/adulto.jpg' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Feria gastronómica', time: '4:00 p.m. a 10:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/comida.png' },
            { lat: 4.704811, lng: -74.229501, location: 'Teatro Municipal', name: 'II Encuentro Nacional Juvenil de Teatro Escuelero', time: '2:00 p.m. a 7:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.701992102032353, lng: -74.21170150422444, location: 'Polideportivo El Rubí', name: 'Juego del buen vecino', time: '3:00 p.m. a 5:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/deporte.png' },
            { lat: 4.706880, lng: -74.229576, location: 'Casa de las Artes', name: 'Piensa en tu museo', time: '3:00 p.m. a 5:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.7165448728652715, lng: -74.22524110019764, location: 'Parque San Telmo', name: 'Recrearte al barrio- Noche de humor con El Show de Tato', time: '4:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/musica.png' },
            { lat: 4.697813, lng: -74.238703, location: 'Centro Comercial Novaterra Meridiano', name: 'Recrearte al barrio - Noche de humor con Franco Bonilla', time: '4:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.710428, lng: -74.225928, location: 'Auditorio Municipal', name: 'Función de teatro "Mucho Animal" de Robinson Díaz', time: '7:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.710342, lng: -74.226286, location: 'Parque Acuático', name: 'Aprende de buceo', time: '9:00 a.m. a 11:00 a.m.', date: '2025-10-02', category: 'deporte', img: 'img/natacion.png' },
            { lat: 4.712309, lng: -74.230712, location: 'Skatepark', name: 'Festival de deporte formativo Skateboard', time: '3:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '6:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo baloncesto 3x3', time: '7:00 p.m. a 9:00 p.m.', date: '2025-10-02', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Viernes 03 de Octubre

            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-03', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Simulador de volcamiento', time: '1:00 p.m. a 5:00 p.m.', date: '2025-10-03', category: 'cultura', img: 'img/deporte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Pasarela identidad que inspira: orgullo, color y resistencia', time: '4:30 p.m. a 5:30 p.m.', date: '2025-10-03', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Batalla de genios "BotRush"', time: '7:00 a.m. a 5:30 p.m.', date: '2025-10-03', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.710428, lng: -74.225928, location: 'Auditorio Municipal', name: 'Intercolegiados de artes', time: '7:00 a.m. a 1:00 p.m.', date: '2025-10-03', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.710428, lng: -74.225928, location: 'Auditorio Municipal', name: 'II Encuentro Nacional Juvenil de Teatro Escuelero', time: '2:00 p.m. a 7:00 p.m.', date: '2025-10-03', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.704811, lng: -74.229501, location: 'Teatro Municipal', name: 'Premiación XIV versión concurso de escritura', time: '10:00 a.m. a 11:00 a.m.', date: '2025-10-03', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'CONCIERTO JOVEN', time: '5:00 p.m. a 12:00 a.m.', date: '2025-10-03', category: 'cultura', img: 'img/joven.jpg' },
            { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'Feria gastronómica', time: '5:00 p.m. a 12:00 a.m.', date: '2025-10-03', category: 'cultura', img: 'img/comida.png' },
            { lat: 4.710342, lng: -74.226286, location: 'Parque Acuático', name: 'Aprende de buceo', time: '8:00 a.m. a 10:00 a.m.', date: '2025-10-03', category: 'deporte', img: 'img/natacion.png' },
            { lat: 4.710342, lng: -74.226286, location: 'Parque Acuático', name: 'Aqua rumba', time: '6:00 p.m. a 9:00 p.m.', date: '2025-10-03', category: 'deporte', img: 'img/natacion.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Festival de rondas', time: '8:00 a.m. a 12:00 m.', date: '2025-10-03', category: 'deporte', img: 'img/logo.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Torneo baloncesto 3x3', time: '7:00 p.m. a 10:00 p.m.', date: '2025-10-03', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.710233, lng: -74.225636, location: 'Parque Cultural', name: 'Masnou liga de ajedrez', time: '1:00 p.m. a 4:00 p.m.', date: '2025-10-03', category: 'deporte', img: 'img/logo.png' },
            { lat: 4.712800, lng: -74.219759, location: 'La Esperanza - Villa Nueva', name: 'Torneo nocturno fútbol de salón', time: '3:00 p.m. a 7:00 p.m.', date: '2025-10-03', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.714676, lng: -74.218045, location: 'Lote Zapatoca', name: 'CAMPAMENTO JUVENIL presentación artistas locales', time: '3:00 p.m.', date: '2025-10-03', category: 'deporte', img: 'img/arte.png' },
            { lat: 4.697977, lng: -74.295747, location: 'Parque Principal - El Pencal', name: 'Ciclo paseo nocturno', time: '6:00 p.m. a 11:00 p.m.', date: '2025-10-03', category: 'deporte', img: 'img/deporte.png' }
            ,

            // Sábado 04 de Octubre

            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.726306, lng: -74.227977, location: 'Parque Ciudad Sabana', name: 'Jornada de bienestar animal', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Conversatorio de sabores y exhibición Master Chef con Patricia Grisales', time: '11:00 a.m. a 2:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Pasarela Herencia Nativa', time: '2:00 p.m. a 5:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.706880, lng: -74.229576, location: 'Casa de las Artes', name: 'Encuentro de consejeros de Sabana de Occidente', time: '8:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.710233, lng: -74.225636, location: 'Parque Cultural', name: 'Muestra y clase de Capoeira', time: '11:00 a.m. a 12:00 m.', date: '2025-10-04', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'Feria gastronómica', time: '1:00 p.m. a 7:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/cierre.jpg' },
        { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'Zona Beautiful - Conecta con lo mejor de ti', time: '3:00 p.m. a 7:00 p.m.', date: '2025-10-04', category: 'cultura', img: 'img/cierre.jpg' },
        { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'CONCIERTO DE CIERRE', time: '5:30 p.m. a 2:00 a.m.', date: '2025-10-04', category: 'cultura', img: 'img/cierre.jpg' },
            { lat: 4.708470, lng: -74.223776, location: 'Parque El Trébol y Acanto', name: 'Mundo inflable', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/logo.png' },
            { lat: 4.693660, lng: -74.180896, location: 'Parque El Trébol y Acanto', name: 'Mundo inflable', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/logo.png' },
            { lat: 4.693033, lng: -74.173478, location: 'Centro Cultural de Oriente', name: 'Torneo de fútbol tenis', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.719601844828088, lng: -74.22440368222686, location: 'Placa deportiva La Arboleda', name: 'Festival de deporte formativo Fútbol de salón', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Master class de rumba vs. zumba', time: '8:00 a.m. a 10:00 a.m.', date: '2025-10-04', category: 'deporte', img: 'img/aerobicos.png' },
            { lat: 4.702077, lng: -74.229904, location: 'Pista Villa Deportiva', name: 'Festival de deporte formativo Ciclomontañismo', time: '8:00 a.m. a 2:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.696436, lng: -74.235131, location: 'Campo de tennis Parque Novaterra', name: 'Festival de deporte formativo Tenis de Campo', time: '8:00 a.m. a 4:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.710233, lng: -74.225636, location: 'Parque Cultural', name: 'Deporte extremo', time: '8:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Simulador 3D videojuegos', time: '8:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/logo.png' },
            { lat: 4.710908, lng: -74.225786, location: 'Parqueadero Auditorio', name: 'Pista de Karts', time: '8:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.721564, lng: -74.224401, location: 'Placas Deportivas Remanso I - II', name: 'Festival de deporte formativo Baloncesto', time: '8:00 a.m. a 5:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.703192, lng: -74.231355, location: 'Coliseo Nuevo', name: 'Festival de deporte formativo Voleibol piso', time: '9:00 a.m. a 3:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.722072, lng: -74.231859, location: 'Siete Trojes', name: 'Juegos campesinos', time: '9:00 a.m. a 3:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.714676, lng: -74.218045, location: 'Lote Zapatoca', name: 'CAMPAMENTO JUVENIL presentación artistas locales', time: '12:00 m.', date: '2025-10-04', category: 'deporte', img: 'img/arte.png' },
        { lat: 4.705292, lng: -74.226512, location: 'Polideportivo Cartagenita', name: 'Torneo baloncesto 3x3', time: '2:00 p.m. a 6:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.719027, lng: -74.227780, location: 'Parque de las Aguas', name: 'Torneo de bolirana para presidentes de juntas y representantes de los sectores de PH', time: '2:00 p.m. a 6:00 p.m.', date: '2025-10-04', category: 'deporte', img: 'img/deporte.png' },

            // Domingo 05 de Octubre

            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Feria Emotion', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'cultura', img: 'img/arte.png' },
            { lat: 4.705197, lng: -74.230284, location: 'Parque Principal', name: 'Festival de tunas', time: '11:30 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'cultura', img: 'img/cultura.png' },
            { lat: 4.702955, lng: -74.230930, location: 'Villa Deportiva', name: 'Misa campal / Encuentro música sacra', time: '1:00 p.m. a 5:00 p.m.', date: '2025-10-05', category: 'cultura', img: 'img/logo.png' },
            { lat: 4.660638, lng: -74.241552, location: 'Parcelas', name: 'Entrega de Mural', time: '5:00 p.m.', date: '2025-10-05', category: 'cultura', img: 'img/arte.png' },
        { lat: 4.721564, lng: -74.224401, location: 'Placa Deportiva Remanso I - II', name: 'Festival de deporte formativo Baloncesto', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.705292, lng: -74.226512, location: 'Placa Deportiva Cartagenita', name: 'Festival de deporte formativo Fútbol de salón', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
            { lat: 4.703878, lng: -74.231821, location: 'Coliseo Lucio Amórtegui', name: 'Simulador 3D videojuegos', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/logo.png' },
        { lat: 4.708470, lng: -74.223776, location: 'Parque El Trébol - Acanto', name: 'Mundo inflable', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.693660, lng: -74.180896, location: 'Parque El Trébol - Acanto', name: 'Mundo inflable', time: '7:00 a.m. a 5:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.714150, lng: -74.225225, location: 'Los Puertos', name: 'CARRERA POR EL AGUA 5K', time: '8:00 a.m. a 12:00 m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.710908, lng: -74.225786, location: 'Parqueadero Auditorio', name: 'Pista de karts', time: '8:00a.m. a 5:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.693186, lng: -74.180701, location: 'Sabana - Planadas', name: 'Torneo de rana para recuperadores ambientales', time: '9:00 a.m. a 12:00 m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        { lat: 4.710233, lng: -74.225636, location: 'Parque Cultural', name: 'Deporte extremo', time: '9:00 a.m. a 1:00 p.m.', date: '2025-10-05', category: 'deporte', img: 'img/deporte.png' },
        ];

    let mapInstance;
    let visibleMarkers = L.layerGroup();
    let selectedDate = null;
    let selectedTimeFilter = 'all';
    let selectedCategoryFilter = 'all';

    // --- Definición de TODAS las funciones ANTES de usarlas ---

    function getTodayString() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function updatePreMapImage(dateString) {
        const preMapImageContainer = document.querySelector('.pre-map-image-container');
        if (!preMapImageContainer) return;

        preMapImageContainer.innerHTML = '';

        const imagesForDate = preMapImages[dateString];

        if (imagesForDate && imagesForDate.length > 0) {
            imagesForDate.forEach(imageName => {
                const newImage = document.createElement('img');
                newImage.src = `img/${imageName}`;
                newImage.alt = "Cronograma del Evento";
                newImage.className = 'pre-map-image';
                preMapImageContainer.appendChild(newImage);
            });
            preMapImageContainer.style.display = 'block';
        } else {
            preMapImageContainer.style.display = 'none';
        }
    }

    function createDateCard(dateString) {
        const parts = dateString.split('-');
        const date = new Date(parts[0], parts[1] - 1, parts[2]);
        const card = document.createElement('div');
        card.className = 'date-card';
        card.dataset.date = dateString;
        card.innerHTML = `
            <img src="img/FECHA.png" alt="Icono de fecha">
            <p class="date-day">${date.toLocaleString('es-ES', { weekday: 'short', day: 'numeric' })}</p>
            <p class="date-full">${date.toLocaleString('es-ES', { month: 'short' })}</p>
        `;
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.date-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedDate = dateString;
            updateMapMarkers();
            updatePreMapImage(selectedDate);
        });
        return card;
    }

    function createNavCard(text) {
        const card = document.createElement('div');
        card.className = 'date-card nav-card';
        card.innerHTML = `
            <img src="img/FECHA.png" alt="Icono de navegación">
            <p class="date-day" style="margin-top: 8px;">${text}</p>
        `;
        return card;
    }

    function showDateCards(datesToShow) {
        dateCardsWrapper.innerHTML = '';
        const backCard = createNavCard('‹ Volver');
        backCard.addEventListener('click', setupDynamicDateFilter);
        dateCardsWrapper.appendChild(backCard);
        datesToShow.forEach(dateStr => {
            const dateCard = createDateCard(dateStr);
            dateCardsWrapper.appendChild(dateCard);
        });
    }

    function showFixedFutureDates() {
        dateCardsWrapper.innerHTML = '';
        const backCard = createNavCard('‹ Volver');
        backCard.addEventListener('click', setupDynamicDateFilter);
        dateCardsWrapper.appendChild(backCard);
        const startDate = new Date('2025-09-26T00:00:00-05:00');
        const endDate = new Date('2025-10-05T00:00:00-05:00');
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateString = new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
            const dateCard = createDateCard(dateString);
            dateCardsWrapper.appendChild(dateCard);
        }
    }

    function showInitialDateView(todayString, pastDates) {
        dateCardsWrapper.innerHTML = '';
        if (pastDates.length > 0) {
            const pastCard = createNavCard('‹ Anteriores');
            pastCard.addEventListener('click', () => showDateCards(pastDates));
            dateCardsWrapper.appendChild(pastCard);
        }
        const todayCard = createDateCard(todayString);
        const dayParagraph = todayCard.querySelector('.date-day');
        const dateText = dayParagraph.textContent;
        dayParagraph.innerHTML = `Hoy<br><span style="font-size: 0.8em; font-weight: normal;">${dateText}</span>`;
        todayCard.dataset.dateType = 'today';
        dateCardsWrapper.appendChild(todayCard);
        const futureCard = createNavCard('Futuros ›');
        futureCard.addEventListener('click', showFixedFutureDates);
        dateCardsWrapper.appendChild(futureCard);
    }

    function setupDynamicDateFilter() {
        const todayString = getTodayString();
        const allEventDates = [...new Set(eventsData.map(e => e.date))].sort();
        const pastDates = allEventDates.filter(d => d < todayString);
        showInitialDateView(todayString, pastDates);
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
            marker.bindTooltip(group.location, { permanent: true, direction: 'top', offset: [0, -70], className: 'permanent-label' });
            visibleMarkers.addLayer(marker);
        });
    }

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
        let eventosFinales = eventosFiltradosPorHora.filter(event => {
            if (selectedCategoryFilter === 'all') return true;
            return event.category === selectedCategoryFilter;
        });
        const eventosAgrupados = agruparEventos(eventosFinales);
        mostrarMarcadores(eventosAgrupados);
    }

    function setupCarouselButtons() {
        const scrollAmount = 300;
        scrollLeftBtn.addEventListener('click', () => { dateFilterContainer.scrollLeft -= scrollAmount; });
        scrollRightBtn.addEventListener('click', () => { dateFilterContainer.scrollLeft += scrollAmount; });
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

    function setupCategoryFilterButtons() {
        categoryFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                selectedCategoryFilter = button.dataset.filter;
                updateMapMarkers();
            });
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
                setTimeout(() => tooltipZoom.remove(), 2000);
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

    function inicializarMapa(coords, userLocationFound) {
        document.body.style.overflow = 'auto';
        mainContainer.style.display = 'block';
        mapInstance = L.map('mapa').setView(coords, 17);

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
        setupDynamicDateFilter();
        setupCarouselButtons();
        setupTimeFilterButtons();
        setupCategoryFilterButtons();

        if (userLocationFound) {
            const userIcon = L.divIcon({ className: 'user-location-marker', iconSize: [20, 20] });
            L.marker(coords, { icon: userIcon }).addTo(mapInstance)
                .bindTooltip('Estás aquí', { permanent: true, direction: 'top', offset: [0, -15], className: 'permanent-label' }).openTooltip();
        }

        const todayCard = document.querySelector('.date-card[data-date-type="today"]');
        if (todayCard) {
            todayCard.click();
        }
    }

    function irAlBannerDeUbicacion() {
        if (loaderContainer.style.display === 'none') return;
        loaderContainer.style.display = 'none';
        welcomeBanner.style.display = 'flex';
    }

    introVideo.addEventListener('ended', irAlBannerDeUbicacion);
    introVideo.addEventListener('error', irAlBannerDeUbicacion);
    skipBtn.addEventListener('click', irAlBannerDeUbicacion);

    getLocationBtn.addEventListener('click', () => {
        welcomeBanner.style.display = 'none';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => inicializarMapa([position.coords.latitude, position.coords.longitude], true),
                () => inicializarMapa(defaultCoords, false)
            );
        } else {
            inicializarMapa(defaultCoords, false);
        }
    });

    skipLocationBtn.addEventListener('click', () => {
        welcomeBanner.style.display = 'none';
        inicializarMapa(defaultCoords, false);
    });
});