import React from "react"
import { Link } from "gatsby"
import PostPreview from "./postPreview"

class Posts extends React.Component {
  render() {
    return (
      <>
        <div className="cards-wrapper">
          <div className="cards">
            <PostPreview />
          </div>
        </div>
      </>
    )
  }
}

export default Posts
