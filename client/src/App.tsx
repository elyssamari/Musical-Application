// 3rd party library imports
import { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// project imports
import { MainPage } from './MainPage';
import { DispatchAction, appReducer } from './Reducer';
import { defaultState } from './State';
import { initializeSocket, send } from './Socket';
//import Particles from "react-tsparticles";
// css imports
import 'animate.css';

/** ------------------------------------------------------------------------ **
 * App component
 ** ------------------------------------------------------------------------ */
export let searchnumber = '';
export function findsql(songpara: string){
  searchnumber = songpara;
}
function App() {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  
  

  useEffect(() => {
    initializeSocket(
      async socket => {
        if(searchnumber !== ''){
          console.log('inside Apptsx useeffect 1');
        dispatch(new DispatchAction('SET_SOCKET', { socket }));
        const { songs } = await send(socket, 'find_songs', {searchnumber});
        console.log(songs);
        console.log('inside Apptsx useeffect 2');
        dispatch(new DispatchAction('SET_SONGS', { songs }));
        }else{
          console.log('inside Apptsx useeffect 1');
        dispatch(new DispatchAction('SET_SOCKET', { socket }));
        const { songs } = await send(socket, 'get_songs', {});
        console.log(songs);
        console.log('inside Apptsx useeffect 2');
        dispatch(new DispatchAction('SET_SONGS', { songs }));
        }
        console.log('inside Apptsx useeffect 1');
        dispatch(new DispatchAction('SET_SOCKET', { socket }));
        const { songs } = await send(socket, 'get_songs', {});
        console.log(songs);
        console.log('inside Apptsx useeffect 2');
        dispatch(new DispatchAction('SET_SONGS', { songs }));
      },
      () => {console.log('inside Apptsx useeffect 3');
        dispatch(new DispatchAction('DELETE_SOCKET'));
      },
    );console.log('inside Apptsx useeffect 4');
  }, [searchnumber]);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage state={state} dispatch={dispatch} />
        </Route>
        <Route path="/:instrument">
          <MainPage state={state} dispatch={dispatch} />
          
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
