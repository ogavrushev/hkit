#!/bin/bash

set -o errexit #Exit on error

bower install
sass ./src/css/app.scss ./src/css/app.css
gulp build
gulp serve