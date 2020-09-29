import campaign from "../data/data.json";

const fs = require('fs');

function Campaign() {
  return {
    data: function() {
      console.log("Campaign: " + JSON.stringify(campaign));
      return campaign;
    },
    save: function() {
      fs.writeFile('campaign.json', JSON.stringify(campaign), err => {
        if(err) {
          throw err;
        }
        console.log('Campaign is saved.');
      });
    }
  };
}

export default Campaign();