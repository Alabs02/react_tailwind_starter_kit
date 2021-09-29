import { Fragment } from 'react';
import { LoadScripts } from '../../Hooks';
import './AdminDashboard.css';

const AdminDashboard = () => {
  
  LoadScripts("/assets/libs/bootstrap/js/bootstrap.bundle.min.js");
  LoadScripts("/assets/libs/metismenu/metisMenu.min.js");
  LoadScripts("/assets/libs/simplebar/simplebar.min.js");
  LoadScripts("/assets/libs/node-waves/waves.min.js");
  LoadScripts("/assets/libs/air-datepicker/js/datepicker.min.js");
  LoadScripts("/assets/libs/air-datepicker/js/i18n/datepicker.en.js");
  LoadScripts("/assets/libs/apexcharts/apexcharts.min.js");
  LoadScripts("/assets/libs/jquery-knob/jquery.knob.min.js");
  LoadScripts("/assets/js/pages/dashboard.init.js");
  LoadScripts("/assets/js/app.js");

  return (
    <Fragment>
      <h1>Admin Dashboard</h1>
    </Fragment>
  );
}

export default AdminDashboard;
