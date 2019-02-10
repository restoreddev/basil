import { Component } from 'react';
import { Query } from 'react-apollo';
import { PRODUCT_QUERY } from '../gql/queries';
import Loading from './shared/Loading';
import Gallery from './Product/Gallery';
import Details from './Product/Details';

export default class Product extends Component {
  render() {
    let queryVars = { url: this.props.slug };

    return (
      <div>
        <Query query={PRODUCT_QUERY} variables={queryVars}>
        {(response) => {
          if (response.error) return <div>error</div>;
          if (response.loading) return <Loading />;

          let data = response.data.products;
          if (data.items.length < 1) {
            return <div style={{color: 'red'}}>Product could not be loaded.</div>;
          }

          let product = data.items[0];
          return (
            <div className="container mx-auto py-4">
              <div className="product">
                <div className="w-1/2">
                  <Gallery
                    primaryImage={{ file: product.image, label: product.image_label }}
                    images={product.media_gallery_entries}
                  />
                </div>
                <div className="w-1/2">
                  <Details product={product} />
                </div>
              </div>
            </div>
          );
        }}
        </Query>
      </div>
    );
  }
}
