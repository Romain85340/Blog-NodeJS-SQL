module.exports = {
    homePage: (req, res) => {
        
        let players = "SELECT firstname, lastname, country, club, position, number FROM players;";
        db.query(players, (err, result) => {
            console.log(result);
            if(err){
                res.send(err)
            } res.render("home", {players: result})
        })
    }
}