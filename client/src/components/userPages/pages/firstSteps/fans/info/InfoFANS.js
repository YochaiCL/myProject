import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../commonComponents/header/Header';
import style from '../../motherboard/info/infoMOTHERBOARD.module.css';

/**
 * Description - This Function display the fans information
 * @returns - fans information
 */
function infoFANS() {
  return (
    <ComponentLearnLayout name='fans'>
      <Header h1Heading='Fans Information' />
      <article>
        <p className={style.p}>
          A fan is a hardware device that keeps the overall computer or a
          computer device cool by circulating air to or from the computer or
          component.
        </p>
        <p>
          The speed of a fan is measured in revolutions per minute or RPM, and
          the higher the RPM rating, the faster the fan spins. However, in many
          cases, the higher the RPM rating, the louder a fan.
        </p>
        <h2 className={style.h2}>Types of fans found in a computer</h2>
        <ul>
          <li>
            Case fan - a fan on the side of a computer case, inside the case. It
            helps circulate air in the computer case and blow hotter air out of
            the case.
          </li>
          <li>
            CPU fan - a fan on top of a computer processor. It helps pull and
            blow hot air off the processor, helping keep it cooler.
          </li>
          <li>
            Power supply fan - a fan located inside a power supply. The power
            supply fan blows hotter air out of the power supply and out of the
            computer.
          </li>
          <li>
            Video card fan - a fan on a video card. It helps keep more powerful
            video cards from overheating, especially when playing video games,
            editing videos, and other GPU or graphic-intensive tasks.
          </li>
        </ul>

        <h2 className={style.h2}>
          What if a computer has no fans or the fans stop working
        </h2>
        <p>
          Unless designed to work without fans, a computer with no fans or bad
          fans can cause one or more component to overheat. When a component
          overheats, it can cause physical damage. To help prevent damage, most
          of today's hardware automatically turn off or restart to help prevent
          the damage.
        </p>
        <h2 className={style.h2}>How Many Case Fans Do You Need? </h2>
        <p>
          A general rule of thumb for most standard builds is to use three
          cooling fans in your PC. Out of the three, two should be intake fans
          which should ideally be attached to the front of your PC case to pull
          in cool air, with the last one being an exhaust fan which should be
          attached to the back of the PC case to dissipate the hot air out of
          the build. This configuration creates the perfect airflow to keep your
          PC components cool and disperse a huge amount of hot air.
        </p>
        <section className={style.attention}>
          <p>
            Please pay attention, this component is not available for selection
            because this is a custom selected product
          </p>
        </section>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoFANS;
