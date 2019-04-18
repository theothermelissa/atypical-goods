import React, { Component } from 'react';
import marked from 'marked/marked.min.js';
// import Moment from 'react-moment/dist/index.d.ts';
import projects from './projects';

marked.setOptions({
  breaks: true,
});

class PostText extends React.Component {
  renderMarkdown() {
    return {__html: marked(this.props.toConvert)}
  }
  render() {
    // console.log("Converted: ", marked(this.props.toConvert));
    return (
      <div className="text" dangerouslySetInnerHTML={this.renderMarkdown()}></div> 
    )
  }
};

const PostDate = (props) => {
  console.log("Props passed to PostDate: ", props);
  return (
    // <Moment>{props.date}</Moment>
    <div className="date">{props.date}</div>
  )
};


const Post = (props) => {
  console.log("Props passed to Post: ", props)
  const { image, date, markdown } = props;
  // console.log("Markdown to convert: ", markdown);
    return (
      <div className="post">
        { image && <img className="image" src={image.src} alt={image.alt} /> }
        { markdown && <PostText toConvert={markdown} /> }
        <PostDate date={date} />
      </div>
    )
};

const Project = ({projectName, projectTitle}) => {
  return (
    <div className="project">
      <div className="title">
        <h2>{projectTitle}</h2>
      </div>
      {projectName.map((post) => (
        <Post className="post" {...post} />
    ))}
    </div>
  )
};

class BodyContent extends Component {
  render() {
    return (
      <div className="grid">
        <Project projectTitle="Test" projectName={projects.Test} />
        <Project projectTitle="Buckle Cover" projectName={projects.BuckleCover} />
        <Project projectTitle="Backseat Barrier" projectName={projects.BackseatBarrier} />
      </div>
    );
  }
};

export default BodyContent;
