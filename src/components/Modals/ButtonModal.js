import React from 'react'
import { Modal, Backdrop, Fade, Button } from '@material-ui/core'


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
                         <h2 id="transition-modal-title">{this.props.title}</h2>
                         <p id="transition-modal-description">{this.props.local}</p>
                       </div>
                     </Fade>
                   </Modal>
            </div>
        )
    }
}

export default ButtonModal