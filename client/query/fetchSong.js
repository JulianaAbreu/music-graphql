import gql from 'graphql-tag';

export default gql`
  query SongItem($id: ID!) {
    song(id:$id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
