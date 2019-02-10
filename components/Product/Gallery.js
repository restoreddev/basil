import { Component } from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig: config } = getConfig();

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredImage: props.primaryImage
    };
  }

  render() {
    if (!this.props.images || !this.props.primaryImage) {
      return;
    }

    let featuredImage = this.state.featuredImage;

    return (
      <div>
        <img
          src={config.storeUrl + 'media/catalog/product' + featuredImage.file}
          className="product__gallery-primary"
        />
        <div>
          {this.props.images.map(image => {
            return <img
              src={config.storeUrl + 'media/catalog/product' + image.file}
              className={"product__gallery-thumbnail " + (image.file == featuredImage.file ? "product__gallery-thumbnail--active" : "")}
              key={image.file}
              onMouseOver={() => this.setState({ featuredImage: image })}
              onClick={() => this.setState({ featuredImage: image })}
            />
          })}
        </div>
      </div>
    );
  }
}
