import React from 'react';
import {ajax} from 'jquery';
import IndividualComment from '../components/comment/IndividualComment';

const CommentContainer = React.createClass({
  getInitialState() {
    return {
      commentList: []
    }
  },
  componentDidMount() {
    ajax({
      url: '/api/comments/post/' + this.props.id,
      type: 'GET'
    })
    .done((response) => {
      this.setState({commentList: response})
    })
  },
  render() {
    return (
      <div>
        <ul>
          {
            this.state.commentList.map((comment, idx) => {
              return <li key={idx}><IndividualComment username={comment.user.username} comment={comment.comment} /></li>
            })
          }
        </ul>
      </div>
    )
  }
})

export default CommentContainer