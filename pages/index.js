import allProducts from './data/products.json';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Plants | Home</title>
            </Head>
            <div className="container">
                <h2 className={styles.title}>
                    All Products <span>🌿</span>
                </h2>
                <div className={styles.products_container}>
                    {allProducts.map((product) => {
                        return (
                            <div className={styles.product_card} key={product.id}>
                                <Link href={`products/${product.id}`}>
                                    <a>
                                        <div className={styles.product_img}>
                                            <Image src={product.image.url} alt={product.name} width={500} height={500} />
                                        </div>
                                    </a>
                                </Link>
                                <div className={styles.product_content}>
                                    <h3>{product.name}</h3>
                                    <p>${product.price}</p>
                                    <button className="btn">Add to cart 🛒</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
