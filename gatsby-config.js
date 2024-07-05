/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: 'paulettegarda',
        siteUrl: 'https://www.yourdomain.tld'
    },
    plugins: [
        'gatsby-plugin-sitemap', 
        'gatsby-plugin-typescript', 
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                'icon': 'src/images/icon.png'
            }
        },
        {
            resolve: 'gatsby-omni-font-loader',
            options: {
                enableListener: true,
                preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
                web: [
                    {
                        name: 'Playwrite NZ',
                        file: 'https://fonts.googleapis.com/css2?family=Playwrite+NZ:wght@100..400&display=swap'
                    }, 
                    {
                        name: 'Reddit Sans',
                        file: 'https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap'
                    }
                ]
            }
        }
    ]
}