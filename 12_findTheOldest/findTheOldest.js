const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function (array) {
    const addIfAlive = array.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })
    console.log(addIfAlive)
    const sortAge = addIfAlive.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return addIfAlive[0];
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

