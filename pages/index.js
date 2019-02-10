import ProductsGrid from '../components/shared/ProductsGrid';
import { Link } from '../routes';
import getConfig from 'next/config';

const { publicRuntimeConfig: config } = getConfig();

export default () => (
  <div>
    <div className="banner">
      <div className="w-1/2 p-16">
        <h1 className="text-5xl font-light leading-loose">Unbelievable styles and incredible prices</h1>
      </div>
      <div className="w-1/2">
        <img className="block max-w-sm" src={config.storeUrl + "media/catalog/product/m/h/mh04-green_main_1.jpg"} />
      </div>
    </div>

    <div className="container mx-auto pt-8">
      <ProductsGrid categoryId="23" pageSize={4} />
    </div>

    <div className="container mx-auto pb-8">
      <ProductsGrid categoryId="11" pageSize={4} />
    </div>

    <div className="container mx-auto p-1">
      <div className="headline">
        <div className="grid grid--center">
          <div className="headline__section">
            <Link route="content" params={{ slug: 'women' }}>
              <a className="headline__title">
                <img className="headline__image" src={config.storeUrl + "media/catalog/product/w/p/wp08-green_main.jpg"} />
                <i className="ion-female" /> Women
              </a>
            </Link>
            <div className="py-2">Women love our selection of yoga pants.</div>
          </div>
          <div className="headline__section">
            <Link route="content" params={{ slug: 'men' }}>
              <a className="headline__title">
                <img className="headline__image" src={config.storeUrl + "media/catalog/product/m/s/msh08-green_main.jpg"} />
                <i className="ion-male" /> Men
              </a>
            </Link>
            <div className="py-2">Our shorts are very popular products for our Male customers.</div>
          </div>
          <div className="headline__section">
            <Link route="content" params={{ slug: 'men' }}>
              <a className="headline__title">
                <img className="headline__image" src={config.storeUrl + "media/catalog/product/m/b/mb01-blue-0.jpg"} />
                <i className="ion-bag" /> Gear
              </a>
            </Link>
            <div className="py-2">We have a great selection of backpacks and duffle bags for going to the gym.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
