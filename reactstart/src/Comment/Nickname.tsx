export type NicknameProbs = {
  name?: string;
};

const Nickname = ({ name = "슬픔이" }: NicknameProbs) => {
  return <span className="font-extrabold text-white">{name}</span>;
};

export default Nickname;
