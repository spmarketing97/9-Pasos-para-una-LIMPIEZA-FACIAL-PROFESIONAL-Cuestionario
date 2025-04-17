// Configuración para el sistema de análisis
const config = {
    // Rutas de analítica
    analytics: {
        dbPath: 'analytics/data/analytics.db',
        reportOutput: 'analytics/reports/',
        chartsOutput: 'analytics/reports/charts/'
    },
    
    // Configuración de correo
    email: {
        sender: 'tu_correo@gmail.com',
        recipients: ['destinatario@example.com'],
        subjectTemplate: '9 Pasos para una Limpieza Facial - Informe Semanal ({date})',
        smtpServer: 'smtp.gmail.com',
        smtpPort: 587,
        smtpUser: 'tu_correo@gmail.com',
        smtpPassword: 'tu_contraseña_de_aplicación'
    },
    
    // Rutas del proyecto
    paths: {
        landing: '../',
        questionnaire: './'
    }
};

// No modificar este archivo, usar config-secret.js para sobrescribir valores sensibles
if (typeof module !== 'undefined') {
    module.exports = config;
} 