# React TypeScript Todo App
## Notes
`rails new ___`
`bundle install` -> gems
Create static controller/routes/html
`rails generate ____ ____` (controller/model/migration)
`npm init`
`npm install --save react react-dom ts-loader typescript webpack webpack-cli @types/react @types/react-dom`

package.json example
``` json
{
  "name": "type-todo",
  "version": "1.0.0",
  "description": "make a todo app using typescript",
  "main": "server.js",
  "scripts": {
    "build": "webpack",
    "build:watch": "webpack --watch"
  },
  "author": "Calvin Feng",
  "license": "ISC",
  "dependencies": {
    "@types/react": "^16.3.14",
    "@types/react-dom": "^16.0.5",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "ts-loader": "^4.3.0",
    "typescript": "^2.8.3",
    "webpack": "^4.9.1",
    "webpack-cli": "^2.1.4"
  }
}
```

Inside package.json add webpack scripts.
- why? bc webpack is not globally installed. It has to go through npm to locate.

Create webpack config
- Create frontend folder and create index.tsx
- Modify entry and output files for the complied files

Create tsconfig.json
- `tsc --init` best if create it yourself

Create root component (todo_component.tsx) and connect to ReactDOM in index.tsx

to connect react jsx and tsx components
`npm install --save babel-loader babel-plugin-transform-class-properties babel-preset-env babel-preset-es2017 babel-preset-react`

create .babelrc file
```
{
  "plugins": ["transform-class-properties"],
  "presets":[
    "es2017", "react", "env"
  ]
}
```

add `{ test: /\.jsx?$/, loader: "babel-loader" }` to webpack

when you create jsx files you need to create a d.ts file for declaring variables
