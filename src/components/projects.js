// import react, { Component } from 'react';
import shockedpikachu from '../images/shockedpikachu.jpg';
import BackseatBarrier from '../images/BackseatBarrier.jpg'
import RecycledButterfly from '../images/RecycledButterfly.jpg'

const projects = [
  {
    title: "Test",
    posts: [
    {
    image: {
      src: RecycledButterfly,
      alt: "Recycled Butterfly"
      },
    date: "2019-04-19",
    markdown: 
`* testing
* tessting something else
*and another thing`,
    }
  ]
  },
  {
  title: "Buckle Cover",
  posts: [
    {
    date: "2019-03-31",
    markdown: 
`My son keeps taking off his seatbelt. I found some buckle covers from Amazon, but didn't want to wait for shipping, and I wasn't _sure_ they would work (... first world problems, right?). So I made one to test.`,
    },
  ]
  },
  {
  title: "Backseat Barrier",
  posts: [ 
    {
    date: "2019-04-15",
    markdown: 
`Making a backseat barrier wall -- stay tuned.`,
    },
    {
    image: {
      src: BackseatBarrier,
      alt: "Photo of backseat barrier project"
    },
    date: "2019-04-16",
    markdown: 
`* rubber foam
* cling wrap
* fiberglass resin & hardener
* dropcloth
* scissors/knife
* small paint roller frame
* disposable cups, foam rollers`,
    },
    {
    date: "2019-04-17",
    markdown: 
`I'd like to make some cupholders and book sleeves for this soon.`,
    }]
  },
];

export default projects;