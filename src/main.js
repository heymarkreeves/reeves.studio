// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/css/styles.scss";
import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // this does no good because they're hashed
  // <link rel="preload" href="/assets/Pacifico-Bold.woff2" as="font" type="font/woff2" crossorigin>

  // head.script.push({
  //   src: "https://plausible.io/js/plausible.js",
  //   defer: true,
  //   "data-domain": "reeves.studio",
  // });

  head.meta.push({
    name: "keywords",
    content:
      "web design, web development, UX design, ecommerce, Craft CMS, Vue.js, Vermont, VT, WordPress, marketing automation, content management",
  });
  head.meta.push({
    name: "description",
    content:
      "Mark Reeves provides web development and UX design services for small businesses & product, sales, marketing, and editorial teams.",
  });

  head.meta.push({
    name: "og:site_name",
    content: "Reeves Studio",
  });
  head.meta.push({
    name: "og:type",
    content: "website",
  });
  // Define per page
  // head.meta.push({
  //   name: "og:url",
  //   content: "https://reeves.studio",
  // });
  // Define per page
  // <meta property="og:title" content="" />
  head.meta.push({
    name: "og:description",
    content:
      "Mark Reeves provides web development and UX design services for small businesses & product, sales, marketing, and editorial teams.",
  });
  head.meta.push({
    name: "og:image",
    content: "https://reeves.studio/ui/img/card.png",
  });

  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
  });
  head.meta.push({
    name: "twitter:site",
    content: "@heymarkreeves",
  });
  head.meta.push({
    name: "twitter:creator",
    content: "@heymarkreeves",
  });
  // Define per page
  // head.meta.push({
  //   name: "twitter:url",
  //   content: "https://reeves.studio",
  // });
  // Define per page
  // <meta property="twitter:title" content="" />
  head.meta.push({
    name: "twitter:description",
    content:
      "Mark Reeves provides web development and UX design services for small businesses & product, sales, marketing, and editorial teams.",
  });
  head.meta.push({
    name: "twitter:image",
    content: "https://reeves.studio/ui/img/card.png",
  });

  // Define per page
  // head.meta.push({
  //   name: "dcterms.title",
  //   content: "Reeves Studio",
  // });
  head.meta.push({
    name: "dcterms.description",
    content:
      "Mark Reeves provides web development and UX design services for small businesses & product, sales, marketing, and editorial teams.",
  });
  head.meta.push({
    name: "dcterms.type",
    content: "Text",
  });
  head.meta.push({
    name: "dcterms.format",
    content: "text/html",
  });
  // Define per page
  // <meta name="dcterms.identifier" content="https://wintergreendigital.com/" />
}
