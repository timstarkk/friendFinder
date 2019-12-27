// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var orm = require("../config/orm.js");


// Routes
// =============================================================
module.exports = function (app) {

    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/friends/:friend", function (req, res) {

        // If the user provides a specific character in the URL...
        if (req.params.friend) {

            // Then display the JSON for ONLY that character.
            // (Note how we're using the ORM here to run our searches)
            orm.searchFriend(req.params.friend, function (data) {
                res.json(data);
            });
        }

        // Otherwise...
        else {
            // Otherwise display the data for all of the characters.
            // (Note how we're using the ORM here to run our searches)
            orm.allFriends(function (data) {
                res.json(data);
            });
        }

    });

    // If a user sends data...
    app.post("/api/friends", function (req, res) {

        // Take the request...
        var friends = req.body;

        // Then send it to the ORM to "save" into the DB.
        orm.addFriend(friends, function (data) {
            console.log(data);
        });

    });
};
