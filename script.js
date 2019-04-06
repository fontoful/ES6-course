/*
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGame, medals) {
        super(name, yearOfBirth, job);
        this.olympicGame = olympicGame;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++
        console.log(this.medals);
    }
}

const johnAthlete6 = new athlete6 ('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();   
*/

/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


// create the function contructors for the Parks and Streets that accept as parameter the name and the build year

// Create a method that will calculate the tree densitty (forumla: sum of all ages/number of parks)


class Element {
    constructor(name, buidlYear) {
        this.name = name;
        this.buidlYear = buidlYear;
    }
}

class Park extends Element {
    constructor(name, buidlYear, area, numTrees) {
        super (name, buidlYear);
            this.area = area; // km2
            this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, buidlYear, length, size = 3) {
        super(name, buidlYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buidlYear}, is a ${classification.get(this.size)}, street`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 0.2, 215),
    new Park('Oak Park', 1953, 0.4, 949)
];


const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4 ),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th street', 2015, 0.8), 
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    // code
    console.log('----- Parks Report ------');
    // Density 
        p.forEach(el => el.treeDensity());
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buidlYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years`);

    // Which park has more than 100 trees
    
}

function reportStreets(s) {
    //code
    console.log('--------- Streets Report ---------');
}

reportParks(allParks);
reportStreets(allStreets);


/*{
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    calcTreeDensity = function(trees, parkArea) {
        const treeDensity = trees/parkArea;
        console.log(treeDensity);
    }

}*/