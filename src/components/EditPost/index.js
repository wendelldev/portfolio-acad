import React from 'react'
import JoditEditor from 'jodit-react'
import Header from '../Header'

import {
    TextField, InputAdornment
} from '@material-ui/core'

const config = {
    readonly: false
}

class EditPost extends React.Component {
    state = {
        postTitle: '',
        postContent: ''
    }

    render() {

        return (
            <>
            <Header current='edition' />
            <div className='form-post-edit'>
                <div className='post-title-box'>
                <TextField
                    className='input-title'
                    id='title-input'
                    label='Título'
                    fullWidth
                    onChange={newContent => this.setState({ postTitle: newContent })}
                    />
                </div>
                <div className='container-editor'>
                    <h3 className='title-editor'>Post</h3>
                    <JoditEditor
                        value={this.state.postContent}
                        config={config}
                        tabIndex={1}
                        onChange={newContent => this.setState({ postContent: newContent })}
                    />
                </div>
            </div>
            </>
        )
    }
}

export default EditPost