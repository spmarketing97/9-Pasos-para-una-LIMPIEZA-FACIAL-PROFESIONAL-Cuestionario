#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Configuración del sistema de análisis.
Este archivo contiene configuraciones por defecto sin información sensible.
Para uso local, crea un archivo config-secret.py con tus credenciales reales.
"""

import os
from pathlib import Path

# Directorio base del proyecto
BASE_DIR = Path(__file__).resolve().parent

# Configuración predeterminada
CONFIG = {
    'db_path': os.path.join('analytics', 'data', 'analytics.db'),
    'report_output': os.path.join('analytics', 'reports'),
    'email': {
        'sender': 'tu_correo@gmail.com',
        'recipients': ['destinatario@example.com'],
        'subject_template': '9 Pasos para una Limpieza Facial - Informe Semanal ({date})',
        'smtp_server': 'smtp.gmail.com',
        'smtp_port': 587,
        'smtp_user': 'tu_correo@gmail.com',
        'smtp_password': 'tu_contraseña_de_aplicación'
    },
    'landing_path': os.path.join(BASE_DIR, '..'),
    'questionnaire_path': BASE_DIR
}

# Intenta cargar configuración secreta si existe
try:
    from config_secret import SECRET_CONFIG
    # Actualiza la configuración con valores secretos
    for key, value in SECRET_CONFIG.items():
        if isinstance(value, dict) and key in CONFIG and isinstance(CONFIG[key], dict):
            CONFIG[key].update(value)
        else:
            CONFIG[key] = value
except ImportError:
    # Si no existe el archivo de configuración secreta, usa valores predeterminados
    pass 