# Development

## Flow typechecker

It’s good to run the `flow` typechecker frequently to make sure you’re not introducing any type errors. Flow treats each Yarn Workspace as a separate environment, and as such runs a separate type-checking server for each.

You should now be able to run `flow` in any of the Yarn workspaces:

```
cd lib
flow
```

## Running keyserver

To run the web app or the landing page, you’ll first need to run the keyserver locally.

Open a new terminal and run:

```
cd keyserver
yarn dev
```

This command runs three processes. The first two are to keep the `dist` folder updated whenever the `src` folder changes. They are “watch” versions of the same Babel and `rsync` commands we used to initially create the `dist` folder (before running the `generate-olm-config.js` script above). The final process is `nodemon`, which is similar to `node` except that it restarts whenever any of its source files (in the `dist` directory) changes.

Note that if you run `yarn dev` in `keyserver` right after `yarn cleaninstall`, before Webpack is given a chance to build `app.build.cjs`/`landing.build.cjs` files, then Node will crash when it attempts to import those files. Just make sure to run `yarn dev` (or `yarn prod`) in `web` or `landing` before attempting to load the corresponding webpages.

## Running web app

First, make sure that the keyserver is running. If you haven’t already, run:

```
cd keyserver
yarn dev
```

Next, open a new terminal and run:

```
cd web
yarn dev
```

You should now be able to load the web app in your web browser at http://localhost:3000/comm/.

This command will start two processes. One is `webpack-dev-server`, which will serve the JS files. `webpack-dev-server` also makes sure the website automatically hot-reloads whenever any of the source files change. The other process is `webpack --watch`, which will build the `app.build.cjs` file, as well as rebuilding it whenever any of the source files change. The `app.build.cjs` file is consumed by the Node server in order to pre-render the initial HTML from the web source (“Server-Side Rendering”).

## Running landing page

First, make sure that the keyserver is running. If you haven’t already, run:

```
cd keyserver
yarn dev
```

Next, open a new terminal and run:

```
cd landing
yarn dev
```

You should now be able to load the landing page in your web browser at http://localhost:3000/commlanding/.

This runs the same two processes as the web app, but for the landing page. Note that the `landing.build.cjs` file (similar to the web app’s `app.build.cjs` file) is consumed by the Node server.

## Debugging

### React Developer Tools

You can access the React Developer Tools through the Chrome extension by opening the Chrome Developer Tools and selecting the “Components” or “Profiler” tabs. This should work in both our development environment and in production.

### Redux Developer Tools

You can access the Redux Developer Tools through the Chrome extension by opening the Chrome Developer Tools and selecting the “Redux” tab. This should work in both our development environment and in production, although in production you won’t be able to see Redux actions from before you opened up the Redux dev tools.

### Debugging JavaScript

You can just use your browser of choice’s dev tools.
