After pull, run these commands in this order
```
npm install
bower install
gulp moveBower
gulp initialize
gulp build
```

When you are ready to start development, use the command 
```
gulp
```

To adjust files, do not change anything in the dist folder.
Also, to adjust the javascript, only adjust main.js, not scripts.js.
scripts.js is automatically updated when a change is made to main.js.