import Counter from './components/Counter/Counter';
import Tabs from './components/Tabs/Tabs';
import RenderCount from './components/RenderCount/RenderCount';
import OptimizedCounter from './components/OptimizedCounter/OptimizedCounter';
import ElementGenerator from './components/ElementGenerator/ElementGenerator';
import ContextWrapper from './components/ContextWrapper/ContextWrapper';
import CustomHooks from './components/CustomHooks/CustomHooks';

function App() {
  return (
    <div className="wrapper">
      <h1>React Hooks</h1>
      {/* useState */}
      <Counter />

      {/* useEffect */}
      <Tabs />

      {/* useRef */}
      <RenderCount />

      {/* useMemo */}
      <OptimizedCounter />

      {/* useCallback */}
      <ElementGenerator />

      {/* useContext / useReducer*/}
      <ContextWrapper />

      {/* customHooks */}
      <CustomHooks />
    </div>
  );
}

export default App;
