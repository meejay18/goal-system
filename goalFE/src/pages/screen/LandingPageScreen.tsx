import img from "../../assets/TASK.jpg";
import img2 from "../../assets/image2.png";

const LandingPageScreen = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-red-50 w-full h-[30rem]"
    ></div>
  );
};

export default LandingPageScreen;
