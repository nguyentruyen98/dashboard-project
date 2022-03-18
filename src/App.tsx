import './App.scss';

import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import RenderRouter from 'routes';
import {
  setAlert,
  useApplicationDispatch,
  useApplicationSelector,
} from 'stores/application/application';
import {appMessage} from 'utils/message';

function App() {
  const applicationState = useApplicationSelector(state => state.application);
  const dispatch = useApplicationDispatch();

  const handleOnCloseMsg = () => {
    dispatch(setAlert({type: 'Success', message: ''}));
  };
  useEffect(() => {
    if (applicationState.alert.message) {
      appMessage(
        applicationState.alert.type,
        applicationState.alert.message,
        handleOnCloseMsg,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicationState.alert]);

  return (
    <>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
