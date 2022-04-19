import type {NextPage} from "next";
import TypeIt from "typeit-react";
import Head from "next/head";
import Image from "next/image";
import {useState} from "react";

type SuperStrongType = {
  children?: React.ReactNode;
};

const SuperStrong = ({children}: SuperStrongType) => {
  return <strong className='font-bold'>{children}</strong>;
};

const Home: NextPage = () => {
  const [buttonText, setButtonText] = useState("Freeze");
  const [instance, setInstance] = useState(null);

  const toggleFreeze = () => {
    if (instance.is("frozen")) {
      instance.unfreeze();
      setButtonText("Freeze");
      return;
    }

    instance.freeze();
    setButtonText("Unfreeze");
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <TypeIt
        className='text-5xl text-center mb-10'
        element={"h3"}
        options={{
          strings: ["This will be typed!"],
          speed: 100,
          waitUntilVisible: true,
        }}
      >
        Code for <SuperStrong>Beginners</SuperStrong>
      </TypeIt>
      <div className='App'>
        <button onClick={toggleFreeze}>{buttonText}</button>

        <TypeIt
          options={{loop: true}}
          getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
          }}
        >
          This will just keep on going.
        </TypeIt>
      </div>
    </div>
  );
};

export default Home;
