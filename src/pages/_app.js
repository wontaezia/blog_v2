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
