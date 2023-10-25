// 11ty.dev docs consumes this endpoint for the Eleventy CMS docs
const sourceData = require("../../_data/allrecords.json");

module.exports.data = function() {
  return {
		permalink: "/api/cms.json"
	}
}
module.exports.render = function(data) {
	bundleRecords = sourceData;
    function isCategoryCMS(item) {
        return item["Type"] == "blog post" && item["Categories"].includes("CMS");
      }
    
    const firehose = bundleRecords
    .filter(isCategoryCMS)
    .sort((a, b) => {
      return a.Date > b.Date ? -1 : 1;
    });
};