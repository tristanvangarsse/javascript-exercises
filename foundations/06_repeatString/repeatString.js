const repeatString = function (string, num) {
    if (num >= 0) {
        let combined = "";
        for (let i = 0; i < num; i++) {
            combined += string;
        }
        return combined;
    } else {
        return "ERROR";
    }
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
