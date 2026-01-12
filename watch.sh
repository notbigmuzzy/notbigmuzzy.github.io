#!/bin/bash
echo "Starting Pug and Sass watchers..."

title() { :; }

pug -w assets/templates/index.pug -o ./ &
pug -w assets/templates/c64.pug -o ./ &
pug -w assets/templates/vapor.pug -o ./ &
pug -w assets/templates/cv.pug -o ./ &

sass --watch assets/styles/index.scss:index.css --style=compressed &

echo "All watchers started in background. Use 'jobs' to see them."
