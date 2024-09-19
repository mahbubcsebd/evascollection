// import CheckoutPage from '../components/CheckoutPage';
import CheckoutPage from '../components/CheckoutPage';
import { getSiteSettings } from '../utils/getSiteSettings';

  export async function generateMetadata() {
      const siteSetting = await getSiteSettings();

      return {
          title: `${siteSetting.data.title} | Checkout Page`,
      };
  }

const page = async () => {
    const siteSettings = await getSiteSettings("en");

    return (
        <div>
            <CheckoutPage siteSettings={siteSettings.data} />
        </div>
    );
};

export default page;
