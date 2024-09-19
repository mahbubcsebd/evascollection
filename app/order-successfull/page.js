import OrderSuccess from '../components/OrderSuccess';
import { getSiteSettings } from '../utils/getSiteSettings';


  export async function generateMetadata() {
      const siteSetting = await getSiteSettings();

      return {
          title: `${siteSetting.data.title} | Order Success Page`,
      };
  }

const OrderSuccessfull = () => {
  return (
    <div>
        <OrderSuccess />
    </div>
  )
}

export default OrderSuccessfull