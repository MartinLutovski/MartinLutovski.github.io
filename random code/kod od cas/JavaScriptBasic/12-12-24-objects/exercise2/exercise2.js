let trainer = {
  name: "Stefan",
  lastName: "Stefanovski",
  academy: "SEDC",
  lecture: "objects",
};

delete trainer.lecture;
trainer.age = 31;
trainer.getFullName = function () {
  return this.name + " " + this.lastName;
};

console.log(trainer);
