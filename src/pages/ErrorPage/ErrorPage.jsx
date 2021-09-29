import { Fragment } from 'react';
import { LoadScripts } from '../../Hooks';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {

  LoadScripts("/assets/libs/bootstrap/js/bootstrap.bundle.min.js");
  LoadScripts("/assets/libs/metismenu/metisMenu.min.js");
  LoadScripts("/assets/libs/simplebar/simplebar.min.js");
  LoadScripts("/assets/libs/node-waves/waves.min.js");
  LoadScripts("/assets/js/app.js");

  return (
    <Fragment>
      <div className="bg-primary bg-pattern">
        <div className="account-pages my-5 pt-sm-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="mt-4 text-center">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-6">
                      <img src="/assets/images/error-img.png" alt="" className="img-fluid mx-auto d-block" />
                    </div>
                  </div>
                  <h1 className="mt-5 text-uppercase text-white font-weight-bold mb-3">Sorry, Page not Found</h1>
                  <h5 className="text-white-50">We will be back soon</h5>
                  <div className="mt-5">
                    <Link to="/" className="btn btn-success waves-effect waves-light">Back to Home Page</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
