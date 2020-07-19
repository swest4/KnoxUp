import React from 'react';
import Page from '../../components/shared/page';
import Hero from '../../components/hero';
import Content from '../../components/content';
import BlurbsThree from '../../components/blurbsThree';
import ButtonLink from '../../components/shared/buttonLink';
import ExploreIcon from '../../svgs/explore';
import TimelineIcon from '../../svgs/timeline';
import ListIcon from '../../svgs/list';

export default () => (
  <Page>
    <Hero />

    <Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Content>

    <BlurbsThree
      columnOne={
        <>
          <ExploreIcon />
          <p>
            Use our interactive map to view all projects the City of Knoxville
            and Knox County have invested in.
          </p>
          <ButtonLink to="/projects/map/">Get Started</ButtonLink>
        </>
      }
      columnTwo={
        <>
          <TimelineIcon />
          <p>
            Use our interactive timeline to view all projects the City of
            Knoxville and Knox County have invested in.
          </p>
          <ButtonLink to="/projects/timeline/">Get Started</ButtonLink>
        </>
      }
      columnThree={
        <>
          <ListIcon />
          <p>
            Use our interactive list to view all projects the City of Knoxville
            and Knox County have invested in.
          </p>
          <ButtonLink to="/projects/list/">Get Started</ButtonLink>
        </>
      }
    />
  </Page>
);
