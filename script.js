const content = {

    tbx: `
        <span class="stage">FOUNDATION</span>

        <h3>TURBO-MEX (TBX)</h3>

        <h4>2018 - 2019 | Mexico City, Mexico</h4>

        <p>
            My first exposure to EPC projects provided a complete understanding
            of the instrumentation engineering lifecycle.
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

        <h4>2019 - 2023 | Paraiso, Tabasco, Mexico</h4>

        <p>
            Participation in one of the largest industrial projects in Mexico,
            expanding responsibilities from engineering to construction,
            materials management and commissioning.
        </p>

        <ul>
            <li>30,000+ Instrument Tags</li>
            <li>SmartPlant Instrumentation</li>
            <li>Materials Management</li>
            <li>Construction Support</li>
            <li>Startup Activities</li>
        </ul>

        <blockquote>
            Engineering continues far beyond drawings and documentation.
        </blockquote>
    `,

    intecsa: `
        <span class="stage">INTERNATIONAL ADAPTATION</span>

        <h3>Intecsa Industrial</h3>

        <h4>2023 | Madrid, Spain</h4>

        <p>
            Transition into the European engineering market through combined
            cycle projects and KKS standards.
        </p>

        <ul>
            <li>KKS Standards</li>
            <li>Combined Cycles</li>
            <li>PSV Engineering</li>
            <li>SmartPlant Instrumentation</li>
            <li>European EPC Standards</li>
        </ul>

        <blockquote>
            Adaptability became a strategic engineering skill.
        </blockquote>
    `,

    tsk: `
        <span class="stage">SPECIALIZATION</span>

        <h3>TSK</h3>

        <h4>2023 - Present | Gijón, Spain</h4>

        <p>
            Consolidation as a Control Systems Specialist focused on LNG and
            Combined Cycle projects.
        </p>

        <ul>
            <li>Control Logic Development</li>
            <li>Cause & Effect</li>
            <li>ESD Systems</li>
            <li>DCS Engineering</li>
            <li>Commissioning Support</li>
        </ul>

        <blockquote>
            Control systems must protect people, assets and operations.
        </blockquote>
    `,

    future: `
        <span class="stage">FUTURE DIRECTION</span>

        <h3>Professional Vision</h3>

        <h4>Next Career Stages</h4>

        <p>
            Continue evolving from technical specialist toward leadership and
            international project management.
        </p>

        <ul>
            <li>Technical Leadership</li>
            <li>Engineering Coordination</li>
            <li>PMP Certification</li>
            <li>International Project Management</li>
            <li>Engineering Management</li>
        </ul>

        <blockquote>
            Continuous growth through engineering, leadership and international collaboration.
        </blockquote>
    `
};

const points = document.querySelectorAll('.timeline-point');

const card = document.getElementById('details-card');

points.forEach(point => {

    point.addEventListener('click', () => {

        const stage = point.dataset.stage;

        card.innerHTML = content[stage];

    });

});
