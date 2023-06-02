import React, { Component } from 'react';
import style from './LearnLayout.module.css';
import { Link } from 'react-router-dom';

export default class LearnLayout extends Component {
  updateButton(e, buttonId) {
    let user = JSON.parse(localStorage.getItem('user'));

    let newObj = this.props.oldState;
    console.log(newObj);
    if (newObj[buttonId].haveLearned === true) {
      newObj[buttonId].haveLearned = false;
    } else {
      newObj[buttonId].haveLearned = true;
    }

    console.log(newObj);

    this.props.changeLearn({ ...newObj });

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
          <Link className={style.link} to={compProduct}>
            Products
          </Link>
          {this.props.learn ? (
            <div>
              {this.props.learn.haveLearned ? (
                <button
                  className={`${style.but} ${
                    this.props.learn.haveLearned === true
                      ? style.green
                      : style.red
                  }`}
                  onClick={e => this.updateButton(e, imageName)}
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
                  onClick={e => this.updateButton(e, imageName)}
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
