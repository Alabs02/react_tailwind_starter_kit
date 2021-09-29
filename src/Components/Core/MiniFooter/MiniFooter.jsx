import { Fragment } from 'react';

const MiniFooter = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              { new Date().getFullYear() } © OneEducation.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-right d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger" /> by AspireUnivas
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default MiniFooter;
