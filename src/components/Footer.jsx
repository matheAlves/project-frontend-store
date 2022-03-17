import React from 'react';

import Gif from '../images/trybee.png';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="titleName">
          <p className="title">
            <strong>
              Project Online Store
            </strong>
          </p>
          <p className="names">
            Aline Bury, Alline Franciely, Charles Chavier,
            Matheus Alves, Natã Abrahão ©
          </p>
        </div>
        <img className="trybe" src={ Gif } alt="trybe" />
      </footer>
    );
  }
}

export default Footer;
