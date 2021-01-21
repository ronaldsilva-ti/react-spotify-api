import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main from './screens/Main/Main'


  export default () => {
      return(
          <Router>
            <Switch>
                <Route path="/" exact component={ Main } />
            </Switch>
          </Router>
      )
  }