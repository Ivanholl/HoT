app.factory('movementOptions', function(identity){
    var currentLocation = identity.currentUser.heroList[0].location;

    switch(currentLocation) {
        case 'htown': return {
                nextZone: "hzone1",
                hasBranchZone: false,
                hasPrevZone: false,
                hasNextZone: true
            };
            break;
        case "hzone1": return {
                branchZone: "hzone2",
                prevZone: "htown",
                //nextZone: "hzone4",
                hasBranchZone: true,
                hasPrevZone: true,
                hasNextZone: false
            };
            break;
        case "hzone2": return {
                prevZone: "hzone1",
                nextZone: "hzone3",
                hasBranchZone: false,
                hasPrevZone: true,
                hasNextZone: true
            };
            break;
        case "hzone3": return {
                prevZone: "hzone2",
                hasBranchZone: false,
                hasPrevZone: true,
                hasNextZone: false
            };
            break;

        default:
            break;
    }
});