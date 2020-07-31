import React from 'react';
import Layout from 'components/layout';

export default props => (
  <Layout>
    <div>User: <strong>{props.match.params.id}</strong></div>
  </Layout>
)