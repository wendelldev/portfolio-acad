import React from 'react'
import JoditEditor from 'jodit-react'
import Header from '../Header'
import ButtonModal from '../Modals/ButtonViewModal'
import DateFnsUtils from '@date-io/date-fns'

import { connect } from 'react-redux'
import { addPost } from '../../store/actions'

import { Redirect } from 'react-router-dom'


import {
    TextField, Grid, Button, InputLabel, MenuItem, FormControl, Select
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
        size: '',
        position: '',
        repeat: '',
        open: false,
        redirect: false
    }

    handleOpenMenu = () => {
        this.setState({ open: !this.state.open })
    }

    handleSizeChange = size => {
        this.setState({ size: size.target.value })
    }

    handlePositionChange = position => {
        this.setState({ position: position.target.value })
    }

    handleRepeatChange = repeat => {
        this.setState({ repeat: repeat.target.value })
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

    handlePublish = async () => {
        const { postTitle, imageUrl, size, position, repeat, date, local, postContent} = this.state
        this.props.onAddPost({
            title: postTitle,
            date: date.toLocaleString(),
            local,
            imageUrl,
            size,
            position,
            repeat,
            contentPost: postContent
        })

        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/' />
            )
        } else {
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
                    <Grid container justify='space-between' direction='row' alignItems='center'>
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
                        <FormControl className='input-size' >
                            <InputLabel id='size'>Size</InputLabel>
                            <Select
                                labelId='size'
                                id='size-select'
                                value={this.state.size}
                                defaultValue='auto'
                                onChange={this.handleSizeChange}>
                                    <MenuItem value='auto'>Auto</MenuItem>
                                    <MenuItem value='cover'>Cover</MenuItem>
                                    <MenuItem value='contain'>Contain</MenuItem>
                                </Select>
                        </FormControl>
                        <FormControl className='input-position' >
                            <InputLabel id='position'>Position</InputLabel>
                            <Select
                                labelId='position'
                                id='position-select'
                                defaultValue='center'
                                value={this.state.position}
                                onChange={this.handlePositionChange}>
                                    <MenuItem value='left'>Left</MenuItem>
                                    <MenuItem value='center'>Center</MenuItem>
                                    <MenuItem value='right'>Right</MenuItem>
                                    <MenuItem value='top'>Top</MenuItem>
                                    <MenuItem value='bottom'>Bottom</MenuItem>
                                </Select>
                        </FormControl>
                        <FormControl className='input-repeat'>
                            <InputLabel id='repeat'>Repeat</InputLabel>
                            <Select
                                labelId='repeat'
                                id='repeat-select'
                                defaultValue='no-repeat'
                                value={this.state.repeat}
                                onChange={this.handleRepeatChange}>
                                    <MenuItem value='repeat'>Repeat</MenuItem>
                                    <MenuItem value='no-repeat'>No-repeat</MenuItem>
                                    <MenuItem value='repeat-x'>Repeat-X</MenuItem>
                                    <MenuItem value='repeat-y'>Repeat-Y</MenuItem>
                                    <MenuItem value='space'>Space</MenuItem>
                                    <MenuItem value='round'>Round</MenuItem>
                                </Select>
                        </FormControl>
                    </Grid>
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
                            background='#233c62'
                            color='#FFF'
                            img={this.state.imageUrl}
                            size={this.state.size}
                            position={this.state.position}
                            repeat={this.state.repeat}
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
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(EditPost)