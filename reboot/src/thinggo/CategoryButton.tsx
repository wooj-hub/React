type CategoryButtonProbs = {
  imagesrc: string;
  name: string;
};

const CategoryButton = ({ imagesrc, name }: CategoryButtonProbs) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full">
        <img
          className="rounded-full w-full h-full object-contain"
          src={imagesrc}
          alt=""
        />
      </div>
      <span>{name}</span>
    </div>
  );
};

export default CategoryButton;
