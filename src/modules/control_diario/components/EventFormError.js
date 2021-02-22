import React from 'react';

const EventFormError = ({ error, children }) => {
  if (error === 'Invalid alias') {
    return (
      <div className="alert alert-warning">
        You have not yet created an Event Resource in your project.
      </div>
    );
  }

  return <>{children}</>;
};

export default EventFormError;
