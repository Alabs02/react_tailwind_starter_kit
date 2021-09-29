import { HiHome } from 'react-icons/hi';
import { Fragment, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = forwardRef(({ children }, ref) => (
  <Fragment>
    <div ref={ref} className="bg-primary bg-pattern">
      <div className="home-btn d-none d-sm-block">
        <Link to="/">
          <i className="mdi h2 text-white">
            <HiHome />  
          </i>
        </Link>
      </div>

      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <a href="index.html" className="logo">
                  <img src="/assets/images/logo-light.png" height={24} alt="logo" />
                </a>
                <h5 className="font-size-16 text-white-50 mb-4">SIMS</h5>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-5 col-sm-8">
              <div className="card">
                <div className="card-body p-4">
                  <div className="p-2">
                    {children && children}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </Fragment>
));

export default AuthLayout;
