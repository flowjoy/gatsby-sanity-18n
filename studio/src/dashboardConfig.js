export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8c028a00a2dfa382db0960',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-18-n-studio-aijku5fp',
                  apiId: 'ca5f44c3-ecbf-489b-af91-dea9cbe38f65'
                },
                {
                  buildHookId: '5f8c028a1c1ede9c84b77b02',
                  title: 'Blog Website',
                  name: 'gatsby-sanity-18-n-web',
                  apiId: '1783d650-ba6d-4c3b-8350-5102f292b92b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flowjoy/gatsby-sanity-18n',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-sanity-18-n-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
