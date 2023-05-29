import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../pageSettings/header/Header';
import { Link } from 'react-router-dom';

function infoMOTHERBOARD() {
  return (
    <ComponentLearnLayout name='motherboard'>
      <Header h1Heading='Motherboard Information' />
      <article>
        <h2>CPU Socket</h2>
        <Link to='https://en.wikipedia.org/wiki/CPU_socket' target='blank'>
          CPU Socket
        </Link>

        <h2>Memory slot</h2>
        <p>
          A memory slot, allows RAM to be inserted into the computer. Most
          motherboards have two to four memory slots, which determine the type
          of RAM used with the computer.
        </p>
        <p>
          When a motherboard has different colored memory slots, it indicates
          the memory slots are dual-channel, and pairs of memory should be
          installed on the same channel (color).
        </p>
        <h2>Chipsets</h2>
        <h3>For Intel</h3>
        <Link
          to='https://www.intel.com/content/www/us/en/products/details/chipsets/desktop-chipsets/products.html'
          target='blank'
        >
          Chipsets Information
        </Link>
        <h3 id='about'>For AMD</h3>
        <ul>
          <li>
            <Link
              to='https://www.amd.com/en/products/chipsets-am4'
              target='blank'
            >
              Am4 Chipsets Information
            </Link>
          </li>
          <li>
            <Link to='https://www.amd.com/en/chipsets/am5' target='blank'>
              Am5 Chipsets Information
            </Link>
          </li>
        </ul>

        <h2>PCI Express</h2>
        <p>
          PCIe is short for “peripheral component interconnect express” and it’s
          primarily used as a standardized interface for motherboard components
          including graphics, memory, and storage.
        </p>
        <p>
          While different sizes and configurations do exist, most users will
          only encounter four primary size specifications. The size represents
          the number of direct connections provided by either a PCIe slot or
          card.
        </p>
        <ul>
          <li>PCIe x1</li>
          <li>PCIe x4</li>
          <li>PCIe x8</li>
          <li>PCIe x16</li>
        </ul>

        <h2>Form Factor</h2>
        <Link to='/infoCASE'>Click to see</Link>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoMOTHERBOARD;
