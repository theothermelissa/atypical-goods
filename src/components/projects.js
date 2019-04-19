// import react, { Component } from 'react';
import shockedpikachu from '../images/shockedpikachu.jpg';


const projects = {
  Test: [
    {
      image: {
        src: shockedpikachu,
        alt: "Shocked Pikachu"
      },
      date: "today",
    markdown: 
`* testing
* tessting something else
*and another thing`,
    }
  ],
  BuckleCover: [
    {
      date: 20190331,
      markdown: 
  `My son keeps taking off his seatbelt. I found some buckle covers from Amazon, but didn't want to wait for shipping, and I wasn't _sure_ they would work (... first world problems, right?). So I made one to test.`,
    }
  ],
  BackseatBarrier: [ 
    {
      date: 20190415,
      markdown: 
`Making a backseat barrier wall -- stay tuned.`,
    },
    {
      image: {
        src: shockedpikachu,
        alt: "Shocked Pikachu"
      },
      date: 20190416,
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
      date: 20190417,
      markdown: 
`I'd like to make some cupholders and book sleeves for this soon.`,
    }
  ],
};

export default projects;