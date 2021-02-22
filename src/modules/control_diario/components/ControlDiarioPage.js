import React, { useEffect } from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import { useSubmission, getSubmission, SubmissionView, SubmissionDelete } from '../../forms/submission';

const ControlDiarioPage = (props) => {
  const { controldiarioId } = useParams();

  const { dispatch: dispatchSubmissionEvent } = useSubmission();

  useEffect(() => {
    getSubmission(dispatchSubmissionEvent, controldiarioId, null, 'controldiario');
  }, [controldiarioId, dispatchSubmissionEvent]);

  const View = () => <SubmissionView readOnly={true} formName="controldiario"/>; 
  const Edit = () => <SubmissionView readOnly={false} formName="controldiario"/>;

  const Navbar = () => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to={`/controldiario`}>
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/controldiario/${controldiarioId}`}>
          <i className="fa fa-eye"></i> Ver
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/controldiario/${controldiarioId}/edit`}>
          <i className="fa fa-edit"></i> Editar
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/controldiario/${controldiarioId}/delete`}>
          <i className="fa fa-trash"></i> Eliminar
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/controldiario/:controldiarioId" component={View}/>
        <Route path="/controldiario/:controldiarioId/edit" component={Edit}/>
        <Route
          path="/controldiario/:eventId/delete"
          render={(props) => <SubmissionDelete {...props} formName="controldiario"/>}
        />
      </Switch>
    </div>
  );
};

export default ControlDiarioPage;
