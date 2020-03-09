import React from 'react'

import {FavoriteBorder, ExpandLessRounded} from '@material-ui/icons'
import './styles.css'

class Footer extends React.Component {

    handleScrollTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    render() {
        return (
            <footer>
                <p className='footer-text'>Feito com </p>
                <FavoriteBorder className='icon-love' />
                <p className='footer-text'> por Wendell Lucena - 2020 | Todos os direitos reservados</p>
                <button className='to-top' onClick={this.handleScrollTop}>
                    <ExpandLessRounded className='icon-up' />
                </button>
            </footer>
        )
    }
}

export default Footer