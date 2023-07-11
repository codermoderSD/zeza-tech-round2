import LinePlot from "./components/LinePlot";

const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Home() {
  const n = getRandomInteger(4, 12);
  return (
    <div className="page">
      <LinePlot n={n} />
    </div>
  );
}

export { getRandomInteger };
export default Home;
