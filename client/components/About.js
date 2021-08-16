import React from "react";
import Particles from "react-tsparticles";

const About = () => {
  return (
    <section className="about-page">
      <Particley className="particles-holder" />
      <section className="about-holder">
        <h1>John T. Hagerman</h1>
        <h4>Created August 2021</h4>
        <div>
        <p>
          This Simple website was made part of a four day stackathon assignment
          as part of the curriculum at Full Stack Academy of Code. Weather data
          is pulled from the National Weather Service free API.{"  "}
          <a href="https://github.com/jthagerman/Little-Weather-App/blob/main/README.md">
            CLICK HERE
          </a>{" "} to see the readme in the Github repo to read about lessons and limitations learned when making
          this project
        </p>

        </div>

      </section>
    </section>
  );
};
class Particley extends React.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        height={800}
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default About;
