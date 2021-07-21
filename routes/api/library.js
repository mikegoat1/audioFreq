const router = require("express").Router();
const LibraryController = require("../../controllers/LibraryController");

// api/library
router
    .route("/")
    .get(LibraryController.findAll)
    .post(LibraryController.create); 
    
// api/library/:id
router
    .route("/:id")
    .get(LibraryController.findById);
    



modulle.exports = router; 