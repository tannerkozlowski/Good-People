import React, { Component } from 'react';
import Container from 'components/Container';
import InfoModal from 'components/InfoModal';
import LogoImg from 'images/logo.png';

import './style.scss';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isModal: false
    };
  }

  onClickClient = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    const { isModal } = this.state;
    return (
      <Container className="main-container homepage">
        <div className="homepage-main">
          <img src={LogoImg} className="homepage-image" alt="Good People" />
          <div className="homepage-title">good people</div>
        </div>
        <div className="homepage-footer">
          <a href="mailto:connect@goodpeopleexp.com" className="homepage-footer__contact">
            <span>contact</span>
          </a>
          <span className="homepage-footer__slash">{`//`}</span>
          <span className="homepage-footer__client" onClick={this.onClickClient}>
            client
          </span>
        </div>
        {isModal && <InfoModal show={isModal} onClick={this.onClickClient} />}
      </Container>
    );
  }
}

export default Home;
