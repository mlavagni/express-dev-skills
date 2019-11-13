const skills = [
    {skill: 'Programming Languages', years: 2},
    {skill: 'Java', years: 4},
    {skill: 'Client-server architecture', years: 8}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(i) {
    return skills[i];
  }