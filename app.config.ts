export default defineAppConfig({
  docus: {
    title: 'Simptel API Docs',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxtstudio',
      github: 'nuxt-themes/docus'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true
    },
    footer: {
      credits: {
        icon: ' ',
        text: 'Powered by Simptel',
        href: 'https://www.simptel.com/'
      },
      iconLinks: [
        {
          href: 'https://www.simptel.com/',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
