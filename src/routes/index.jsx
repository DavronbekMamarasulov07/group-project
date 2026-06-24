import React from "react";
import { Route, Routes } from "react-router-dom";
import Anvar from "../pages/Anvar";
import Dilshod from "../pages/Dilshod";
import Emirxan from "../pages/Emirxan";
import Ibrohim from "../pages/Ibrohim";
import Jonibek from "../pages/Jonibek";
import Muhammadamin from "../pages/Muhammadamin";
import Muhammadjon from "../pages/Muhammadjon";
import Shabnam from "../pages/Shabnam";
import Shomuhammad from "../pages/Shomuhammad";
import Sirojiddin from "../pages/Sirojiddin";
import Umarov from "../pages/Umarov";
import Usmonxon from "../pages/Usmonxon";
import Ziyomuhammad from "../pages/Ziyomuhammad";
import Ashurov from "../pages/Ashurov";

const RoutesController = () => {
  return (
    <Routes>
      <Route path="/" element={<Ibrohim />} />

      <Route path="/anvar" element={<Anvar />} />
      <Route path="/dilshod" element={<Dilshod />} />
      <Route path="/emirxan" element={<Emirxan />} />
      <Route path="/ibrohim" element={<Ibrohim />} />
      <Route path="/jonibek" element={<Jonibek />} />
      <Route path="/muhammadamin" element={<Muhammadamin />} />
      <Route path="/muhammadjon" element={<Muhammadjon />} />
      <Route path="/shabnam" element={<Shabnam />} />
      <Route path="/shomuhammad" element={<Shomuhammad />} />
      <Route path="/sirojiddin" element={<Sirojiddin />} />
      <Route path="/umarov" element={<Umarov />} />
      <Route path="/usmonxon" element={<Usmonxon />} />
      <Route path="/ziyomuhammad" element={<Ziyomuhammad />} />
      <Route path="/ashurov" element={<Ashurov />} />
    </Routes>
  );
};

export default RoutesController;
