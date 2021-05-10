function isValidWalk(walk) {
    let eastWest = 0;
    let northSouth = 0;
    walk.forEach(direction => {
        switch(direction) {
            case 'e' :
                eastWest += 1;
                break;
            case 'w' :
                eastWest -= 1;
                break;
            case 'n' :
                northSouth += 1;
                break;
            case 's' :
                northSouth -= 1;
                break;
        };
    });
    return walk.length === 10 && eastWest === 0 && northSouth === 0;
};

module.exports = { isValidWalk };