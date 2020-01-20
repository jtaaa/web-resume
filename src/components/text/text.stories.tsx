import React from 'react';
import Canon from './Canon';
import Trafalgar from './Trafalgar';
import DoublePica from './DoublePica';
import GreatPrimer from './GreatPrimer';
import Body from './Body';

export default { title: 'text|All' };

const MOCK_TEXT =
  "Run don't walk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula purus in lacus vulputate aliquam.";

export const AllStyles = () => {
  return (
    <>
      <Canon>{MOCK_TEXT}</Canon>
      <Trafalgar>{MOCK_TEXT}</Trafalgar>
      <DoublePica>{MOCK_TEXT}</DoublePica>
      <GreatPrimer>{MOCK_TEXT}</GreatPrimer>
      <Body>{MOCK_TEXT}</Body>
    </>
  );
};
