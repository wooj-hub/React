import ObjAll from "./Musinsatest/ObjAll";

function App() {
  return (
    <div className="App">
      <ObjAll
        //객체로 전달할 땐 = 이 아닌 :
        image={{ imagesrc: "shoe.jpg" }}
        name={{ name: "무신사 스탠다드" }}
        price={{ price: "90000" }}
      />

      <ObjAll
        //객체로 전달할 땐 = 이 아닌 :
        image={{ imagesrc: "shoe1.jpg" }}
        name={{ name: "아디다스" }}
        price={{ price: "120000", discount: "33" }}
      />
    </div>
  );
}

export default App;
