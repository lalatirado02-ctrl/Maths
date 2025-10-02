document.addEventListener('DOMContentLoaded', () => {
    const periodoSelect = document.getElementById('periodo');
    const logroSelect = document.getElementById('logro');
    const startButton = document.getElementById('startButton');
    const tallerContainer = document.getElementById('taller-container');

    // Mapeo de logros por periodo
    const logrosPorPeriodo = {
        'periodo1': [
            { value: 'numeros_complejos', text: '1. Números complejos y notación científica' },
            { value: 'demostraciones', text: '2. Demostraciones geométricas' },
            { value: 'estadistica1', text: '3. Medidas de localización y variabilidad' },
            { value: 'talentos1', text: '4. Talentos matemáticos' }
        ],
        'periodo2': [
            { value: 'funcion_lineal', text: '1. Función lineal y sistemas de ecuaciones' },
            { value: 'semejanza_poligonos', text: '2. Semejanza de polígonos' },
            { value: 'tales', text: '3. Teorema de Tales' },
            { value: 'talentos2', text: '4. Talentos matemáticos' }
        ],
        'periodo3': [
            { value: 'funciones_varias', text: '1. Función exponencial, logarítmica y cuadrática' },
            { value: 'semejanza_poligonos_3', text: '2. Semejanza de polígonos' }, // CORREGIDO
            { value: 'conteo', text: '3. Técnicas de conteo' }, // CORREGIDO
            { value: 'talentos3', text: '4. Talentos matemáticos' } // CORREGIDO
        ],
        'periodo4': []
    };

    // Actualiza el menú de logros cuando se selecciona un periodo
    periodoSelect.addEventListener('change', () => {
        const periodoSeleccionado = periodoSelect.value;
        logroSelect.innerHTML = '<option value="">-- Selecciona --</option>'; // Reinicia el select

        if (periodoSeleccionado in logrosPorPeriodo) {
            logrosPorPeriodo[periodoSeleccionado].forEach(logro => {
                const option = document.createElement('option');
                option.value = logro.value;
                option.textContent = logro.text;
                logroSelect.appendChild(option);
            });
        }
    });

    // Maneja el clic en el botón para iniciar el taller
    startButton.addEventListener('click', () => {
        const periodo = periodoSelect.value;
        const logro = logroSelect.value;
    
        if (!periodo || !logro) {
            alert("Por favor, selecciona un Periodo y un Logro.");
            return;
        }

        let tallerContent = '';

        // TALLERES PARA EL PERIODO 1
        if (periodo === 'periodo1') {
            switch (logro) {
                case 'numeros_complejos':
                    tallerContent = `
                        <h2>Taller: Números complejos y notación científica (5 puntos)</h2>
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
                        <h2>Taller: Demostraciones geométricas (5 puntos)</h2>
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
                    // TALLER COMPLETADO: Medidas de localización y variabilidad
                    tallerContent = `
                        <h2>Taller: Medidas de localización y variabilidad (5 puntos)</h2>
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
                            <h3>5. Si en una empresa, el salario medio es de \$1'500.000 y el cuartil 3 (Q3) es de \$1'800.000, explica qué significan estos dos datos para los empleados.</h3>
                        </div>
                    `;
                    break;
                case 'talentos1':
                    tallerContent = `
                        <h2>Taller: Talentos matemáticos (5 puntos)</h2>
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
                        <h2>Taller: Función lineal y sistemas de ecuaciones (5 puntos)</h2>
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
                        <h2>Taller: Semejanza de polígonos (5 puntos)</h2>
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
                        <h2>Taller: Teorema de Tales (5 puntos)</h2>
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
                        <h2>Taller: Talentos matemáticos (5 puntos)</h2>
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
                        <h2>Taller: Funciones (5 puntos)</h2>
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
                case 'semejanza_poligonos_3': // Taller de Semejanza de Polígonos para el Periodo 3
                    tallerContent = `
                        <h2>Taller: Semejanza de polígonos (5 puntos)</h2>
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
                case 'conteo': // Taller de Técnicas de Conteo para el Periodo 3
                    tallerContent = `
                        <h2>Taller: Técnicas de conteo (5 puntos)</h2>
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
                        <h2>Taller: Talentos matemáticos (5 puntos)</h2>
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
                        <h2>Taller no disponible</h2>
                        <p>El taller para la combinación seleccionada no está disponible aún. Por favor, intenta con otra opción.</p>
                    `;
            }
        }
        
        else {
            tallerContent = `
                <h2>Taller no disponible</h2>
                <p>El taller para el periodo seleccionado no está disponible aún.</p>
            `;
        }

        tallerContainer.innerHTML = tallerContent;
        if (window.MathJax) {
            MathJax.typesetPromise([tallerContainer]).catch((err) => console.log('MathJax Typeset Error: ' + err.message));
        }
    });
});
