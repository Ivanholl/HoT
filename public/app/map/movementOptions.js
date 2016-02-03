app.factory('movementOptions', function(identity, HeroResource, Hero) {


    return {
        getMovementOptions: function () {
            var hero = Hero.currentHero
            var currentLocation = hero.location;

            switch (currentLocation) {
                case 'htown':
                    return { //************************human
                        nextZone: "hzone1",
                        hasBranchZone: false,
                        hasPrevZone: false,
                        hasNextZone: true,
                        hasBattle: false
                    };
                    break;
                case "hzone1":
                    return {
                        branchZone: "hzone2",
                        prevZone: "htown",
                        //nextZone: "hzone4",
                        hasBranchZone: true,
                        hasPrevZone: true,
                        hasNextZone: false,
                        hasBattle: true
                    };
                    break;
                case "hzone2":
                    return {
                        prevZone: "hzone1",
                        nextZone: "hzone3",
                        hasBranchZone: false,
                        hasPrevZone: true,
                        hasNextZone: true,
                        hasBattle: true
                    };
                    break;
                case "hzone3":
                    return {
                        prevZone: "hzone2",
                        hasBranchZone: false,
                        hasPrevZone: true,
                        hasNextZone: false,
                        hasBattle: true
                    };
                    break;
                case "otown":
                    return { //***********************ORC
                        nextZone: "ozone1",
                        hasPrevZone: false,
                        hasBranchZone: false,
                        hasNextZone: true,
                        hasBattle: false
                    };
                case "ozone1":
                    return {
                        //nextZone: "ozone7"
                        branchZone: "ozone2",
                        prevZone: "otown",
                        hasNextZone: false,
                        hasPrevZone: true,
                        hasBranchZone: true,
                        hasBattle: true
                    };
                    break;
                case "ozone2":
                    return {
                        //nextZone: "ozone4",
                        branchZone: "ozone3",
                        prevZone: "ozone1",
                        hasNextZone: false,
                        hasPrevZone: true,
                        hasBranchZone: true,
                        hasBattle: true
                    };
                    break;
                case "ozone3":
                    return {
                        prevZone: "ozone2",
                        hasPrevZone: true,
                        hasNextZone: false,
                        hasBranchZone: false,
                        hasBattle: true
                    };
                    break;
                case "dtown":
                    return { //********************dwarf
                        nextZone: "dzone1",
                        hasPrevZone: false,
                        hasNextZone: true,
                        hasBranchZone: false,
                        hasBattle: false
                    };
                    break;
                case "dzone1":
                    return {
                        nextZone: "dzone2",
                        prevZone: 'dtown',
                        hasNextZone: true,
                        hasPrevZone: true,
                        hasBranchZone: false,
                        hasBattle: true
                    };
                    break;
                case "dzone2":
                    return {
                        nextZone: "dzone3",
                        prevZone: 'dzone1',
                        hasNextZone: true,
                        hasPrevZone: true,
                        hasBranchZone: false,
                        hasBattle: true
                    };
                    break;
                case "dzone3":
                    return {
                        //nextZone: "dzone5",
                        prevZone: 'dzone2',
                        branchZone: 'dzone4',
                        hasNextZone: false,
                        hasPrevZone: true,
                        hasBranchZone: false,
                        hasBattle: true
                    };
                    break;
                case "etown":
                    return { //*********************ELF
                        nextZone: "ezone1",
                        //prevZone: 'ezone6',
                        hasNextZone: true,
                        hasPrevZone: false,
                        hasBranchZone: false,
                        hasBattle: false
                    };
                    break;
                case "ezone1":
                    return {
                        nextZone: "ezone2",
                        prevZone: "etown",
                        hasBranchZone: false,
                        hasNextZone: true,
                        hasPrevZone: true,
                        hasBattle: true
                    };
                    break;
                case "ezone2":
                    return {
                        nextZone: "ezone3",
                        prevZone: "ezone1",
                        hasBranchZone: false,
                        hasNextZone: true,
                        hasPrevZone: true,
                        hasBattle: true
                    };
                    break;
                case "ezone3":
                    return {
                        //nextZone: "ezone4",
                        prevZone: "ezone2",
                        hasNextZone: false,
                        hasBranchZone: false,
                        hasPrevZone: true,
                        hasBattle: true
                    };
                    break;
                case "utown":
                    return { //*********************ELF
                        nextZone: "uzone1",
                        //prevZone: 'uzone6',
                        hasNextZone: true,
                        hasPrevZone: false,
                        hasBranchZone: false,
                        hasBattle: false
                    };
                    break;
                case "uzone1":
                    return {
                        nextZone: "uzone2",
                        prevZone: "utown",
                        hasBranchZone: false,
                        hasNextZone: true,
                        hasPrevZone: true,
                        hasBattle: true
                    };
                    break;
                case "uzone2":
                    return {
                        nextZone: "uzone3",
                        prevZone: "uzone1",
                        hasBranchZone: false,
                        hasNextZone: true,
                        hasPrevZone: true,
                        hasBattle: true
                    };
                    break;
                case "uzone3":
                    return {
                        //nextZone: "uzone4",
                        prevZone: "uzone2",
                        hasNextZone: false,
                        hasBranchZone: false,
                        hasPrevZone: true,
                        hasBattle: true
                    };
                    break;
                default:
                    break;
            }
        }
    }
});