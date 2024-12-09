import DemoMenubar from "./components/demo/DemoMenubar";
import DemoHeader from "./components/demo/DemoHeader";
import DemoContent from "./components/demo/DemoContent";
import DemoMain from "./components/demo/DemoMain";
import DemoMethods from "./components/demo/DemoMethods";
import DemoDesign from "./components/demo/DemoDesign";
import DemoUsers from "./components/demo/DemoUsers";
import DemoBlogs from "./components/demo/DemoBlogs";
import DemoAsset from "./components/demo/DemoAsset";

function App() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-20">
        <DemoMenubar />
        <DemoHeader />
        <DemoContent />
        <DemoMain />
        <DemoMethods />
        <DemoDesign />
        <DemoUsers />
        <DemoBlogs />
        <DemoAsset />
      </div>
    </>
  );
}

export default App;
