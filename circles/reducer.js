const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

function addToArray(array) {
    let newArray =  [
        ...array.push()
    ]
}

function randomNumber(min, max) {
    return (Math.random() * ((max - min) + 1)) + min
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    let { type } = action;

    // ACTION: Add a random circle
    if ( type = "ADD_CIRCLE") {
        console.log("Hello, Buddy!")
        return [
            ...state,
            {
                radius: randomNumber(10, 100),
                color: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`
            }
        ]
    }

    return state;
}