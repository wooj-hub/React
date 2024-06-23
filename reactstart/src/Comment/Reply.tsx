export type ReplyProbs = {
  reply?: string;
};

const Reply = ({ reply = "no Comment" }: ReplyProbs) => {
  //breakword 줄바꿈
  return <span className="break-words font-normal text-gray-300">{reply}</span>;
};

export default Reply;
