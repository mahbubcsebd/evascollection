import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import { getSiteSettings } from '../utils/getSiteSettings';

export async function generateMetadata() {
    const siteSetting = await getSiteSettings();

    return {
        title: `${siteSetting.data.title} | Shop Page`,
    };
}

const Shop = async () => {
    return (
        <>
            <Banner />
            <ProductList />
        </>
    );
};

export default Shop;
