import { commentTimeStamp } from "../util";

const CommentDate = () => {
  return (
    <span className="font-normal text-gray-400">{commentTimeStamp()}</span>
  );
};

export default CommentDate;
