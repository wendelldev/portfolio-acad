import React from 'react'
import JoditEditor from 'jodit-react'
import Header from '../Header'
import ButtonModal from '../Modals/ButtonModal'

import DateFnsUtils from '@date-io/date-fns'

import {
    TextField, Grid, Button
} from '@material-ui/core'

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import './styles.css'

const config = {
    readonly: false
}

class EditPost extends React.Component {
    state = {
        postTitle: '',
        date: new Date(),
        local: '',
        imageUrl: '',
        postContent: '',
    }

    handleTitleChange = title => {
        this.setState({ postTitle: title.target.value })
    }

    handleDateChange = date => {
        this.setState({ date })
    }

    handleLocalChange = local => {
        this.setState({ local: local.target.value })
    }

    handleImageChange = url => {
        this.setState({ imageUrl: url.target.value })
    }

    handleContentChange = content => {
        this.setState({ postContent: content })
    }

    handlePublish = () => {
        const { postTitle, date, local, postContent } = this.state
        console.log(postContent)
        console.log(postTitle)
        console.log(date)
        console.log(local)
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
                        color='primary'
                        value={this.state.postTitle}
                        onChange={this.handleTitleChange}
                        />
                </div>
                <Grid container justify='space-between' direction='row' alignItems='center'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin='normal'
                                id='date-picker-dialog'
                                label='Selecione a data'
                                format='dd/MM/yyyy'
                                value={this.state.date}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                                />
                        </MuiPickersUtilsProvider>
                        <TextField
                            className='input-local'
                            id='local-input'
                            label='Local'
                            color='primary'
                            value={this.state.local}
                            onChange={this.handleLocalChange}
                            />
                </Grid>
                <div className='input-url-img'>
                    <TextField
                        className='input-img'
                        id='img-input'
                        label='Image-URL'
                        color='primary'
                        value={this.state.imageUrl}
                        onChange={this.handleImageChange}
                        />
                </div>
                <div className='container-editor'>
                    <h3 className='title-editor'>Conteúdo do POST:</h3>
                    <JoditEditor
                        className='editor'
                        value={this.state.postContent}
                        config={config}
                        tabIndex={1}
                        onBlur={this.handleContentChange}
                    />
                </div>
                <Grid className='btn-box' container justify='space-evenly' direction='row' alignItems='center'>
                    <Button className='btn publish'
                        type='button'
                        variant='contained'
                        onClick={this.handlePublish}>
                        Publish
                    </Button>
                    <ButtonModal
                        img={this.state.imageUrl}
                        title={this.state.postTitle}
                        date={this.state.date.toLocaleDateString()}
                        local={this.state.local}
                        content={this.state.postContent} />
                </Grid>
            </div>
            </>
        )
    }
}

export default EditPost