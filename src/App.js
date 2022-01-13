import { Fragment } from 'react';
// import 'sass';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/main.css';
import { Header } from './Components/Header';
import Service from './Components/Service';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Service/>
    </Fragment>
  );
}
export default App;
