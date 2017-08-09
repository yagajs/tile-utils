# Tile Utils

A library of utilities and interfaces to work with (spatial) tiled data.

## How to use

First install with `npm` or `yarn`:

```bash
npm install --save @yaga/tile-utils
# OR
yarn install --save @yaga/tile-utils
```

For additional information about the functions and interfaces provided with this library, please take a look at the API
documentation. You can create your own ones with the NPM script task:
```bash
npm run doc
```
*take a look at the "NPM script tasks" section for further information.*

### NPM script tasks

* `npm test`: runs software test and create a coverage report in folder `coverage`.
* `npm run doc`: creates an API documentation and places it in the folder `typedoc`.
* `npm run lint`: lints the project agains the `tslint` default rule-set.
* `npm run transpile`: transpiles the TypeScript code into a JavaScript one and places it into the folder `typedoc`.