import React from "react";
import Page from "../../components/shared/page";
import Hero from "../../components/hero";
import Content from "../../components/content";
import BlurbsThree from "../../components/blurbsThree";
import ButtonLink from "../../components/shared/buttonLink";
import ExploreIcon from "../../svgs/explore";
import TimelineIcon from "../../svgs/timeline";
import ListIcon from "../../svgs/list";

export default () => (
  <Page>
    <Hero />

    <Content>
      <h4>purpose</h4>
      <h5>example text</h5>
      <blockquote>
        In Knoxville and Knox County, the Payment-In-Lieu-Of-Taxes (PILOT)
        program is targeted at the development of property for either jobs
        creating economic development projects or economic-catalyst projects. In
        both cases, the goal is to appropriately incentivize business owners and
        developers to create an economic activity where there was none before.
      </blockquote>
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
