import MenuIcon from "../atom/MenuIcon";
import PureLabel from "../atom/PureLabel";

const Head = () => {
  return (
    <div className="p-5 bg-purple-500 flex justify-center items-center relative max-w-lg">
      <div className="absolute left-6">
        <MenuIcon />
      </div>
      <PureLabel contents="Website todo" />
    </div>
  );
};

export default Head;
