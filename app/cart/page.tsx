import { Metadata } from 'next';
import CartPageClient from './CartClient';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review and manage your shopping cart',
};

const CartPage = () => {
  return (
    <Layout>
      <CartPageClient />
    </Layout>
  );
};

export default CartPage;
