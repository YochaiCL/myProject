import React from 'react';

//Router between the pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import  user main's pages
import UserHome from './components/userPages/pages/userHome/UserHome';
import About from './components/userPages/pages/about/About';
import UserData from './components/userPages/pages/userData/UserData';

import QuestionAnswerUser from './components/userPages/pages/questionAnswerUser/QuestionAnswerUser';
import NewQuestion from './components/userPages/pages/questionAnswerUser/newQuestion/NewQuestion';
import ExistsQuestionsUser from './components/userPages/pages/questionAnswerUser/existsQuestionsUser/ExistsQuestionsUser';

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
import InfoHD from './components/userPages/pages/firstSteps/hd/info/InfoHD';
import InfoMOTHERBOARD from './components/userPages/pages/firstSteps/motherboard/info/InfoMOTHERBOARD';
import ProductsMOTHERBOARD from './components/userPages/pages/firstSteps/motherboard/products/ProductsMOTHERBOARD';
import InfoPSU from './components/userPages/pages/firstSteps/psu/info/InfoPSU';
import ProductsPSU from './components/userPages/pages/firstSteps/psu/products/ProductsPSU';
import InfoRAM from './components/userPages/pages/firstSteps/ram/info/InfoRAM';
import ProductsRAM from './components/userPages/pages/firstSteps/ram/products/ProductsRAM';
import InfoCABLES from './components/userPages/pages/firstSteps/cables/info/InfoCABLES';
import InfoCASE from './components/userPages/pages/firstSteps/case/info/InfoCASE';
import ProductsCASE from './components/userPages/pages/firstSteps/case/products/ProductsCASE';
import InfoFANS from './components/userPages/pages/firstSteps/fans/info/InfoFANS';
import InfoCPUCOOLER from './components/userPages/pages/firstSteps/cpuCooler/info/InfoCPUCOOLER';
import ProductsCPUCOOLER from './components/userPages/pages/firstSteps/cpuCooler/products/ProductsCPUCOOLER';
import ProductsCpuCoolerFan from './components/userPages/pages/firstSteps/cpuCooler/products/productsCpuCoolerFan/ProductsCpuCoolerFan';
import ProductsCpuCoolerLiquid from './components/userPages/pages/firstSteps/cpuCooler/products/productsCpuCoolerLiquid/ProductsCpuCoolerLiquid';

// Import assembly + pages of assembly
import Assembly from './components/userPages/pages/assembly/Assembly';
import AssembliesVideos from './components/userPages/pages/assembly/assembliesVideos/AssembliesVideos';
import MountedAssemblies from './components/userPages/pages/assembly/mountedAssemblies/MountedAssemblies';

// Import test + pages of test
import TestYourSelf from './components/userPages/pages/testYourSelf/TestYourSelf';
import TestWithHelp from './components/userPages/pages/testYourSelf/testWithHelp/TestWithHelp';
import TestWithoutHelp from './components/userPages/pages/testYourSelf/testWithoutHelp/TestWithoutHelp';
import ExistsTests from './components/userPages/pages/testYourSelf/existsTests/ExistsTests';

// import signUp / signIn / reset
import SignUp from './components/connection/signUp/SignUp';
import SignIn from './components/connection/signIn/SignIn';
import ForgetPassword from './components/connection/forgetPassword/ForgetPassword';

// import admin pages
import AdminHome from './components/adminPages/pages/adminHome/AdminHome';
import UserAdminData from './components/adminPages/pages/userAdminData/UserAdminData';

import Add from './components/adminPages/pages/add/Add';
import AddAssembly from './components/adminPages/pages/add/addAssembly/AddAssembly';

import AddCompLinks from './components/adminPages/pages/add/addComponents/AddCompLinks';
import AddMotherboard from './components/adminPages/pages/add/addComponents/addMotherboard/AddMotherboard';
import AddCase from './components/adminPages/pages/add/addComponents/addCase/AddCase';
import AddCpu from './components/adminPages/pages/add/addComponents/addCpu/AddCpu';
import AddCpuCooler from './components/adminPages/pages/add/addComponents/addCpuCooler/AddCpuCooler';
import AddCpuCoolerFan from './components/adminPages/pages/add/addComponents/addCpuCooler/addCpuCoolerFan/AddCpuCoolerFan';
import AddCpuCoolerLiquid from './components/adminPages/pages/add/addComponents/addCpuCooler/addCpuCoolerLiquid/AddCpuCoolerLiquid';

import AddGpu from './components/adminPages/pages/add/addComponents/addGpu/AddGpu';
import AddPsu from './components/adminPages/pages/add/addComponents/addPsu/AddPsu';
import AddRam from './components/adminPages/pages/add/addComponents/addRam/AddRam';
import AddSsd from './components/adminPages/pages/add/addComponents/addSsd/AddSsd';
import AddSsdM2 from './components/adminPages/pages/add/addComponents/addSsd/addSsdM2/AddSsdM2';
import AddSsdSata from './components/adminPages/pages/add/addComponents/addSsd/addSsdSata/AddSsdSata';

import Delete from './components/adminPages/pages/delete/Delete';
import DeleteComponents from './components/adminPages/pages/delete/deleteComponents/DeleteComponents';
import DeleteAssemblies from './components/adminPages/pages/delete/deleteAssemblies/DeleteAssemblies';

import Update from './components/adminPages/pages/update/Update';
import UpdateCompLinks from './components/adminPages/pages/update/updateComponents/UpdateCompLinks';
import UpdateAssemblies from './components/adminPages/pages/update/updateAssemblies/UpdateAssemblies';

import UpdateCase from './components/adminPages/pages/update/updateComponents/updateCase/UpdateCase';
import UpdateCpu from './components/adminPages/pages/update/updateComponents/updateCpu/UpdateCpu';
import UpdateCpuCooler from './components/adminPages/pages/update/updateComponents/updateCpuCooler/UpdateCpuCooler';
import UpdateCpuCoolerLiquid from './components/adminPages/pages/update/updateComponents/updateCpuCooler/UpdateCpuCoolerLiquid/UpdateCpuCoolerLiquid';
import UpdateCpuCoolerFan from './components/adminPages/pages/update/updateComponents/updateCpuCooler/UpdateCpuCoolerFan/UpdateCpuCoolerFan';
import UpdateGpu from './components/adminPages/pages/update/updateComponents/updateGpu/UpdateGpu';
import UpdateMotherboard from './components/adminPages/pages/update/updateComponents/updateMotherboard/UpdateMotherboard';
import UpdatePsu from './components/adminPages/pages/update/updateComponents/updatePsu/UpdatePsu';
import UpdateRam from './components/adminPages/pages/update/updateComponents/updateRam/UpdateRam';
import UpdateSsd from './components/adminPages/pages/update/updateComponents/updateSsd/UpdateSsd';
import UpdateSsdM2 from './components/adminPages/pages/update/updateComponents/updateSsd/updateSsdM2/UpdateSsdM2';
import UpdateSsdSata from './components/adminPages/pages/update/updateComponents/updateSsd/updateSsdSata/UpdateSsdSata';

import AdminReports from './components/adminPages/pages/adminReports/AdminReports';
import QuestionsAnswersReportAdmin from './components/adminPages/pages/adminReports/questionsAnswersReportAdmin/QuestionsAnswersReportAdmin';
import UsersDataReportsAdmin from './components/adminPages/pages/adminReports/usersDataReportAdmin/UsersDataReportsAdmin';
import LearnedDataReport from './components/adminPages/pages/adminReports/learnedDataReport/LearnedDataReport';

import QuestionAnswerAdmin from './components/adminPages/pages/questionAnswerAdmin/QuestionAnswerAdmin';
import PremiumQuestions from './components/adminPages/pages/questionAnswerAdmin/premiumQuestions/PremiumQuestions';
import AdminQuestions from './components/adminPages/pages/questionAnswerAdmin/adminQuestions/AdminQuestions';

//import premium pages
import PremiumHome from './components/premiumPages/pages/premiumHome/PremiumHome';
import UserPremiumData from './components/premiumPages/pages/userPremiumData/UserPremiumData';
import QuestionAnswerPremium from './components/premiumPages/pages/questionAnswerPremium/QuestionAnswerPremium';
import PremiumReports from './components/premiumPages/pages/premiumReports/PremiumReports';
import QuestionAnswerReportPremium from './components/premiumPages/pages/premiumReports/questionAnswerReportPremium/QuestionAnswerReportPremium';
import UserDataReportPremium from './components/premiumPages/pages/premiumReports/userDataReportPremium/userDataReportPremium';

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
            element={isLoggedIn === 'true' ? <UserHome /> : <SignIn />}
          />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/reset' element={<ForgetPassword />} />

          {/* main's page */}
          <Route path='/userHome' element={<UserHome />} />
          <Route path='/about' element={<About />} />
          <Route path='/user' element={<UserData />} />

          <Route path='/questionAnswerUser' element={<QuestionAnswerUser />} />
          <Route path='/newQuestion' element={<NewQuestion />} />
          <Route
            path='/existsQuestionsUser'
            element={<ExistsQuestionsUser />}
          />

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
          <Route path='/infoHD' element={<InfoHD />} />
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
          <Route path='/infoCASE' element={<InfoCASE />} />
          <Route path='/productsCASE' element={<ProductsCASE />} />
          <Route path='/infoFANS' element={<InfoFANS />} />
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
          <Route path='/test' element={<TestYourSelf />} />
          <Route path='/testWithHelp' element={<TestWithHelp />} />
          <Route path='/testWithoutHelp' element={<TestWithoutHelp />} />
          <Route path='/existsTests' element={<ExistsTests />} />

          {/* assembly + pages of assembly */}
          <Route path='/assembly' element={<Assembly />} />
          <Route path='/assembliesVideos' element={<AssembliesVideos />} />
          <Route path='/mountedAssemblies' element={<MountedAssemblies />} />

          {/* admin paged */}
          <Route path='/adminHome' element={<AdminHome />} />
          <Route path='/userAdmin' element={<UserAdminData />} />
          <Route path='/add' element={<Add />} />
          <Route path='/addAssemblies' element={<AddAssembly />} />

          <Route path='/delete' element={<Delete />} />
          <Route path='/deleteAssemblies' element={<DeleteAssemblies />} />
          <Route path='/deleteComponents' element={<DeleteComponents />} />

          <Route path='/update' element={<Update />} />
          <Route path='/updateAssemblies' element={<UpdateAssemblies />} />
          <Route path='/updateCompLinks' element={<UpdateCompLinks />} />

          <Route path='/updateCase' element={<UpdateCase />} />
          <Route path='/updateCpu' element={<UpdateCpu />} />
          <Route path='/updateCpuCooler' element={<UpdateCpuCooler />} />
          <Route path='/updateCpuCoolerFan' element={<UpdateCpuCoolerFan />} />
          <Route
            path='/updateCpuCoolerLiquid'
            element={<UpdateCpuCoolerLiquid />}
          />
          <Route path='/updateGpu' element={<UpdateGpu />} />
          <Route path='/updateMotherboard' element={<UpdateMotherboard />} />
          <Route path='/updatePsu' element={<UpdatePsu />} />
          <Route path='/updateRam' element={<UpdateRam />} />
          <Route path='/updateSsd' element={<UpdateSsd />} />
          <Route path='/updateSsdM2' element={<UpdateSsdM2 />} />
          <Route path='/updateSsdSata' element={<UpdateSsdSata />} />

          <Route path='/addComponents' element={<AddCompLinks />} />
          <Route path='/addCase' element={<AddCase />} />
          <Route path='/addCpu' element={<AddCpu />} />
          <Route path='/addCpuCooler' element={<AddCpuCooler />} />
          <Route path='/addCpuCoolerFan' element={<AddCpuCoolerFan />} />
          <Route path='/addCpuCoolerLiquid' element={<AddCpuCoolerLiquid />} />
          <Route path='/addGpu' element={<AddGpu />} />
          <Route path='/addMotherboard' element={<AddMotherboard />} />
          <Route path='/addPsu' element={<AddPsu />} />
          <Route path='/addRam' element={<AddRam />} />
          <Route path='/addSsd' element={<AddSsd />} />
          <Route path='/addSsdM2' element={<AddSsdM2 />} />
          <Route path='/addSsdSata' element={<AddSsdSata />} />

          <Route path='/adminReports' element={<AdminReports />} />
          <Route
            path='/questionsAnswersReportAdmin'
            element={<QuestionsAnswersReportAdmin />}
          />
          <Route
            path='/usersDataReportAdmin'
            element={<UsersDataReportsAdmin />}
          />
          <Route path='/learnedDataReport' element={<LearnedDataReport />} />

          <Route
            path='/questionAnswerAdmin'
            element={<QuestionAnswerAdmin />}
          />
          <Route path='/premiumQuestions' element={<PremiumQuestions />} />
          <Route path='/adminQuestions' element={<AdminQuestions />} />

          {/* premium pages */}
          <Route path='/questionAnswerHome' element={<PremiumHome />} />
          <Route path='/userPremium' element={<UserPremiumData />} />
          <Route
            path='/questionAnswerPremium'
            element={<QuestionAnswerPremium />}
          />
          <Route path='/premiumReports' element={<PremiumReports />} />
          <Route
            path='/questionsAnswersReportPremium'
            element={<QuestionAnswerReportPremium />}
          />
          <Route
            path='/usersDataReportPremium'
            element={<UserDataReportPremium />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
