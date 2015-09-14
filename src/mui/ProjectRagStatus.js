import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';

class ProjectRagStatus extends Component {
  render() {
  	const { rag, style, size } = this.props;
    let backgroundColor;
    switch(rag) {
      case 'green':
        backgroundColor = '#57ad68';
        break;
      case 'red':
        backgroundColor = '#f44336';
        break;
      case 'amber':
        backgroundColor = '#ffc107';
        break;
      default:
        backgroundColor = '#aaaaaa';
    }

    let avatarSize;
    switch(size) {
      case 'medium':
        avatarSize = 32;
        break;
      case 'list':
        avatarSize = 22;
        break;
      default:
        avatarSize = 28;
    }

    return (
      <Avatar size={avatarSize} style={style} backgroundColor={backgroundColor} />
    );
  }
}

export default ProjectRagStatus;