import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const Template = () => {

    return (
        <>
            <Header />
            <div className="d-flex">
                <Content />
            </div>
            <Footer />
        </>
    )
}

export default Template;