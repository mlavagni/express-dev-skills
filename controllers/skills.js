
var Skill = require('../models/skill');



module.exports = {
    index,
    show,
  };

  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }


  function show (req, res){
      console.log(req.params)
      res.render('skills/show',{
          skill: Skill.getOne(req.params.id),
          skillNum: parseInt(req.params.id) + 1
      })
  }