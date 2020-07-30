import NewJob from './NewJob';
import React, { useContext } from 'react';
import ContainerContext from '../../container/context';
import { withRouter} from 'react-router-dom';

const AddNewJob = (props) => {
  const { addNewJob } = useContext(ContainerContext);
  const handleSubmit = (data) => {
    console.log(data);
    addNewJob(data);
    props.history.push('/search');
  }
  return <NewJob handleSubmitForm={handleSubmit} />
}

export default withRouter(AddNewJob);
