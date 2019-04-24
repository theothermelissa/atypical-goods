import React, { Component } from 'react';
import marked from 'marked/marked.min.js';
// import Moment from 'react-moment/dist/index.d.ts';
import projects from './projects';
import { distanceInWordsToNow, format } from 'date-fns';
import { orderBy } from 'lodash';

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

const PostDate = ({ date }) => {
  // console.log("Props passed to PostDate: ", props);
  console.log("Date: ", JSON.stringify(distanceInWordsToNow(date).split(" ")[0]))
  let dateToDisplay = "";
  if (distanceInWordsToNow(date).split(" ")[0] >= 6) {
    dateToDisplay = format(date, 'MM/DD/YYYY');
  } else {
    dateToDisplay = distanceInWordsToNow(date) + " ago";
  }
  return (
    // <Moment>{props.date}</Moment>
    <div className="date">{dateToDisplay} </div>
  )
};


const Post = ({ post }) => {
  // console.log("Props passed to Post: ", props)
  const { image, date, markdown } = post;
    return (
      <div className="post">
        { image && <img className="image" src={image.src} alt={image.alt} /> }
        { markdown && <PostText toConvert={markdown} /> }
        <PostDate date={date} />
      </div>
    )
};


const Project = ({project}) => {
  // let orderedPosts = _.orderBy("posts", ["date"], ["desc"]);
  // console.log("Sorted Posts: ", orderedPosts)
  console.log("project: ", project);
  return (
    <div className="item project">
      <div className="title">
        <h2>{project.title}</h2>
      </div>
        {project.posts && orderBy(project.posts, ["date"], ["desc"])
        .map((post) => (
          <Post className="post" key={post.markdown} post={post} />
          ))
        }
    </div>
  )
};
                  // _.orderBy(users, ['user', function (o) {
                  //   return o.likes.length;
                  // }], ["asc", "asc"])

                  // _.orderBy(users, ['user', 'age'], ['asc', 'desc']);

const ProjectList = ({projectsToSort}) => {
  return (
    <div className="outergrid">
      <div className="smallProjects">
        { projectsToSort.filter((project) => project.posts.length < 2).map((project) => (
          <Project className="item project" key={project.title} project={project} />
        ))
        }
      </div>
      <div className="largeProjects">
        { projectsToSort.filter((project) => project.posts.length >= 2).map((project) => (
          <Project className="item project" key={project.title} project={project} />
        ))
        }
      </div>
    </div>
  )
}

class BodyContent extends Component {
  render() {
    return (
      // <div className="outergrid">
      //   <div className="smallProjects">
      //     <Project projectTitle="Test" project={projects.Test} />
      //     <Project projectTitle="Buckle Cover" project={projects.BuckleCover} />
      //   </div>
      //   <div className="largeProjects">
      //     <Project projectTitle="Backseat Barrier" project={projects.BackseatBarrier} />
      //   </div>
      // </div>
      <ProjectList projectsToSort={projects} />
    );
  }
};

export default BodyContent;
