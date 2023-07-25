import React, { Component } from 'react';
import style from './LearnLayout.module.css';
import { Link } from 'react-router-dom';

/**
 * Description - This class organize the products links
 */
export default class LearnLayout extends Component {
  /**
   * Description - This function update the learned button
   * @param {*} buttonId - selected product
   */
  updateButton(buttonId) {
    let user = JSON.parse(localStorage.getItem('user'));
    let productsArray = this.props.oldState;
    // console.log(productsArray);
    if (productsArray[buttonId].haveLearned === true) {
      productsArray[buttonId].haveLearned = false;
    } else {
      productsArray[buttonId].haveLearned = true;
    }
    // console.log(productsArray);
    this.props.changeLearn({ ...productsArray });
    fetch('http://localhost:5000/compLearned', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        productsArray: productsArray,
        userId: user._id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    //console.log(this.props.learn)
    const image = this.props.img;
    const imageName = this.props.imgName;
    const compName = this.props.name;
    const compInfo = this.props.compInfo;
    const compProduct = this.props.compProduct;
    return (
      <div className={style.box}>
        <img
          src={image}
          alt={imageName}
          width='227'
          height='180'
          className={style.img}
        />
        <div
          className={`${style.text} ${
            this.props.learn && this.props.learn.haveLearned === true
              ? style.textWithotOpacity
              : ''
          }`}
        >
          <div>
            <b>{compName}</b>
          </div>
          <Link className={style.link} to={compInfo}>
            Information
          </Link>
          {this.props.imgName !== 'dvd' &&
            this.props.imgName !== 'cables' &&
            this.props.imgName !== 'hd' && (
              <Link className={style.link} to={compProduct}>
                Products
              </Link>
            )}
          {this.props.learn ? (
            <div>
              {this.props.learn.haveLearned ? (
                <button
                  className={`${style.but} ${
                    this.props.learn.haveLearned === true
                      ? style.green
                      : style.red
                  }`}
                  onClick={() => this.updateButton(imageName)}
                >
                  Learned
                </button>
              ) : (
                <button
                  className={`${style.but} ${
                    this.props.learn.haveLearned === true
                      ? style.green
                      : style.red
                  }`}
                  onClick={() => this.updateButton(imageName)}
                >
                  Not learned
                </button>
              )}
              <p className={style.pComment}>{this.props.learn.comment}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
