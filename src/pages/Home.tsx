import React,{useState} from "react";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Loading from "./Loading";
import ComposeEmail from "../components/Home/ComposeEmail";

const Home = () => {
const [isLoading, setIsLoading] = useState(false)
const [showEditor, setShowEditor] = useState(false)

if(isLoading){
  return <Loading dimensions="h-screen w-screen"/>
}

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
      <Header />
      <Navbar onToggleLoading={setIsLoading} onToggleEditor={setShowEditor} />
      {showEditor && <ComposeEmail onToggleEditor={setShowEditor} />}
    </div>
  );
};

export default Home;
