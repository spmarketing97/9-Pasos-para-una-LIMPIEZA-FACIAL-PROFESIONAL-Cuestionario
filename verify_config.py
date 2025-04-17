#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Verificador de configuración
Este script comprueba que la configuración secreta se cargue correctamente.
"""

import os
import sys
import json

print("Verificando configuración del sistema de análisis...")

# Verificar configuración de Python
try:
    from config import CONFIG
    print("\n[Configuración Python]")
    print(f"Remitente: {CONFIG['email']['sender']}")
    print(f"Destinatarios: {CONFIG['email']['recipients']}")
    print(f"Usuario SMTP: {CONFIG['email']['smtp_user']}")
    print(f"Contraseña SMTP: {'*' * len(CONFIG['email']['smtp_password'])}")
    print(f"Ruta de landing: {CONFIG['landing_path']}")
    print(f"Ruta de cuestionario: {CONFIG['questionnaire_path']}")
    print("\nLa configuración de Python se ha cargado correctamente.")
except Exception as e:
    print(f"Error al cargar la configuración de Python: {str(e)}")
    print("Comprueba que config_secret.py existe y tiene el formato correcto.")

# Verificar archivo .env
try:
    print("\n[Archivo .env]")
    if os.path.exists('.env'):
        with open('.env', 'r', encoding='utf-8') as f:
            env_lines = f.readlines()
            
        env_vars = {}
        for line in env_lines:
            line = line.strip()
            if line and not line.startswith('#'):
                key, value = line.split('=', 1)
                env_vars[key] = value
                
        print(f"Variables encontradas: {len(env_vars)}")
        print(f"EMAIL_SENDER: {'✓' if 'EMAIL_SENDER' in env_vars else '✗'}")
        print(f"SMTP_PASSWORD: {'✓' if 'SMTP_PASSWORD' in env_vars else '✗'}")
        print("\nEl archivo .env está presente.")
    else:
        print("No se encontró el archivo .env")
except Exception as e:
    print(f"Error al verificar el archivo .env: {str(e)}")

# Verificar .gitignore
try:
    print("\n[Verificación de .gitignore]")
    if os.path.exists('.gitignore'):
        with open('.gitignore', 'r', encoding='utf-8') as f:
            gitignore_content = f.read()
            
        files_to_check = [
            'config_secret.py',
            '.env',
            'config-secret.js'
        ]
        
        for file in files_to_check:
            if file in gitignore_content:
                print(f"{file}: Protegido ✓")
            else:
                print(f"{file}: NO protegido - INSEGURO ✗")
    else:
        print("No se encontró el archivo .gitignore")
except Exception as e:
    print(f"Error al verificar .gitignore: {str(e)}")

print("\nVerificación completada.")