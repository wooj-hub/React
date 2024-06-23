//+버튼 누를때마다 숫자 1씩 더하기

Mybutton = () => {
  const num = 0;

  const handle = () => {
    alert("화이팅");
  };
  return (
    <div>
      <span>{num}</span>
      <button onClick={handle}>+</button>
    </div>
  );
};

export default Mybutton;
