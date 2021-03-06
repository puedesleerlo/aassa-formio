import React from 'react';
import { Errors } from 'react-formio';
import { useHistory, useParams } from 'react-router';
import { Confirm } from '../../../../common';
import { useForm } from '../../form';
import { useSubmission, deleteSubmission } from '../submissionContext'
import { useSubmissions, resetSubmissions } from '../submissionsContext';

const SubmissionDelete = ({ formName }) => {
  const history = useHistory();
  const { formId, submissionId, eventId } = useParams();
  const { state: submissionState, dispatch: dispatchSubmissionAction } = useSubmission();
  const { dispatch: dispatchSubmissionsAction } = useSubmissions();
  const { state: formState } = useForm();

  const onYes = () => {
    deleteSubmission(dispatchSubmissionAction, submissionId || eventId, formId, formName, (err) => {
      if (!err) {
        dispatchSubmissionsAction(resetSubmissions());
        history.push(`/${formId ? `form/${formId}/submission` : `${formName}`}`);
      }
    });
  };

  const onNo = () => {
    const prevState = history[history.length - 2];
    if (prevState) {
      history.push(prevState);
    }
  };

  const message = `Estás seguro que deseas eliminar el registro '${submissionId || eventId}'?`;

  return (
    <div>
      <Errors errors={[submissionState.error, formState.error]} />
      <Confirm
        message={message}
        onYes={onYes}
        onNo={onNo}
      />
    </div>
  )
};

export default SubmissionDelete;
