import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FormView, getForm, useForm } from '../../forms/form';
import { FormsProvider } from '../../forms/form/formsContext';
import { SubmissionProvider, SubmissionsList, SubmissionsProvider } from '../../forms/submission';
import EventFormError from './EventFormError';
import ControlDiarioPage from './ControlDiarioPage';

const ControlesDiariosPage = () => {
  const { dispatch: dispatchFormEvent } = useForm();

  useEffect(() => {
    getForm(dispatchFormEvent, null, 'controldiario');
  }, [dispatchFormEvent]);

  return (
    <FormsProvider>
      <SubmissionsProvider>
        <Switch>
          <Route
            exact
            path="/controldiario"
            render={(props) => (
              <SubmissionsList
                {...props}
                FormError={EventFormError}
                formName="controldiario"
                getViewPath={(formId, submission) => `/controldiario/${submission._id}`}
                getEditPath={(formId, submission) => `/controldiario/${submission._id}/edit`}
                getDeletePath={(formId, submission) => `/controldiario/${submission._id}/delete`}
                createSubmissionPath={`/controldiario/create`}
              />
            )}
          />
          <Route
            exact
            path="/controldiario/create"
            render={(props) => (
              <SubmissionProvider>
                <FormView {...props} name='controldiario'/>
              </SubmissionProvider>
            )}
          />
          <Route
            path="/controldiario/:controldiarioId"
            render={(props) => (
              <SubmissionProvider>
                <ControlDiarioPage {...props}/>
              </SubmissionProvider>
            )}
          />
        </Switch>
      </SubmissionsProvider>
    </FormsProvider>
  );
};

export default ControlesDiariosPage;
