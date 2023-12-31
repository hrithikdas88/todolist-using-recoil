import { RecoilRoot } from "recoil";
import "./App.css";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
