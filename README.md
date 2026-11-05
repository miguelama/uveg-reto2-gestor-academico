# Reto 2 UVEG — Mi Gestor Académico

Aplicación web estática de gestión de tareas: agregar, completar, eliminar y limpiar tareas. Guarda los datos localmente en el navegador (`localStorage`); no utiliza servidor de datos.

## Estructura
- `index.html`: interfaz.
- `css/styles.css` y `css/styles.min.css`: estilos fuente y optimizados.
- `js/app.js` y `js/app.min.js`: lógica fuente y optimizada.
- `img/`: reservado para imágenes optimizadas (la versión actual no usa imágenes externas).
- `xampp/htdocs/UVEG/reto2/tareasapp`: Configuración con XAMPP para uso de Apache.
- `evidencias/`: capturas reales del proceso que debe tomar el estudiante.

## Preparación y empaquetado
1. Verificar que los archivos están organizados por carpetas.
2. Revisar que HTML carga los archivos `.min.css` y `.min.js`.
3. Probar agregar, marcar, eliminar y recargar la página.
4. Comprimir la carpeta `Reto2_UVEG` en ZIP sin incluir `.git` ni secretos.

## GitHub (ejecutar manualmente)
```bash
git init
git add .
git commit -m "feat: crear gestor académico funcional"
git commit --allow-empty -m "docs: registrar verificación de empaquetado"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```
Sustituye la URL por tu repositorio real. Es preferible hacer commits de cambios reales en etapas, no commits vacíos: el segundo comando es solo un ejemplo técnico y no debe usarse como evidencia de trabajo no realizado.

## Apache: despliegue de simulación
1. Instalar Apache (XAMPP).
2. Copiar el proyecto a "C:\xampp\htdocs\UVEG\reto2\tareasapp".
3. Configurar 
4. Habilitarlo con enlace simbólico en `sites-enabled` (deshabilitar configuraciones que colisionen en 8080).
5. Ejecutar `sudo nginx -t` y `sudo systemctl reload nginx`.
6. Abrir `http://localhost:8080/tuapp/` y comprobar la aplicación.

**Puerto:** 8080. **Ruta pública:** `/tuapp/`. **Directorio físico:** `/var/www/html/tuapp/`. La configuración es un ejemplo, no una prueba de despliegue.

## Evidencias pendientes
Capturas: estructura, optimización, ZIP, repositorio, historial de commits, README, archivo Nginx, prueba `nginx -t` y aplicación en navegador. No se han ejecutado GitHub ni Nginx en nombre del estudiante.
