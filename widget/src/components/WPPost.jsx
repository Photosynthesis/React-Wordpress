import React from 'react';
import ReactDOM from 'react-dom';

class WPPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var unixDate = new Date(Date.parse(this.props.postData.date));
    return(
      <div>
        <h2 className="postTitle">
        <a href={this.props.postData.link}>
        {this.props.postData.title.rendered}
        </a>
        </h2>
        <span className="postDate">{unixDate.toString()}</span>
        <p className="postExerpt">
        {this.props.postData.excerpt.rendered}
        </p>

      </div>
    );
  }
}
export default WPPost;
