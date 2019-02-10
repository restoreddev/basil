import gql from 'graphql-tag';
import initApollo from './init-apollo';

const RESOLVE_URL = gql`
  query urlResolver($url: String!) {
    urlResolver(url: $url) {
      id,
      canonical_url,
      type
    }
  }
`;

export default async function(slug) {
  let apollo = initApollo();
  let response = await apollo.query({ query: RESOLVE_URL, variables: { url: slug } });

  return response.data.urlResolver;
}
