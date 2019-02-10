import { Component } from 'react';
import urlResolver from '../lib/url-resolver';
import Category from '../components/Category';
import CmsPage from '../components/CmsPage';
import Product from '../components/Product';

const TYPE_PRODUCT = 'PRODUCT',
      TYPE_CMS = 'CMS_PAGE',
      TYPE_CATEGORY = 'CATEGORY';

export default class extends Component {
  static async getInitialProps(ctx) {
    let slug = ctx.query.slug;
    let data = await urlResolver(slug);
    let page = ctx.query.page;

    if (!data) {
      if (ctx.res) ctx.res.statusCode = 404;
      return {};
    }

    if (!page) {
      page = 1;
    } else {
      page = Number(page);
    }

    return { slug, id: data.id, type: data.type, page };
  }

  render() {
    if (this.props.type === TYPE_PRODUCT) {
      return <Product slug={this.props.slug} />;
    } else if (this.props.type === TYPE_CMS) {
      return <CmsPage id={this.props.id} />;
    } else if (this.props.type === TYPE_CATEGORY) {
      return <Category id={this.props.id} slug={this.props.slug} currentPage={this.props.page} />;
    } else {
      return <div>Oops! Not found</div>;
    }
  }
}
