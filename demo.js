const parody = require('./parody').JingleBellParody;

if (require.main === module) {
  const song1 = new parody();
  song1.play();
}