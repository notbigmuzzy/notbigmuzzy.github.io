@echo off
echo Starting Pug and Sass watchers...

start "Pug - index" cmd /k pug -w assets/templates/index.pug -o ../notbigmuzzy.github.io/
start "Pug - c64" cmd /k pug -w assets/templates/c64.pug -o ../notbigmuzzy.github.io/
start "Pug - vapor" cmd /k pug -w assets/templates/vapor.pug -o ../notbigmuzzy.github.io/
start "Pug - cv" cmd /k pug -w assets/templates/cv.pug -o ../notbigmuzzy.github.io/
start "Sass - index" cmd /k sass --watch assets/styles/index.scss index.css --style compressed

echo All watchers started in separate windows.
