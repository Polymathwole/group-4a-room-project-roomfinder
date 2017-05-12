/* jshint esversion: 6 */
const Rooms = {
    "Meeting": {
        'rooms': {'A':'Available', 'B': 'Unavailable', 'C': 'Available', 'D': 'Available', 'E': 'Unavailable'},
        'activities': 'Meeting room'
    },
    "Games": {
        'rooms': {'A':'Unavailable', 'B': 'Available', 'C': 'Available', 'D': 'Unavailable', 'E': 'Unavailable'},
        'activities': 'Games room'
    },
    "Learning": {
        'rooms': {'A':'Available', 'B': 'Available', 'C': 'Unavailable', 'D': 'Unavailable', 'E': 'Unavailable'},
        'activities': 'Learning room'
    },
    "QuietTime": {
        'rooms': {'A':'Unavailable', 'B': 'Available', 'C': 'Unavailable', 'D': 'Available', 'E': 'Available'},
        'activities': 'Quiet-time room'
    },
    "Work": {
        'rooms': {'A':'Available', 'B': 'Available', 'C': 'Available', 'D': 'Unavailable', 'E': 'Unavailable'},
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