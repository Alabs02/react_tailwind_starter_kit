import { Fragment, forwardRef, Suspense, lazy } from 'react';

const AdminHeader = lazy(() => import(/* webChunkName: Admin.Core */ '../../Components/Core/AdminHeader'));
const AdminSideBar  = lazy(() => import(/* webChunkName: Admin.Core */ '../../Components/Core/AdminSideBar'));
const MiniFooter = lazy(() => import(/* webChunkName: Admin.Core */ '../../Components/Core/MiniFooter'));

const AdminLayout = forwardRef(({ children }, ref) => (
  <Fragment>
    <div ref={ref} id="layout-wrapper">
      <Suspense fallback={<div>Header Loading...</div>}>
        <AdminHeader />
      </Suspense>

      <Suspense fallback={<div>SideBar Loading...</div>}>
        <AdminSideBar />
      </Suspense>

      <div className="main-content">
        <div className="page-content">

          <div className="page-content-wrapper">
            { children && children }
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Footer Loading...</div>}>
        <MiniFooter />
      </Suspense>
    </div>
  </Fragment>
));

export default AdminLayout;
