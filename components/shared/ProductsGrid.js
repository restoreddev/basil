import { Component } from 'react';
import { Query } from 'react-apollo';
import { PRODUCTS_QUERY } from '../../gql/queries';

import Loading from './Loading';
import ProductCard from './ProductCard';

export default (props) => {
  let queryVars = {
    categoryId: props.categoryId,
    pageSize: props.pageSize,
  };

  return (
    <Query query={PRODUCTS_QUERY} variables={queryVars}>
      {(response) => {
        if (response.error) return <div>error</div>;
        if (response.loading) return <Loading />;

        let products = response.data.products;

        return (
          <div className="grid grid--center">
            {products.items.map(item => <ProductCard item={item} key={item.id} />)}
          </div>
        );
      }}
    </Query>
  );
}
