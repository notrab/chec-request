import { Chec } from 'chec-request';

export async function getStaticProps({ params }) {
  const commerce = new Chec(process.env.CHEC_PUBLIC_KEY);

  const product = await commerce.get(`products/${params.permalink}`, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const commerce = new Chec(process.env.CHEC_PUBLIC_KEY);

  const { data: products } = await commerce.get('products');

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default ({ product }) => (
  <React.Fragment>
    <h1>{product.name}</h1>
    <p>{product.price.formatted_with_symbol}</p>
  </React.Fragment>
);
