import React, { useEffect } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import { useSubmission, getSubmission, SubmissionView, SubmissionDelete } from '../../forms/submission';

const EventPage = (props) => {
  const {formName} = props
  const { eventId } = useParams();

  const { dispatch: dispatchSubmissionEvent } = useSubmission();

  useEffect(() => {
    getSubmission(dispatchSubmissionEvent, eventId, null, formName);
  }, [eventId, dispatchSubmissionEvent]);

  const View = () => <SubmissionView readOnly={true} formName={formName}/>; 
  const Edit = () => <SubmissionView readOnly={false} formName={formName}/>;

  const Navbar = () => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to={`/${formName}`}>
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/${formName}/${eventId}`}>
          <i className="fa fa-eye"></i> View
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/${formName}/${eventId}/edit`}>
          <i className="fa fa-edit"></i> Edit
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/${formName}/${eventId}/delete`}>
          <i className="fa fa-trash"></i> Delete
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={`/${formName}/:eventId`} component={View}/>
        <Route path={`/${formName}/:eventId/edit`} component={Edit}/>
        <Route
          path={`/${formName}/:eventId/delete`}
          render={(props) => <SubmissionDelete {...props} formName={formName}/>}
        />
      </Switch>
    </div>
  );
};

export default EventPage;
