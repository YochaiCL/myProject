import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css'

/**
 * Description - This Function display the cpu cooler information
 * @returns - cpu cooler information
 */
function InfoCPUCOOLER() {
  return (
    <ComponentLearnLayout name='cpuCooler'>
      <Header h1Heading='CPU Cooler Information' />
      <article>
        <p>
          Like any powerful piece of PC hardware, the CPU generates heat when in
          operation and needs to be properly cooled to achieve maximum
          performance.
        </p>
        <h2 className={style.h2}>How a CPU Cooler Works</h2>
        <p>
          Both air and liquid CPU coolers operate on a similar principle, and
          both do essentially the same thing. absorb heat from the CPU and
          redistribute it away from the hardware. The heat is then transferred
          to the baseplate of the CPU cooler. That heat is then distributed,
          either by liquid or via heat pipe, to a fan, where it is blown away
          from the cooler and eventually away from the PC.
        </p>
        <h2 className={style.h2}>Cooling with Air</h2>
        <p>
          The effectiveness of an air cooler can vary, depending on factors such
          as the materials used in construction (copper is more conductive than
          aluminum, for example, though aluminum is cheaper) and the size and
          quantity of fans attached to the CPU heatsink. This explains the
          variation in the size and design of air-based CPU coolers. Larger air
          coolers usually dissipate heat better, but there isn’t always room for
          a bulky cooling solution, especially in a small form factor PC.
        </p>
        <h2 className={style.h2}>Cooling with Liquid</h2>
        <p>
          The coolant absorbs heat from the baseplate as it moves through the
          waterblock. It then continues to move through the system and upward
          through one of two tubes to a radiator. The radiator exposes the
          liquid to air, which helps it cool, and fans attached to the radiator
          then move the heat away from the cooler. The coolant then re-enters
          the waterblock, and the cycle begins again.
        </p>
      </article>
    </ComponentLearnLayout>
  );
}

export default InfoCPUCOOLER;
