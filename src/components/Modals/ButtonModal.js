import React from 'react'
import { Modal, Backdrop, Fade, Button} from '@material-ui/core'
import {Markup} from 'interweave'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './styles.css'


class ButtonModal extends React.Component {
    state = {
        openModal: false
    }

    handleOpenClose = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        return (
            <div>
                <Button
                    className='modal-button'
                    variant='contained'
                    style={{
                      backgroundColor: `${this.props.background}`, 
                      color: `${this.props.color}`,
                      }}
                    onClick={this.handleOpenClose}>
                        View
                    </Button>
                <Modal
                     aria-labelledby="transition-modal-title"
                     aria-describedby="transition-modal-description"
                     className='modal'
                     open={this.state.openModal}
                     onClose={this.handleOpenClose}
                     closeAfterTransition
                     BackdropComponent={Backdrop}
                     BackdropProps={{
                       timeout: 500,
                     }}
                   >
                    <Fade in={this.state.openModal}>
                      <section className='paper'>
                        <PerfectScrollbar>
                          <div className="img-principal" 
                              style={{backgroundImage: `url(${this.props.img})`, backgroundSize: `${this.props.size}`, backgroundPosition: `${this.props.position}`, backgroundRepeat: `${this.props.repeat}` }}>
                          </div>
                          <div className="title-area">
                            <h2 className='title'>{this.props.title}</h2>
                          </div>
                          <div className="info-area">
                            <p className="date">{this.props.date}</p>
                            <p className="local">{this.props.local}</p>
                          </div>
                          <div className='post-content'>
                            <Markup content={this.props.content} />
                          </div>
                        </PerfectScrollbar>
                       </section>
                    </Fade>
                   </Modal>
            </div>
        )
    }
}

export default ButtonModal