# React Hooks

* React Hooks in Action book code - <https://github.com/jrlarsen/react-hooks-in-action>

## Daily commitment?

* Write code at least one example

## commands used

* cleaning up default CRA generated files

```bash
npx create-react-app react-hooks-in-action

rm -f public/favicon.ico
rm -f public/*.png
rm -f public/manifest.json
rm -f public/*.txt
rm -f src/*est*.js
rm -f src/index.css
rm -f src/*Webvitals*
rm -f src/logo.svg
```

* packages to be installed

```bash
npm i react-router-dom
npm i react-icons
```

## Todo later

* manifest.json - provides metadata used when your web app is installed on a
user's mobile device or desktop. See <https://developers.google.com/web/fundamentals/web-app-manifest/>

* **PUBLIC_URL** - how to configure and use it?

```html
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
```

* 