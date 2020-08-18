
// dependencies 
const path = require('path');
const router = require('express'.Router());
const apiRoutes = require("./api");

// API Routes
apiRoutes.use("/api", apiRoutes);

// reroute for React app
router.us((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router; 

