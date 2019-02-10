import { Component } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

const { publicRuntimeConfig: config } = getConfig();

export default (props) => {
  let item = props.item;

  return (
    <div className="product-card">
      <Link href={`/content?slug=${item.url_key}`} as={`/${item.url_key}`}>
        <a className="product-card__content" key={item.id}>
          <img src={config.storeUrl + 'media/catalog/product' + item.small_image} />
          <h4 className="pt-2" dangerouslySetInnerHTML={{__html: item.name}}></h4>
          <div className="py-2">${item.price.regularPrice.amount.value}</div>
        </a>
      </Link>
    </div>
  );
}
