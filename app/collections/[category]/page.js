import Banner from '../../components/Banner';
import ProductList from '../../components/ProductList';
import { getSiteSettings } from '../../utils/getSiteSettings';

  export async function generateMetadata() {
      const siteSetting = await getSiteSettings();

      return {
          title: `${siteSetting.data.title} | Shop Page`,
      };
  }

const CategoryPage = async ({params}) => {
  const category = params.category;

  return (
      <>
          <Banner />
          <ProductList category={category} />
      </>
  );
}

export default CategoryPage