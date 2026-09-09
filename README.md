# Sistema de Gestión de Estudiantes - Node.js & Express

Aplicación en Node.js para el análisis y gestión de datos académicos utilizando lógica imperativa/nativa y expuesta mediante una API REST con Express.

## Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/FelipeVaquiro/ACA_Programaci-n_Avanzada.git](https://github.com/FelipeVaquiro/ACA_Programaci-n_Avanzada.git)

   ## Rutas de la API (Endpoints / Vistas)

### Vista de Reporte (Formato Texto)
- **Reporte Consolidado:** `http://localhost:3000/api/estudiantes/reporte`

### Vistas Generales y Rankings (Formato JSON)
- **Lista Completa:** `http://localhost:3000/api/estudiantes`
- **Ranking por Promedio:** `http://localhost:3000/api/estudiantes/ranking`
- **Estudiantes Aprobados:** `http://localhost:3000/api/estudiantes/aprobados`
- **Estudiantes Reprobados:** `http://localhost:3000/api/estudiantes/reprobados`
- **Promedio General:** `http://localhost:3000/api/estudiantes/promedio-general`
- **Mejor Estudiante:** `http://localhost:3000/api/estudiantes/mejor`
- **Estudiante con Menor Promedio:** `http://localhost:3000/api/estudiantes/menor-promedio`
- **Conteo por Carrera:** `http://localhost:3000/api/estudiantes/conteo-carrera`

### Vistas de Búsqueda y Filtros
- **Buscar por ID (Ejemplo ID 6):** `http://localhost:3000/api/estudiantes/buscar/id/6`
- **Buscar por Carrera:** `http://localhost:3000/api/estudiantes/buscar/carrera/Ingeniería de Sistemas`
- **Buscar por Semestre (Ejemplo Semestre 5):** `http://localhost:3000/api/estudiantes/buscar/semestre/5`
- **Filtrar por Edad Mayor A (Ejemplo > 22 años):** `http://localhost:3000/api/estudiantes/buscar/edad-mayor/22`