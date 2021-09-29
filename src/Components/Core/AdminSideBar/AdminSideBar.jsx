import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { RiAdminFill } from 'react-icons/ri';
import { SiGoogleclassroom } from 'react-icons/si';
import { IoIosLogOut } from 'react-icons/io';


const AdminSideBar = () => {
  return (
    <Fragment>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/*- Sidemenu */}
          <div id="sidebar-menu">

            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>

              <li>
                <Link to="/school/admin/dashboard" className=" waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim">
                      <MdDashboard className="nav__icon" />
                    </i>
                    </div>
                  <span>Dashboard</span>
                </Link>
              </li>

              {/*<li>
                <a href="calendar.html" className=" waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim">
                      <GiTeacher className="nav__icon" />
                    </i>
                  </div>
                  <span>School Staff</span>
                </a>
              </li>*/}

              <li>
                <a className="has-arrow waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim">
                      <RiAdminFill className="nav__icon" />
                    </i>
                  </div>
                  <span>School Admin</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><Link to="/admin">Add Admin</Link></li>
                  <li><Link to="/admin">Manage Admins</Link></li>
                </ul>
              </li>

              <li>
                <a className="has-arrow waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim">
                      <GiTeacher className="nav__icon" />
                    </i>
                  </div>
                  <span>School Staff</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><Link to="/staff">Add Staff</Link></li>
                  <li><Link to="/staff">Manage Staff</Link></li>
                </ul>
              </li>

              <li>
                <a className="has-arrow waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim">
                      <SiGoogleclassroom className="nav__icon" />
                    </i>
                  </div>
                  <span>School Classes</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li><Link to="/class">Add Class</Link></li>
                  <li><Link to="/class">Manage Classes</Link></li>
                </ul>
              </li>

              <li>
                <a onClick className=" waves-effect">
                  <div className="d-inline-block icons-sm mr-1">
                    <i className="uim">
                      <IoIosLogOut className="nav__icon" />
                    </i>
                    </div>
                  <span>Logout</span>
                </a>
              </li>

            </ul>


            {/* Left Menu Start */}

          </div>
          {/* Sidebar */}
        </div>
      </div>
  
    </Fragment>
  );
}

export default AdminSideBar;
