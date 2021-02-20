export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60311bba02ba899e832f2110',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oq2p3ba5',
                  apiId: '50b70f87-4004-4a06-ac49-b98bd2f5e7a6'
                },
                {
                  buildHookId: '60311bba96063b8743b7d791',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3d5dq1f2',
                  apiId: 'c619b41c-17c4-4c04-9843-25ae5a2a641a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felipeospina21/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3d5dq1f2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
