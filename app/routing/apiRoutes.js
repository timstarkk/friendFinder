// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const friends = require("../data/friends.js");
const tim = 'tim';

// Routes
// =============================================================
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    // Search for Specific Friend then provides JSON
    app.get("/api/friends/:friend", function (req, res) {
        // If the user provides a specific character in the URL...
        if (req.params.friend) {
            // Then display the JSON for ONLY that character.
            for (const friend of friends) {
                if (friend.name === req.params.friend) {
                    res.json(friend)
                }
            }
            // console.log(friends);
            console.log('hello');
        }
    });

    // If a user sends data...
    app.post("/api/friends", function (req, res) {

        console.log('hello from post');
        // Take the request...
        const newFriend = req.body;
        const newName = newFriend.name;
        const newPhoto = newFriend.photo;
        const newScores = newFriend.scores;
        var bestMatch = {
            name: "",
            photo: "",
            difference: 999
        };

        for (const friend of friends) {
            let difference = 0;


            for (let i = 0; i < friend.scores.length; i++) {
                difference += Math.abs(friend.scores[i] - newScores[i]);
            }

            if (difference < bestMatch.difference) {
                bestMatch.name = friend.name;
                bestMatch.photo = friend.photo;
                bestMatch.difference = difference;
            }
        }

        res.json({ bestMatch });
    });

};
