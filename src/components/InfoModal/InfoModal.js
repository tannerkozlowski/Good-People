import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import history from 'browserHistory';
import './style.scss';

class InfoModal extends Component {
  constructor() {
    super();

    this.state = {
      accessCode: ''
    };
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  onClickOK = () => {
    const { accessCode } = this.state;
    if (accessCode === '123') {
      history.push('/video');
    }
    this.props.onClick();
  };

  handleKeyPress = target => {
    if (target.charCode === 13) {
      this.onClickOK();
    }
  };

  onClickCancel = () => {
    this.props.onClick();
  };

  onChangeAccessCode = evt => {
    this.setState({ accessCode: evt.target.value });
  };

  render() {
    const { accessCode } = this.state;
    const { show } = this.props;
    return (
      <Modal show={show} onHide={this.onClick} dialogClassName="info-modal">
        <Modal.Header>
          <Modal.Body>
            <div className="info-modal__content">
              <input
                type="text"
                ref={input => {
                  this.nameInput = input;
                }}
                className="info-modal__input"
                value={accessCode}
                placeholder="Access Code"
                onChange={this.onChangeAccessCode}
                onKeyPress={this.handleKeyPress}
              />
              {/*<div className="info-modal__button">
                <Button variant="success" onClick={this.onClickCancel}>
                  Cancel
                </Button>
                <Button variant="success" onClick={this.onClickOK}>
                  Ok
                </Button>
              </div>*/}
            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
}

InfoModal.propTypes = {
  show: PropTypes.bool
};

InfoModal.defaultProps = {
  show: false
};

export default InfoModal;
