import React from "react";
import Particles from "react-particles-js";
import partConf from "./ParticleConfig";

export default function ParticlsBg() {
  return (
    <div>
      <Particles
        params={partConf}
        style={{
          position: "fixed",
          zIndex: "-2",
        }}
      ></Particles>
    </div>
  );
}
