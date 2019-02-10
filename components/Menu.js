import { Component } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import { CATEGORY_ANCHOR_QUERY } from '../gql/queries';

export default class Menu extends Component {
  renderItems(items) {
    return items.map(item => {
      let currentSlug = this.props.pageProps.slug;
      let active = false;
      if (currentSlug && currentSlug.indexOf(item.url_key) === 0) {
        active = true;
      }

      return (
        <Link href={`/content?slug=${item.url_key}`} as={`/${item.url_key}`} key={item.id}>
          <a className={'header__menu-link' + (active ? ' header__menu-link--selected' : '')}>{item.name}</a>
        </Link>
      );
    })
  }

  render() {
    let queryVars = { id: this.props.id };

    return (
      <Query query={CATEGORY_ANCHOR_QUERY} variables={queryVars}>
        {(response) => {
          if (response.error) return <div>error</div>;
          if (response.loading) return <div>Loading</div>;

          let data = response.data.category;
          if (!data) {
            return <div style={{color: 'red'}}>Category does not exist.</div>;
          }

          return (
            <div className="header">
              <div className="header__topbar">
                <div className="mr-4"><i className="ion-email" /> basil@ecommerce.com</div>
                <div><i className="ion-ios-telephone" /> 123-456-7890</div>
              </div>
              <div className="header__brand">
                <Link href="/">
                  <a className="header__brand-link">
                    <img src="/static/leaf.png" className="header__logo" />
                    Basil
                  </a>
                </Link>
              </div>
              <div className="header__menu">
                {this.renderItems(data.children.sort((a, b) => a.position - b.position))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
