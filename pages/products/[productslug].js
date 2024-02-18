import { useRouter } from 'next/router';
import allProducts from '../data/products.json';
import styles from '../../styles/SingleProduct.module.css';

export async function getStaticPaths() {
    const paths = allProducts.map(product => ({
        params: { productslug: product.id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const product = allProducts.find(product => product.id.toString() === params.productslug);
    return { props: { product } };
}

const singleproduct = ({ product }) => {
    return (
        <>
            <title>Dracaena fragrans</title>
            <div className={styles.single_container}>
                <div className={styles.left_section}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image.url} className={styles.left_img} alt="" />
                </div>
                <div className={styles.right_section}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.price}>{product.price}</p>
                    <div className={styles.para}>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <button className="btn">Add to cart 🛒</button>
                </div>
            </div>
        </>
    );
};

export default singleproduct;