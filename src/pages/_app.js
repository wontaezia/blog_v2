import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import store from '@modules/store';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Wontae Jeong</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;700&family=JetBrains+Mono&family=Noto+Sans+KR:wght@100;300;400;700&display=swap"
                    rel="stylesheet"
                />{' '}
            </Head>
            <Layout>
                <AnimatePresence initial={true} exitBeforeEnter>
                    <Component {...pageProps} />
                </AnimatePresence>
            </Layout>
        </Provider>
    );
}

export default MyApp;
