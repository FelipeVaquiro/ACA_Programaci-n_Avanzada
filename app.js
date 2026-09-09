const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// ==========================================
// DATOS INICIALES
// ==========================================
const estudiantes = [
    { id: 1, nombre: "Andrés", edad: 21, carrera: "Ingeniería de Sistemas", semestre: 5, promedio: 4.2 },
    { id: 2, nombre: "Laura", edad: 20, carrera: "Administración", semestre: 4, promedio: 3.8 },
    { id: 3, nombre: "Carlos", edad: 24, carrera: "Ingeniería de Sistemas", semestre: 7, promedio: 2.9 },
    { id: 4, nombre: "Mariana", edad: 22, carrera: "Contaduría", semestre: 6, promedio: 4.5 },
    { id: 5, nombre: "Juan", edad: 19, carrera: "Ingeniería de Sistemas", semestre: 3, promedio: 3.2 },
    { id: 6, nombre: "Sofía", edad: 23, carrera: "Administración", semestre: 8, promedio: 4.7 },
    { id: 7, nombre: "Daniel", edad: 25, carrera: "Contaduría", semestre: 9, promedio: 2.7 },
    { id: 8, nombre: "Valentina", edad: 21, carrera: "Ingeniería de Sistemas", semestre: 5, promedio: 3.9 },
    { id: 9, nombre: "Sebastián", edad: 22, carrera: "Administración", semestre: 6, promedio: 3.4 },
    { id: 10, nombre: "Camila", edad: 20, carrera: "Contaduría", semestre: 4, promedio: 4.1 }
];

// ==========================================
// FUNCIONES LÓGICAS (SINTAXIS NATIVA IMPERATIVA)
// ==========================================

// 1. Listar todos los estudiantes
function listarEstudiantes(lista) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        resultado[resultado.length] = lista[i];
    }
    return resultado;
}

// 2. Buscar un estudiante por ID
function buscarPorId(lista, id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === Number(id)) {
            return lista[i];
        }
    }
    return "Estudiante no encontrado";
}

// 3. Buscar estudiantes por carrera
function buscarPorCarrera(lista, carrera) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].carrera.toLowerCase() === carrera.toLowerCase()) {
            resultado[resultado.length] = lista[i];
        }
    }
    return resultado;
}

// 4. Obtener estudiantes aprobados (promedio >= 3.0)
function obtenerAprobados(lista) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].promedio >= 3.0) {
            resultado[resultado.length] = lista[i];
        }
    }
    return resultado;
}

// 5. Obtener estudiantes reprobados (promedio < 3.0)
function obtenerReprobados(lista) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].promedio < 3.0) {
            resultado[resultado.length] = lista[i];
        }
    }
    return resultado;
}

// 6. Calcular el promedio general
function calcularPromedioGeneral(lista) {
    if (lista.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i].promedio;
    }
    const promedio = suma / lista.length;
    return Number(promedio.toFixed(2));
}

// 7. Encontrar al mejor estudiante
function obtenerMejorEstudiante(lista) {
    if (lista.length === 0) return null;
    let mejor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        mejor = (lista[i].promedio > mejor.promedio) ? lista[i] : mejor;
    }
    return mejor;
}

// 8. Encontrar al estudiante con menor promedio
function obtenerMenorPromedio(lista) {
    if (lista.length === 0) return null;
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        menor = (lista[i].promedio < menor.promedio) ? lista[i] : menor;
    }
    return menor;
}

// 9. Contar estudiantes por carrera
function contarPorCarrera(lista) {
    const conteo = {};
    for (let i = 0; i < lista.length; i++) {
        const carrera = lista[i].carrera;
        conteo[carrera] = conteo[carrera] ? conteo[carrera] + 1 : 1;
    }
    return conteo;
}

// 10. Buscar estudiantes por semestre
function buscarPorSemestre(lista, semestre) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].semestre === Number(semestre)) {
            resultado[resultado.length] = lista[i];
        }
    }
    return resultado;
}

// 11. Obtener estudiantes mayores de cierta edad
function obtenerMayoresDeEdad(lista, edad) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].edad > Number(edad)) {
            resultado[resultado.length] = lista[i];
        }
    }
    return resultado;
}

// RETO ADICIONAL: Ordenar de mayor a menor promedio (Algoritmo de Burbuja)
function obtenerRanking(lista) {
    const copia = [];
    for (let i = 0; i < lista.length; i++) {
        copia[i] = { ...lista[i] };
    }

    let n = copia.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (copia[i].promedio < copia[i + 1].promedio) {
                let temp = copia[i];
                copia[i] = copia[i + 1];
                copia[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return copia;
}

// 12. Generar reporte general
function generarReporte(lista) {
    const total = lista.length;
    const aprobados = obtenerAprobados(lista).length;
    const reprobados = obtenerReprobados(lista).length;
    const promedioG = calcularPromedioGeneral(lista);
    const mejor = obtenerMejorEstudiante(lista);
    const menor = obtenerMenorPromedio(lista);

    let reporteText = `========== REPORTE ACADÉMICO ==========\n\n`;
    reporteText += `Total de estudiantes: ${total}\n`;
    reporteText += `Estudiantes aprobados: ${aprobados}\n`;
    reporteText += `Estudiantes reprobados: ${reprobados}\n`;
    reporteText += `Promedio general: ${promedioG}\n`;
    reporteText += `Mejor estudiante: ${mejor ? mejor.nombre + " (" + mejor.promedio + ")" : 'N/A'}\n`;
    reporteText += `Estudiante con menor promedio: ${menor ? menor.nombre + " (" + menor.promedio + ")" : 'N/A'}\n\n`;
    reporteText += `========================================`;

    return reporteText;
}

// ==========================================
// SALIDA POR CONSOLA
// ==========================================
function ejecutarConsola() {
    console.log("\n" + generarReporte(estudiantes) + "\n");

    console.log("===== RANKING DE PROMEDIOS =====");
    const ranking = obtenerRanking(estudiantes);
    for (let i = 0; i < ranking.length; i++) {
        console.log(`${i + 1}. ${ranking[i].nombre} - ${ranking[i].promedio}`);
    }
    console.log("===============================\n");

    console.log("===== CONTEO POR CARRERA =====");
    const conteo = contarPorCarrera(estudiantes);
    for (let carrera in conteo) {
        console.log(`${carrera}: ${conteo[carrera]}`);
    }
    console.log("===============================\n");
}

// ==========================================
// RUTAS DE EXPRESS (API REST)
// ==========================================

app.get('/api/estudiantes', (req, res) => {
    res.json(listarEstudiantes(estudiantes));
});

app.get('/api/estudiantes/reporte', (req, res) => {
    res.type('text/plain').send(generarReporte(estudiantes));
});

app.get('/api/estudiantes/ranking', (req, res) => {
    res.json(obtenerRanking(estudiantes));
});

app.get('/api/estudiantes/aprobados', (req, res) => {
    res.json(obtenerAprobados(estudiantes));
});

app.get('/api/estudiantes/reprobados', (req, res) => {
    res.json(obtenerReprobados(estudiantes));
});

app.get('/api/estudiantes/promedio-general', (req, res) => {
    res.json({ promedioGeneral: calcularPromedioGeneral(estudiantes) });
});

app.get('/api/estudiantes/mejor', (req, res) => {
    res.json(obtenerMejorEstudiante(estudiantes));
});

app.get('/api/estudiantes/menor-promedio', (req, res) => {
    res.json(obtenerMenorPromedio(estudiantes));
});

app.get('/api/estudiantes/conteo-carrera', (req, res) => {
    res.json(contarPorCarrera(estudiantes));
});

app.get('/api/estudiantes/buscar/id/:id', (req, res) => {
    const estudiante = buscarPorId(estudiantes, req.params.id);
    if (typeof estudiante === 'string') {
        return res.status(404).json({ mensaje: estudiante });
    }
    res.json(estudiante);
});

app.get('/api/estudiantes/buscar/carrera/:carrera', (req, res) => {
    res.json(buscarPorCarrera(estudiantes, req.params.carrera));
});

app.get('/api/estudiantes/buscar/semestre/:semestre', (req, res) => {
    res.json(buscarPorSemestre(estudiantes, req.params.semestre));
});

app.get('/api/estudiantes/buscar/edad-mayor/:edad', (req, res) => {
    res.json(obtenerMayoresDeEdad(estudiantes, req.params.edad));
});

// ==========================================
// INICIALIZACIÓN DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
    ejecutarConsola();
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});


// Ruta raíz principal
app.get('/', (req, res) => {
    res.type('text/plain').send(generarReporte(estudiantes));
});