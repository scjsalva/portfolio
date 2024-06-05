<template>
  <div>
    <div class="background" id="particle-js" style="background: red;">
      <img src="../assets/images/landing.png" class="bg-image"/>
    </div>
    <div class="content">
      <h3 class="landing-header">ILLUSTRATIONS</h3>
      <h3 class="landing-subheader">PAINTINGS  |   ENVIRONMENT SCENES  |   CONCEPT & VECTOR ART</h3>
      <br>
      <div class="landing-btn">See More</div>
    </div>
    <div class="footer">
      <small>SCJ Designs | 2024</small>
    </div>
    <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="fire"
    />
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data(){
    return {
      config: {
      "particles": {
        "number": {
          "value": 71,
          "density": {
            "enable": true,
            "value_area": 1262.6362266116362
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 50,
            "height": 50
          }
        },
        "opacity": {
          "value": 0.8,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.05,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3.1565905665290903,
          "direction": "top-left",
          "random": true,
          "straight": true,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 2998.7610382026364,
            "rotateY": 2525.2724532232724
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 10,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 89.32849335314796,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
      },
      fire: {
          "particles": {
              "number": {
                  "value": 200,
                  "density": {
                      "enable": true
                  }
              },
              "color": {
                  "value": [
                      "#fdcf58",
                      "#757676",
                      "#f27d0c",
                      "#800909",
                      "#f07f13"
                  ]
              },
              "opacity": {
                  "value": {
                      "min": 0.1,
                      "max": 0.5
                  }
              },
              "size": {
                  "value": {
                      "min": 1,
                      "max": 3
                  }
              },
              "move": {
                  "enable": true,
                  "speed": 6,
                  "random": false
              }
          },
          "interactivity": {
              "detectsOn": "window",
              "events": {
                  "onClick": {
                      "enable": true,
                      "mode": "push"
                  }
              }
          }
      }
    }
  },
  methods: {
  },
  mounted(){
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
body, html {
    font-family: "Saira", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    height: 100%;
    margin: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      min-height: 100%;
      filter: blur(1px);
      opacity: 0.9;
      object-fit: cover;
    }
}

.background::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: url('../assets/images/landing.png') no-repeat center center;
    background-size: cover;
    background-color: black;
    filter: blur(20px);
    z-index: -1;
    clip-path: inset(10px round 10px);
 }

.centered-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
}
.content{
  z-index: 1000;
  position: absolute;
  transform: translate(-50%, -40%);
  max-width: 100%;
  text-align: center;
}
.landing-header{
  font-size: 10em;
  color: white;
  word-wrap: normal;
  overflow-wrap: normal;
  word-break: normal;
  line-height: 0.8em;
  display: inline-block;
  margin-bottom: 0;
}
.landing-subheader{
  font-size: 1.2em;
  display: inline-block;
  color: white;
  letter-spacing: 0.3em;
  font-family: "Genos", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
}
.landing-btn{
  font-size: 1.4em;
  display: inline-block;
  text-align: center;
  color: white;
  background: black;
  border: red solid 0.5px;
  border-radius: 100px;
  padding: 5px 35px;
  font-size: 1em;
  font-family: "Saira", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  cursor: pointer;
}
.landing-btn:hover{
  border: white solid 0.5px;
}
.footer{
  z-index: 1000;
  position: absolute;
  bottom: 10px;
  font-size: 0.8em;
  color: white;
  transform: translateX(-50%);
  opacity: 0.5;
  max-width: 100%;
  text-align: center;
}
#tsparticles{
  canvas{
    z-index: 2000; 
  }
}
/* Break words at smaller screen widths */
@media (max-width: 1300px) {
    .content{
      transform: translate(-50%, -55%);
    }
    .landing-header {
        font-size: 8em;
        word-wrap: break-word;
        overflow-wrap: break-word;
        word-break: break-all;
        margin-bottom: 0.1em;
    }
    .landing-subheader{
      font-size: 1em;
      margin-bottom: 2em;
    }
}

/* Adjust settings for even smaller screens */
@media (max-width: 600px) {
    .landing-subheader{
      font-size: 0.8em;
    }
}

/* Adjust settings for even smaller screens */
@media (max-width: 400px) {
    .content{
      transform: translate(-50%, -50%);
    }
    .landing-header {
        font-size: 6em;
        word-wrap: break-word;
        overflow-wrap: break-word;
        word-break: break-word;
        hyphens: auto;
        margin-bottom: 0.1em;
    }
    .landing-subheader{
      font-size: 0.6em;
      margin-bottom: 3em;
    }
}
</style>