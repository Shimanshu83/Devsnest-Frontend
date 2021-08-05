import "./App";
import UserForm from "./components/UserForm";
import UserFormCustomHooks from "./components/customHook/UserFormCustomHooks";
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>

        {/* component using useState hooks */}
      <UserForm />

      {/* component using custom hooks */}
      <UserFormCustomHooks />

      
    </div>
  );
};

export default App;
