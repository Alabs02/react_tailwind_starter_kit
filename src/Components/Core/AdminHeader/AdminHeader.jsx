import { Fragment } from 'react';

const AdminHeader = () => {
  return (
    <Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="/assets/images/logo-sm-dark.png" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-dark.png" alt="" height={20} />
                </span>
              </a>
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="/assets/images/logo-sm-light.png" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="/assets/images/logo-light.png" alt="" height={20} />
                </span>
              </a>
            </div>
            <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
              <i className="mdi mdi-backburger" />
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="mdi mdi-magnify" />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ml-2">
              <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-magnify" />
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item waves-effect" id="page-header-flag-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className src="/assets/images/flags/us.jpg" alt="Header Language" height={14} />
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="/assets/images/flags/spain.jpg" alt="user-image" className="mr-2" height={12} /><span className="align-middle">Spanish</span>
                </a>
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="/assets/images/flags/germany.jpg" alt="user-image" className="mr-2" height={12} /><span className="align-middle">German</span>
                </a>
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="/assets/images/flags/italy.jpg" alt="user-image" className="mr-2" height={12} /><span className="align-middle">Italian</span>
                </a>
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <img src="/assets/images/flags/russia.jpg" alt="user-image" className="mr-2" height={12} /><span className="align-middle">Russian</span>
                </a>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                <i className="mdi mdi-tune" />
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                <span className="d-none d-sm-inline-block ml-1">Smith</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block" />
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                {/* item*/}
                <a className="dropdown-item" href="#"><i className="mdi mdi-face-profile font-size-16 align-middle mr-1" /> Profile</a>
                <a className="dropdown-item" href="#"><i className="mdi mdi-credit-card-outline font-size-16 align-middle mr-1" /> Billing</a>
                <a className="dropdown-item" href="#"><i className="mdi mdi-account-settings font-size-16 align-middle mr-1" /> Settings</a>
                <a className="dropdown-item" href="#"><i className="mdi mdi-lock font-size-16 align-middle mr-1" /> Lock screen</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#"><i className="mdi mdi-logout font-size-16 align-middle mr-1" /> Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default AdminHeader;
