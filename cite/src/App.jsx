import { Route, Routes } from "react-router-dom";
import { MainLayouts } from "./layouts/main-layouts";
import { CreatePost } from "./pages/home/create-post/create-post";
import { Edit } from "./pages/home/edit/edit";
import { Home } from "./pages/home/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="edit" element={<Edit />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
