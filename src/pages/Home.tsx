import Header from "../components/Header"
import Main from "../components/Main"
import { Constant } from "../util/Constanst"

function Home() {
  return (
    <>
    
    <Header title={Constant.TITLE_APP} />
    <Main />
    </>

    )
}

export default Home