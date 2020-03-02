import React from 'react'
import {Modal, Backdrop, Fade} from '@material-ui/core'
import {Markup} from 'interweave'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './styles.css'


class CardPostModal extends React.Component {
    state = {
        openModal: false
    }

    handleOpenClose = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        return (
            <div>
                <div className='card' onClick={this.handleOpenClose}>
                    <div className='card-header' style={{
                        backgroundImage: `url(${this.props.post.imgUrl})`, backgroundSize: 'contain', backgroundPosition: 'center'
                    }}>
                        <h2>{this.props.post.title}</h2>
                        <p>{this.props.post.date} - {this.props.post.local}</p>
                    </div>
                </div>
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
                              style={{backgroundImage: `url(${this.props.post.imgUrl})`, backgroundSize: `${this.props.post.size}`, backgroundPosition: `${this.props.post.position}`, backgroundRepeat: `${this.props.post.repeat}` }}>
                          </div>
                          <div className="title-area">
                            <h2 className='title'>{this.props.post.title}</h2>
                          </div>
                          <div className="info-area">
                            <p className="date">{this.props.post.date}</p>
                            <p className="local">{this.props.post.local}</p>
                          </div>
                          <div className='post-content'>
                            <Markup content={this.props.post.content} />
                          </div>
                        </PerfectScrollbar>
                       </section>
                    </Fade>
                   </Modal>
            </div>
        )
    }
}

export default CardPostModal