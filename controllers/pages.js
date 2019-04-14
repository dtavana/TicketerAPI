module.exports = {
    home: async (req, res) => {
        res.render('home.ejs');
    },
    settings: async (req, res) => {
        res.render('settings.ejs');
    },
}