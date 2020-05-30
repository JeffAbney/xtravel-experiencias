export default function giveMeList(badObj) {
    let badKeys = Object.keys(badObj);
    for (let i = 0; i < badKeys.length; i += 1) {
        let badKey = badKeys[i];
        let betterKey = badKey.toLocaleLowerCase().replace(/\b\w/g, l => l.toUpperCase());
        delete Object.assign(badObj, { [betterKey]: badObj[badKey] })[badKey];
    }
    console.log('better Keys -', JSON.stringify(badObj));
}