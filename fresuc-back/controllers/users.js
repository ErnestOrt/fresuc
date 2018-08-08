
exports.list = function(req, res){
  var users = []
  users.push({name:'Dakota Rice',salary:'$36,738',country:'Niger',city:'Oud-Turnhout'});
  users.push({name:'Minerva Hooper',salary:'$23,738',country:'Curaçao',city:'Sinaai-Waas'});
  users.push({name:'Sage Rodriguez',salary:'$56,142',country:'Netherlands',city:'Overland Park'});
  users.push({name:'Philip Chaney',salary:'$38,735',country:'Korea, South',city:'Gloucester'});

  res.send(users);
};
