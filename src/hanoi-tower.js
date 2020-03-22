module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    let obj={};
    obj.turns=Math.pow(2, diskNumber) - 1;
    obj.seconds=(Math.pow(2, diskNumber) - 1) / (turnsSpeed / 3600); 
    return obj;
}