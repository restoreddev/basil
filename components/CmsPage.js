import { Component } from 'react';
import { Query } from 'react-apollo';
import { CMS_PAGE_QUERY } from '../gql/queries';

export default class CmsPage extends Component {
  render() {
    let queryVars = { id: this.props.id };

    return (
      <Query query={CMS_PAGE_QUERY} variables={queryVars}>
        {(response) => {
          if (response.error) return <div>error</div>;
          if (response.loading) return <div>Loading</div>;

          let data = response.data.cmsPage;
          if (!data) {
            return <div style={{color: 'red'}}>Page does not exist.</div>;
          }

          return (
            <div>
              <h1>{data.content_heading}</h1>
              <div dangerouslySetInnerHTML={{__html: data.content}} />
            </div>
          );
        }}
      </Query>
    );
  }
}
