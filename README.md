# Sistema de Cuestionario Personalizado

## Descripción
Este sistema de cuestionario está diseñado para recopilar información valiosa de los usuarios interesados en el curso "9 Pasos para una Limpieza Facial Profesional". En lugar de ser un examen, este cuestionario funciona como una herramienta de personalización que adapta la experiencia de aprendizaje según las necesidades, experiencia previa y objetivos del usuario.

## Características
- Interfaz intuitiva y atractiva
- Progreso visual mediante barra de avance
- 8 preguntas estratégicas para conocer al usuario
- Sistema de navegación entre preguntas
- Página de resultados personalizada
- Redirección automática tras completar el cuestionario
- Sistema de consentimiento de cookies integrado
- Integración con sistema de análisis para seguimiento de datos

## Estructura de archivos
- `index.html`: Estructura principal del cuestionario
- `script.js`: Lógica de funcionamiento del cuestionario
- `styles.css`: Estilos visuales del cuestionario
- `cookie-consent.js`: Gestión del consentimiento de cookies
- `cookies.html`: Página de política de cookies
- `analytics/`: Directorio con archivos de configuración del sistema de análisis
  - `analytics.js`: Script para seguimiento de interacciones
  - `data/`: Almacenamiento de datos recopilados
  - `reports/`: Informes generados a partir de los datos
    - `charts/`: Gráficos para visualización de datos
  - `storage/`: Almacenamiento temporal de datos procesados

## Archivos de configuración
El sistema incluye los siguientes archivos para la configuración de informes:
- `analytics-report.py`: Script principal para generar informes
- `weekly-report-scheduler.py`: Programador de informes semanales
- `setup-task.bat`: Archivo para configurar tareas programadas en Windows
- `analytics-config.md`: Documentación detallada de configuración

## Sistema de gestión de cookies
El cuestionario cuenta con un sistema completo de gestión de consentimiento de cookies que:
1. Muestra un banner informativo en la primera visita
2. Permite aceptar o rechazar el uso de cookies
3. Almacena la preferencia del usuario
4. Solo activa el rastreo analítico si el usuario ha dado su consentimiento
5. Proporciona información detallada en la página de política de cookies

## Integración con análisis
Los datos recopilados a través del cuestionario se incluyen en los informes semanales generados por el sistema de análisis, proporcionando información valiosa sobre:
- Tasa de finalización del cuestionario
- Preferencias y perfiles de los usuarios
- Tiempo medio de finalización
- Preguntas que generan mayor abandono
- Datos demográficos de los participantes

## Actualización de preguntas
Para modificar las preguntas del cuestionario, edite el archivo `index.html` en la sección correspondiente. Cada pregunta sigue una estructura definida que incluye:
- Título de la pregunta
- Opciones de respuesta
- Valores asociados a cada opción

## Personalización de estilos
Para modificar la apariencia visual del cuestionario, edite el archivo `styles.css`. El diseño está organizado en secciones claramente comentadas para facilitar su personalización.

## Control de versiones con GitHub
Este proyecto está configurado para trabajar con GitHub mediante los siguientes archivos:

### .gitignore
Se ha configurado un archivo `.gitignore` para excluir del repositorio:
- Archivos temporales del sistema (`.DS_Store`, `Thumbs.db`)
- Entornos virtuales de Python y archivos compilados
- Archivos de log y reportes generados
- Directorios de datos sensibles (`analytics/data/`, `analytics/reports/`, `analytics/storage/`)
- Archivos de dependencias (`node_modules/`)
- Archivos de configuración personal (`.env`)
- Archivos de configuración de IDEs

### Estructura recomendada para el repositorio
Al trabajar con este proyecto en GitHub, se recomienda:

1. Mantener la estructura de ramas:
   - `main`: Versión estable y producción
   - `develop`: Desarrollo y pruebas
   - `feature/nombre`: Para nuevas características

2. Convenciones para commits:
   - `feat`: Nuevas características
   - `fix`: Corrección de errores
   - `docs`: Cambios en documentación
   - `style`: Cambios en estilo visual
   - `refactor`: Mejoras de código sin cambiar funcionalidad

3. Proceso de actualización:
   - Crear Pull Requests para integrar cambios
   - Revisar código antes de aprobar
   - Mantener el archivo `.gitignore` actualizado según evolucione el proyecto 