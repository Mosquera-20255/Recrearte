# Usa una imagen oficial de Nginx como base
FROM nginx:alpine

# Copia TODO el contenido de la carpeta actual al directorio del servidor
COPY . /usr/share/nginx/html/