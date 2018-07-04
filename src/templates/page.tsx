import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'

const PageTemplate: React.SFC = () => (
  <Page>
    <Container />
  </Page>
)

export default PageTemplate

// export const query = graphql`
//   query PageTemplateQuery($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         description
//         author {
//           name
//           url
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       excerpt
//       frontmatter {
//         title
//       }
//     }
//   }
// `
