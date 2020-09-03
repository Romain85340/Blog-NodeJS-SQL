module.exports = {
    getCreatePage: (req, res) => {
        res.render("register")
    },
    createPlayer: (req, res) => {
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let country = req.body.country
        let club = req.body.club
        let position = req.body.position
        let number = req.body.number

        let createPlayer = "INSERT INTO players (firstname, lastname, country, club, position, number) VALUES ('" + firstname + "', '" + lastname + "', '" +
                    country +
                    "', '" +
                    club +
                    "', '" +
                    position +
                    "', '" +
                    number + "')";
        
        db.query(createPlayer, (err, result) => {
            console.log(result);
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect("/");
        });

    },
    getOnePlayer: (req, res) => {
        let id = req.params.id;
        let onePlayer = "SELECT firstname, club, country, lastname, position, number FROM players WHERE id = '" +
        id +
        "'";

        db.query( onePlayer, (err, result) => {
            console.log(result);
            if (err) {
                return res.status(500).send(err);
            }
             res.render("getOnePlayer", {
                players: result[0]
            })
        })
    },
}