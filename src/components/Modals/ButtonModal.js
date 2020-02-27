import React from 'react'
import { Modal, Backdrop, Fade, Button } from '@material-ui/core'

import './styles.css'


class ButtonModal extends React.Component {
    state = {
        open: false
    }

    handleOpenClose = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div>
                <Button
                    className='modal-button'
                    variant='contained'
                    onClick={this.handleOpenClose}>
                        View
                    </Button>
                <Modal
                     aria-labelledby="transition-modal-title"
                     aria-describedby="transition-modal-description"
                     className='modal'
                     open={this.state.open}
                     onClose={this.handleOpenClose}
                     closeAfterTransition
                     BackdropComponent={Backdrop}
                     BackdropProps={{
                       timeout: 500,
                     }}
                   >
                     <Fade in={this.state.open}>
                       <div className='paper'>
                         <div className="img-principal" 
                          style={{background: `url(${this.props.img}) no-repeat cover` }}>
                           
                         </div>
                         <div className="title-area">
                           <h2 className='title'>{this.props.title}</h2>
                         </div>
                         <div className="info-area">
                           <p className="date">{this.props.date}</p>
                           <p className="local">{this.props.local}</p>
                         </div>
                         <div className='post-content'>
                           {this.props.content}
                         </div>
                       </div>
                     </Fade>
                   </Modal>
            </div>
        )
    }
}

export default ButtonModal