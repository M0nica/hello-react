import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'


import Bio from '../components/Bio'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <Divider />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div>
            <div key={node.fields.slug} style={{
                backgroundColor: 'white',
                padding: '1em',
                boxShadow: 'inset 0 -2px 0px 0px #c9c1d2',
                }}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none', color: '#625968',}} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
              style={{
                color: '#929292',
              }}>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />

            </div>
<br />
</div>

          )
        })}

        <Footer />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
    filter: {frontmatter: {draft: {ne: true } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
