import React from "react"
import { Link } from "gatsby"

class FeaturedPost extends React.Component {
  render() {
    return (
      <>
        <div className="featured-post">
          <div className="featured-post__overlay"></div>
          <div className="featured-post__content">
            <div className="featured-post__text-wrapper">
              <div className="featured-post__text">
                <h1 className="featured-post__text-title">
                  Title of a longer featured blog post
                </h1>
                <p className="featured-post__text-body">
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what's most interesting
                  in this post's contents.
                </p>
                <a className="featured-post__text-link" href="#">
                  Read &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FeaturedPost
