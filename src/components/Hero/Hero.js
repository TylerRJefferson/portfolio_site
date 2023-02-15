import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Tyler Jefferson, I am primarily a MERN Stack JavaScript developer. I have a lot of love for coding and strive to learn new languages and technologies whenever the opportunity presents itself!
      </SectionText>
      <a href="mailto:TylerRJefferson00@iCloud.com">
        <Button>Email Me</Button>
      </a>

    </LeftSection>
  </Section>
);

export default Hero;