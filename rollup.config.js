import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
// library that helps you import in svelte with
// absolute paths, instead of
// import Component  from "../../../../components/Component.svelte";
// we will be able to say
// import Component from "components/Component.svelte";
import alias from "@rollup/plugin-alias";
import fs from "fs";

const production = !process.env.ROLLUP_WATCH;

// configure aliases for absolute imports
const aliases = alias({
  resolve: [".svelte", ".js"], //optional, by default this will just look for .js files or folders
  entries: [
    { find: "components", replacement: "src/components" },
    { find: "views", replacement: "src/views" },
    { find: "assets", replacement: "src/assets" },
  ],
});

const indexTemplate = `<!--

=========================================================
=========================================================

* Notus Svelte - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-svelte
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-svelte/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Anti-flicker snippet (recommended)  -->
    <style>.async-hide { opacity: 0 !important} </style>
    <script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
    h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
    (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
    })(window,document.documentElement,'async-hide','dataLayer',4000,
    {'GTM-K9BGS8K':true});</script>

    <!-- Analytics-Optimize Snippet -->
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});
    ga('set', 'anonymizeIp', true);
    ga('require', 'GTM-K9BGS8K');
    ga('require', 'displayfeatures');
    ga('require', 'linker');
    ga('linker:autoLink', ["2checkout.com","avangate.com"]);
    </script>
    <!-- end Analytics-Optimize Snippet -->

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKDMSK6');</script>
    <!-- End Google Tag Manager -->
    <!-- Extra details for Live View on GitHub Pages -->
    <!-- Canonical SEO -->
    <link
      rel="canonical"
      href="https://www.creative-tim.com/product/notus-svelte"
    />

    <!--  Social tags      -->
    <meta
      name="keywords"
      content="free template, free kit, free dashboard, free webapp, free web app, freebie, free, kit, dashboard, webapp, we bapp, starter kit, starter dashboard, starter admin, starter webapp, starter web app, tailwind, tailwindcss, html kit, svelte kit, html dashboard, svelte dashboard, html webapp, svelte webapp html web app, svelte web app, notus, notus webapp, notus svelte, notus javascript, notus kit, notus dashboard, notus admin"
    />
    <meta
      name="description"
      content="Start your development with a Free Tailwind CSS and Svelte UI Kit and Admin. Let Notus Svelte amaze you with its cool features and build tools and get your project to a whole new level."
    />

    <!-- Schema.org markup for Google+ -->
    <meta itemprop="name" content="Notus Svelte by Creative Tim" />
    <meta
      itemprop="description"
      content="Start your development with a Free Tailwind CSS and Svelte UI Kit and Admin. Let Notus Svelte amaze you with its cool features and build tools and get your project to a whole new level."
    />

    <meta itemprop="image" content="https://s3.amazonaws.com/creativetim_bucket/products/395/original/opt_notus_svelte_thumbnail.jpg" />

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="product" />
    <meta name="twitter:site" content="@creativetim" />
    <meta
      name="twitter:title"
      content="Notus Svelte by Creative Tim"
    />

    <meta
      name="twitter:description"
      content="Start your development with a Free Tailwind CSS and Svelte UI Kit and Admin. Let Notus Svelte amaze you with its cool features and build tools and get your project to a whole new level."
    />
    <meta name="twitter:creator" content="@creativetim" />
    <meta name="twitter:image" content="https://s3.amazonaws.com/creativetim_bucket/products/395/original/opt_notus_svelte_thumbnail.jpg" />

    <!-- Open Graph data -->
    <meta property="fb:app_id" content="655968634437471" />
    <meta property="og:title" content="Notus Svelte by Creative Tim" />
    <meta property="og:type" content="article" />
    <meta
      property="og:url"
      content="http://demos.creative-tim.com/notus-svelte/#/"
    />
    <meta property="og:image" content="https://s3.amazonaws.com/creativetim_bucket/products/395/original/opt_notus_svelte_thumbnail.jpg" />
    <meta
      property="og:description"
      content="Start your development with a Free Tailwind CSS and Svelte UI Kit and Admin. Let Notus Svelte amaze you with its cool features and build tools and get your project to a whole new level."
    />
    <meta property="og:site_name" content="Creative Tim" />

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
    <title>Notus Svelte</title>

    <script>
      if (process === undefined) {
        var process = { env: {<<process-env-status>>} };
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script defer src="<<live-preview-link>>/build/bundle.js"></script>
  </head>

  <body class="text-blueGray-700 antialiased">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <noscript>
      <strong
        >We're sorry but notus-svelte doesn't work properly without
        JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
  </body>
</html>
`

if (production) {
  fs.writeFileSync("./public/index.html",indexTemplate.replace("<<process-env-status>>","PRODUCTION: true").replace(/<<live-preview-link>>/g,"/notus-svelte"));
  fs.writeFileSync("./public/200.html",indexTemplate.replace("<<process-env-status>>","PRODUCTION: true").replace(/<<live-preview-link>>/g,"/notus-svelte"));
  fs.writeFileSync("./public/404.html",indexTemplate.replace("<<process-env-status>>","PRODUCTION: true").replace(/<<live-preview-link>>/g,"/notus-svelte"));
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
