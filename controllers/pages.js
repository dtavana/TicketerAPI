module.exports = {
    home: async (req, res) => {
        res.render('home.ejs');
    },
    dashboard: async (req, res) => {
        res.render('dashboard.ejs');
    },
}