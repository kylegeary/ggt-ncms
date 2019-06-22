import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import FeaturedPost from "../components/featuredPost"
import Footer from "../components/footer"
import Posts from "../components/posts"

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allMarkdownRemark.edges

		return (
			<>
				<div className="page-wrapper">
					<Header />
					<main className="main">
						<FeaturedPost />
						<Posts />
					</main>
				</div>
				<Footer />
			</>
		)
	}
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
