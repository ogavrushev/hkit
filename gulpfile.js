const requireDir = require('require-dir');
global.browserSync = require('browser-sync').create();

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });