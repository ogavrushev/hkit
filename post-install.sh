#!/bin/bash

set -o errexit #Exit on error

bower install
sass ./html/css/app.sass ./html/css/app.css
gulp serve