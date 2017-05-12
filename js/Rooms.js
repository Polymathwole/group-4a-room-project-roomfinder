
// class Rooms {
//     constructor(name) {
//         this._name = name;
//         this._total = 5;
//     }

//     get totalAvailable() {
//         return this._total;
//     }

//     checkIn() {
//         this._total-= 1;
//         return true;
//     }

// }

// class Meeting extends Rooms {

//     get type() {
//         return 'Meetin Room';
//     }

// }


const Rooms = {
    "Meeting": {
        'rooms': {'A':true, 'B': true, 'C': true, 'D': true, 'E': true},
        'activities': 'Meeting room'
    },
    "Games": {
        'rooms': {'A':true, 'B': true, 'C': true, 'D': true, 'E': true},
        'activities': 'Games room'
    },
    "Learning": {
        'rooms': {'A':true, 'B': true, 'C': true, 'D': true, 'E': true},
        'activities': 'Learning room'
    },
    "QuietTime": {
        'rooms': {'A':true, 'B': true, 'C': true, 'D': true, 'E': true},
        'activities': 'Quiet-time room'
    },
    "Work": {
        'rooms': {'A':true, 'B': true, 'C': true, 'D': true, 'E': true},
        'activities': 'Working room'
    },

};

let Meeting = Rooms.Meeting,
    Games = Rooms.Games,
    Learning = Rooms.Learning,
    QuietTime = Rooms.QuietTime,
    Work = Rooms.Work;


const totalRooms = (inputRoom) => {
    let count = 0;
    for (let room in inputRoom) {
        count +=1;
    }
    return count;
};

const totalCategories = totalRooms(Rooms);


// const checkAVailable = (inputRoom) => {
//     for (let roomNum in inputRoom) {
//         if (inputRoom(roomNum) === true) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// };
