import Layout from '../../../../layouts/mainLayout/MainLayout';
import Header from '../../../../../pageSettings/header/Header';
import { Link } from 'react-router-dom';
import Button from '../../../../../pageSettings/button/Button';
import React, { Component } from 'react';

export default class InfoCPU extends Component {
  // Initializing state variables for comment, array, and showResult
  state = {
    comment: '',
    array: [],
    showResult: '',
  };

  componentDidMount() {
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);
    // Sending a POST request to the getData endpoint
    fetch('http://localhost:5000/comp-learned/getData', {
      method: 'POST',
      crossDomain: true,
      headers: {
        // Setting headers for the HTTP request
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Control-Allow-Origin': '*',
      },
      // Sending the userId in the request body
      body: JSON.stringify({
        userId: user._id,
      }),
    })
      // Parsing the response as JSON
      .then(res => res.json())
      // Handling the response data
      .then(data => {
        console.log(data, 'userData');
        // Updating the state with the received data
        this.setState({ array: data[0] });
      });
  }

  updateButton() {
    // Parsing the user data from localStorage
    let user = JSON.parse(localStorage.getItem('user'));

    let newObj = this.state.array;
    // console.log(newObj);
    // Updating the comment in the newObj
    newObj.cpu.comment = this.state.comment;
    // console.log(newObj);

    this.setState({
      // Updating the state to show the success message
      showResult: 'Comment have added',
    });

    // Sending a POST request to the comp-learned endpoint
    fetch('http://localhost:5000/comp-learned', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        newObj: newObj,
        userId: user._id,
      }),
    })
      // Sending the updated newObj in the request body
      .then(res => res.json())
      // Sending the userId in the request body
      .then(data => {
        console.log(data);
      });
  }
  render() {
    return (
      <Layout>
        <Header h1Heading='CPU Information' />
        <article>
          <p>
            A central processing unit (CPU) is the most important processor in a
            given computer. Its electronic circuitry executes instructions of a
            computer program, such as arithmetic, logic, controlling, and
            input/output (I/O) operations. This role contrasts with that of
            external components, such as main memory and I/O circuitry, and
            specialized coprocessors such as graphics processing units
          </p>
          <h2>Core</h2>
          <p>
            A core can work on one task, while another core works a different
            task, so the more cores a CPU has, the more efficient it is.
          </p>
          <h2>Thread</h2>
          <p>
            A thread is a virtual component that handles the tasks of a CPU
            core, to complete them in an effective manner. It is a unit of
            execution on simultaneous programming.
          </p>
          <h3>Single-Threading And Multithreading? </h3>
          <p>
            Single threading means the execution of instructions in one
            sequence, that is, a single command is processed at a time.
          </p>
          <p>
            Multithreading is the ability of the CPU to divide up the work among
            multiple threads instead of giving it to a single core, to enable
            concurrent processing. The multiple threads are processed by the
            different CPU cores in parallel, to speed up performance and save
            time.
          </p>

          <h2>Clock speed</h2>
          <p>
            Clock speed is one of your CPU’s key specifications — but what does
            it really mean? The performance of your CPU — the “brain” of your PC
            — has a major impact on the speed at which programs load and how
            smoothly they run. However, there are a few different ways to
            measure processor performance. Clock speed (also “clock rate” or
            “frequency”) is one of the most significant.es.
          </p>
          <p>
            In general, a higher clock speed means a faster CPU. However, many
            other factors can come into play, as well. Your CPU processes many
            instructions from different programs every second. Some of these
            instructions involve simple arithmetic, while others are more
            complicated. The clock speed measures the number of cycles your CPU
            executes per second, measured in GHz (gigahertz). In this case, a
            “cycle” is the basic unit that measures a CPU’s speed. During each
            cycle, billions of transistors within the processor open and close .
            This is how the CPU executes the calculations contained in the
            instructions it receiv
          </p>

          <h2>Cache memory</h2>
          <p>
            Cache memory is a chip-based computer component that makes
            retrieving data from the computer's memory more efficient. It acts
            as a temporary storage area that the computer's processor can
            retrieve data from easily. This temporary storage area, known as a
            cache, is more readily available to the processor than the
            computer's main memory source.
          </p>

          <h2>Information of Intel processors</h2>
          <ul>
            <li>
              <Link
                to='https://en.wikipedia.org/wiki/List_of_Intel_processors'
                target='blank'
              >
                Cpus Informations
              </Link>
            </li>
            <li>
              <Link
                to='https://www.intel.com/content/www/us/en/processors/processor-numbers.html'
                target='blank'
              >
                Processor Names and Numbers
              </Link>
            </li>
          </ul>

          <h2>Information of Amd processors</h2>
          <ul>
            <li>
              {' '}
              <Link
                to='https://www.amd.com/en/products/specifications/processors'
                target='blank'
              >
                Cpus Informations
              </Link>
            </li>

            <li>
              <Link to='https://artofpc.com/cpu-names/' target='blank'>
                Processor Names and Numbers
              </Link>
            </li>
          </ul>

          <h2>Write yourself a comment about this component</h2>
          <p>Note: This note will be displayed on the "First Steps" page </p>
          <input
            type='text'
            placeholder='please enter comment'
            value={this.state.comment}
            onChange={e => this.setState({ comment: e.target.value })}
          />
          <p>{this.state.showResult}</p>
          <Button
            text='save comment'
            fun={() => {
              this.updateButton();
            }}
          />
        </article>
      </Layout>
    );
  }
}
