import CommentDate from "./CommentDate";
import Nickname from "./Nickname";
import ProfileImage from "./ProfileImage";
import Reply from "./Reply";

const Comment = () => {
  // import 된 태그에서는 className 사용 불가능
  return (
    <div className="bg-slate-700 w-80 h-20 flex gap-3 p-3">
      <div className="flex-none">
        <ProfileImage />
      </div>
      <div className="w-full flex flex-col flex-initial">
        <div className="w-full flex-none flex justify-between">
          <Nickname />
          <CommentDate />
        </div>
        <div className="flex-1">
          <Reply />
        </div>
      </div>
    </div>
  );
};
export default Comment;
