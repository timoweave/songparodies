const say = require('say');

class Karaok {
  constructor(voice='Victoria', speed=1.0, title, lyrics) {
    this.title = title || "Unknown Title";
    this.lyrics = lyrics || [];
    this.voice = voice;
    this.speed = speed;
  }

  play(index = 0) {
    if (!(index < this.lyrics.length)) {
      return; /* done all lyrics */
    }
    if (index === 0) {
      console.log(this.title);
    }
    console.log(index, this.lyrics[index]);
    say.speak(this.lyrics[index], this.voice, this.speed, next.bind(this));

    return;
    function next() { this.play(index + 1); }
  }
}

class YouAndI extends Karaok {
  constructor(voice='Victoria', speed=1.0, youAndITitle, youAndILyrics) {
    const title = youAndITitle || "You and I";
    const lyrics = youAndILyrics || [
      "don't you worry there my honey",
      "we might not have any money",
      "but we've got our love to pay the bills",
      "maybe i think you're cute and funny",
      "maybe i wanna do what bunnies do with you if you know what i mean"
    ];
    super(voice, speed, title, lyrics);
  }
};

class JingleBell extends Karaok {
  constructor(voice='Victoria', speed=1.0, jingleBellTitle, jingleBellLyrics) {
    const title = jingleBellTitle || "Jingle Bell Rock";
    const lyrics = jingleBellLyrics || [
      "Dashing through the snow",
      "On a one horse open sleigh",
      "O'er the fields we go,",
      "Laughing all the way",
      "Bells on bob tail ring,",
      "making spirits bright",
      "What fun it is to laugh and sing",
      "A sleighing song tonight",
      
      "Oh, jingle bells, jingle bells",
      "Jingle all the way",
      "Oh, what fun it is to ride",
      "In a one horse open sleigh",
      "Jingle bells, jingle bells",
      "Jingle all the way",
      "Oh, what fun it is to ride",
      "In a one horse open sleigh  "
    ];
    super(voice, speed, title, lyrics);

  }
}

class JingleBellParody extends Karaok {
    constructor(voice='Victoria', speed=1.0, jingleBellTitle, jingleBellLyrics) {
    const title = jingleBellTitle || "Jingle Bell Rock";
    const lyrics = jingleBellLyrics || [
      "Dashing thur the sites",
      "in a one-big ooh-my pace",
      "over the feeds we go",
      "checking all the jobs",
      "right on good rails link",
      "making cv bright",
      "what fun it is to say and make",
      "a splendid app tonite",

      "babel well, fiddle well",
      "google all the way",

      "Oh, what fun it is to write",
      "in a github open source"
    ];
    super(voice, speed, title, lyrics);
  }

};

module.exports = { Karaok, YouAndI, JingleBell, JingleBellParody };
