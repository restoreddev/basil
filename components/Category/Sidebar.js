import { Component } from 'react';
import Link from 'next/link';

export default class Sidebar extends Component {
  renderCategories(cats, parentUrlKey) {
    if (!cats || !cats.length) return <div></div>;

    let items = cats.map(cat => {
      return (
        <li className="py-1" key={cat.id}>
          <Link href={`/content?slug=${parentUrlKey + '/' + cat.url_key}`} as={`/${parentUrlKey + '/' + cat.url_key}`}>
            <a className="text-grey-darker no-underline hover:text-grey-darkest">{cat.name}</a>
          </Link>
        </li>
      );
    });

    return (
      <ul className="list-reset ml-2">
        {items}
      </ul>
    );
  }

  renderBreadcrumbs(crumbs) {
    if (!crumbs || !crumbs.length) return <div></div>;

    let urlKey = '';
    let prevUrlKey = '';
    let items = crumbs.map(crumb => {
      urlKey = crumb.category_url_key;
      if (prevUrlKey) {
        urlKey = prevUrlKey + urlKey;
      }
      prevUrlKey += crumb.category_url_key + '/';
      return (
        <Link href={`/content?slug=${urlKey}`} as={`/${urlKey}`} key={crumb.id}>
          <a className="text-grey-darker no-underline hover:text-grey-darkest block py-1">
            <i className="ion-arrow-left-b" /> {crumb.category_name}
          </a>
        </Link>
      );
    });

    return (
      <div>
        {items}
      </div>
    );
  }

  render() {
    let category = this.props.category;
    let parentUrlKey = '';
    if (category.breadcrumbs) {
      category.breadcrumbs.forEach(crumb => {
        parentUrlKey += crumb.category_url_key + '/';
      });
    }
    parentUrlKey += category.url_key;

    return (
      <div className="sidebar-category">
        <h3 className="text-grey-dark font-light mb-2">Refine By</h3>
        {this.renderBreadcrumbs(category.breadcrumbs)}
        <div className="font-bold py-1">{category.name}</div>
        {this.renderCategories(category.children, parentUrlKey)}
      </div>
    );
  }
}
