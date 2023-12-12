const setPilot = async (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = async (targetSpeed, spaceship) => {
    spaceship.speed = targetSpeed;
};
const sendToMission = async (spaceship) => {
    spaceship.inMission = true;
};
const spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false
};
const pilot = "Ham solo";
spaceship.name = "millenium";
setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);
const spaceship = {
    name: "X-wing",
    speed: 0
};
function accelerate(spaceship, speed) {
    spaceship.speed = speed;
}
accelerate(spaceship, 50);
