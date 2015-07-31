#!/bin/bash

set -o errexit #Exit on error

bower install
sass ./html/css/app.scss ./html/css/app.css
gulp build
gulp serve