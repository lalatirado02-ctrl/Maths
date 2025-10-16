document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los selectores
    const asignaturaSelect = document.getElementById('asignatura');
    const nivelSelect = document.getElementById('nivel');
    const periodoSelect = document.getElementById('periodo');
    const logroSelect = document.getElementById('logro');
    const startButton = document.getElementById('startButton');
    const tallerContainer = document.getElementById('taller-container');

    // Mapeo de logros de Matemáticas de NOVENO
    const logrosMatematicasNoveno = {
        'periodo1': [
            { value: 'numeros_complejos', text: '1. Números complejos y notación científica' },
            { value: 'demostraciones', text: '2. Demostraciones geométricas' },
            { value: 'estadistica1', text: '3. Medidas de localización y variabilidad' },
            { value: 'talentos1', text: '4. Talentos matemáticos' }
        ],
        'periodo2': [
            { value: 'funcion_lineal', text: '1. Función lineal y sistemas de ecuaciones' },
            { value: 'semejanza', text: '2. Semejanza de polígonos' },
            { value: 'tales', text: '3. Teorema de Tales' },
            { value: 'talentos2', text: '4. Talentos matemáticos' }
        ],
        'periodo3': [
            { value: 'funciones_varias', text: '1. Función exponencial, logarítmica y cuadrática' },
            { value: 'semejanza_poligonos_3', text: '2. Semejanza de polígonos' },
            { value: 'conteo', text: '3. Técnicas de conteo' },
            { value: 'talentos3', text: '4. Talentos matemáticos' }
        ],
        'periodo4': []
    };

    // LOGROS DE MATEMÁTICAS de DÉCIMO
    const logrosMatematicasDecimo = {
        'periodo1': [
            { value: 'razones_trig', text: '1. Razones Trigonométricas' }
        ],
        'periodo2': [
            { value: 'funciones_trig', text: '1. Funciones Trigonométricas y sus Gráficas' }
        ],
        'periodo3': [
            { value: 'identidades_trig', text: '1. Identidades Trigonométricas' }
        ],
        'periodo4': [
            { value: 'secciones_conicas', text: '1. Secciones Cónicas (Circunferencia, Parábola)' }
        ]
    };

    // LOGROS DE EDUCACIÓN FINANCIERA de NOVENO
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

    // LOGROS DE FÍSICA DE OCTAVO
    const logrosFisicaOctavo = {
        'periodo1': [
            { value: 'fluidos_pascal', text: '1. Características de los fluidos y Ley de Pascal' }
        ],
        'periodo2': [
            { value: 'feria_ciencia', text: '1. Feria de la Ciencia (Informe)' },
            { value: 'bernoulli', text: '2. Principio de Bernoulli' },
            { value: 'arquimedes', text: '3. Principio de Arquímedes' }
        ],
        'periodo3': [
            { value: 'conversion_unidades', text: '1. Conversión de unidades y Termodinámica' }
        ],
        'periodo4': [
            { value: 'energia_termica', text: '1. Energía térmica y Transmisión del calor' }
        ]
    };

    // LOGROS DE FÍSICA DE NOVENO
    const logrosFisicaNoveno = {
        'periodo1': [
            { value: 'cinematica_mru', text: '1. Introducción a la Cinemática y MRU' }
        ],
        'periodo2': [
            { value: 'mrua_graficas', text: '1. Movimiento Rectilíneo Uniformemente Acelerado (MRUA) y Gráficas' }
        ],
        'periodo3': [
            { value: 'introduccion_ondas', text: '1. Introducción a Ondas y Tipos de Ondas' }
        ],
        'periodo4': [
            { value: 'ondas_sonido', text: '1. Ondas de Sonido y Experimentación con el Sonido' }
        ]
    };

    // LOGROS DE FÍSICA DE DÉCIMO
    const logrosFisicaDecimo = {
        'periodo1': [
            { value: 'leyes_newton', text: '1. Leyes de Newton y Diagramas de Fuerza' }
        ],
        'periodo2': [
            { value: 'feria_ciencia_10', text: '1. Feria de la Ciencia (Informe)' },
            { value: 'introduccion_trabajo', text: '2. Introducción a Trabajo' }
        ],
        'periodo3': [
            { value: 'trabajo_potencia', text: '1. Trabajo y Potencia' }
        ],
        'periodo4': [
            { value: 'energia_conservacion', text: '1. Energías y Principio de Conservación' }
        ]
    };


    // Estructura general de logros por Asignatura y Nivel
    const logrosPorAsignaturaNivel = {
        'matematicas': {
            'octavo': null, 
            'noveno': logrosMatematicasNoveno,
            'decimo': logrosMatematicasDecimo
        },
        'financiera': {
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

    // Función para actualizar los logros disponibles en el selector
    const actualizarLogros = () => {
        const asignaturaSeleccionada = asignaturaSelect.value;
        const nivelSeleccionado = nivelSelect.value;
        const periodoSeleccionado = periodoSelect.value;
        
        logroSelect.innerHTML = '<option value="">-- Selecciona --</option>'; // Reinicia el select

        if (asignaturaSeleccionada && nivelSeleccionado && periodoSeleccionado) {
            const nivelData = logrosPorAsignaturaNivel[asignaturaSeleccionada]?.[nivelSeleccionado];
            
            if (nivelData && nivelData[periodoSeleccionado]) {
                // Hay talleres disponibles para esta combinación
                nivelData[periodoSeleccionado].forEach(logro => {
                    const option = document.createElement('option');
                    option.value = logro.value;
                    option.textContent = logro.text;
                    logroSelect.appendChild(option);
                });
            } else {
                // No hay talleres programados para esta combinación
                const option = document.createElement('option');
                option.value = 'no_disponible_nivel';
                option.textContent = `Taller no disponible para ${asignaturaSeleccionada.toUpperCase()}`;
                logroSelect.appendChild(option);
            }
        }
    };

    // Escuchadores de eventos para Asignatura, Nivel y Periodo
    asignaturaSelect.addEventListener('change', actualizarLogros);
    nivelSelect.addEventListener('change', actualizarLogros);
    periodoSelect.addEventListener('change', actualizarLogros);


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


        // --- TALLERES DE MATEMÁTICAS DE NOVENO ---
        if (asignatura === 'matematicas' && nivel === 'noveno') {
            
            if (periodo === 'periodo1') {
                switch (logro) {
                    case 'numeros_complejos':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Escribe el número \\( 0.0000000056 \\) en notación científica.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Realiza la suma de los números complejos: \\( (3 + 2i) + (5 - 4i) \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Escribe el número \\( 7.3 \\times 10^{8} \\) en su forma decimal.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Resuelve la multiplicación de los números complejos: \\( (2 + 3i)(1 - i) \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Escribe el resultado de \\( (5 \\times 10^{6}) \\times (3 \\times 10^{-2}) \\) en notación científica.</h3>
                            </div>
                        `;
                        break;
                    case 'demostraciones':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar los procedimientos y los dibujos a color en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Demuestra que la suma de los ángulos internos de un triángulo es \\( 180^{\\circ} \\).</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Demuestra que si dos líneas paralelas son cortadas por una transversal, los ángulos alternos internos son iguales.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Demuestra el Teorema de Pitágoras \\( (a^2 + b^2 = c^2) \\) usando una construcción geométrica.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Prueba que el área de un círculo con radio \\( r \\) es \\( \\pi r^2 \\).</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Demuestra que las diagonales de un rombo son perpendiculares entre sí.</h3>
                            </div>
                        `;
                        break;
                    case 'estadistica1':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Calcula la media, la mediana y la moda de los siguientes datos: \\( 15, 18, 12, 10, 18, 14 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Determina el rango y la desviación media de los siguientes puntajes de un examen: \\( 7, 9, 6, 8, 10, 7, 9, 8 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. En un conjunto de datos agrupados, la clase modal es \\( [20-30) \\). Si su frecuencia es 12, la anterior es 8 y la posterior es 6, calcula el valor exacto de la moda.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Un grupo de estudiantes obtuvo las siguientes notas en matemáticas: \\( 4.5, 3.8, 4.0, 5.0, 3.2 \\). ¿Cuál es la varianza y la desviación estándar de estas notas?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Si en una empresa, el salario medio es de \\(\$1'500.000\\) y el cuartil 3 (Q3) es de \\(\$1'800.000\\), explica qué significan estos dos datos para los empleados.</h3>
                            </div>
                        `;
                        break;
                    case 'talentos1':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios de lógica. Recuerda presentar las soluciones y los procesos de razonamiento en hojas de examen, además de los ejercicios en el libro de 'Talentos Matemáticos'.</p>
                            <div class="ejercicio">
                                <h3>1. Un reloj se retrasa 3 minutos cada hora. Si se pone en hora a las 10:00 AM, ¿qué hora marcará a las 10:00 AM del día siguiente?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Tienes 8 bolas del mismo tamaño y peso, pero una de ellas pesa ligeramente menos. Usando una balanza de dos platos, ¿cuál es el número mínimo de pesadas que necesitas para encontrar la bola más ligera? Explica cómo lo harías.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. En una habitación hay 3 interruptores para 3 bombillas en otra habitación. ¿Cuál es el número mínimo de veces que debes entrar a la habitación de las bombillas para saber qué interruptor controla cada bombilla? Explica tu estrategia.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Si el ayer del mañana es el martes, ¿qué día es el mañana del ayer de hoy?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Un pastor tiene que cruzar un río con un lobo, una cabra y un repollo. El bote solo puede llevar al pastor y un solo acompañante a la vez. El lobo se comerá a la cabra si se quedan solos, y la cabra se comerá el repollo si se quedan solos. ¿Cómo debe el pastor cruzar el río para que todo llegue a salvo?</h3>
                            </div>
                        `;
                        break;
                }
            } 
// TALLERES PARA EL PERIODO 2
            else if (periodo === 'periodo2') {
                switch (logro) {
                    case 'funcion_lineal':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen, incluyendo las gráficas si son necesarias.</p>
                            <div class="ejercicio">
                                <h3>1. Encuentra la pendiente y el intercepto con el eje 'y' de la función: \\( y = 3x - 5 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Resuelve el siguiente sistema de ecuaciones por el método de sustitución: <br>\\( x + y = 7 \\)<br> \\( 2x - y = 5 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Una función lineal pasa por los puntos \\( (2, 8) \\) y \\( (5, 17) \\). Encuentra la ecuación de la función.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Resuelve el siguiente sistema de ecuaciones por el método de eliminación: <br>\\( 3x + 2y = 12 \\)<br>\\( 5x - 2y = 4 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Grafica la función lineal \\( f(x) = -2x + 4 \\) en un plano cartesiano.</h3>
                            </div>
                        `;
                        break;
                    case 'semejanza':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos y los dibujos a color en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Dos triángulos son semejantes. El primer triángulo tiene lados de 3, 4 y 5 cm. Si el lado más grande del segundo triángulo mide 15 cm, ¿cuáles son las longitudes de los otros dos lados?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. En un triángulo, una línea paralela a uno de sus lados corta a los otros dos lados, creando un triángulo más pequeño. Si la base del triángulo grande mide 12 cm y la del pequeño 4 cm, ¿cuál es la razón de semejanza?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Dos polígonos regulares son semejantes. El primero es un pentágono con lado de 8 cm. Si el segundo pentágono tiene un perímetro de 60 cm, ¿cuál es la longitud de su lado?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Un rectángulo tiene lados de 6 cm y 9 cm. Si se amplía a un nuevo rectángulo con un lado más corto de 10 cm, ¿cuál es la longitud del lado más largo?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Un mapa a escala de 1:5000 representa un parque. Si un sendero en el mapa mide 3 cm, ¿cuál es la longitud real del sendero en metros?</h3>
                            </div>
                        `;
                        break;
                    case 'tales':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos y los dibujos a color en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Usando el Teorema de Tales, si tres líneas paralelas cortan a dos transversales, y los segmentos en la primera transversal miden 6 cm y 9 cm, ¿cuál es la longitud del segmento más grande en la segunda transversal si el segmento más pequeño mide 4 cm?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Calcula la altura de un edificio que proyecta una sombra de 25 metros al mismo tiempo que un poste de 2 metros proyecta una sombra de 1.5 metros.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. En un triángulo, una línea paralela a la base divide los otros dos lados en segmentos proporcionales. Si un lado mide 10 cm y los segmentos en los que se divide son 4 cm y 6 cm, y el lado opuesto mide 15 cm, ¿cuál es la longitud de los dos segmentos en los que se divide?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Un hombre de 1.70 metros de altura está a 4 metros de una farola. Si su sombra mide 2 metros, ¿cuál es la altura de la farola?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. En un trapecio, las líneas paralelas a las bases cortan a las diagonales en segmentos proporcionales. Demuestra cómo se aplicaría el Teorema de Tales para encontrar la longitud de un segmento desconocido.</h3>
                            </div>
                        `;
                        break;
                    case 'talentos2':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios de lógica. Recuerda presentar las soluciones y los procesos de razonamiento en hojas de examen, además de los ejercicios en el libro de 'Talentos Matemáticos'.</p>
                            <div class="ejercicio">
                                <h3>1. Un panadero tiene 60 galletas. Vende la mitad, regala un tercio de las que le quedan, y luego se come una. ¿Cuántas galletas le quedan al final?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Si en una familia, el hermano de la hermana de tu padre es tu tío, ¿quién es el hermano de la hermana de la hermana de tu padre?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Un caracol quiere subir un muro de 10 metros de altura. Durante el día, sube 3 metros, y durante la noche, baja 2 metros. ¿Cuántos días tardará en llegar a la cima?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Un barril contiene 8 litros de vino. ¿Cómo puedes dividir el vino en dos partes iguales (4 litros cada una) si solo tienes dos jarras vacías: una de 5 litros y otra de 3 litros? Explica la secuencia de pasos.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. ¿Qué sigue en la secuencia lógica de números? 1, 1, 2, 3, 5, 8, ...</h3>
                            </div>
                        `;
                        break;
                }
            } 
            
            // TALLERES PARA EL PERIODO 3
            else if (periodo === 'periodo3') {
                switch (logro) {
                    case 'funciones_varias':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen, incluyendo las gráficas.</p>
                            <div class="ejercicio">
                                <h3>1. Grafica la función exponencial \\( y = 2^x \\) y determina su dominio y rango.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Transforma la expresión logarítmica \\( \\log_3(81) = 4 \\) en su forma exponencial.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Encuentra el vértice, el eje de simetría y las raíces de la función cuadrática: \\( f(x) = x^2 - 4x + 3 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Resuelve la ecuación logarítmica: \\( \\log_2(x+3) = 4 \\)</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Un hongo crece según la función exponencial \\( P(t) = 5 \\times 2^t \\), donde \\( t \\) es el tiempo en horas. ¿Cuántos hongos habrá después de 4 horas?</h3>
                            </div>
                        `;
                        break;
                    case 'semejanza_poligonos_3': 
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos y los dibujos a color en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Dos hexágonos son semejantes. Si la razón de sus lados es \\( 2:3 \\) y el perímetro del hexágono pequeño es de 30 cm, ¿cuál es el perímetro del hexágono grande?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. En dos figuras semejantes, si el área de la figura A es \\( 40 cm^2 \\) y la razón de semejanza de A a B es \\( 1:2 \\), ¿cuál es el área de la figura B?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Las áreas de dos triángulos semejantes están en razón de \\( 9:4 \\). Si el lado más pequeño del triángulo más grande mide 12 cm, ¿cuánto mide el lado correspondiente en el triángulo más pequeño?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Un pentágono tiene lados de 2, 3, 4, 5 y 6 metros. Si se construye un pentágono semejante con un factor de escala de \\( 1.5 \\), ¿cuál es el perímetro del nuevo pentágono?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Dos círculos son siempre semejantes. Si el radio de un círculo es 5 y el radio del otro es 15, ¿cuál es la razón entre sus áreas y sus perímetros?</h3>
                            </div>
                        `;
                        break;
                    case 'conteo': 
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar las soluciones y los procesos de razonamiento en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. De un grupo de 10 personas, ¿de cuántas formas diferentes se pueden seleccionar 3 personas para formar un comité?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. ¿De cuántas formas diferentes se pueden organizar las letras de la palabra 'MATEMATICAS'?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Un candado tiene 4 ruedas, cada una con los dígitos del 0 al 9. ¿Cuántos códigos diferentes se pueden crear si los dígitos se pueden repetir?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. En una carrera de 100 metros con 8 corredores, ¿de cuántas formas diferentes pueden quedar los tres primeros lugares (oro, plata, bronce)?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. ¿De cuántas formas se pueden sentar 5 personas alrededor de una mesa redonda?</h3>
                            </div>
                        `;
                        break;
                    case 'talentos3':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios de lógica. Recuerda presentar las soluciones y los procesos de razonamiento en hojas de examen, además de los ejercicios en el libro de 'Talentos Matemáticos'.</p>
                            <div class="ejercicio">
                                <h3>1. Eres un conductor de autobús. En la primera parada, suben 10 personas. En la segunda, bajan 3 y suben 5. En la tercera, bajan 2 y suben 8. ¿De qué color son los ojos del conductor?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Si un huevo tarda 3 minutos en cocinarse, ¿cuánto tardan 5 huevos en cocinarse al mismo tiempo?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Un granjero tiene 17 ovejas. Todas mueren, excepto 9. ¿Cuántas ovejas le quedan?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Un hombre está parado en un lado de un río, y su perro en el otro. El hombre llama a su perro, y este cruza el río sin mojarse. El río está lleno de agua, y el perro no tiene ni usa un puente o un bote. ¿Cómo lo hizo?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Tienes dos cuerdas y una caja de fósforos. Cada cuerda tarda exactamente 1 hora en quemarse por completo. Las cuerdas no se queman a un ritmo uniforme. ¿Cómo puedes medir 45 minutos exactos?</h3>
                            </div>
                        `;
                        break;
                    default:
                        tallerContent = `
                            <h2>Taller no disponible (Logro) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>El taller para el logro seleccionado no está programado. Por favor, contacta a la docente.</p>
                        `;
                }
            } else {
                 tallerContent = `
                    <h2>Taller no disponible (Periodo) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                    <p>El taller para el periodo seleccionado no está programado aún. Por favor, contacta a la docente.</p>
                `;
            }
        } 

        // --- TALLERES DE MATEMÁTICAS DE DÉCIMO ---
        else if (asignatura === 'matematicas' && nivel === 'decimo') {
            
            if (periodo === 'periodo1') {
                if (logro === 'razones_trig') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        ${relacionDecimo}
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos, incluyendo los dibujos de los triángulos, en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. En un triángulo rectángulo, los catetos miden \\( 5 \\, cm \\) y \\( 12 \\, cm \\). Calcula la hipotenusa y el valor de las **seis razones trigonométricas** para el ángulo agudo opuesto al cateto de \\( 5 \\, cm \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. ¿Cuál es el valor exacto de \\( \\sin(45^{\\circ}) \\), \\( \\cos(60^{\\circ}) \\) y \\( \\tan(30^{\\circ}) \\)? Justifica tus respuestas con un dibujo de un triángulo notable.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Si \\( \\tan(\\theta) = 3/4 \\) y \\( \\theta \\) es un ángulo agudo, encuentra el valor de \\( \\sec(\\theta) \\) y \\( \\csc(\\theta) \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Una escalera de \\( 8 \\, m \\) de largo está apoyada en una pared. Si el pie de la escalera forma un ángulo de \\( 65^{\\circ} \\) con el suelo, ¿a qué altura de la pared llega la escalera?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Si un punto \\( P(x, y) \\) se encuentra en el lado terminal de un ángulo \\( \\alpha \\) en posición normal, explica cómo se definen las razones trigonométricas **seno** y **coseno** en función de \\( x \\), \\( y \\) y el radio \\( r \\).</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else if (periodo === 'periodo2') {
                if (logro === 'funciones_trig') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        ${relacionDecimo}
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos, incluyendo las gráficas, en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Dibuja la gráfica de la función \\( y = \\sin(x) \\) para el intervalo de \\( 0 \\) a \\( 2\\pi \\). Indica el **dominio**, el **rango** y el **periodo**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. ¿Cuál es la **amplitud** y el **periodo** de la función \\( y = 3 \\cos(2x) \\)? Explica cómo estos cambios transforman la gráfica de \\( y = \\cos(x) \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Convierte los siguientes ángulos a radianes: \\( 150^{\\circ} \\) y \\( 315^{\\circ} \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Convierte los siguientes ángulos a grados: \\( \\frac{5\\pi}{6} \\, rad \\) y \\( \\frac{7\\pi}{4} \\, rad \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Dibuja la gráfica de la función \\( y = \\tan(x) \\) para el intervalo de \\( -\\frac{\\pi}{2} \\) a \\( \\frac{3\\pi}{2} \\). Indica sus asíntotas verticales.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            else if (periodo === 'periodo3') {
                if (logro === 'identidades_trig') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        ${relacionDecimo}
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos de simplificación y demostración en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Simplifica la siguiente expresión: \\( \\frac{\\sin^2(x) - 1}{\\cos(x)} \\)</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Demuestra la siguiente identidad fundamental: \\( \\tan(x) + \\cot(x) = \\sec(x) \\cdot \\csc(x) \\)</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Simplifica la expresión usando identidades pitagóricas: \\( \\frac{1}{1 + \\tan^2(x)} \\)</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Demuestra la identidad: \\( (1 - \\cos^2(x)) \\cdot (1 + \\cot^2(x)) = 1 \\)</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Usa las identidades para demostrar que: \\( \\frac{\\sin(x)}{1 + \\cos(x)} + \\frac{1 + \\cos(x)}{\\sin(x)} = 2\\csc(x) \\)</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo4') {
                 if (logro === 'secciones_conicas') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        ${relacionDecimo}
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos, incluyendo las gráficas o dibujos de las cónicas, en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Escribe la ecuación de la **Circunferencia** con centro en \\( (-3, 2) \\) y radio \\( r = 4 \\). Grafica la circunferencia.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Encuentra el centro y el radio de la circunferencia dada por la ecuación: \\( x^2 + y^2 - 6x + 4y - 3 = 0 \\)</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Determina el **vértice**, el **foco** y la ecuación de la **directriz** de la parábola: \\( y = 2x^2 - 8x + 6 \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Escribe la ecuación de una parábola con vértice en \\( (0, 0) \\) y cuyo foco se encuentra en \\( (0, -5) \\). Dibuja la parábola.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Define qué es una **Sección Cónica** y menciona las tres cónicas principales (aparte de la circunferencia) que se obtienen al cortar un cono con un plano.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
             // --- TALLERES DE EDUCACIÓN FINANCIERA DE NOVENO ---
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
        
        // --- TALLERES DE FÍSICA DE OCTAVO ---
        else if (asignatura === 'fisica' && nivel === 'octavo') {
            
            if (periodo === 'periodo1') {
                if (logro === 'fluidos_pascal') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define un **Fluido** y explica tres de sus características principales.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Explica con tus propias palabras el **Principio de Pascal** y da un ejemplo de su aplicación práctica (ej. un gato hidráulico).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Si un gato hidráulico tiene un pistón pequeño con un área de \\( 5 \\, cm^2 \\) y un pistón grande con un área de \\( 50 \\, cm^2 \\). Si se aplica una fuerza de \\( 10 \\, N \\) en el pistón pequeño, ¿qué fuerza se genera en el pistón grande?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Dibuja y explica cómo la presión atmosférica afecta a un fluido en reposo.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Calcula la presión ejercida por una fuerza de \\( 200 \\, N \\) que actúa sobre una superficie de \\( 0.5 \\, m^2 \\).</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else if (periodo === 'periodo2') {
                switch (logro) {
                    case 'feria_ciencia':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Para recuperar este logro, debes realizar la **corrección completa del informe final** de la Feria de la Ciencia, incluyendo las observaciones hechas por la docente en la revisión previa.</p>
                            <div class="ejercicio">
                                <h3>1. **Corrección del Informe:** Asegúrate de que tu informe cumpla con **todos** los puntos de la rúbrica (título, introducción, objetivo, materiales, procedimiento, resultados, análisis y conclusiones).</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. **Envío:** El informe final corregido debe ser enviado al correo electrónico de la docente antes de la fecha límite. (Añade el correo).</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. **Resumen en Hoja Examen:** En la hoja de examen, escribe un resumen de **una página** de los **tres** errores más importantes que corregiste en tu informe y explica por qué eran incorrectos.</h3>
                            </div>
                        `;
                        break;
                    case 'bernoulli':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Define el **Principio de Bernoulli** y explica la relación entre la **velocidad** de un fluido y su **presión**.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Explica por qué el diseño de un **ala de avión** le permite generar sustentación (levitar) según el Principio de Bernoulli.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Da un ejemplo casero del Principio de Bernoulli (diferente al ala de avión) y explica por qué sucede.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Si la velocidad de un fluido en una tubería aumenta, ¿qué le sucede a la presión lateral? Justifica.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Menciona las condiciones ideales en las que se aplica el Principio de Bernoulli.</h3>
                            </div>
                        `;
                        break;
                    case 'arquimedes':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Define el **Principio de Arquímedes** y explica el concepto de **fuerza de empuje**.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. ¿Por qué un barco de acero puede flotar, mientras que una pequeña bola del mismo material se hunde?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Un objeto de \\( 5 \\, N \\) de peso es sumergido en agua. El peso del agua que desplaza es de \\( 3 \\, N \\). ¿Cuál es la fuerza de empuje? ¿El objeto flotará o se hundirá?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. Explica la diferencia entre **flotación positiva**, **negativa** y **neutra** según el Principio de Arquímedes.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Si un cuerpo tiene un volumen de \\( 0.002 \\, m^3 \\) y está totalmente sumergido en aceite (densidad \\( 900 \\, kg/m^3 \\)), calcula la fuerza de empuje. (Recuerda que \\( g \\approx 9.8 \\, m/s^2 \\)).</h3>
                            </div>
                        `;
                        break;
                    default:
                        tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo3') {
                if (logro === 'conversion_unidades') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Convierte \\( 72 \\, km/h \\) a \\( m/s \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. ¿Qué es la **Termodinámica** y cuáles son sus **dos principales ramas** (macroscópica y microscópica)?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Convierte \\( 15 \\, litros \\) a \\( m^3 \\).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Explica la **Primera Ley de la Termodinámica** (Ley de la Conservación de la Energía) y da un ejemplo de su aplicación.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Convierte \\( 25 \\, ^\\circ C \\) a grados **Kelvin** y a grados **Fahrenheit**.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo4') {
                 if (logro === 'energia_termica') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Energía Térmica** y **Temperatura**. Explica la diferencia fundamental entre ambos conceptos.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Describe y dibuja los tres principales mecanismos de **transmisión del calor**: **Conducción**, **Convección** y **Radiación**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Clasifica los siguientes materiales en **conductores** o **aislantes** del calor: Madera, Cobre, Aire, Acero.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Explica qué papel juega la **Convección** en el calentamiento del agua en una olla.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. ¿Por qué el color **negro** absorbe más energía térmica por **Radiación** que el color blanco?</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else {
                tallerContent = `<h2>Taller no disponible (Periodo) - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El taller para el periodo seleccionado no está programado aún. Por favor, contacta a la docente.</p>`;
            }
        }
       // --- TALLERES DE FÍSICA DE NOVENO ---
        else if (asignatura === 'fisica' && nivel === 'noveno') {
            
            if (periodo === 'periodo1') {
                if (logro === 'cinematica_mru') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Cinemática**, **Posición**, **Distancia** y **Desplazamiento**. Explica la diferencia entre distancia y desplazamiento.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Explica qué significa que un objeto se mueva con **Movimiento Rectilíneo Uniforme (MRU)**. ¿Cuál es la característica principal de su velocidad?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Un automóvil viaja a una velocidad constante de \\( 80 \\, km/h \\). ¿Qué distancia recorre en \\( 2.5 \\) horas? (Usa la fórmula: \\( d = v \\cdot t \\))</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Un móvil recorre \\( 400 \\, metros \\) en \\( 50 \\) segundos con MRU. ¿Cuál es su velocidad en \\( m/s \\) y en \\( km/h \\)?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Dibuja la gráfica de **Posición vs. Tiempo** y **Velocidad vs. Tiempo** para un objeto que se mueve con MRU a \\( 5 \\, m/s \\) durante \\( 10 \\) segundos.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else if (periodo === 'periodo2') {
                if (logro === 'mrua_graficas') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Aceleración** y explica qué significa que un objeto se mueva con **Movimiento Rectilíneo Uniformemente Acelerado (MRUA)**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Un tren parte del reposo y alcanza una velocidad de \\( 30 \\, m/s \\) en \\( 10 \\) segundos. Calcula su aceleración. (Usa: \\( a = (v_f - v_i) / t \\))</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Un coche viaja a \\( 20 \\, m/s \\) y frena hasta detenerse en \\( 5 \\) segundos. ¿Cuál es su aceleración (desaceleración)?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Dibuja la gráfica de **Velocidad vs. Tiempo** para un objeto que acelera uniformemente (MRUA). ¿Qué representa la pendiente de esta gráfica?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. ¿Qué representa el área bajo la curva de una gráfica de **Velocidad vs. Tiempo** en el MRUA? ¿Cómo se calcula?</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo3') {
                if (logro === 'introduccion_ondas') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Onda** y explica la diferencia entre una **onda mecánica** y una **onda electromagnética**. Da un ejemplo de cada una.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Dibuja y rotula las partes de una onda transversal: **Cresta**, **Valle**, **Longitud de onda (\\( \lambda \\))** y **Amplitud**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Explica la diferencia entre **Onda Transversal** y **Onda Longitudinal**. ¿Cuál tipo es la onda de sonido?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Si una onda tiene una frecuencia de \\( 5 \\, Hz \\) y una longitud de onda de \\( 2 \\, m \\), ¿cuál es su velocidad de propagación? (Usa: \\( v = \lambda \\cdot f \\))</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Define los conceptos de **Periodo (T)** y **Frecuencia (f)** de una onda. ¿Cuál es su relación matemática?</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo4') {
                 if (logro === 'ondas_sonido') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. ¿Cómo se produce el **sonido** y por qué necesita un medio material para propagarse?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Explica y diferencia las dos características principales del sonido: **Tono (Frecuencia)** y **Volumen (Amplitud)**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. ¿Por qué el sonido viaja más rápido en un **sólido** que en un **gas**?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. **Experimentación:** Describe un experimento sencillo que se pueda realizar en casa para demostrar que el sonido es una onda que transporta energía (ej. con sal y un parlante).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Explica el fenómeno de **Reverberación** y el de **Eco** en el sonido.</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else {
                tallerContent = `<h2>Taller no disponible (Periodo) - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El taller para el periodo seleccionado no está programado aún. Por favor, contacta a la docente.</p>`;
            }
        }
        
        // --- TALLERES DE FÍSICA DE DÉCIMO ---
        else if (asignatura === 'fisica' && nivel === 'decimo') {
            
            if (periodo === 'periodo1') {
                if (logro === 'leyes_newton') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos y diagramas en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Enuncia la **Primera Ley de Newton** (Ley de la Inercia) y da un ejemplo de la vida cotidiana.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Enuncia la **Segunda Ley de Newton** (Ley de la Fuerza). Si una fuerza de \\( 50 \\, N \\) actúa sobre un cuerpo de \\( 10 \\, kg \\), ¿cuál es la aceleración que produce? (Usa: \\( F = m \\cdot a \\))</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Enuncia la **Tercera Ley de Newton** (Ley de Acción y Reacción) y explica por qué cuando un cohete despega, la Tierra no se mueve significativamente.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Dibuja un **Diagrama de Cuerpo Libre** para un bloque que está siendo arrastrado hacia la derecha sobre una superficie rugosa con una cuerda inclinada hacia arriba. Indica las fuerzas de: Peso (W), Normal (N), Tensión (T) y Fricción (f).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Un ascensor sube con una aceleración de \\( 2 \\, m/s^2 \\). Si una persona dentro tiene una masa de \\( 70 \\, kg \\), ¿cuál es la fuerza neta que actúa sobre la persona? (Usa \\( g = 9.8 \\, m/s^2 \\)).</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else if (periodo === 'periodo2') {
                switch (logro) {
                    case 'feria_ciencia_10':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Para recuperar este logro, debes realizar la **corrección completa del informe final** de la Feria de la Ciencia, incluyendo las observaciones hechas por la docente en la revisión previa.</p>
                            <div class="ejercicio">
                                <h3>1. **Corrección del Informe:** Asegúrate de que tu informe cumpla con **todos** los puntos de la rúbrica (título, introducción, objetivo, materiales, procedimiento, resultados, análisis y conclusiones).</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. **Envío:** El informe final corregido debe ser enviado al correo electrónico de la docente antes de la fecha límite. (Añade el correo).</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. **Resumen en Hoja Examen:** En la hoja de examen, escribe un resumen de **una página** de los **tres** errores más importantes que corregiste en tu informe y explica por qué eran incorrectos.</h3>
                            </div>
                        `;
                        break;
                    case 'introduccion_trabajo':
                        tallerContent = `
                            <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                            <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                            <div class="ejercicio">
                                <h3>1. Define **Trabajo** en el sentido físico y menciona sus unidades en el Sistema Internacional (SI). ¿Qué condiciones se deben cumplir para que una fuerza realice trabajo sobre un objeto?</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>2. Una persona empuja una caja con una fuerza constante de \\( 100 \\, N \\) a lo largo de \\( 5 \\, metros \\). Si la fuerza se aplica en la dirección del movimiento, ¿cuál es el trabajo realizado? (Usa: \\( W = F \\cdot d \\))</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>3. Una persona sostiene un maletín de \\( 15 \\, kg \\) a una altura de \\( 1.5 \\, m \\) durante \\( 5 \\) minutos. ¿Cuál es el trabajo realizado por la persona sobre el maletín? Justifica tu respuesta.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>4. ¿Cuándo se considera que el **Trabajo** es **positivo**, **negativo** o **nulo**? Da un ejemplo para cada caso.</h3>
                            </div>
                            <div class="ejercicio">
                                <h3>5. Si se arrastra un trineo con una fuerza de \\( 200 \\, N \\) formando un ángulo de \\( 30^{\\circ} \\) con la horizontal, y se recorren \\( 10 \\, m \\), ¿cuál es el trabajo realizado? (Usa: \\( W = F \\cdot d \\cdot \\cos(\\theta) \\))</h3>
                            </div>
                        `;
                        break;
                    default:
                        tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo3') {
                if (logro === 'trabajo_potencia') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Potencia** en el sentido físico y menciona sus unidades en el Sistema Internacional (SI). ¿Cuál es su relación con el trabajo y el tiempo?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Una máquina realiza \\( 1500 \\, J \\) de trabajo en \\( 5 \\) segundos. ¿Cuál es la potencia desarrollada por la máquina? (Usa: \\( P = W / t \\))</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Un motor de \\( 500 \\, W \\) está encendido durante \\( 3 \\) minutos. ¿Cuánto trabajo realiza el motor en ese tiempo?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Explica la diferencia entre tener una gran **fuerza** y tener una gran **potencia**.</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Si un ascensor levanta una carga de \\( 500 \\, kg \\) a una altura de \\( 20 \\, m \\) en \\( 10 \\) segundos, calcula la potencia del motor del ascensor. (Recuerda que \\( W = F \\cdot d \\) y \\( F = m \\cdot g \\)).</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            }
            
            else if (periodo === 'periodo4') {
                 if (logro === 'energia_conservacion') {
                    tallerContent = `
                        <h2>Taller: ${tituloLogro} (5 puntos) - ${asignaturaDisplay} ${nivelDisplay}</h2>
                        <p>Resuelve los siguientes ejercicios. Recuerda presentar todos los procedimientos en hojas de examen.</p>
                        <div class="ejercicio">
                            <h3>1. Define **Energía Cinética** y **Energía Potencial Gravitatoria**. ¿De qué depende cada una?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>2. Enuncia el **Principio de Conservación de la Energía Mecánica**. ¿Qué significa que la energía se 'conserve'?</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>3. Un objeto de \\( 5 \\, kg \\) está en reposo a \\( 10 \\, m \\) de altura. Calcula su **Energía Potencial Gravitatoria** en ese punto. (Usa: \\( E_p = m \\cdot g \\cdot h \\)).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>4. Si el objeto del ejercicio anterior cae libremente, ¿cuál será su **Energía Cinética** justo antes de tocar el suelo? (Aplica el principio de conservación).</h3>
                        </div>
                        <div class="ejercicio">
                            <h3>5. Explica cómo se transforma la energía de un niño en un tobogán (desde la parte superior hasta la parte inferior).</h3>
                        </div>
                    `;
                } else {
                    tallerContent = `<h2>Taller no disponible - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El logro seleccionado no está disponible.</p>`;
                }
            } 
            
            else {
                tallerContent = `<h2>Taller no disponible (Periodo) - ${asignaturaDisplay} ${nivelDisplay}</h2><p>El taller para el periodo seleccionado no está programado aún. Por favor, contacta a la docente.</p>`;
            }
        }


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
