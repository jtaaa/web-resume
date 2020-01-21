import React from 'react';
import Box from 'components/Box';
import ExternalLink from 'components/ExternalLink';
import Body from 'components/text/Body';
import Highlight from 'components/text/Highlight';
import Heading from '../Heading';

const BFAS = () => {
  return (
    <Box>
      <Heading
        title="Best Friends Animal Society App"
        techStack="Flask, OpenCV, Tensorflow, scikit-image, Docker, React-Native"
        year="2018"
        href="https://github.com/uwblueprint/bestfriends-backend"
      />
      <Body>
        Developed to ensure quality of uploaded dog images as image quality
        heavily influences adoption rate at{' '}
        <ExternalLink href="https://bestfriends.org/">BFAS</ExternalLink>.
      </Body>
      <Body>
        <Highlight>Detected and classified</Highlight> dogs and{' '}
        <Highlight>calculated their bounding boxes</Highlight> to ensure they
        appear in centre of frame.
      </Body>
      <Body>
        Utilized scikit-image and OpenCV to{' '}
        <Highlight>detect and filter dim and blurry</Highlight> images
        respectively.
      </Body>
    </Box>
  );
};

export default BFAS;
