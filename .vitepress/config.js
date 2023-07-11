import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portal Layanan PNS Kota Magelang",
  description: "Website Portal Layanan PNS Kota Magelang",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/images/logo-magelang.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Tutorial',
        items: [
          {
            // Title for the section.
            items: [
              { text: 'Roundcube webmail', link: '/roundcube/' },
              { text: 'SOGo', link: '/sogo/' },
              { text: 'IMAP (Smartphone)', link: '/imap/' },
              { text: 'K-9 Mail (Smartphone)', link: '/k-9/' }
            ]
          }
        ]
      },
      { text: 'Manual Book', link: '/manual-book' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
