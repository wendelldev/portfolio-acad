import React, { Component } from 'react'


import imgAbout from '../../assets/img/img-about.png'
import './styles.css'


class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='banner-about' style={{backgroundImage: `url(${imgAbout})`}}>
                    <div className='line-banner-about' />
                    <div className='text-about'>
                        <p className='text1'>Olá, me chamo Wendell Lucena, tenho 22 anos e sou acadêmico de Sistemas de Informação pela Unimeta/AC. Ingressei neste curso no segundo semestre de 2018, a maior motivação para isto foi minha afinidade com a tecnologia desde quando era criança, e hoje sei que tomei a decisão certa.</p>
                        <p className='text2'>Sobre a disciplina Educação Interprofissional e Práticas Colaborativas, nós (alunos) não escolhemos cursar ela, pois ela já se encontra na grade curricular do curso, contudo, é uma disciplina nova e que nos prepara para lidar com o mercado de trabalho e nos dá uma prévia da realidade que é trabalhar com outras profissões.</p>
                    </div>
                    <h2 className='firstName'>WENDELL</h2>
                    <div className='line-name' />
                    <h2 className='secondName'>LUCENA</h2>
                </div>
            </div>
        )
    }
}


export default About