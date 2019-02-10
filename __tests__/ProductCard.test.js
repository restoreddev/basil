import React from 'react';
import Renderer from 'react-test-renderer';
import ProductCard from '../components/shared/ProductCard';
import { shallow, mount, render } from 'enzyme';


const item = {
  "id": 68,
  "name": "Chaz Kangeroo Hoodie",
  "small_image": "\/m\/h\/mh01-gray_main_1.jpg",
  "url_key": "chaz-kangeroo-hoodie",
  "description": "<p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.<\/p>\n<p>&bull; Two-tone gray heather hoodie.<br \/>&bull; Drawstring-adjustable hood. <br \/>&bull; Machine wash\/dry.<\/p>",
  "media_gallery_entries": [
    {
      "label": "",
      "file": "\/m\/h\/mh01-gray_main_1.jpg"
    },
    {
      "label": "",
      "file": "\/m\/h\/mh01-gray_alt1_1.jpg"
    },
    {
      "label": "",
      "file": "\/m\/h\/mh01-gray_back_1.jpg"
    }
  ],
  "price": {
    "regularPrice": {
      "amount": {
        "value": 52,
        "currency": "USD"
      }
    }
  }
};

describe('Test product card', () => {
  it('Renders correctly', () => {
    const renderer = Renderer.create(
      <ProductCard item={item} />
    );
    const tree = renderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test product card name', () => {
  const wrapper = shallow(<ProductCard item={item} />);

  expect(wrapper.find('h4')).toHaveLength(1);
  expect(wrapper.find('h4').html()).toEqual('<h4 class="pt-2">Chaz Kangeroo Hoodie</h4>');
});
