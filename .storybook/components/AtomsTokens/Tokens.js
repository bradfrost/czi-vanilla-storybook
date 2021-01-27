import React, { Component } from 'react';
import { Section } from '../../../src';
import { Heading } from '../../../src';
import { Colors } from './Colors';
import { BorderWidths } from './BorderWidths';
import { BorderRadius } from './BorderRadius';
import { Sizes } from './Sizes';
import { Shadows } from './Shadows';
import { AnimationDuration } from './AnimationDuration';
import { AnimationTimingFunction } from './AnimationTimingFunction';
import tokens from '../../../src/design-tokens/tokens.yml';

export class Tokens extends Component {
  render() {
    return (
      <div style={{ padding: '1rem 2rem' }}>
        <Section title="Brand Colors" align="center">
          <Colors listItems={filterTokens(`color-brand`)} />
        </Section>

        <Section title="Neutral Colors" align="center">
          <Colors listItems={filterTokens(`color-neutral`)} />
        </Section>

        <Section title="Utility Colors" align="center">
          <Colors listItems={filterTokens(`color-utility`)} />
        </Section>

        <Section title="Size" align="center">
          <Sizes listItems={filterTokens(`size`)} />
        </Section>

        <Section title="Borders" align="center">
          <Heading tagName="h3">Border widths</Heading>
          <BorderWidths listItems={filterTokens(`border-width`)} />
          <Heading className="cn-u-margin-top-large" tagName="h3">
            Border radii
          </Heading>
          <BorderRadius listItems={filterTokens(`border-radius`)} />
        </Section>

        <Section title="Shadows" align="center">
          <Shadows listItems={filterTokens(`box-shadow`)} />
        </Section>

        <Section title="Animation" align="center">
          <Heading tagName="h3">Animation durations</Heading>
          <AnimationDuration listItems={filterTokens(`anim-fade`)} />
          <Heading className="cn-u-margin-top-large" tagName="h3">
            Animation timing functions
          </Heading>
          <AnimationTimingFunction listItems={filterTokens(`anim-ease`)} />
        </Section>
      </div>
    );
  }
}

function filterTokens(prefix) {
  return Object.entries(tokens.props)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, { value, comment }]) => ({
      name: `$${name}`,
      value,
      comment
    }));
}
