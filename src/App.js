import GAListener from 'components/GAListener';
import {MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import OneCardPages from 'pages/OneCardPages'
import {store} from './index';

const CardPage = React.lazy(() => import('pages/CardPage'));


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    console.log('!!!!!!');
    console.log(store.getState())

    return (

        <BrowserRouter basename={getBasename()}>
          <GAListener>
            <Switch>
              <MainLayout breakpoint={this.props.breakpoint}>
                <React.Suspense fallback={<PageSpinner />}>
                  <Route exact path="/cards" component={CardPage} />
                  {OneCardPages(store.getState())}
                </React.Suspense>
              </MainLayout>
              <Redirect to="/" />
            </Switch>
          </GAListener>
        </BrowserRouter>

    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
