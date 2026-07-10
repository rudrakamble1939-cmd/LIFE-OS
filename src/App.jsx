import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import Habits from "./pages/Habits";
import Expenses from "./pages/Expenses";
import AIPlanner from "./pages/AIPlanner";
import ReceiptScanner from "./pages/ReceiptScanner";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* PUBLIC ROUTES */}


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/signup"
          element={<Signup />}
        />



        {/* PROTECTED ROUTES */}



        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Tasks />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Notes />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/habits"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Habits />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Expenses />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        {/* AI PLANNER */}

        <Route
          path="/ai-planner"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AIPlanner />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        {/* RECEIPT SCANNER */}

        <Route
          path="/receipt-scanner"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ReceiptScanner />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



      </Routes>


    </BrowserRouter>

  );

}


export default App;