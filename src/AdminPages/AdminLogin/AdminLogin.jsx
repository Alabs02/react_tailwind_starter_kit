import { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { PasswordField, TextField } from '../../Components/FormField/FormField';
import { Link } from 'react-router-dom';
import _, { isEmpty } from 'lodash';

const initialFormValue = () => {
  return {
    email: '',
    password: '',
  }
}

const adminLoginSchema = object().shape({
  email: string()
    .email('Invalid Email Address')
    .required('Required'),
  password: string()
    .min(6, 'Too Short')
    .required('Required'),
});

const AdminLogin = () => {
  return (
    <Fragment>
      <h5 className="mb-5 text-center">👋 Welcome Back Admin!</h5>
      <Formik
        initialValues={initialFormValue()}
        validationSchema={adminLoginSchema}
        onSubmit={values => {
          console.log(values);
          // Ready for consumption
        }}
      >
        {props => (
          <Form>
            <div className="row">
              <div className="col-md-12">

                <div className="form-group form-group-custom mb-4">
                  <small htmlFor="email" className="m-0 text-primary">Your Email</small>
                  <Field name="email" type="text" as={TextField} />
                  <ErrorMessage name="email">
                    {msg => <div className="error-msg text-warning">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-group form-group-custom mb-4">
                  <small htmlFor="email" className="m-0 text-primary">Your Password</small>
                  <Field name="password" as={PasswordField} />
                  <ErrorMessage name="password">
                    {msg => <div className="error-msg text-warning">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customControlInline" />
                      <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-md-right mt-3 mt-md-0">
                      <Link to="/school/admin/login" className="text-muted"><i className="mdi mdi-lock" /> Forgot your password?</Link>
                    </div>
                  </div>
                </div>


                <div className="mt-4">
                  <button disabled={(isEmpty(props.errors) && props.isValid && _.get(props.values, 'email', null) > 0 && _.get(props.values, 'password', null) > 0) 
                    ? false : true}
                    className="btn btn-primary btn-block waves-effect waves-light" type="submit">
                    Log In
                  </button>
                </div>
            
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default AdminLogin;
