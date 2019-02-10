import { Component } from 'react';
import { Query } from 'react-apollo';
import { CATEGORY_QUERY } from '../gql/queries';

import Loading from './shared/Loading';
import ProductCard from './shared/ProductCard';
import Sidebar from './Category/Sidebar';
import Paginate from './Category/Paginate';

export default class Category extends Component {
  render() {
    let queryVars = {
      id: this.props.id,
      pageSize: 12,
      currentPage: this.props.currentPage,
    };

    return (
      <Query query={CATEGORY_QUERY} variables={queryVars}>
        {(response) => {
          if (response.error) return <div>error</div>;
          if (response.loading) return <Loading />;

          let category = response.data.category;
          if (!category) {
            return <div style={{color: 'red'}}>Category does not exist.</div>;
          }

          let slug = this.props.slug;
          let currentPage = this.props.currentPage;
          let totalPages = Math.round(category.products.total_count / queryVars.pageSize);

          return (
            <div className="category">
              <div className="w-1/5">
                <Sidebar category={category} />
              </div>

              <div className="w-4/5">
                <div className="grid grid--left">
                  {category.products.items.map(item => <ProductCard item={item} key={item.id} />)}
                </div>
                <Paginate
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalCount={category.products.total_count}
                  slug={slug}
                />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
