const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    // Your code here
    let myFlatArr = arr.flat(Infinity)
    let myNewArr = []
    console.log(myFlatArr)
    for (let i = 0; i < myFlatArr.length; i++) {
        if (myFlatArr[i] === "🎅") {
            myNewArr.push("🎅")
        }
    }
    return myNewArr
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))
