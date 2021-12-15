const findTheOldest = function (array) {
    const addIfAlive = array.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })
    const sortAge = addIfAlive.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return addIfAlive[0];
};
// Do not edit below this line
module.exports = findTheOldest;

