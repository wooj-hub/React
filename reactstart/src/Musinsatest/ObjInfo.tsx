export type ObjInfoProbs = {
  name: string;
};

const ObjInfo = ({ name }: ObjInfoProbs) => {
  return <span>{name}</span>;
};

export default ObjInfo;
