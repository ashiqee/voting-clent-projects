
import MobileVoting from "../../Components/SharedComponent/Button/Animation/mobileVoting";
import Button from "../../Components/SharedComponent/Button/Button";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-96px)]"
      // style={{
      //   backgroundImage: "url(https://i.ibb.co/svx2LpP/Banner-Voting.png)",
      // }}
      >
        <div className="hero-overlay bg-opacity-30">
          <MobileVoting />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"></h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button text={"Vote Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
