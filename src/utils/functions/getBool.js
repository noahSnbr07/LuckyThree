export default function getBool(probability) {
    // probability = probability of returning true
    return Math.floor(Math.random() * 100) <= probability ? true : false;
}
