function MakeProm(param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('param ', param.param);
      resolve({ param });
    }, param.param);
  });
}

Promise.resolve()
.then(
  () => MakeProm({param: 1000})
)
.then(
  param2 => MakeProm(param2)
)
.then(
  param3 => MakeProm(param3)
)
.catch(err => console.log(err)
);
