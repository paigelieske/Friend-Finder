var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.answers);

        var match = 0;
        var minimum = 40;

        for (var i = 0; i < friends.length; i++) {
            var total = 0;
            for (var j = 0; j < friends[i].answers.length; j++) {
                var difference = Math.abs(req.body.answers[j] - friends[i].answers[j]);
                total += difference;
            }

            if (total < minimum) {
                match = i;
                minimum = total;
            }
        }

        friends.push(req.body);

        res.json(friends[match]);
    });
};