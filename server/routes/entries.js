const express = require("express");
const router = express.Router();
const {
    getAllEntriesTable,
    getAllEntriesTable1,
    getAllEntriesLine1,
    getAllEntriesLine2,
    getAllEntriesLine3,
    getAllEntriesLine4,
    getAllEntriesLine5,
    getAllEntriesLine6,
    getAllEntriesLine7,
    getAllEntriesLine8,
    getAllEntriesLine9,
    getAllEntriesLine10,
    getAllEntriesBar1,
    getAllEntriesBar2,
    getAllEntriesBar3,
    getAllEntriesBar4,
    getAllEntriesBar5,
    getAllEntriesBar6,
    getAllEntriesBar7,
    getAllEntriesBar8,
    getAllEntriesPie,
    getAllEntriesPie1,
    getAllEntriesPie2,
    getAllEntriesPie3,
    getAllEntriesPie4,
    getAllEntriesGeo,
    getAllEntriesDefaultbar1,
    getAllEntriesDefaultbar2,
    getAllEntriesDefaultline,
    getAllEntriesDefaultpie
    
} = require("../controllers/entries")


router.route("/table").get(getAllEntriesTable)
router.route("/table1").get(getAllEntriesTable1)
router.route("/line1").get(getAllEntriesLine1)
router.route("/line2").get(getAllEntriesLine2)
router.route("/line3").get(getAllEntriesLine3)
router.route("/line4").get(getAllEntriesLine4)
router.route("/line5").get(getAllEntriesLine5)
router.route("/line6").get(getAllEntriesLine6)
router.route("/line7").get(getAllEntriesLine7)
router.route("/line8").get(getAllEntriesLine8)
router.route("/line9").get(getAllEntriesLine9)
router.route("/line10").get(getAllEntriesLine10)
router.route("/bar1").get(getAllEntriesBar1)
router.route("/bar2").get(getAllEntriesBar2)
router.route("/bar3").get(getAllEntriesBar3)
router.route("/bar4").get(getAllEntriesBar4)
router.route("/bar5").get(getAllEntriesBar5)
router.route("/bar6").get(getAllEntriesBar6)
router.route("/bar7").get(getAllEntriesBar7)
router.route("/bar8").get(getAllEntriesBar8)
router.route("/pie").get(getAllEntriesPie)
router.route("/pie1").get(getAllEntriesPie1)
router.route("/pie2").get(getAllEntriesPie2)
router.route("/pie3").get(getAllEntriesPie3)
router.route("/pie4").get(getAllEntriesPie4)
router.route("/geo").get(getAllEntriesGeo)
router.route("/defaultbar1").get(getAllEntriesDefaultbar1)
router.route("/defaultbar2").get(getAllEntriesDefaultbar2)
router.route("/defaultline").get(getAllEntriesDefaultline)
router.route("/defaultpie").get(getAllEntriesDefaultpie)


module.exports = router;