import UserInfo from "../userinfo/UserInfo";
import React from "react";

class Comment extends React.Component {
  formatDate(date) {
    return date.toLocaleDateString();
  }

  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.comment.author} />
        <div className="Comment-text">{this.props.comment.text}</div>
        <div className="Comment-date">
          {this.formatDate(this.props.comment.date)}
        </div>
      </div>
    );
  }
}

export default Comment;
