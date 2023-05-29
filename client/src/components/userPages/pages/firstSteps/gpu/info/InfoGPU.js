import React from 'react';
import ComponentLearnLayout from '../../../../layouts/componentLearnLayout/ComponentLearnLayout';
import Header from '../../../../../pageSettings/header/Header';

import { Link } from 'react-router-dom';

function infoGPU() {
  return (
    <ComponentLearnLayout name='gpu'>
      <Header h1Heading='GPU Information' />
      <article>
        <p>
          A graphics processing unit or GPU is also known as a graphics card.
          It’s an electronics circuit that accelerates the processing required
          for creating and rendering images, animations and video.
        </p>
        <h2>Bus</h2>
        <Link to='https://www.rambus.com/blogs/pci-express-4/' target='blank'>
          Bus Information
        </Link>

        <h2>GPU memory</h2>
        <p>
          GDDR5 memory had a peak data rate of 8GB/s, GDDR5X peaked at 12GB/s,
          and GDDR6 delivers a peak of 16GB/s.
        </p>
        <p>
          If you want to play on 1440p displays and widescreen panels, then you
          need a GPU with 6GB or 8GB of memory – 4GB just won’t cut it. If
          you’re interested in 4K gaming, you need at least 8GB of graphics
          memory. That amount is included on most of AMD and Nvidia’s high-end
          GPUs.
        </p>
        <h2>GPU clock speed</h2>
        <p>
          Also known as engine clock, GPU clock speed indicates how fast the
          cores of a graphics processing unit (GPU) are.
        </p>
        <p>
          The function of these cores is to render graphics therefore, the
          higher the GPU clock speed, the faster the processing
        </p>
        <p>
          The engine clock is measured in megahertz (MHz), with one MHz being
          equal to one million hertz. As is the case with total clock speed for
          a CPU’s computing tasks, the GPU clock speed translates into how many
          processing cycles per second can be executed by the graphics
          processing unit.
        </p>
        <p>
          The optimal GPU clock speed will vary depending on the specific use
          case. For gaming, a clock speed of around 1,500-1,800 MHz is generally
          considered good, while for tasks such as video rendering and 3D
          modelling, a clock speed of 2,000-2,500 MHz may be more appropriate.
        </p>
        <h2>CUDA Cores / Stream Processors</h2>
        <p>
          CUDA, which stands for Compute Unified Device Architecture, Cores are
          the Nvidia GPU equivalent of CPU cores that have been designed to take
          on multiple calculations at the same time, which is significant when
          you’re playing a graphically demanding game.
        </p>
        <p>
          One CUDA Core is very similar to a CPU Core. Generally, CUDA Cores are
          not as developed, though they are implemented in much greater numbers,
          with your standard gaming CPU coming with up to 16 cores, while CUDA
          Cores can easily get into the hundreds.
        </p>
        <p>
          A "CUDA Core" is nVidia's equivalent to AMD's "Stream Processors."
        </p>
        <p>
          both CUDA and Stream Processors achieve the same thing, and there are
          no huge benefits to either technology when it comes to performance or
          graphics quality.{' '}
        </p>
        <p></p>
      </article>
    </ComponentLearnLayout>
  );
}

export default infoGPU;
