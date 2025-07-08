import "./App.css";
import Pages from "@/pages/index.jsx";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      {/* Hidden netlify forms to help detection */}
      <div hidden>
        <form name="ContactHome" data-netlify="true">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
        </form>
        <form name="VintageWorkshop" data-netlify="true">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
        </form>
        <form name="ProWorkshop" data-netlify="true">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
        </form>
      </div>

      <Pages />
      <Toaster />
    </>
  );
}

export default App;
