import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FormView, getForm, useForm } from '../../forms/form';
import { FormsProvider } from '../../forms/form/formsContext';
import { SubmissionProvider, SubmissionsList, SubmissionsProvider } from '../../forms/submission';
import EventFormError from './EventFormError';
import EventPage from './EventPage';

const EventsPage = (props) => {
  const {formName} = props
  const { dispatch: dispatchFormEvent } = useForm();

  useEffect(() => {
    getForm(dispatchFormEvent, null, formName);
  }, [dispatchFormEvent]);

  return (
    <FormsProvider>
      <SubmissionsProvider>
        <Switch>
          <Route
            exact
            path={`/${formName}`}
            render={(props) => (
              <SubmissionsList
                {...props}
                FormError={EventFormError}
                formName={formName}
                getViewPath={(formId, submission) => `/${formName}/${submission._id}`}
                getEditPath={(formId, submission) => `/${formName}/${submission._id}/edit`}
                getDeletePath={(formId, submission) => `/${formName}/${submission._id}/delete`}
                createSubmissionPath={`/${formName}/create`}
              />
            )}
          />
          <Route
            exact
            path={`/${formName}/create`}
            render={(props) => (
              <SubmissionProvider>
                <FormView {...props} name={formName}/>
              </SubmissionProvider>
            )}
          />
          <Route
            path={`/${formName}/:eventId`}
            render={(props) => (
              <SubmissionProvider>
                <EventPage formName={formName} {...props}/>
              </SubmissionProvider>
            )}
          />
        </Switch>
      </SubmissionsProvider>
    </FormsProvider>
  );
};

export default EventsPage;
