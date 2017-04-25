import * as React from 'react';

import List from 'app/components/List';
import ListItem from 'app/components/ListItem';
import LoadingIndicator from 'app/components/LoadingIndicator';
import RepoListItem from 'app/containers/RepoListItem';

interface IProps {
  loading?: boolean;
  error?: any;
  repos?: any;
}

function ReposList({ loading, error, repos }: IProps) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} />;
  }

  return null;
}

export default ReposList;
