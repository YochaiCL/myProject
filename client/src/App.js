import React from 'react';

//Router between the pages
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import  user main's pages
import UserHome from './components/userPages/userHome/UserHome';
import About from './components/userPages/pages/about/About';
import User from './components/userPages/user/User';
import Premium from './components/userPages/pages/premium/Premium';

// Import firstSteps + pages of firstSteps
import FirstSteps from './components/userPages/pages/firstSteps/FirstSteps';

import InfoSSD from './components/userPages/pages/firstSteps/ssd/info/InfoSSD';
import ProductsSSD from './components/userPages/pages/firstSteps/ssd/products/ProductsSSD';
import ProductsSsdM2 from './components/userPages/pages/firstSteps/ssd/products/productsSsdM2/ProductsSsdM2';
import ProductsSsdSata from './components/userPages/pages/firstSteps/ssd/products/productsSsdSata/ProductsSsdSata';
import InfoCPU from './components/userPages/pages/firstSteps/cpu/info/InfoCPU';
import ProductsCPU from './components/userPages/pages/firstSteps/cpu/products/ProductsCPU';
import InfoGPU from './components/userPages/pages/firstSteps/gpu/info/InfoGPU';
import ProductsGPU from './components/userPages/pages/firstSteps/gpu/products/ProductsGPU';
import InfoDVD from './components/userPages/pages/firstSteps/dvd/info/InfoDVD';
import ProductsDVD from './components/userPages/pages/firstSteps/dvd/products/ProductsDVD';
import InfoHD from './components/userPages/pages/firstSteps/hd/info/InfoHD';
import ProductsHD from './components/userPages/pages/firstSteps/hd/products/ProductsHD';
import InfoMOTHERBOARD from './components/userPages/pages/firstSteps/motherboard/info/InfoMOTHERBOARD';
import ProductsMOTHERBOARD from './components/userPages/pages/firstSteps/motherboard/products/ProductsMOTHERBOARD';
import InfoPSU from './components/userPages/pages/firstSteps/psu/info/InfoPSU';
import ProductsPSU from './components/userPages/pages/firstSteps/psu/products/ProductsPSU';
import InfoRAM from './components/userPages/pages/firstSteps/ram/info/InfoRAM';
import ProductsRAM from './components/userPages/pages/firstSteps/ram/products/ProductsRAM';
import InfoCABLES from './components/userPages/pages/firstSteps/cables/info/InfoCABLES';
import ProductsCABLES from './components/userPages/pages/firstSteps/cables/products/ProductsCABLES';
import InfoCASE from './components/userPages/pages/firstSteps/case/info/InfoCASE';
import ProductsCASE from './components/userPages/pages/firstSteps/case/products/ProductsCASE';
import InfoFANS from './components/userPages/pages/firstSteps/fans/info/InfoFANS';
import ProductsFANS from './components/userPages/pages/firstSteps/fans/products/ProductsFANS';
import InfoCPUCOOLER from './components/userPages/pages/firstSteps/cpuCooler/info/InfoCPUCOOLER';
import ProductsCPUCOOLER from './components/userPages/pages/firstSteps/cpuCooler/products/ProductsCPUCOOLER';
import ProductsCpuCoolerFan from './components/userPages/pages/firstSteps/cpuCooler/products/productsCpuCoolerFan/ProductsCpuCoolerFan';
import ProductsCpuCoolerLiquid from './components/userPages/pages/firstSteps/cpuCooler/products/productsCpuCoolerLiquid/ProductsCpuCoolerLiquid';

// Import assembly + pages of assembly
import Assembly from './components/userPages/pages/assembly/Assembly';
import AssembliesVideos from './components/userPages/pages/assembly/assembliesVideos/AssembliesVideos';
import MountedAssemblies from './components/userPages/pages/assembly/mountedAssemblies/MountedAssemblies';

// Import test + pages of test
import Test from './components/userPages/pages/test/Test';

// import signUp / signIn / reset
import SignUp from './components/connection/signUp/SignUp';
import Login from './components/connection/login/Login';
import ForgetPassword from './components/connection/forgetPassword/ForgetPassword';

// import admin pages
import AdminHome from './components/adminPages/adminHome/AdminHome';
import UserAdmin from './components/adminPages/userAdmin/UserAdmin';

import Add from './components/adminPages/add/Add';
import AddAssemblies from './components/adminPages/add/addAssemblies/AddAssemblies';

import AddCompLinks from './components/adminPages/add/addComponents/AddCompLinks';
import AddMotherboard from './components/adminPages/add/addComponents/addMotherboard/AddMotherboard';
import AddCase from './components/adminPages/add/addComponents/addCase/AddCase';
import AddCpu from './components/adminPages/add/addComponents/addCpu/AddCpu';
import AddCpuCooler from './components/adminPages/add/addComponents/addCpuCooler/AddCpuCooler';
import AddCpuCoolerFan from './components/adminPages/add/addComponents/addCpuCooler/addCpuCoolerFan/AddCpuCoolerFan';
import AddCpuCoolerLiquid from './components/adminPages/add/addComponents/addCpuCooler/addCpuCoolerLiquid/AddCpuCoolerLiquid';
import AddFans from './components/adminPages/add/addComponents/addFans/AddFans';
import AddGpu from './components/adminPages/add/addComponents/addGpu/AddGpu';
import AddPsu from './components/adminPages/add/addComponents/addPsu/AddPsu';
import AddRam from './components/adminPages/add/addComponents/addRam/AddRam';
import AddSsd from './components/adminPages/add/addComponents/addSsd/AddSsd';
import AddSsdM2 from './components/adminPages/add/addComponents/addSsd/addSsdM2/AddSsdM2';
import AddSsdSata from './components/adminPages/add/addComponents/addSsd/addSsdSata/AddSsdSata';

import Reports from './components/adminPages/reports/Reports';
import UserReports from './components/adminPages/reports/userReports/UserReports';
import PremiumReports from './components/adminPages/reports/premiumReports/PremiumReports';

//import premium pages
import PremiumHome from './components/premiumPages/premiumHome/PremiumHome';
import UserPremium from './components/premiumPages/userPremium/UserPremium';
import QuetionAnswer from './components/premiumPages/questionAnswer/QuestionAnswer';

function App() {
  // take from local storage the information if user is loggedIn or not
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  return (
    <Router>
      <div>
        <Routes>
          {/* signUp / signIn */}
          {/*if we already connected so enter to main page otherwise */}
          <Route
            path='/'
            element={isLoggedIn === 'true' ? <UserHome /> : <Login />}
          />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/reset' element={<ForgetPassword />} />

          {/* main's page */}
          <Route path='/userHome' element={<UserHome />} />
          <Route path='/about' element={<About />} />
          <Route path='/user' element={<User />} />
          <Route path='/premium' element={<Premium />} />
          {/* firstSteps + pages of firstSteps */}
          <Route path='/firstSteps' element={<FirstSteps />} />
          <Route path='/infoSSD' element={<InfoSSD />} />
          <Route path='/productsSSD' element={<ProductsSSD />} />
          <Route path='/productsSsdSata' element={<ProductsSsdSata />} />
          <Route path='/productsSsdM2' element={<ProductsSsdM2 />} />
          <Route path='/infoCPU' element={<InfoCPU />} />
          <Route path='/productsCPU' element={<ProductsCPU />} />
          <Route path='/infoGPU' element={<InfoGPU />} />
          <Route path='/productsGPU' element={<ProductsGPU />} />
          <Route path='/infoDVD' element={<InfoDVD />} />
          <Route path='/productsDVD' element={<ProductsDVD />} />
          <Route path='/infoHD' element={<InfoHD />} />
          <Route path='/productsHD' element={<ProductsHD />} />
          <Route path='/infoMOTHERBOARD' element={<InfoMOTHERBOARD />} />
          <Route
            path='/productsMOTHERBOARD'
            element={<ProductsMOTHERBOARD />}
          />
          <Route path='/infoPSU' element={<InfoPSU />} />
          <Route path='/productsPSU' element={<ProductsPSU />} />
          <Route path='/infoRAM' element={<InfoRAM />} />
          <Route path='/productsRAM' element={<ProductsRAM />} />
          <Route path='/infoCABLE' element={<InfoCABLES />} />
          <Route path='/productsCABLES' element={<ProductsCABLES />} />
          <Route path='/infoCASE' element={<InfoCASE />} />
          <Route path='/productsCASE' element={<ProductsCASE />} />
          <Route path='/infoFANS' element={<InfoFANS />} />
          <Route path='/productsFANS' element={<ProductsFANS />} />
          <Route path='/infoCPUCOOLER' element={<InfoCPUCOOLER />} />
          <Route path='/productsCPUCOOLER' element={<ProductsCPUCOOLER />} />
          <Route
            path='/productsCpuCoolerLiquid'
            element={<ProductsCpuCoolerLiquid />}
          />
          <Route
            path='/productsCpuCoolerFan'
            element={<ProductsCpuCoolerFan />}
          />

          {/* test + pages of test */}
          <Route path='/test' element={<Test />} />
          {/* assembly + pages of assembly */}
          <Route path='/assembly' element={<Assembly />} />
          <Route path='/assembliesVideos' element={<AssembliesVideos />} />
          <Route path='/mountedAssemblies' element={<MountedAssemblies />} />

          {/* admin paged */}
          <Route path='/adminHome' element={<AdminHome />} />
          <Route path='/userAdmin' element={<UserAdmin />} />
          <Route path='/add' element={<Add />} />
          <Route path='/addAssemblies' element={<AddAssemblies />} />

          <Route path='/addComponents' element={<AddCompLinks />} />
          <Route path='/addCase' element={<AddCase />} />
          <Route path='/addCpu' element={<AddCpu />} />
          <Route path='/addCpuCooler' element={<AddCpuCooler />} />
          <Route path='/addCpuCoolerFan' element={<AddCpuCoolerFan />} />
          <Route path='/addCpuCoolerLiquid' element={<AddCpuCoolerLiquid />} />
          <Route path='/addFans' element={<AddFans />} />
          <Route path='/addGpu' element={<AddGpu />} />
          <Route path='/addMotherboard' element={<AddMotherboard />} />
          <Route path='/addPsu' element={<AddPsu />} />
          <Route path='/addRam' element={<AddRam />} />
          <Route path='/addSsd' element={<AddSsd />} />
          <Route path='/addSsdM2' element={<AddSsdM2 />} />
          <Route path='/addSsdSata' element={<AddSsdSata />} />

          <Route path='/reports' element={<Reports />} />
          <Route path='/userReports' element={<UserReports />} />
          <Route path='/premiumReports' element={<PremiumReports />} />

          {/* premium pages */}
          <Route path='/premiumHome' element={<PremiumHome />} />
          <Route path='/userPremium' element={<UserPremium />} />
          <Route path='/questionAnswer' element={<QuetionAnswer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
