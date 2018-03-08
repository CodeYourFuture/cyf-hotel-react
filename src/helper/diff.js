export default function diff(date1, date2) {
    var d1 = new Date(date1)
    var d2 = new Date(date2)
    return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
};