import { Link } from "react-router-dom";

export default function CategorySection(props) {
  const { h3, p, man, woman, accessories, kids } = props.data;

  return (
    <section className="editor-pick py-[80px] relative text-center">
      <h3 className="font-bold text-2xl leading-[32px]  text-[#252B42] align-middle mb-3">
        {h3}
      </h3>
      <p className="text-sm leading-5 align-middle">{p} </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-[50px] relative mx-4">
        <Link to="/">
          {" "}
          <div className="flex">
            <img src={man.src} className="object-cover w-[500px] h-[509px]" />
            <button className="editor-button">{man.name}</button>
          </div>
        </Link>
        <Link to="/">
          <div className="flex">
            <img
              src={woman.src}
              className="object-cover w-[500px] sm:w-[250px]  h-[509px]"
            />
            <button className="editor-button">{woman.name}</button>
          </div>
        </Link>
        <div className="flex-col relative ">
          <Link to="/">
            <div className="flex mb-2">
              <img
                src={kids.src}
                className="object-cover w-[500px] sm:w-[250px] h-[250px]"
              />
              <button className="editor-button">{kids.name}</button>
              <button className=" editor-button mt-[176px] ">
                {accessories.name}
              </button>
            </div>
          </Link>
          <div className="flex">
            <img
              src={accessories.src}
              className="object-cover w-[500px] sm:w-[250px] h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
