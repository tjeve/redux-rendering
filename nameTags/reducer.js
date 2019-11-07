const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    if (type === "ADD_NAMETAG") {
        console.log(addName)
        return [
            ...state, //spread operator is used to copy the previous array and then add to it. 
            `${name}` //this adds the name of the next item in the array
        ]
    }
    return state;
}