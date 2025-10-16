document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los selectores
    const asignaturaSelect = document.getElementById('asignatura');
    const nivelSelect = document.getElementById('nivel');
    const periodoSelect = document.getElementById('periodo');
    const logroSelect = document.getElementById('logro');
    const startButton = document.getElementById('startButton');
    const tallerContainer = document.getElementById('taller-container');

    // ... (Logros de Matemáticas Noveno, Matemáticas Décimo, Física Octavo, Noveno y Décimo se mantienen iguales) ...

    // NUEVOS LOGROS DE FINANCIERA de NOVENO
    const logrosFinancieraNoveno = {
        'periodo1': [
            { value: 'globalizacion', text: '1. Globalización' }
        ],
        'periodo2': [
            { value: 'sectores_economicos', text: '1. Sectores Económicos y Productivos' }
        ],
        'periodo3': [
            { value: 'creditos', text: '1. Créditos' }
        ],
        'periodo4': []
    };
    
    // Estructura general de logros por Asignatura y Nivel (parte modificada)
    const logrosPorAsignaturaNivel = {
        'matematicas': {
            'octavo': null, 
            'noveno': logrosMatematicasNoveno,
            'decimo': logrosMatematicasDecimo
        },
        'financiera': { // SECCIÓN FINANCIERA ACTUALIZADA
            'octavo': null, 
            'noveno': logrosFinancieraNoveno,
            'decimo': null
        },
        'fisica': {
            'octavo': logrosFisicaOctavo,
            'noveno': logrosFisicaNoveno, 
            'decimo': logrosFisicaDecimo
        }
    };
    // ... (Funciones actualizarLogros y event listeners se mantienen iguales) ...

    // Maneja el clic en el botón para iniciar el taller
    startButton.addEventListener('click', () => {
        const asignatura = asignaturaSelect.value;
        const nivel = nivelSelect.value;
        const periodo = periodoSelect.value;
        const logro = logroSelect.value;
    
        if (!asignatura || !nivel || !periodo || !logro || logro === 'no_disponible_nivel') {
            alert("Por favor, selecciona Asignatura, Nivel, Periodo y un Logro válido. El taller podría no estar disponible para la combinación seleccionada.");
            return;
        }

        let tallerContent = '';
        // Función auxiliar para capitalizar la primera letra
        const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
        const asignaturaDisplay = capitalize(asignatura);
        const nivelDisplay = capitalize(nivel);

        // Intenta obtener el título del logro
        let tituloLogro = 'Taller Desconocido';
        try {
            const periodoData = logrosPorAsignaturaNivel[asignatura][nivel][periodo];
            const logroData = periodoData.find(l => l.value === logro);
            tituloLogro = logroData ? logroData.text.split('. ')[1] : 'Taller Desconocido';
        } catch (e) {
            // Ignora el error
        }
        
        // Mensaje especial de relación para Matemáticas Décimo
        const relacionDecimo = (asignatura === 'matematicas' && nivel === 'decimo') ? 
            `<p class="alerta-relacion">⚠️ **NOTA IMPORTANTE:** Todos los temas de Matemáticas de Décimo (Trigonometría y Cónicas) están intrínsecamente relacionados. Es esencial comprender el tema de su periodo reprobado, ya que se construye sobre los anteriores.</p>` : '';


        // --- TALLERES DE MATEMÁTICAS DE NOVENO y DÉCIMO se mantienen iguales (omitidos aquí por brevedad) ---
        // ...

        // --- TALLERES DE EDUCACIÓN FINANCIERA DE NOVENO (NUEVO) ---
        else if (asignatura === 'financiera' && nivel === 'noveno') {
            
            if (periodo === 'periodo1') {
                if (logro === 'globalizacion') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve las siguientes preguntas con argumentos claros y ejemplos de la vida real. Recuerda presentar tus respuestas en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Globalización** y explica sus dos principales dimensiones: la **económica** y la **cultural**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Menciona dos **ventajas** y dos **desventajas** de la globalización para un país como Colombia.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. ¿Qué papel juegan las **Tecnologías de la Información y Comunicación (TIC)** en el proceso de globalización financiera?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Explica el concepto de **Comercio Justo** y cómo intenta contrarrestar los efectos negativos de la globalización en los países en desarrollo.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. ¿Cómo influye el tipo de cambio (por ejemplo, el valor del dólar frente al peso colombiano) en tu economía personal o familiar, en un contexto de globalización?</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else if (periodo === 'periodo2') {
                if (logro === 'sectores_economicos') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve las siguientes preguntas con argumentos claros y ejemplos de la vida real. Recuerda presentar tus respuestas en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Describe y diferencia los tres principales sectores económicos: **Primario**, **Secundario** y **Terciario**. Da dos ejemplos de actividades para cada uno en Colombia.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Explica qué es un **Sector Productivo** y qué importancia tiene la industria (Sector Secundario) para el desarrollo económico de un país.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. ¿A qué sector económico pertenece la **Educación** y por qué se considera que es el sector con mayor crecimiento y potencial en las economías modernas?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Si una región depende mucho de la agricultura (**Sector Primario**), ¿cuáles son los riesgos económicos que enfrenta y cómo puede diversificarse?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Analiza y clasifica tu proyecto de vida o negocio ideal (si tienes uno) en el sector económico al que pertenecería y justifica tu elección.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo3') {
                if (logro === 'creditos') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve las siguientes preguntas con argumentos claros y ejemplos de la vida real. Recuerda presentar tus respuestas en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Crédito** y explica la diferencia entre un **crédito de consumo** y un **crédito hipotecario**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Explica qué es una **tasa de interés** (fija vs. variable) y por qué los bancos la cobran en los préstamos.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. ¿Qué es un **Historial Crediticio** o **"datacrédito"**? Explica por qué es fundamental mantenerlo sano y cómo puede afectar tu futuro financiero.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Menciona y explica dos **riesgos** de adquirir un crédito de consumo sin planificar adecuadamente el pago.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Investiga y explica la diferencia entre un **préstamo** y un **microcrédito**, indicando qué tipo de persona o negocio se beneficiaría de cada uno.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else if (periodo === 'periodo4') {
                tallerContent = `
                    <h2>Taller no disponible (Periodo) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                    <p>El taller para el periodo seleccionado no está programado aún. Por favor, contacta a la docente.</p>
                `;
            } else {
                tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
            }
        }
        
        // --- TALLERES DE FÍSICA OCTAVO, NOVENO y DÉCIMO se mantienen iguales (omitidos aquí por brevedad) ---
        // ...

        // MENSAJE DE TALLER NO DISPONIBLE PARA OTRAS ASIGNATURAS/NIVELES
        else {
            tallerContent = `
                <h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2>
                <p>La asignatura de **${asignaturaDisplay}** para el nivel **${nivelDisplay}** (o la combinación seleccionada) aún no tiene talleres de recuperación programados en esta herramienta. Por favor, contacta a la docente para las indicaciones oficiales del supletorio.</p>
            `;
        }

        tallerContainer.innerHTML = tallerContent;

        // Renderiza las fórmulas matemáticas si MathJax está disponible
        if (window.MathJax) {
            MathJax.typesetPromise([tallerContainer]).catch((err) => console.log('MathJax Typeset Error: ' + err.message));
        }
    });
});
                                 
