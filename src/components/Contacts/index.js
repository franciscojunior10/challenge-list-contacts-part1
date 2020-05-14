import React, { Component } from 'react';

import './styles.scss';

export default class Contacts extends Component {
    
    state = {
        contents: [],
    }

    componentDidMount() {
        this.loadingData();
    }

    
    loadingData = async () => {
        const res = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts');

        const setData = await res.json();

        this.setState({ contents: setData });

    }

    formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    render() {
        const { contents } = this.state;
        return (
            <div className="container">
                <section className="contacts">
                    <article className="contact">
                            <span className="contact__avatar" />
                            <span className="contact__data">Nome</span>
                            <span className="contact__data">Telefone</span>
                            <span className="contact__data">País</span>
                            <span className="contact__data">Admissão</span>
                            <span className="contact__data">Empresa</span>
                            <span className="contact__data">Depatamento</span>
                    </article>
                {contents.map((content) => (
                    <article key={content.id} className="contact">
                        <span className="contact__avatar">
                            <img src={content.avatar} alt={`${content.name} avatar`}></img>
                        </span>
                        <span className="contact__data">{content.name}</span>
                        <span className="contact__data">{content.phone}</span>
                        <span className="contact__data">{content.country}</span>
                        <span className="contact__data">{this.formatDate(content.admissionDate)}</span>
                        <span className="contact__data">{content.company}</span>
                        <span className="contact__data">{content.department}</span>
                    </article>
                ))}

               </section>
            </div>
        )
    }
}