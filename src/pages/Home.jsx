import viteimg from "/public/vite.svg";

const Home = () => {
  return (
    <div>
      <div className="flex items-center bg-black m-3 p-20 rounded-lg justify-between">
        <div className="text-left">
          <h4 className="mb-3">Hi</h4>
          <h2 className="text-3xl mb-3">I am Chinedu Adigwu</h2>
          <h1 className="text-5xl mb-3 font-bold">
            Creative Graphic and Web Designer
          </h1>
          <button className="bg-amber-400 p-3 mt-4 border-gray-300 rounded-full text-black">
            See More
          </button>
        </div>
        <div>
          <img
            src={viteimg}
            width={500}
            height={500}
            alt="picture of vite image"
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-3 place-content-center text-center">
        <div>
          <img
            src={viteimg}
            width={200}
            height={200}
            alt="picture of developer image"
          ></img>
          <h1 className="font-bold">Graphic Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolores nulla placeat alias natus minus dolorum similique voluptatem
            sequi suscipit.
          </p>
        </div>
        <div>
          <img
            src={viteimg}
            width={200}
            height={200}
            alt="picture of developer image"
          ></img>
          <h1>Graphic Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolores nulla placeat alias natus minus dolorum similique voluptatem
            sequi suscipit.
          </p>
        </div>
        <div>
          <img
            src={viteimg}
            width={200}
            height={200}
            alt="picture of developer image"
          ></img>
          <h1>Graphic Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolores nulla placeat alias natus minus dolorum similique voluptatem
            sequi suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
