import { getHeroImage } from "../../utils/getHeroImage";
import { getTestimonials } from "../../utils/getTestimonial";
import AbayaLatestProduct from "../AbayaLatestProduct";
import AbayaHeroSlider from "../template/abaya/AbayaHeroSlider";
import Testimonials from "../Testimonials";


const AbayaHomePage = async () => {
    const heroImages = await getHeroImage();
    const testimonials = await getTestimonials();
  return (
      <div>
          <AbayaHeroSlider images={heroImages.data} />
          <AbayaLatestProduct />
          <Testimonials testimonials={testimonials.data} />
      </div>
  );
}

export default AbayaHomePage