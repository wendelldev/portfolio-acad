import React from 'react'


class PageNoAuth extends React.Component {
    render() {
        return (
            <div className='no-auth-container'>
                <h2 className='no-auth-title'>NÃO AUTORIZADO.</h2>
                <p className='no-auth-info'>Você precisa estar logado para acessar</p>
            </div>
        )
    }
}

export default PageNoAuth