let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = 1;
let runnerAge = 19;
if (runnerAge >= 18 && registerEarly === 1)
{
  raceNumber += 1000;
}
if (runnerAge >= 19 && registerEarly === 1)
{
  console.log(`Adult runner ${raceNumber} will race at 9.30`)
}
else if (runnerAge >= 19 && !registerEarly)
{
  console.log(`Adult runner ${raceNumber} will race at 11.00`)
}
else if (runnerAge < 18 && runnerAge >= 10)
{
  console.log(`Youth registrant ${raceNumber} run at 12.30`);
}
else
  console.log('See registration desk');