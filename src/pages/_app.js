import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { SwitchTransition, Transition } from 'react-transition-group';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import store from '@modules/store';
import Layout from '@components/Layout';
import { play, exit } from '@timeline';

function MyApp({ Component, pageProps, router }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        play(router.pathname, router, nodeRef, true);
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/mrt4wsk.css"
                />
                <title>Wontae Jeong</title>
            </Head>
            <Layout>
                <SwitchTransition>
                    <Transition
                        key={router.pathname}
                        // timeout={500}
                        in={true}
                        appears={true}
                        nodeRef={nodeRef}
                        onEnter={(appears) =>
                            play(router.pathname, router, nodeRef, appears)
                        }
                        onExit={(appears) => exit(nodeRef, appears)}
                        timeout={{ appear: 500, enter: 750, exit: 600 }}
                        mountOnEnter={true}
                        unmountOnExit={true}
                    >
                        <Component ref={nodeRef} {...pageProps} />
                    </Transition>
                </SwitchTransition>
            </Layout>
        </Provider>
    );
}

export default MyApp;
