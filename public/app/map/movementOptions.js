app.factory('movementOptions', function(identity){

    return {
        getMovementOptions: function(){  //Otherwise it is used once
            var currentLocation = identity.currentUser.heroList[0].location;

            switch(currentLocation) {
                case 'htown': return {
                    nextZone: "hzone1",
                    hasBranchZone: false,
                    hasPrevZone: false,
                    hasNextZone: true,
                    battle: false
                };
                    break;
                case "hzone1": return {
                    branchZone: "hzone2",
                    prevZone: "htown",
                    //nextZone: "hzone4",
                    hasBranchZone: true,
                    hasPrevZone: true,
                    hasNextZone: false,
                    battle: true
                };
                    break;
                case "hzone2": return {
                    prevZone: "hzone1",
                    nextZone: "hzone3",
                    hasBranchZone: false,
                    hasPrevZone: true,
                    hasNextZone: true,
                    battle: true
                };
                    break;
                case "hzone3": return {
                    prevZone: "hzone2",
                    hasBranchZone: false,
                    hasPrevZone: true,
                    hasNextZone: false,
                    battle: true
                };
                    break;

                default:
                    break;
            }
        }
    }
});