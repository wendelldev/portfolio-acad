import React from 'react'

import {FavoriteBorder} from '@material-ui/icons'
import './styles.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='footer'>
                    <p className='footer-text'>Feito com </p><FavoriteBorder className='icon-love' /><p className='footer-text'> por Wendell Lucena - 2020 | Todos os direitos reservados</p>
                </div>
            </footer>
        )
    }
}

export default Footer