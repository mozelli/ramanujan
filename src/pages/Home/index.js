import Header from "../../components/Header";
import LatestNews from "../../components/LatestNews";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <LatestNews />
      </div>
    </>
  )
}
export default Home;