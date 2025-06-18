# 🛡️ SafeNotes

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-10.24.1-green)
![Express](https://img.shields.io/badge/express-v3.x-blue)

**SafeNotes** es una aplicación básica en Node.js con Express (v3.x), diseñada como laboratorio para integrar seguridad en un flujo CI/CD con **Jenkins**, **OWASP Dependency-Check** y **OWASP ZAP**.

---

## 📌 Objetivos del proyecto

- Integrar herramientas de seguridad en un entorno CI/CD.
- Usar Jenkins para automatizar pruebas, auditoría de dependencias y reportes.
- Generar reportes de vulnerabilidades estáticas (Dependency-Check) y dinámicas (ZAP).
- Documentar el proceso para propósitos educativos o demostrativos.

---

## ⚙️ Tecnologías utilizadas

- Node.js `v10.24.1`
- Express `v3.0.0`
- Jenkins (pipeline declarativo)
- OWASP Dependency-Check
- OWASP ZAP
- HTML Publisher Plugin (Jenkins)
- Git & GitHub

---

## 🧰 Requisitos previos

- ✅ Node.js instalado
- ✅ Git configurado
- ✅ Jenkins en Windows con plugins:
- ✅ Pipeline
- ✅ HTML Publisher
- ✅ OWASP Dependency-Check CLI instalado
- ✅ OWASP ZAP (GUI o CLI) instalado

---

## 📁 Estructura del proyecto
safenotes/
├── index.js
├── package.json
├── Jenkinsfile
├── reports/
│ └── dependency-check-report.html
├── zap-report.html
└── README.md


---

🧪 Jenkins: CI/CD Pipeline

🔍 Análisis con OWASP Dependency-Check
Esta herramienta escanea tus dependencias en package.json y node_modules para detectar CVEs conocidos.

✅ Resultado
Se detectaron 7 vulnerabilidades (1 baja, 6 altas).
Se generó un reporte HTML en la carpeta reports/.
Puedes abrirlo en Jenkins o directamente como:
start reports/dependency-check-report.html


🕵️ Escaneo de seguridad con OWASP ZAP
🔄 Pasos realizados
Levantar servidor local:
node index.js
Abrir OWASP ZAP.
Usar modo Spider para rastrear http://localhost:8080.
Ejecutar análisis activo.

📊 hallazgos
Encabezados de seguridad faltantes.
Cookies sin atributos HttpOnly o Secure.
Posibles vectores de inyección.
