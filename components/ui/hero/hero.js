import Container from "../../layout/container";

const Hero = ({ img, title, desc }) => {
  return (
    <div
      className="text-white relative h-72 flex flex-col justify-end"
      style={{
        backgroundImage: `url(${img})`,
        ackgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mixBlendMode: "multiply",
      }}
    >
      <div className="absolute inset-0 bg-green-9 opacity-60 z-negative"></div>
      <Container cl="py-8 lg:w-4/5">
        <h3 className="font-semibold text-h3 mb-2">{title}</h3>
        <div className="h-1 w-60 bg-green-9 mb-2"></div>
        <p>{desc}</p>
      </Container>
    </div>
  );
};

export default Hero;
