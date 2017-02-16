 node -v (6.9.5)
ng new learning
(git remote add origin git@github.com:stwissel/learning.git)
(git push -u origin master)

Add proxy.conf.json

{   "/api": {
      "target": "http://localhost:8000",
      "secure": false
     } 
  }

  Edit package.json
  "start": "ng serve --proxy-config proxy.conf.json",

Add Bootstrap
npm install bootstrap@4.0.0-alpha.6 --save
npm install @ng-bootstrap/ng-bootstrap --save

nmp install font-awesome --save

Edit angular-cli.json
"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css",
         "../node_modules/font-awesome/css/font-awesome.css"
         ],


Editor
https://www.boottheme.com/app/#page

