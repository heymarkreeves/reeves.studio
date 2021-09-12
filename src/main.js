// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/css/styles.scss";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "keywords",
    content:
      "web design, web development, UX design, ecommerce, Craft CMS, Vue.js, WordPress, marketing automation, content management",
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
    content: "https://reeves.studio/ui/img/[FILL IN]",
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
    content: "https://reeves.studio/ui/img/[FILL IN]",
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
