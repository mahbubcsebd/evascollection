import Template from './components/themes/Template';
import { getSiteSettings } from './utils/getSiteSettings';
import getTemplate from './utils/getTemplate';

  export async function generateMetadata() {
      const siteSetting = await getSiteSettings();

      return {
          title: `${siteSetting.data.title} | Home`,
      };
  }

const Home = async () => {
    const template = await getTemplate();

    return (
        <>
            <Template template={template.template_name} />
        </>
    );
};

export default Home;
