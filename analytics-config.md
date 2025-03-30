# Configuración del Sistema de Análisis - Cuestionario

Este documento describe cómo configurar el sistema de análisis para el cuestionario del proyecto "9 Pasos para una Limpieza Facial Profesional". El sistema recopila datos de interacción de los usuarios, genera informes semanales y los envía por correo electrónico.

## Archivos necesarios

Los siguientes archivos son necesarios para el funcionamiento completo del sistema:

- `analytics-report.py`: Script principal que genera informes y procesa datos
- `weekly-report-scheduler.py`: Programa la ejecución automática de informes
- `setup-task.bat`: Script para configurar tareas programadas en Windows
- `analytics.js`: Script de cliente para recopilar datos de interacción

## Configuración

### 1. Credenciales de correo electrónico

Edita el archivo `analytics-report.py` para configurar las credenciales de correo electrónico:

```python
CONFIG = {
    'db_path': 'analytics/data/analytics.db',
    'report_output': 'analytics/reports/',
    'email': {
        'sender': 'tu_correo@gmail.com',
        'recipients': ['destinatario@example.com'],
        'subject_template': '9 Pasos para una Limpieza Facial - Informe Semanal ({date})',
        'smtp_server': 'smtp.gmail.com',
        'smtp_port': 587,
        'smtp_user': 'tu_correo@gmail.com',
        'smtp_password': 'tu_contraseña_de_aplicación'
    },
    'landing_path': 'C:/ruta/a/tu/landing',
    'questionnaire_path': 'C:/ruta/a/tu/cuestionario'
}
```

**Nota importante:** Para Gmail, necesitarás una "Contraseña de aplicación" generada en la configuración de seguridad de tu cuenta Google.

### 2. Estructura de directorios

El sistema espera la siguiente estructura de directorios:

```
analytics/
├── data/            # Base de datos SQLite
├── reports/         # Informes generados
│   └── charts/      # Gráficos para informes
└── storage/         # Datos analíticos temporales
```

Estos directorios se crearán automáticamente si no existen.

### 3. Programación de informes

Para configurar la generación automática de informes semanales:

```bash
# En Windows
python weekly-report-scheduler.py --install

# Desinstalar tarea programada
python weekly-report-scheduler.py --uninstall
```

Esto creará una tarea programada para ejecutar `analytics-report.py` cada lunes a las 9:00 AM.

### 4. Generación manual de informes

Para generar un informe manualmente:

```bash
# Generar informe
python analytics-report.py

# Generar informe y enviar por correo
python analytics-report.py --send-email

# Generar informe de prueba con datos simulados
python analytics-report.py --generate-test

# Generar informe para una fecha específica
python analytics-report.py --date 2025-04-01
```

## Integración con el cuestionario

El cuestionario recopila datos de interacción a través de `analytics.js`, que se carga en `index.html`:

```html
<script src="script.js"></script>
<script src="cookie-consent.js"></script>
<script src="../analytics/analytics.js"></script>
```

El script de consentimiento de cookies (`cookie-consent.js`) asegura que los datos solo se recopilen si el usuario ha dado su consentimiento.

## Datos recopilados

El sistema analiza los siguientes datos del cuestionario:

- **Interacciones**: Inicio del cuestionario, navegación entre preguntas, envío
- **Respuestas**: Opciones seleccionadas en cada pregunta
- **Tiempos**: Tiempo total para completar el cuestionario
- **Datos técnicos**: Dispositivo, navegador, resolución

## Solución de problemas

### Problema: No se envían correos

Si los informes se generan pero no se envían por correo:

1. Verifica que la verificación en dos pasos esté habilitada en tu cuenta de Google
2. Genera una nueva contraseña de aplicación en la [configuración de seguridad](https://myaccount.google.com/security)
3. Asegúrate de que la contraseña se copie exactamente como aparece (sin espacios adicionales)

### Problema: No se recopilan datos

Si el informe no muestra datos del cuestionario:

1. Verifica que `analytics.js` se cargue correctamente en `index.html`
2. Comprueba la consola del navegador para errores
3. Asegúrate de que existan los directorios necesarios con permisos de escritura 