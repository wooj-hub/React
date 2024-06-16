//태그사용하려면 import 필수
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <Button content="Home" bgColor="main" border_radius={0} color="white" />
      <Button content="Home" bgColor="main" border_radius={10} color="white" />
      <Button content="Home" bgColor="main" border_radius={50} color="white" />

      <Button content="Home" bgColor="side" border_radius={0} color="white" />

      <Button content="Home" bgColor="side" border_radius={10} color="white" />

      <Button content="Home" bgColor="side" border_radius={50} color="white" />
      <Button
        content="Home"
        bgColor="deactive"
        border_radius={0}
        color="black"
      />
      <Button
        content="Home"
        bgColor="deactive"
        border_radius={10}
        color="black"
      />
      <Button
        content="Home"
        bgColor="deactive"
        border_radius={50}
        color="black"
      />
    </div>
  );
}

export default App;
