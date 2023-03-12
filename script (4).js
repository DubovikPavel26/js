const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

function showProgrammingLangs(plan) {
for(let key in plan.skills.programmingLangs){
  return `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}/n`
}
}



console.log(showProgrammingLangs(personalPlanPeter))

