import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Table2 from "./scenes/table2";
import Table1 from "./scenes/table1";
import {Bar1} from "./scenes/bar1";
import {Bar2} from "./scenes/bar2";
import {Line1} from "./scenes/line1";
import {Pie1} from "./scenes/pie1";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {MiniDrawer} from "./scenes/global/Sidebar"


function App() {
  const [theme, colorMode] = useMode();
  
  return (

        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <MiniDrawer  />
              <main className="content">
                 <Topbar  />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/table1" element={<Table1 />} />
                  <Route path="/table2" element={<Table2 />} />
                  <Route path="/bar1" element={<Bar1 />} />
                  <Route path="/bar2" element={<Bar2 />} />
                  <Route path="/pie1" element={<Pie1 />} />
                  <Route path="/line1" element={<Line1 />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
     
  );
}

export default App;