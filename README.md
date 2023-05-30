# Gestion de Tareas

¡Hola!

Repositorio de Gestion de tareas, realizado en React, [Repositorio alojado en GitHub-Pages](https://diegopallares.github.io/ControlTaks/), 


 ## Build 
 ### Paso para crear y subir a respositorio de Gib-Pages
1) npm run Build: crear carpeta Build, para hacer deploy, osea subir a produccion.
2) "homepage": "/Users/Diego_Pallares/Documents/React Platzi/Gestio de Tareas/curso React intro/build": Creamos ruta en el archivo package.json de nuestra carpeta Build (Ya existia).
3) Eejecutamos de nuevo npm run build: verificamos que este ahora la ruta en el archivo index.html de la carpeta build.
4) bpm i --dave-dev gh-pages: Instalar herramienta para ayduarnos a realizar el deploy. (Vemos que en package.json se crea devDependencies).
5) Crear esto en el apartado de Scripts, en package.json: {"deploy": "npm run build", "predeploy": "gh-pages -d build"}.
6) En git escribimos npm tun deploy: verificamos que al final diga published y verificar nueva rama "ph-pages" en gitHub (No debe tener errores el compilado del proyecto)
7) Vamos a Settings/pages verificar en Branch que este selecionada la rama "ph-pages"
