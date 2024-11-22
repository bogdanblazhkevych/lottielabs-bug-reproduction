'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Lottie from '@lottielab/lottie-player/react';
import myAnimation from './../../public/testing-lot.json';
import { useEffect, useState } from "react";

export default function Home() {
  // // Uncomment these to make it log correctly

  // const [someState, setSomeState] = useState<string | null>(null);

  // useEffect(function() {
  //   // setSomeState('helllo');
  //   setTimeout(function() {
  //     setSomeState('helllo');
  //   }, 0)
  // }, [])

  return (
    <div className={styles.page}>
      <Lottie
        lottie={myAnimation}
        onTransitionStart={function(e) {
            console.log(e.to.name);
        }}
  
      />
    </div>
  );
}
