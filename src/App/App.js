import * as React from "react";
import { Routes, Route } from "react-router-dom";

import MiniDrawer from "../pages/Layout/Drawer";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<MiniDrawer />}>
                  <Route index element={<Dashboard />} />
                  {/*<Route path="products" element={<Products />} />*/}
                  {/*<Route path="suppliers" element={<Supplier />} />*/}
                  {/*<Route path="orders" element={<Orders />} />*/}
                  {/*<Route path="sellings" element={<Selling />} />*/}
                  {/*<Route path="settings" element={<Setting />} />*/}
                  {/*<Route path="*" element={<NoMatch />} />*/}
              </Route>
          </Routes>
      </>

  );
}

export default App;