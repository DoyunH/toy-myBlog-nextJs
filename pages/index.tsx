import type {NextPage} from "next";
import TypeIt from "typeit-react";
import Head from "next/head";
import Image from "next/image";
import {useState} from "react";

type SuperStrongType = {
  children?: React.ReactNode;
};

const SuperStrong = ({children}: SuperStrongType) => {
  return <strong className='font-bold text-slate-900'>{children}</strong>;
};

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <TypeIt
        className='text-5xl text-center mb-10 text-slate-900'
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
        <span>Love </span>

        <TypeIt
          options={{loop: true}}
          getBeforeInit={(instance) => {
            return instance
              .pause(750)
              .delete(7)
              .type("Front-end")
              .pause(750)
              .pause(750)
              .delete(9)
              .type("Technology");
          }}
        >
          Coding
        </TypeIt>
      </div>
    </div>
  );
};

export default Home;
