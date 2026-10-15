// =========================================================================
// 📌 SISTEMA CENTRAL DE CONTROL INTERACTIVO: JOURNEY & MAPA (EFC - 2026)
// =========================================================================

// 1. BASE DE DATOS LOCAL: Inyección de estructuras HTML para la tarjeta de detalles
const content = {
    tbx: `
        <span class="stage">FOUNDATION</span>
        <h3>TURBO-MEX (TBX)</h3>
        <h4>2018 - 2019 | Mexico City, Mexico</h4>
        <p>
        My first exposure to EPC projects provided a complete understanding of the instrumentation engineering lifecycle.
        </p>
        <ul>
            <li>Instrumentation Engineering</li>
            <li>Datasheets</li>
            <li>Technical Bid Evaluation</li>
            <li>FAT Activities</li>
            <li>Modular Oil & Gas Skids</li>
        </ul>
        <blockquote>
            Learned how engineering decisions become real industrial systems.
        </blockquote>
    `,
    ica: `
        <span class="stage">EXPANSION</span>
        <h3>ICA Fluor Daniel</h3>
        <h4>2019 - 2023 | Mexico City || Tabasco, Mexico</h4>
        <p>Participation in one of the largest industrial projects in Mexico, expanding responsibilities from engineering to construction, materials management and commissioning.</p>
        <ul>
            <li>30,000+ Instrument Lists</li>
            <li>SmartPlant Instrumentation</li>
            <li>Materials Management</li>
            <li>Construction Support</li>
            <li>Control Systems SAT tests</li>
        </ul>
        <blockquote>Engineering continues far beyond drawings and documentation.</blockquote>
    `,
    intecsa: `
        <span class="stage">INTERNATIONAL ADAPTATION</span>
        <h3>Intecsa Industrial</h3>
        <h4>2023 | Madrid, Spain</h4>
        <p>Transition into the European engineering market through combined cycle projects and KKS standards.</p>
        <ul>
            <li>KKS Standards</li>
            <li>Combined Cycles</li>
            <li>PSV Engineering</li>
            <li>SmartPlant Instrumentation</li>
            <li>European EPC Standards</li>
        </ul>
        <blockquote>Adaptability became a strategic engineering skill.</blockquote>
    `,
    tsk: `
        <span class="stage">SPECIALIZATION</span>
        <h3>TSK</h3>
        <h4>2023 - Present | Gijón & Galicia, Spain || Queretaro, Mexico</h4>
        <p>Consolidation as a Control Systems Specialist focused on LNG and Combined Cycle projects.</p>
        <ul>
            <li>Control Logic Development</li>
            <li>Cause & Effect</li>
            <li>ESD functional tests</li>
            <li>DCS Displays design</li>
            <li>Commissioning and Startup Support</li>
        </ul>
        <blockquote>Control systems must protect people, assets and operations.</blockquote>
    `,
    future: `
        <span class="stage">FUTURE DIRECTION</span>
        <h3>Professional Vision</h3>
        <h4>Next Career Stages</h4>
        <p>Continue evolving from technical specialist toward leadership and international project management.</p>
        <ul>
            <li>Technical Leadership</li>
            <li>Engineering Coordination</li>
            <li>PMP Certification</li>
            <li>International Project Management</li>
            <li>Engineering Management</li>
        </ul>
        <blockquote>Continuous growth through engineering, leadership and international collaboration.</blockquote>
    `
};

// 2. DICCIONARIO GEOGRÁFICO: Define qué ciudades se encienden en cada hito laboral
const mapStages = {
    tbx: ["cdmx"],                         // Etapa Turbo-Mex
    ica: ["cdmx", "paraiso"],              // Etapa ICA Fluor
    intecsa: ["madrid"],                   // Etapa Intecsa
    tsk: ["elsauz", "gijon", "mugardos"],  // Etapa TSK (Querétaro + Asturias + Galicia)
    future: []                             // Futuro (Sin pines físicos)
};

// 3. SELECCIÓN DE ELEMENTOS DOM: Capturamos los componentes del HTML
const timelinePoints = document.querySelectorAll(".timeline-point");
const card = document.getElementById("details-card");

// 4. CONTROLADOR DE EVENTOS UNIFICADO: Escucha los clics en la línea de tiempo
timelinePoints.forEach(point => {
    point.addEventListener("click", () => {
        
        // [A] Capturamos el ID de la etapa seleccionada (ej. tbx, ica, tsk...)
        const stage = point.dataset.stage;

        // [B] ACCIÓN 1: Inyectamos dinámicamente el HTML de la experiencia en la tarjeta de detalles
        if (card && content[stage]) {
            card.innerHTML = content[stage];
        }

        // [C] LIMPIEZA DEL MAPA: Apagamos todos los pines neón quitando la clase 'active'
        document.querySelectorAll(".map-node").forEach(node => {
            node.classList.remove("active");
        });

        // [D] ACCIÓN 2: Iluminamos los pines neón correspondientes en el mapa
        // Validamos que la etapa exista en el diccionario y que tenga locaciones guardadas
        if (mapStages[stage] && mapStages[stage].length > 0) {
            mapStages[stage].forEach(location => {
                // Buscamos el nodo específico en el mapa usando su clase (.gijon, .cdmx, etc.)
                const node = document.querySelector("." + location);
                
                // Si el nodo existe en el HTML, le inyectamos la clase activa de CSS
                if (node) {
                    node.classList.add("active");
                }
            });
        }
    });
});

// ========================================================
// 📌 MOTOR DE INTERACTIVIDAD: TIMELINE VS MAPAMUNDI (JS)
// ========================================================

// 1. CAPTURA: Buscamos todos los botones o nodos de tu línea de tiempo en el HTML
const timelinePoints = document.querySelectorAll(".timeline-point");

// 2. DICCIONARIO: Relación directa de qué ciudades se deben encender en cada hito laboral
const mapStages = {
    tbx: ["cdmx"],                         // Etapa Turbo-Mex -> Enciende CDMX
    ica: ["cdmx", "paraiso"],              // Etapa ICA Fluor -> Enciende CDMX y Tabasco
    intecsa: ["madrid"],                   // Etapa Intecsa -> Viaja a Madrid
    tsk: ["elsauz", "gijon", "mugardos"],  // Etapa TSK -> Enciende Querétaro, Asturias y Galicia en conjunto
    future: []                             // Visión de futuro -> Sin locaciones físicas por el momento
};

// 3. ESCUCHADOR: Recorremos cada punto del Journey esperando el clic del usuario
timelinePoints.forEach(point => {
    point.addEventListener("click", () => {

        // A. LIMPIEZA TOTAL: Apagamos todos los destellos neón del mapa quitándoles la clase 'active'
        document.querySelectorAll(".map-node").forEach(node => {
            node.classList.remove("active");
        });

        // B. EXTRACCIÓN: Leemos el atributo 'data-stage' del botón presionado (ej: tbx, ica, tsk...)
        const stage = point.dataset.stage;

        // C. BLINDAJE DE SEGURIDAD (CORRECCIÓN CRUCIAL):
        // Validamos que la etapa exista en nuestro diccionario Y que tenga ciudades asignadas (longitud > 0).
        // Esto evita que el código falle o tire error en la consola cuando den clic en 'future'.
        if (mapStages[stage] && mapStages[stage].length > 0) {

            // D. ILUMINACIÓN: Recorremos las ciudades registradas en esta etapa
            mapStages[stage].forEach(location => {
                
                // Buscamos el nodo del mapa que tenga esa clase específica (ej: .gijon)
                const node = document.querySelector("." + location);

                // Si el navegador encuentra la ciudad en el mapa, le inyecta la clase activa de CSS
                if (node) {
                    node.classList.add("active");
                }
            });
        }
    });
});
