import Link from 'next/link';
import { Chec } from 'chec-request';

export async function getStaticProps() {
  const commerce = new Chec(process.env.CHEC_PUBLIC_KEY);

  const { data: products } = await commerce.get('products');

  return {
    props: {
      products,
    },
  };
}

export default ({ products }) => (
  <React.Fragment>
    <h1>Products</h1>

    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
);
