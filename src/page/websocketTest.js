import React, { useEffect } from "react";
import ws from 'ws'

export default function Test() {

  useEffect(() => {
    console.log("test");

    console.log(ws)
  }, []);

  return <div>test</div>;
}
