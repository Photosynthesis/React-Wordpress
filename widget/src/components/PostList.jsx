import React from 'react';
import ReactDOM from 'react-dom';

import WPPost from './WPPost';

class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.state = { error: null, posts: null, isLoaded: false };
  }

  fetchPosts(filters){
    var api_url = window.wpReactSettings.apiUrl;

    console.log("Fetching posts from "+api_url);

    this.setState({isLoaded : false});

    fetch(api_url+'?'+filters)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result:");
          console.log(result);
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.fetchPosts(null);
  }

  render() {

    const { error, isLoaded, posts } = this.state;

    const log = (type) => console.log.bind(console, type);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="postList">
        <div className="post-count">{posts.length} results found</div>
        {posts.map((post) =>  <WPPost postData={post} handleTagClick={this.handleTagClick} />)}
        </div>
      );
    }
  }
}

export default PostList;
