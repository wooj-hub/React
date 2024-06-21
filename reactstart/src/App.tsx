import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import SNSLogin from "./SNSLogin";

// 스낵바
import Snackbar from "./Snackbar";
import { IoIosInformationCircle } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <SNSLogin
        backgroundColor="#1877F2"
        snsText={{ sns: "Facebook" }}
        snsIcon={{ Icon: FaFacebook }}
      />
      <SNSLogin
        backgroundColor="black"
        snsText={{ sns: "Apple" }}
        snsIcon={{ Icon: FaApple }}
      />
      <SNSLogin
        backgroundColor="white"
        snsText={{ sns: "Google" }}
        snsIcon={{ Icon: FaGoogle }}
      />

      {/* <Snackbar
        messageText={{ message: "message" }}
        statusIcon={{ color: "check", Icon: IoIosInformationCircle }}
      /> */}
    </div>
  );
}

export default App;
