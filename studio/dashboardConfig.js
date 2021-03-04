export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604099175b06ef9b5238f1e5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pae1yjmj',
                  apiId: '69f378c7-79a9-46fd-a822-93f98b0dd634'
                },
                {
                  buildHookId: '604099178da47d9d3c751051',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6y5jtcva',
                  apiId: 'c5d7dbbc-8256-455d-9d5f-99383a8611fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adrozdenko/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6y5jtcva.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
