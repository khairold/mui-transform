import React, { Component, PropTypes } from 'react';

import ProjectListItemGroup from './ProjectListItemGroup';

class ProjectList extends Component {
  render() {
  	const { image, name, role, rag, bookMarked } = this.props;

    return (
      <div style={styles.container} >
        <ProjectListItemGroup projectListItemsData={projectListItemsData} status={'On Going'} />
        <ProjectListItemGroup projectListItemsData={projectListItemsData} status={'KIV'} />
      </div>

    );
  }
}

const styles = {
  container: {
    fontFamily: 'medium-content-sans-serif-font', 
    maxWidth: 580,
    padding: '0 10px',
    margin: '0 auto',
    display: 'block'
  }
}

let projectListItemsData = [
  {
    title: 'Pangkor',
    rag: 'amber',
    bookMarked: true,
    status: 'On Going',
    excerpt: "Hmm... Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
  },
  {
    title: 'Pangkor',
    rag: 'green',
    bookMarked: false,
    status: 'On Going',
    excerpt: "Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
  },
  {
    title: 'Pangkor',
    rag: 'red',
    bookMarked: false,
    status: 'On Going',
    excerpt: "Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
  },
  {
    title: 'Pangkor',
    rag: 'kiv',
    bookMarked: false,
    status: 'KIV',
    excerpt: "Wish I could come, but I'm out of town this weekend. There's so much more to tell you but I just don't have the time.",
  }
];

export default ProjectList;