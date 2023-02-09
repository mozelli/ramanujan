import Header from "../../../components/client/Header";
import LatestNews from "../../../components/client/LatestNews";
// import Teste from "../../components/Teste";


function Home() {
  return (
    <>
      <Header />
      <div className="">
        <LatestNews />
        {/* <Teste /> */}
      </div>
    </>
  )
}
export default Home;