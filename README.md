# Cuestionario - 9 Pasos para una Limpieza Facial Profesional

Sistema de cuestionario interactivo para el proyecto "9 Pasos para una Limpieza Facial Profesional".

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
.
├── index.html                # Página principal del cuestionario
├── script.js                 # Lógica del cuestionario
├── styles.css                # Estilos del cuestionario
├── cookie-consent.js         # Gestión de consentimiento de cookies
├── config.js                 # Configuración general del proyecto
├── README.md                 # Este archivo
├── analytics/
│   ├── analytics.js          # Script de analítica
│   ├── data/                 # Datos de analítica (ignorado en Git)
│   │   └── analytics.db      # Base de datos SQLite (no en Git)
│   ├── reports/              # Informes generados
│   │   └── charts/           # Gráficos para informes
│   └── storage/              # Almacenamiento temporal (ignorado en Git)
├── analytics-report.py       # Generador de informes
├── weekly-report-scheduler.py # Programador de informes
├── config.py                 # Configuración para scripts Python
└── config_secret.py.example  # Plantilla para configuración secreta
```

## Configuración para GitHub

Para usar este proyecto con GitHub, sigue estos pasos:

1. **Crea un repositorio** en GitHub para el proyecto.

2. **Clona el repositorio** a tu máquina local:
   ```
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

3. **Copia los archivos** de este proyecto al repositorio.

4. **Configura tus credenciales** creando un archivo `config_secret.py` basado en el ejemplo:
   ```
   cp config_secret.py.example config_secret.py
   ```
   Luego edita `config_secret.py` con tus credenciales reales.

5. **Inicializa el repositorio**:
   ```
   git add .
   git commit -m "Commit inicial"
   git push -u origin main
   ```

## Archivos para GitHub

Estos son los archivos que debes subir a GitHub:

- ✅ `index.html`
- ✅ `script.js`
- ✅ `styles.css`
- ✅ `cookie-consent.js`
- ✅ `analytics/analytics.js`
- ✅ `analytics/reports/charts/*.png` (gráficos generados)
- ✅ `analytics-report.py`
- ✅ `weekly-report-scheduler.py`
- ✅ `config.py`
- ✅ `config.js`
- ✅ `config_secret.py.example` (ejemplo sin datos reales)
- ✅ `README.md`
- ✅ `favicon.svg`
- ✅ `favicon.ico`
- ✅ `favicon.png`
- ✅ `.gitignore`

## Archivos que NO deben estar en GitHub

Estos archivos contienen datos sensibles o temporales y están configurados en `.gitignore`:

- ❌ `analytics/data/analytics.db` (base de datos)
- ❌ `analytics/storage/*` (datos temporales)
- ❌ `analytics-report.log` (logs)
- ❌ `config_secret.py` (credenciales reales)

## Configuración Local

Para configurar el proyecto localmente:

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Crea un archivo `config_secret.py` basado en el ejemplo:
   ```
   cp config_secret.py.example config_secret.py
   ```

3. Edita `config_secret.py` con tus credenciales reales.

4. Crea los directorios necesarios:
   ```
   mkdir -p analytics/data analytics/reports/charts analytics/storage
   ```

## Uso del Sistema

### Generar Informes

Para generar un informe manualmente:

```bash
python analytics-report.py
```

Para generar y enviar por correo:

```bash
python analytics-report.py --send-email
```

### Configurar Informes Automáticos

En Windows:

```bash
python weekly-report-scheduler.py --install
```

## Solución de Problemas

Si encuentras problemas con los informes o la analítica:

1. Verifica que los directorios `analytics/data`, `analytics/reports` y `analytics/storage` existan.
2. Comprueba las credenciales en `config_secret.py`.
3. Revisa el archivo `analytics-report.log` para errores.

## Contribuciones

Para contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica: `git checkout -b mi-nueva-caracteristica`.
3. Haz tus cambios y asegúrate de no incluir datos sensibles.
4. Confirma tus cambios: `git commit -am 'Añadir nueva característica'`.
5. Sube a la rama: `git push origin mi-nueva-caracteristica`.
6. Envía un pull request. 