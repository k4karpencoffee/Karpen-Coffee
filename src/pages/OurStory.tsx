import React from 'react';
import { StoryBackground } from '../components/story/StoryBackground';
import { StoryIntro } from '../components/story/StoryIntro';
import { ThankYouCta } from '../components/story/ThankYouCta';
import { Timeline } from '../components/story/Timeline';
import { VisionMission } from '../components/story/VisionMission';

export function OurStory() {
  return (
    <>
      <StoryIntro />
      <StoryBackground />
      <Timeline />
      <VisionMission />
      <ThankYouCta />
    </>);

}