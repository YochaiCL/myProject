import React from 'react';
import Layout from '../../../../layouts/mainLayout/MainLayout';
import Header from '../../../../../pageSettings/header/Header';

function infoCASE() {
  return (
    <Layout>
      <Header h1Heading='Case Information' />
      <article>
        <p>
          The computer case serves mainly as a way to physically mount and
          contain all the actual components inside a computer, like the
          motherboard, hard drive, power supply etc.
        </p>
        <p>
          There are several reasons why we use computer cases. One is for
          protection, which is easy to assume because it's the most obvious.
          Dust, animals, toys, liquids, etc. can all damage the internal parts
          of a computer
        </p>
        <h2>How to choose</h2>
        <p>
          Motherboards, computer cases, and power supplies all come in different
          sizes called form factors. All three must be compatible to work
          properly together.
        </p>
        <p>
          Before anything else, decide what size case you need. There are three
          major case sizes: Full tower, mid-tower, and mini-ITX.
        </p>
        <p id='about'>
          Full-tower and mid-tower cases both fit standard ATX motherboards—by
          far the most common motherboard size out there. Both can also fit
          smaller micro-ATX motherboards. Exact sizing varies from case to case,
          but most mid-towers run up to roughly 457 mm high and 203 or so mm
          wide. Mid-tower PCs are probably the most common form factor and have
          enough room to fit systems with a closed-loop CPU cooler, a couple of
          graphics cards, and a lot of storage.
        </p>
        <h2>Water-cooling support</h2>
        <p>
          The rise of sealed all-in-one coolers have made liquid-cooling more
          popular than ever. If you plan to water-cool your PC, pay fine
          attention to the support provided by your case. You probably won’t be
          able to use liquid-cooling whatsoever in most mini-ITX cases, and many
          mid-tower cases only support up to 240mm radiators—and placement of
          that liquid-cooling radiator may be limited to only the top or bottom
          of the case, depending on the case’s dimensions.
        </p>
        <p>
          If you want a beefy 360mm radiator, you’ll often need to step up to a
          full tower case, though unusually large mid-towers can sometimes
          squeeze them in as well. Some pricier cases also have large swatches
          of interior space dedicated to liquid-cooling reservoirs for custom
          loops.
        </p>
      </article>
    </Layout>
  );
}

export default infoCASE;
