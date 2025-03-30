# Cuestionario - 9 Pasos para una Limpieza Facial Profesional

Este cuestionario forma parte del proyecto "9 Pasos para una Limpieza Facial Profesional". Está diseñado para recopilar información sobre los usuarios y personalizar su experiencia de aprendizaje.

## Características

- Formulario interactivo de 8 preguntas
- Barra de progreso para seguimiento del avance
- Adaptación responsiva para dispositivos móviles y de escritorio
- Sistema de consentimiento de cookies conforme a normativas de privacidad
- Integración con sistema de análisis para seguimiento de comportamiento del usuario

## Estructura de archivos

```
Cuestionario/
├── index.html           # Página principal del cuestionario
├── styles.css           # Estilos del cuestionario
├── script.js            # Funcionalidad JavaScript del cuestionario
├── cookie-consent.js    # Gestión del consentimiento de cookies
├── README.md            # Este archivo
└── analytics/           # Archivos relacionados con análisis (copiados de la raíz)
    ├── analytics.js     # Script de seguimiento para el front-end
    └── ...
```

## Sistema de cookies

El cuestionario incluye un sistema completo de gestión de consentimiento de cookies que:

1. Muestra un banner de consentimiento al usuario
2. Permite aceptar o rechazar cookies no esenciales
3. Almacena la preferencia del usuario durante 1 año
4. Solo recopila datos analíticos si el usuario ha dado su consentimiento

## Integración con Analytics

El cuestionario está integrado con el sistema de analytics del proyecto principal, rastreando:

- Inicio del cuestionario
- Navegación entre preguntas
- Respuestas seleccionadas
- Finalización del cuestionario

Todos estos datos se recopilan únicamente si el usuario ha dado su consentimiento de cookies.

## Configuración y mantenimiento

### Actualización de preguntas

Para actualizar las preguntas del cuestionario, edite el archivo `index.html` siguiendo este formato:

```html
<div class="question-container" data-question="1">
    <h2>¿Pregunta?</h2>
    <div class="options">
        <div class="option">
            <input type="radio" id="q1-option1" name="q1" value="1">
            <label for="q1-option1">Opción 1</label>
        </div>
        <!-- Más opciones -->
    </div>
    <!-- Botones de navegación -->
</div>
```

### Personalización de estilos

Los estilos pueden personalizarse editando `styles.css`. Las principales variables de color están definidas al inicio del archivo:

```css
:root {
    --primary-color: #9be031;    /* Verde brillante */
    --secondary-color: #2e4057;  /* Azul oscuro */
    --accent-color: #e84855;     /* Rojo acentuado */
    /* Más variables */
}
```

### URL de redirección

La URL a la que se redirige al usuario después de completar el cuestionario se puede modificar en el archivo `script.js`:

```javascript
const redirectUrl = "https://spmarketing97.github.io/9-Pasos-para-una-Limpieza-Facial-Profesional/";
```

## Informes de análisis

Los datos recopilados por el cuestionario se incluyen en los informes semanales generados por el sistema de análisis. Para más información sobre la configuración de estos informes, consulte los archivos de Python en la carpeta raíz. 