//태그사용하려면 import 필수
import Button from "./Button";
import StatusIcon from "./statusIcon";

//Icon들
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

//react icons
function App() {
  return (
    <div className="App">
      <StatusIcon color="info" Icon={IoIosInformationCircle} />
    </div>
  );
}

export default App;
