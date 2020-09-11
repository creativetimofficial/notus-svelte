import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import fs from "fs";

const production = !process.env.ROLLUP_WATCH;

const aliases = alias({
  resolve: [".svelte", ".js"], //optional, by default this will just look for .js files or folders
  entries: [
    { find: "components", replacement: "src/components" },
    { find: "views", replacement: "src/views" },
    { find: "assets", replacement: "src/assets" },
  ],
});

const indexTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <link rel="shortcut icon" href="<<live-preview-link>>/favicon.ico" />
    <link rel="apple-touch-icon" sizes="76x76" href="<<live-preview-link>>/apple-icon.png" />
    <link rel="stylesheet" href="<<live-preview-link>>/build/bundle.css" />
    <link
      rel="stylesheet"
      href="<<live-preview-link>>/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
    <link rel="stylesheet" href="<<live-preview-link>>/assets/styles/tailwind.css" />
    <title>Tailwind WebApp Svelte</title>

    <script>
      if (process === undefined) {
        var process = { env: {<<process-env-status>>} };
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script defer src="<<live-preview-link>>/build/bundle.js"></script>
  </head>

  <body class="text-gray-800 antialiased">
    <noscript>
      <strong
        >We're sorry but tailwind-webapp-svelte doesn't work properly without
        JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
  </body>
</html>
`

if (production) {
  fs.writeFileSync("./public/index.html",indexTemplate.replace("<<process-env-status>>","PRODUCTION: true").replace(/<<live-preview-link>>/g,"/tailwind-webapp-svelte"));
  fs.writeFileSync("./public/200.html",indexTemplate.replace("<<process-env-status>>","PRODUCTION: true").replace(/<<live-preview-link>>/g,"/tailwind-webapp-svelte"));
  fs.writeFileSync("./public/404.html",indexTemplate.replace("<<process-env-status>>","PRODUCTION: true").replace(/<<live-preview-link>>/g,"/tailwind-webapp-svelte"));
} else {
  fs.writeFileSync("./public/index.html",indexTemplate.replace("<<process-env-status>>","").replace(/<<live-preview-link>>/g,""));
  fs.writeFileSync("./public/200.html",indexTemplate.replace("<<process-env-status>>","").replace(/<<live-preview-link>>/g,""));
  fs.writeFileSync("./public/404.html",indexTemplate.replace("<<process-env-status>>","").replace(/<<live-preview-link>>/g,""));
}

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write("bundle.css");
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),

    // for absolut imports
    // i.e., instead of
    // import Component  from "../../../../components/Component.svelte";
    // we will be able to say
    // import Component from "components/Component.svelte";
    aliases,
  ],
  watch: {
    clearScreen: false,
  },
};
