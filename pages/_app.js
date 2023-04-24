import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/globals.css';
config.autoAddCss = false;
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '@/components/Layout/Layout';
import { CartContextProvider } from '@/context/cart-context';
import { AuthContextProvider } from '@/context/auth-context';
import { SessionProvider } from 'next-auth/react';
import { OrderContextProvider } from '@/context/order-context';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <OrderContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </CartContextProvider>
        </AuthContextProvider>
      </OrderContextProvider>
    </SessionProvider>
  );
}
