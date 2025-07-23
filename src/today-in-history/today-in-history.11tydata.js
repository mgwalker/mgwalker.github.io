const days = [
  {
    date: "March 25",
    iso: "0325",
    entries: [
      {
        caption:
          "Man looking into a telescope at Saturn, saying 'That's a big-ass moon.'",
        title: "Christiaan Huygens discovers the largest moon of Saturn, Titan",
        year: "1655",
      },
    ],
  },
  {
    date: "March 26",
    iso: "0326",
    entries: [
      {
        caption:
          "A car driving down the road with two people. One person says, 'You are really bad at this and we never should have allowed it.'",
        title: "The UK introduces a driving test.",
        year: "1934",
      },
    ],
  },
  {
    date: "March 27",
    iso: "0327",
    entries: [
      {
        caption:
          "Yoda and Chewbacca standing on the sidewalk above Billy Dee Williams's star. Yoda says, 'Billy Dee Williams, who the hell is?' Chewbacca grunts in response.",
        title:
          "Billy Dee Williams receives a star on the Hollywood Walk of Fame.",
        year: "1985",
      },
    ],
  },
  {
    date: "March 28",
    iso: "0328",
    entries: [
      {
        caption:
          "The king stands holding a red dress on a coat hanger and says, 'Okay, I got it, but I don't get it.'",
        title:
          "The Parliament asks King George II to seek redress from Spain, kicking off the War of Jenkins' Ear.",
        year: "1738",
      },
    ],
  },
  {
    date: "March 29",
    iso: "0329",
    entries: [
      {
        caption:
          "The queen stands and says, 'I think those Yanks need a nice hat. Make it so.'",
        title:
          "Queen Victoria gives royal assent to the British North American Act, which created Canada.",
        year: "1867",
      },
      {
        caption:
          "A man stands with wide eyes holding a bottle of Coca-Cola and says, 'Cocaine mixed with water is AMAZING.'",
        title: "John Pemberton brews the first batch of Coca-Cola in Atlanta.",
        year: "1886",
      },
      {
        caption:
          "A man standing in front of the US Capitol building with an 'I voted' sticker says, 'We're still not represented in Congress, though.'",
        title:
          "The 23rd Amendment is ratified, giving residents of Washington, DC, a vote in Presidential elections.",
        year: "1961",
      },
    ],
  },
  {
    date: "March 30",
    iso: "0330",
    entries: [
      {
        caption:
          "A sheep and a man standing in a field. The sheep says 'baaah' but is cut off by the man saying, 'You shut up you little shit.'",
        title: "The Silence of the Lambs wins the Oscar for Best Picture.",
        year: "1992",
      },
    ],
  },
  {
    date: "March 31",
    iso: "0331",
    entries: [
      {
        caption:
          "A man adjusts a clock and says, 'Time to spring forward!' A piranha creeper from Mario looks at the man and says, 'Say sike right now.'",
        title:
          "Daylight Savings Time goes into effect in the United States for the first time.",
        year: "1918",
      },
    ],
  },
  {
    date: "April 1",
    iso: "0401",
    entries: [
      {
        caption:
          "Two men look at a chalkboard showing the formation of the universe. One says, 'So the whole universe is really just debris?' The other says, 'It WOULD explain a lot.'",
        title:
          "A paper describing how the elements came into being after the Big Bang is published by Alpher, Gamow, and Bethe.",
        year: "1948",
      },
    ],
  },
  {
    date: "April 2",
    iso: "0402",
    entries: [
      {
        caption:
          "The computer HAL 9000 is speaking: 'Look Dave, I can see you're really upset about this. I honestly think you ought to sit down calmly, take a stress pill, and think things over. If you could see the next 19 years, you might not mind the lack of oxygen right now.",
        title: "2001: A Space Odyssey premiers",
        year: "1968",
      },
    ],
  },
  {
    date: "April 3",
    iso: "0403",
    entries: [
      {
        caption:
          "A king stands with arms raised in victory and says, 'HA! I took the cookies, I left the seat up, I farted in the car, and now there's nothing you can do about it!'",
        title: "Edward the Confessor is crowned King of England",
        year: "1043",
      },
    ],
  },
  {
    date: "April 4",
    iso: "0404",
    entries: [
      {
        caption:
          "A man stands at a lectern and says, 'We should ban chemical weapons. Chemicals are very bad and we must completely stop using them to make weapons!' An aside reads, '...and peace reigned...'",
        title: "Ronald Reagan calls for a ban on chemical weapons",
        year: "1984",
      },
    ],
  },
  {
    date: "April 5",
    iso: "0405",
    entries: [
      {
        caption:
          "Two Pilgrims stand on shore walking towards a boat. One says, 'Let's get the hell out of here.' The other responds, 'Yeah, this place is bananas.'",
        title:
          "The Mayflower departs from Plymouth, Massachusetts, on a return voyage to England.",
        year: "1621",
      },
    ],
  },
  {
    date: "April 6",
    iso: "0406",
    entries: [
      {
        caption:
          "A tiger stands to the side and exclaims, 'You're grrrrrrreat!'",
        title: "The first Tony Awards",
        year: "1947",
      },
    ],
  },
  {
    date: "April 7",
    iso: "0407",
    entries: [
      {
        caption:
          "Two people stand before a judge. The American is holding a bunch of bananas and says, 'This shit is bananas! B A N A N A S!' The European responds, 'No it isn't, you cheerleader.' The judge sighs and says, 'Yeah, those are very clearly bananas.",
        title:
          "The World Trade Organization ends the long-running dispute between the United States and the European Union about bananas, ruling in favor of the US.",
        year: "1999",
      },
    ],
  },
  {
    date: "April 8",
    iso: "0408",
    entries: [
      {
        caption:
          "A female admiral stands at a table of other people and says, 'Yes, everyone will make fun of it, but we must make it good because these doofuses will be using whatever we make for at least 60 years.",
        title:
          "Grace Hopper and her team meet for the first time to begin creating what will eventually become COBOL.",
        year: "1959",
      },
    ],
  },
  {
    date: "April 9",
    iso: "0409",
    entries: [
      {
        caption:
          "The US state of Georgia says, 'I denounce the Soviet Union and declare my independence!' The US state of Alabama responds, 'Dude, what the hell?'",
        title: "Georgia declares independence from the Soviet Union.",
        year: "1991",
      },
    ],
  },
  {
    date: "April 10",
    iso: "0410",
    entries: [
      {
        caption:
          "Four people are in a Volkswagen Beetle. One man stands outside waving and says, 'Sorry boys, it was just too cramped in there.'",
        title: "Paul McCartney announces he is leaving the Beatles.",
        year: "1970",
      },
    ],
  },
  {
    date: "April 11",
    iso: "0411",
    entries: [
      {
        caption:
          "A general stands speaking and says, 'Old soldiers never die, just fade aw– no! Wait! Not literally!' as his body fades away",
        title:
          "General Douglas MacArthur is relieved of command in Korea by President Harry Truman",
        year: "1951",
      },
    ],
  },
  {
    date: "April 12",
    iso: "0412",
    entries: [
      {
        caption:
          "A jukebox plays 'Rock Around the Clock' while Fonzie says 'eeeyyyyyy'",
        title: "Billy Haley and the Comets record 'Rock Around the Clock'",
        year: "1954",
      },
    ],
  },
  {
    date: "April 13",
    iso: "0413",
    entries: [
      {
        caption:
          "A choir sings on stage. A man in the audience stands with raised fist and says, 'You havent said Messiah a single time!",
        title: "First performance of Handel's Messiah",
        year: "1742",
      },
    ],
  },
  {
    date: "April 14",
    iso: "0414",
    entries: [
      {
        caption:
          "Soldiers behind a pillow fort hold pillows above their head while soldiers on the other side charge with pillows.",
        title: "US Civil War battle of Fort Pillow, Tennessee",
        year: "1862",
      },
    ],
  },
  {
    date: "April 15",
    iso: "0415",
    entries: [
      {
        caption:
          "Jackie Robinson stands holding a baseball bat, wearing a Brooklyn Dodgers uniform with number 47.",
        title:
          "Jackie Robinson debuts for the Brooklyn Dodgers, the first African-American allowed to play in US major league baseball.",
        year: "1947",
      },
    ],
  },
  {
    date: "April 16",
    iso: "0416",
    entries: [
      {
        caption:
          "A bat-winged man with boxing gloves faces an oversided revolver for a fight.",
        title: "In Dodge City, Kansas, Bat Masterson has his final gunfight.",
        year: "1881",
      },
    ],
  },
  {
    date: "April 17",
    iso: "0417",
    entries: [
      {
        caption:
          "A person is chased by a lion. They say, 'Why did we pick a lion?'",
        title:
          "The Metro, Goldwyn, and Mayer film studios merge to create MGM.",
        year: "1924",
      },
    ],
  },
  {
    date: "April 18",
    iso: "0418",
    entries: [
      {
        caption: "A person reclines in a chair and says, 'Best. Day. Ever.'",
        title:
          "BBC Radio news announces 'there is no news' and broadcasts music instead.",
        year: "1930",
      },
    ],
  },
  {
    date: "April 19",
    iso: "0419",
    entries: [
      {
        caption:
          "A man seeing waves of colors says, 'The snozzberries taste like snozzberries!'",
        title:
          "Albert Hoffman deliberately doses himself with LSD for the first time.",
        year: "1943",
      },
    ],
  },
  {
    date: "April 20",
    iso: "0420",
    entries: [
      {
        caption: "A red German Fokker Dr.1 triplane flies across the page.",
        title:
          "Manfred von Richtofen shoots down two enemies, getting his 79th and 80th victories.",
        year: "1918",
      },
    ],
  },
  {
    date: "April 21",
    iso: "0421",
    entries: [
      {
        caption:
          "Snoopy is dressed in old-timey pilot gear, sitting on top of his doghouse. He says 'got im'",
        title:
          "Baron von Richtofen, better known as the Red Baron, is shot down for the last time",
        year: "1918",
      },
    ],
  },
  {
    date: "April 22",
    iso: "0422",
    entries: [
      {
        caption:
          "A person pointing at a calendar labeled April 22 says, 'And this is the day it all went to shit.'",
        title:
          "NCSA Mosaic web browser version 1.0 released, bringing the modern web to life",
        year: "1993",
      },
    ],
  },
  {
    date: "April 23",
    iso: "0423",
    entries: [
      {
        caption: "Wrigley Field",
        title: "First game at Wrigley Field, then known as Weegham Park",
        year: "1914",
      },
    ],
  },
  {
    date: "April 24",
    iso: "0424",
    entries: [
      {
        caption:
          "A queen and a dolphin stand in front of the Notre Dame cathedral in Paris. The queen thinks, 'He doesnt look anything like his profile pic...'",
        title:
          "Mary, Queen of Scots, marries the Dauphin of France at Notre Dame de Paris",
        year: "1558",
      },
    ],
  },
  {
    date: "April 25",
    iso: "0425",
    entries: [
      {
        caption: "A DNA double helix",
        title:
          "The structure of DNA as a double-helix is reported in the journal Nature in three simultaneous papers by Watson and Crick (describing a physical model of DNA), and Wilkins and Franklin (describing the data that underpinned the physical model).",
        year: "1953",
      },
    ],
  },
  {
    date: "April 26",
    iso: "0426",
    entries: [
      {
        caption: "A Chicago Cubs baseball player throws a ball",
        title:
          "Cubs outfielder Jack McCarthy becomes the first major league player to throw out three runners at home plate in a single game",
        year: "1905",
      },
    ],
  },
  {
    date: "April 27",
    iso: "0427",
    entries: [
      {
        caption: "A mouse is sitting at a computer, typing commands",
        title: "Xerox PARC introduces the computer mouse",
        year: "1981",
      },
    ],
  },
  {
    date: "April 28",
    iso: "0428",
    entries: [
      {
        caption:
          "A baby wearing a cowboy hat and holster is crawling away from a crib",
        title: "Billy the Kid escapes from jail",
        year: "1881",
      },
    ],
  },
  {
    date: "April 29",
    iso: "0429",
    entries: [
      {
        caption:
          "A woman in armor stands outside a castle, looking out towards enemy soldiers and says, 'What if, instead of saving this old Orleans, we just built a new one?'",
        title:
          "Joan of Arc arrives to lift the siege of Orleans in the Hundred Years War",
        year: "1429",
      },
    ],
  },
  {
    date: "April 30",
    iso: "0430",
    entries: [
      {
        caption:
          "A king is throwing an orange toilet screaming, 'KING OF THROWING TOILETS!'",
        title:
          "Willem-Alexander is inaugurated King of the Netherlands after the abdication of Beatrix",
        year: "2013",
      },
    ],
  },
  {
    date: "May 1",
    iso: "0501",
    entries: [
      {
        caption:
          "People gathered around a table, Scottish flags on one side, English on the other. Two people sit at the table signing papers. One Scottish person says, 'We're really going to regret this in 300 years or so...'",
        title:
          "The Acts of Union joining the Kingdoms of England and Scotland into the Kingdom of Great Britain takes effect.",
        year: "1707",
      },
    ],
  },
  {
    date: "May 2",
    iso: "0502",
    entries: [
      {
        caption:
          "A man looks into a telescope at a pair of stars encircled with 001100010010011110100001101101110011 and says, '...0011?' Behind him, a paradox-correcting timesphere opens with a robotic leg sticking out.",
        title:
          "Xi Ursae Majoris, the first binary star discovered, is spotted by William Herschel.",
        year: "1780",
      },
    ],
  },
  {
    date: "May 3",
    iso: "0503",
    entries: [
      {
        caption:
          "A person is looking at a TV and says 'Why do people like this so much?' On the TV is a derby hat with the Kentucky flag waving in the background.",
        title: "The Kentucky Derby is televised nationally for the first time.",
        year: "1952",
      },
    ],
  },
  {
    date: "May 4",
    iso: "0504",
    entries: [
      {
        caption:
          "A bottle of bourbon wearing a crown says, 'Down with wine! Hail to the king, baby!'",
        title:
          "The Bourbon Restoration begins in France with the exile of Napoleon and the new reign of Louis XVIII.",
        year: "1814",
      },
    ],
  },
  {
    date: "May 5",
    iso: "0505",
    entries: [
      {
        caption:
          "An angry monkey gestures wildly, wearing a golden cross and a sash saying 'William Jennings Bryan.' A person standing next to it says, 'I mean sure, not EVERYONE has evolved, but still...'",
        title:
          "John T. Scopes is arrested for teaching evolution in violation of Tennessee law.",
        year: "1925",
      },
    ],
  },
  {
    date: "May 6",
    iso: "0506",
    entries: [
      {
        caption: "A new bridge spanning a canyon and river",
        title:
          "The Works Progress Administration is created by President Roosevelt's executive order 7034.",
        year: "1935",
      },
    ],
  },
  {
    date: "May 7",
    iso: "0507",
    entries: [
      {
        caption: "Two lions argue at a table",
        title:
          "The Second Council of Lyon begins in France to set rules for the election of the Pope",
        year: "1274",
      },
    ],
  },
  {
    date: "May 8",
    iso: "0508",
    entries: [
      {
        caption:
          "A man offering bottles of Coca-Cola on a table. A sign reads 'Cocaine Water 5¢.' The man says, 'This is some good shit first sip is free.'",
        title:
          "John Pemberton sells Coca-Cola as a patent medicne for the first time",
        year: "1886",
      },
    ],
  },
  {
    date: "May 9",
    iso: "0509",
    entries: [
      {
        caption: "A very long horse that is also a bus with some people in it",
        title: "The first horsebus is debuted in Mumbai, India",
        year: "1874",
      },
    ],
  },
  {
    date: "May 10",
    iso: "0510",
    entries: [
      {
        caption:
          "A woman stands in front of a lectern and says, 'What if we treated everyone with respect, gave equal pay, and stopped calling everyone 'guys'?",
        title:
          "Victoria Woodhull becomes the first woman to run for President of the United States nominated by the Equal Rights Party.",
        year: "1872",
      },
    ],
  },
  {
    date: "May 11",
    iso: "0511",
    entries: [
      {
        caption:
          "The people stand in front of the Minnesota flag. The first says, 'Oh hey, we're a state now dontcha know.' The second responds, 'Oh you dont say!' The first person says, 'Oh yeah, it's true, you betcha!' The second person replies, 'Oh for fun!'",
        title: "Minnesota becomes the thirty-second state of the United States",
        year: "1858",
      },
    ],
  },
  {
    date: "May 12",
    iso: "0512",
    entries: [
      {
        caption:
          "A prairie on a green computer screen with a wagon and ox in front. A banner beneath the wagon reads, 'You were eaten by your children.'",
        title:
          "The Donner Party departs Independence, Missouri, on a journey to California.",
        year: "1846",
      },
    ],
  },
  {
    date: "May 13",
    iso: "0513",
    entries: [
      {
        caption:
          "Reggie Jackson stands at home plate as a pitch goes past. The umpire yells 'Strike three!' Reggie Jackson thinks, 'Yes! A record!'",
        title:
          "Reggie Jackson becomes the first person in Major League Baseball to strike out 2,000 times.",
        year: "1983",
      },
    ],
  },
  {
    date: "May 14",
    iso: "0514",
    entries: [
      {
        caption:
          "A man in a brown hat swings by on a whip. In movie font reads: 'Virginia Smith and the First Crusade'",
        title: "The First Crusade begins in earnest with the Siege of Nicaea",
        year: "1097",
      },
    ],
  },
  {
    date: "May 15",
    iso: "0515",
    entries: [
      {
        caption:
          "A Disney 'mouse ears' logo with red eyes and the words 'OMNIA MEA'",
        title: "Mickey Mouse debuts in his first cartoon, Plane Crazy",
        year: "1928",
      },
    ],
  },
  {
    date: "May 16",
    iso: "0516",
    entries: [
      {
        caption:
          "Two people are standing. One is holding four pennies and says, 'Man, carrying around more than 4 pennies really sucks.' The other looks thoughtfully and says, 'There must be a better way...'",
        title: "The nickel coin is established by an act of the US Congress",
        year: "1866",
      },
    ],
  },
  {
    date: "May 17",
    iso: "0517",
    entries: [
      {
        caption:
          "Four wealthy people at an expensive banquet raise gold goblets and declare, 'Fuck the poor!'",
        title: "The New York Stock Exchange is founded",
        year: "1792",
      },
      {
        caption:
          "A judge bangs a gavel and declares loudly, 'SEPARATE IS INHERENTLY UNEQUAL.'",
        title:
          "The US Supreme Court unaminously decides that segregation of schools on the basis of race is unconstitutional",
        year: "1954",
      },
    ],
  },
  {
    date: "May 18",
    iso: "0518",
    entries: [
      {
        caption:
          "Abraham Lincoln stands triumphantly in front of red white and blue bunting",
        title:
          "At the Republican National Convention, Abraham Lincoln is nominted for President on the third ballot",
        year: "1860",
      },
    ],
  },
  {
    date: "May 19",
    iso: "0519",
    entries: [
      {
        caption:
          "Two people are standing. One is holding a candle and says, 'What a day, huh?' The other says, 'Lemon, its noon.'",
        title:
          "Around mid-day, the sky over New England and parts of Canada went so dark as to require candles, due to an unusual combination of clouds, thick fog, and forest fire smoke.",
        year: "1780",
      },
    ],
  },
  {
    date: "May 20",
    iso: "0520",
    entries: [
      {
        caption:
          "Three leaders sign a document at a table. The first wearing a German spiked helmet says, 'Friends forever!' The next wearing an Austro-Hungarian soldier's cap says, 'This is the best!' The final wearing an Italian royal cap says, 'Nothing can go wrong!'",
        title:
          "The Triple Alliance between the German Empire, Austria-Hungary, and the Kingdom of Italy is formed.",
        year: "1882",
      },
      {
        caption:
          "Abraham Lincoln signs a document that reads, 'In case of pandemic, stay home stead of going out.'",
        title:
          "President Abraham Lincoln signs the Homestead Act (source: Library of Congress Today in History)",
        year: "1862",
      },
    ],
  },
  {
    date: "May 21",
    iso: "0521",
    entries: [
      {
        caption:
          "The Earth and moon. A roller coaster rises from behind the far horizon, nearly to the moon, and then desends back to Earth.",
        title:
          "The tallest roller coaster in the world, Kingda Ka, opens in New Jersey",
        year: "2005",
      },
    ],
  },
  {
    date: "May 22",
    iso: "0522",
    entries: [
      {
        caption:
          "An Apollo lunar excursion module flies near the moon. A voice cries out, 'Lets just land it! They cant stop us!' An electronic voice responds, 'Snoopy, this is mission control. Do NOT land.'",
        title:
          "The Apollo 10 lunar module, codenamed 'Snoopy,' passes within 8.4 nautical miles of the moon's surface",
        year: "1969",
      },
    ],
  },
  {
    date: "May 23",
    iso: "0523",
    entries: [
      {
        caption:
          "A person is falling from the a high window of a tower, yelling 'NOT AGAIN!'",
        title:
          "The Second Defenestration of Prague begins the Thirty Years' War",
        year: "1618",
      },
    ],
  },
  {
    date: "May 24",
    iso: "0524",
    entries: [
      {
        caption:
          "Theresa May stands behind a lectern with the UK flag beside her and says, 'In recognition that I have been a great prune, I hereby announce my resignation.",
        title:
          "British Prime Minister Theresa May announces her resignation as leader of the Conservative Party under pressure over her handling of Brexit",
        year: "2019",
      },
    ],
  },
  {
    date: "May 25",
    iso: "0525",
    entries: [
      {
        caption:
          "The Gateway arch sings, 'Never gonna give you up! Never gonna let you down! Never gonna run around and desert you!'",
        title: "The Gateway Arch in St. Louis is dedicated",
        year: "1968",
      },
    ],
  },
  {
    date: "May 26",
    iso: "0526",
    entries: [
      {
        caption:
          "Two people stand - one representing Australia and the other Canada. Australia says, 'We are sorry for our long-time mistreatment of indigeous peoples.' Canada says, 'Dude! Apologizing is OUR thing!' Australia responds, 'Also sorry for stealing your thing.'",
        title:
          "The first National Sorry Day is held in Austrlia to remember and commemorate the mistreatment of the country's indigenous peoples as part of ongoing reconciliation",
        year: "1998",
      },
    ],
  },
  {
    date: "May 27",
    iso: "0527",
    entries: [
      {
        caption:
          "Arsenio Hall stands fist-bumping and saying 'Whoop! Whoop! Whoop! Whoop!'",
        title:
          "The final broadcast of the Arsenio Hall Show. Also the final broadcast of Larry King's radio show and the theatrical release of the Flintstons live-action movie.",
        year: "1994",
      },
    ],
  },
  {
    date: "May 28",
    iso: "0528",
    entries: [
      {
        caption:
          "Alan Turing stands in front of a chalkboard and says, 'As you can see, computers suck.'",
        title:
          "Alan Turin submits for publication his paper that proves some mathematical problems cannot be solved purely by computation",
        year: "1936",
      },
    ],
  },
  {
    date: "May 29",
    iso: "0529",
    entries: [
      {
        caption:
          "A wide-eyed man stands with a newspaper showing an advertisement and says, 'I HAVENT SLEPT IN TWO MONTHS THIS IS GOOD SHIT YOU GOTTA TRY IT",
        title:
          "John Pemberton places the first advertisement for Coca-Cola, appearing in the Atlanta Journal.",
        year: "1886",
      },
    ],
  },
  {
    date: "May 30",
    iso: "0530",
    entries: [
      {
        caption:
          "A woman stands in front of a grill with a very, very cooked steak and says, 'Whoa. That is way overdone.'",
        title: "Joan of Arc is burned at the stake",
        year: "1431",
      },
    ],
  },
  {
    date: "May 31",
    iso: "0531",
    entries: [
      {
        caption: "The White House, darkened.",
        title:
          "The President of the United States courageously turns off the lights at the White House and hides in the bunker rather than face outrage over continued police murders of Black people.",
        year: "2020",
      },
    ],
  },
  {
    date: "June 1",
    iso: "0601",
    entries: [
      {
        caption:
          "A monk stands next to an oak barrel holding a glass of whiskey and says, 'Yes... God IS good. *hic*'",
        title:
          "John Cor, a monk, brews the first-known batch of Scotch whiskey.",
        year: "1495",
      },
    ],
  },
  {
    date: "June 2",
    iso: "0602",
    entries: [
      {
        caption:
          "The Queen stands with arms raised and shouts, 'ITS ALL MIIIIINE!'",
        title: "Queen Elizabeth II is corronated and begins her eternal reign.",
        year: "1953",
      },
    ],
  },
  {
    date: "June 3",
    iso: "0603",
    entries: [
      {
        caption:
          "A Native man and a conquistador face each other. The Spainiard says, 'I claim this land for Spain!' The Native man just replies, 'Dude.'",
        title:
          "Hernando de Soto claims Florida for Spain, despite the people already living there.",
        year: "1539",
      },
    ],
  },
  {
    date: "June 4",
    iso: "0604",
    entries: [
      {
        caption: "No image today.",
        title:
          "The Chinese People's Liberation Army murders hundreds of pro-Democracy demonstrators at Tiananmen Square.",
        year: "1989",
      },
    ],
  },
  {
    date: "June 5",
    iso: "0605",
    entries: [
      {
        caption: "Ziggy Stardust",
        title:
          "Davie Jones and the King Bees debuts 'I Cant Help Thinking About Me.' The band breaks up, but Davie Jones goes on to success as David Bowie.",
        year: "1964",
      },
    ],
  },
  {
    date: "June 6",
    iso: "0606",
    entries: [
      {
        caption:
          "The Village People constructor worker, cowboy, sailor, and leather biker perform the YMCA dance",
        title: "The YMCA is founded in London",
        year: "1844",
      },
    ],
  },
  {
    date: "June 7",
    iso: "0607",
    entries: [
      {
        caption:
          "A group of people stand around a toppled statue with raised fists and shout, 'BLACK LIVES MATTER!'",
        title:
          "Protestors in the UK topple a statue of Atlantic slave-trader Edward Colston and throw it into the River Avon, amid continuing demonstrations against racism and police brutality.",
        year: "2020",
      },
    ],
  },
  {
    date: "June 8",
    iso: "0608",
    entries: [
      {
        caption:
          "A submarine launches a missile with the USPS logo on it. It sings out 'I want to fly like a missile!'",
        title:
          "The USPS and US Navy perform the first and only 'missile mail' delivery.",
        year: "1959",
      },
    ],
  },
  {
    date: "June 9",
    iso: "0609",
    entries: [
      {
        caption:
          "A man leans over a table covered in papers. Another man points and shouts, 'Have you no sense of decency, sir, at long last? Have you left no sense of decency?'",
        title:
          "Joseph Welch, special counsel for the US Army, famously rebukes Senator Joseph McCarthy.",
        year: "1954",
      },
    ],
  },
  {
    date: "June 10",
    iso: "0610",
    entries: [
      {
        caption:
          "A rover on the surface of Mars sings, 'This was a triumph. Im making a note here, HUGE SUCCESS.",
        title:
          "The Spirit Rover launches on its journey to Mars, where it will conduct scientific missions for over six years.",
        year: "2003",
      },
    ],
  },
  {
    date: "June 11",
    iso: "0611",
    entries: [
      {
        caption: "A probe flies in front of Saturn and exclaims, 'Wheeeeee!'",
        title:
          "The Cassini-Huygens probe makes its closest flyby of Saturn's moon Phoebe.",
        year: "2004",
      },
    ],
  },
  {
    date: "June 12",
    iso: "0612",
    entries: [
      {
        caption:
          "The Supreme Court justices sit at a bench. The Chief Justice says, 'Love is love, and dont you dare make us say it again.'",
        title:
          "The US Supreme Court unamimously rules that laws restricting marriage on the basis of race, such as laws prohibiting Black and White people from marrying each other, are a violation of the Constitutional right of equal protection. The case is appropriately called Loving v. Virginia.",
        year: "1967",
      },
    ],
  },
  {
    date: "June 13",
    iso: "0613",
    entries: [
      {
        caption:
          "A person is lowering a baby into a shipping box. A mail carrier walks up and says, 'Sorry, new rules.'",
        title:
          "The US Postmaster General rules that children may no longer be mailed by parcel post.",
        year: "1913",
      },
    ],
  },
  {
    date: "June 14",
    iso: "0614",
    entries: [
      {
        caption:
          "A black and white V2 rocket soars above the Earth. A voice from inside says, 'I can see the Man in the Yellow Hat from here!'",
        title: "Albert II becomes the first monkey in space.",
        year: "1949",
      },
    ],
  },
  {
    date: "June 15",
    iso: "0615",
    entries: [
      {
        caption: "A Black man dressed in a formal dress blue Army uniform.",
        title:
          "Henry Ossian Flipper becomes the first Black person to graduate from West Point military academy.",
        year: "1877",
      },
      {
        caption: "A Black woman in a plane flies away saying, 'Bye, bitches!'",
        title:
          "Bessie Coleman becomes the first Black woman to earn a pilot's license.",
        year: "1921",
      },
    ],
  },
  {
    date: "June 16",
    iso: "0616",
    entries: [
      {
        caption:
          "A spacecraft in space. A voice from inside says, 'Da svidanya, comrades!'",
        title:
          "Soviet cosmonaut Valentina Tereshkova becomes the first woman in space, abord Vostok 6.",
        year: "1963",
      },
    ],
  },
  {
    date: "June 17",
    iso: "0617",
    entries: [
      {
        caption:
          "The lithograph 'Relativity' by M.C. Escher. A baby crawls up a vertical surface while an adult on a different surface 180º apart shouts, 'Maurits, where have you gone?'",
        title: "M.C. Escher is born.",
        year: "1898",
      },
    ],
  },
  {
    date: "June 18",
    iso: "0618",
    entries: [
      {
        caption:
          "Three monks point at the crescent moon where the tip has broken. One says, 'Look! The moon is breaking!' A second says, 'Ooooh...' The third says, 'Well that cant be good.",
        title:
          "Canturbury monks witness the formation of the moons Giordano Bruno crater after an asteroid or comet impact, reporting that the entire surface of the moon darkened from the debris cloud.",
        year: "1178",
      },
    ],
  },
  {
    date: "June 19",
    iso: "0619",
    entries: [
      {
        caption:
          "Four trees stand at the bottom of a hill and declare, 'Hold the line!' Three trees at the top of the hill yell, 'We have the high ground!'",
        title:
          "The Battle of Seven Oaks, a violent confrontation between fur trading companies in Manitoba, Canada.",
        year: "1816",
      },
    ],
  },
  {
    date: "June 20",
    iso: "0620",
    entries: [
      {
        caption:
          "A woman in a blue dress, splattered with blood and holding an axe behind her back, says, 'Twerent me.'",
        title:
          "Lizzie Borden is acquitted of the murders of her father and stepmother.",
        year: "1893",
      },
    ],
  },
  {
    date: "June 21",
    iso: "0621",
    entries: [
      {
        caption:
          "The king and helper fle an angry crowd. The helper says, 'The peasants are revolting, your majesty!' to which the king responds, 'You said it! They stink on ice!'",
        title:
          "King Louis XVI and the immediate family attempt to flee Paris to join royalist military forces. The event is known as the Flight to Varennes.",
        year: "1791",
      },
    ],
  },
  {
    date: "June 22",
    iso: "0622",
    entries: [
      {
        caption: "Charlie Brown in a camo-green shirt says, 'Good grief!'",
        title: "Checkpoint Charlie is dismantled in Berlin.",
        year: "1990",
      },
    ],
  },
  {
    date: "June 23",
    iso: "0623",
    entries: [
      {
        caption:
          "Richard Nixon sits at a desk with a microphone and says, 'Gentlemen, lets do a crime.",
        title:
          "President Richard Nixon and his Chief of Staff are recorded discussing using the CIA to obstruct an ongoing FBI investigation.",
        year: "1972",
      },
    ],
  },
  {
    date: "June 24",
    iso: "0624",
    entries: [
      {
        caption:
          "Two beavers with swords stare at each other across a river with a beaver dam between them.",
        title:
          "A combined force of British and Native American defeat the United States at the Battle of Beaver Dams during the War of 1812.",
        year: "1813",
      },
    ],
  },
  {
    date: "June 25",
    iso: "0625",
    entries: [
      {
        caption:
          "Two ballet dancers perform on stage. A man with a mullet and a can of beer in front shouts, 'Hell yeah! Freebird!' One of the dancers utters, 'goddammit...'",
        title: "Igor Stravinski's ballet The Firebird debuts in Paris.",
        year: "1910",
      },
    ],
  },
  {
    date: "June 26",
    iso: "0626",
    entries: [
      {
        caption:
          "Three Popes stand in a triangle and point angrily at each other.",
        title:
          "Petros Philargos is crowned Pope Alexander V at the Council of Pisa, joining Popes Gregory XII and Benedict XII, the three simultaneous Popes of the Western Schism.",
        year: "1409",
      },
    ],
  },
  {
    date: "June 27",
    iso: "0627",
    entries: [
      {
        caption:
          "Two bi-planes fly, one above the other. The top pours gasoline from a can towards the bottom one, slightly missing the fuel hole. The top pilot says, 'Steady! Steady!' The bottom pilot says, 'Watch where youre pouring!'",
        title: "First-ever aerial refueling.",
        year: "1923",
      },
    ],
  },
  {
    date: "June 28",
    iso: "0628",
    entries: [
      {
        caption:
          "Marchers demonstrate. At the head of the protests are a person of color throwing a brick and a bearded drag queen. The first group shounds, 'Liberate the bar!' and 'Fag power!' as they march in front of the Stonewall Inn. Following them are a group including a lesbian, someone holding a sign that reads 'SILENCE = DEATH', and a person dressed in leather. They chant together, 'Act up! Fight back! Fight AIDS!' The third group are all smiling, waving trans, bisexual, and LGBT rainbow flags.",
        title:
          "New York City police raid the Stonewall Inn, a prominent gay bar, arresting and assaulting patrons. The patrons eventually defend themselves, and protest for several days after in what is called the Stonewall Riots, which mark the beginning of the modern LGBTQ+ rights movement.",
        year: "1969",
      },
    ],
  },
  {
    date: "June 29",
    iso: "0629",
    entries: [
      {
        caption:
          "The Globe theater burns in the background while a person says, 'Double, double, toil and trouble! Fire burns the Globe to rubble!'",
        title: "The Globe theater in London burns to the ground",
        year: "1613",
      },
    ],
  },
  {
    date: "June 30",
    iso: "0630",
    entries: [
      {
        caption:
          "Teddy Roosevelt sits at a desk with a pen in hand and says, 'Clean hot dogs and safe cocaine water for everyone! Bully!'",
        title:
          "President Theodore Roosevelt signs the Meat Inspection Act and the Pure Food and Drug Act into law.",
        year: "1906",
      },
    ],
  },
  {
    date: "July 1",
    iso: "0701",
    entries: [
      {
        caption:
          "A black fist with a broken chain on it, in front of the Suriname flag",
        title:
          "Slavery comes to an end in Suriname, a milestone celebrated annually as Keti Koni, translated as 'the chain is broken.'",
        year: "1873",
      },
    ],
  },
  {
    date: "July 2",
    iso: "0702",
    entries: [
      {
        caption:
          "A man holding a pin with a tail on it looks towards a donkey and says, 'I have no idea how far away that is...'",
        title: "Bogdan III the One-Eyed becomes Voivode (ruler) of Moldavia",
        year: "1504",
      },
    ],
  },
  {
    date: "July 3",
    iso: "0703",
    entries: [
      {
        caption:
          "A man stands in front of stacks of sacks of potatoes and says, 'Potato chips, potato fries, potato latkes, mashed potatos, baked potatos, potato bread, potato wedges, potato skins...'",
        title: "Idaho is admitted to the United States as the 43rd state.",
        year: "1890",
      },
    ],
  },
  {
    date: "July 4",
    iso: "0704",
    entries: [
      {
        caption:
          "A supernova appears above the Earth; a person standing in North America points up and says 'Cool!' A person in northern Africa looks towards it and says, 'Fascinating...' A person in eastern Asia looks towards it and writes notes while saying, 'Neat!'",
        title:
          "A supernova bright enough to be seen in daylight is witnessed by Chinese, Arab, and Amerindian observers.",
        year: "1054",
      },
    ],
  },
  {
    date: "July 5",
    iso: "0705",
    entries: [
      {
        caption:
          "Two identical sheep stare at each other. One says 'B A H?' while the other says '?H A B'",
        title:
          "Dolly the sheep is born, the first mammal cloned from an adult cell.",
        year: "1996",
      },
    ],
  },
  {
    date: "July 6",
    iso: "0706",
    entries: [
      {
        caption:
          "A man stands holding an enormous syringe filled with small, virus-fighting soldiers. (Image inspired by illustrations from the book, The Value of Believing in Yourself)",
        title:
          "Louis Pasteur successfully tests his rabies vaccine on a young boy who had been bitten by a rabid dog.",
        year: "1885",
      },
    ],
  },
  {
    date: "July 7",
    iso: "0707",
    entries: [
      {
        caption:
          "A person stands next to a loaf of sliced bread and exclaims, 'This is the best thing since canned beans!'",
        title:
          "Sliced bread is sold for the first time by Chillicothe Baking Company in Missouri.",
        year: "1928",
      },
    ],
  },
  {
    date: "July 8",
    iso: "0708",
    entries: [
      {
        caption:
          "Two men stand in front of a chalkboard sign that reads, 'DOW JONES, 41.22'. One is smoking a cigar and wearing a monocle and says, 'I say, we appear to be poor.' The other has a thick white mustache and is holding a glass of whiskey and says, 'Hmm, quite so.'",
        title:
          "The Dow Jones Industrial Average reaches its lowest level of the Great Depression, closing at 14.22.",
        year: "1932",
      },
    ],
  },
  {
    date: "July 9",
    iso: "0709",
    entries: [
      {
        caption:
          "The Queen is lying in bed, propped up on her elbows. A man stands next to her bed and says, 'Hi, Id like to talk about your car warranty.' The queen responds, 'Uh... go away?'",
        title:
          "Michael Fagan breaks into Buckingham Palace and enters Queen Elizabeth II's bedroom before being detained and removed from the palace.",
        year: "1982",
      },
    ],
  },
  {
    date: "July 10",
    iso: "0710",
    entries: [
      {
        caption:
          "A wide-eyed person holds a bottle of Coca-Cola and announces, 'WEVE BROUGHT BACK THE CLASSIC COCAINE YOU LOVE",
        title:
          "Coca-Cola announces the return of its original formula, marketed as Coca-Cola Classic.",
        year: "1985",
      },
    ],
  },
  {
    date: "July 11",
    iso: "0711",
    entries: [
      {
        caption:
          "The 'Hamilton' musical logo, showing Hamilton as the top point on a star. A stick-figure Burr shoots at him.",
        title:
          "Alexander Hamilton is fatally wounded in a dual with Vice President Aaron Burr",
        year: "1804",
      },
    ],
  },
  {
    date: "July 12",
    iso: "0712",
    entries: [
      {
        caption:
          "A man stands with enormous fingernails and says, 'Maybe its time, but how will I scratch my feet without bending over?'",
        title:
          "Shridhar Chillal cuts his fingernails for the first time in 66 years. Combined, they are nearly 30 feet long.",
        year: "2018",
      },
    ],
  },
  {
    date: "July 13",
    iso: "0713",
    entries: [
      {
        caption:
          "A person holds a baby. The baby is swaddled and wearing a laurel wreath and says, 'Ego natus sum. Vidi. Vici.'",
        title: "Gaius Julius Caesar is born",
        year: "100BC",
      },
    ],
  },
  {
    date: "July 14",
    iso: "0714",
    entries: [
      {
        caption:
          "Commander Spock, pointy-eared Vulcan with a bad haircut, says, 'Babies are highly illogical.'",
        title:
          "Dr. Spock's book, 'Common Sense Book of Baby and Child Care,' is published.",
        year: "1946",
      },
    ],
  },
  {
    date: "July 15",
    iso: "0715",
    entries: [
      {
        caption:
          "A Spanish Inquisitor dressed all in red says, 'Nobody expects the...' A person standing nearby interrupts and says, 'Oh shut up.'",
        title:
          "After 356 years, the Spanish Inquisition is formally disbanded.",
        year: "1834",
      },
    ],
  },
  {
    date: "July 16",
    iso: "0716",
    entries: [
      {
        caption:
          "A Saturn V rocket launches. From the crew capsule a voice says, 'I think I may have left the oven on...'",
        title:
          "The Apollo 11 mission launches on its way to landing the first humans on the moon.",
        year: "1969",
      },
    ],
  },
  {
    date: "July 17",
    iso: "0717",
    entries: [
      {
        caption:
          "Two pots with faces are having a video conference with a dam.",
        title:
          "The Potsdamn Conference is held between Harry Truman, Winston Churchill, and Joseph Stalin to determine how to manage post-war Germany.",
        year: "1945",
      },
    ],
  },
  {
    date: "July 18",
    iso: "0718",
    entries: [
      {
        caption:
          "The Pope stands before a withered, gray-haired, gray-beard old man in a throne. The old man smiles and says, 'You have no power here!'",
        title:
          "An act of Paliament eliminates the Pope's authority in England, the final act of splitting from the Catholic Church.",
        year: "1536",
      },
    ],
  },
  {
    date: "July 19",
    iso: "0719",
    entries: [
      {
        caption:
          "The city of Rome burns in the background while Nero plays a fiddle and says, 'Only the best people fiddle while the world burns.'",
        title:
          "The Great Fire of Rom begins under Emperor Nero, eventually destroying two thirds of the city.",
        year: "64",
      },
    ],
  },
  {
    date: "July 20",
    iso: "0720",
    entries: [
      {
        caption:
          "A crowned man stands in front of the flag of the Empire of Ethiopia and says, 'This is cool. I think Ill do it over and over!'",
        title:
          "Tekle Giyorgis I begins the first of his six reigns as emperor of Ethiopia.",
        year: "1799",
      },
    ],
  },
  {
    date: "July 21",
    iso: "0721",
    entries: [
      {
        caption:
          "Two men stand next to train tracks snaking through the countryside. One says, 'Next lets build an orchestra!'",
        title:
          "After 13 years of work, the 4,607-mile long Trans-Siberian railway is complete.",
        year: "1904",
      },
    ],
  },
  {
    date: "July 22",
    iso: "0722",
    entries: [
      {
        caption:
          "A nun stands beside an overflowing bathtub shouting, 'oh no oh no oh no",
        title:
          "St. Mary Magdelines flood, the largest flood on record for central Europe.",
        year: "1342",
      },
    ],
  },
  {
    date: "July 23",
    iso: "0723",
    entries: [
      {
        caption:
          "A man serves ice cream in a waffle cone at an ice cream stand. The recipient shouts, 'What it this fantastic new technology?'",
        title:
          "Ice cream cones come to mainstream attention when Arnold Fornachou serves them at the St. Louis Worlds Fair.",
        year: "1904",
      },
    ],
  },
  {
    date: "July 24",
    iso: "0724",
    entries: [
      {
        caption:
          "A person stands in front of mountains and dying grass and shouts, 'Weve arrived! The promised land of milk and... err... of salt and fruitless desert!'",
        title:
          "After seventeen years, Brigham Young and his 148 Mormon settlers stop in Utah.",
        year: "1847",
      },
    ],
  },
  {
    date: "July 25",
    iso: "0725",
    entries: [
      {
        caption:
          "A person in an old British Royal Navy uniform holds up a sword and yells, 'This is a Dummer War! Theres never been a Dummer war than this!'",
        title:
          "At the border between Maine and Massachusetts, Dummer's War begins.",
        year: "1722",
      },
    ],
  },
  {
    date: "July 26",
    iso: "0726",
    entries: [
      {
        caption:
          "Harry Truman sits at a desk with a pen in hand and says, 'Lets create ourselves some industrial complexes!",
        title:
          "President Harry Truman signs the National Security Act, creating the Central Intelligence Agency, the Department of Defense, the Department of the Air Force, the Joint Chiefs of Staff, and the National Security Council.",
        year: "1947",
      },
    ],
  },
  {
    date: "July 27",
    iso: "0727",
    entries: [
      {
        caption: "Bugs Bunny",
        title: "Bugs Bunny debuts in the short, A Wild Hare.",
        year: "1940",
      },
    ],
  },
  {
    date: "July 28",
    iso: "0728",
    entries: [
      {
        caption:
          "A skeleton lies on the ground wearing Birkenstocks, a twirly mustache, and holding a cup of coffee.",
        title:
          "The Kennewick Man, a set of prehistoric human remains, is discovered near Kennewick, Washington.",
        year: "1996",
      },
    ],
  },
  {
    date: "July 29",
    iso: "0729",
    entries: [
      {
        caption:
          "A baby with a crown points into the distance and shouts, 'MINE!' A person standing nearby says, 'King Baby was a terrible idea...",
        title:
          "Thirteen month-old James VI is crowned King of Scotland after Queen Mary was forced to abdicate.",
        year: "1567",
      },
    ],
  },
  {
    date: "July 30",
    iso: "0730",
    entries: [
      {
        caption:
          "A Lunar Rover drives across the moon while the astronaut in the seat shouts, 'WHEEEEE!'",
        title:
          "Apollo 15 lands on the moon, bringing along the first Lunar Rover.",
        year: "1971",
      },
    ],
  },
  {
    date: "July 31",
    iso: "0731",
    entries: [
      {
        caption:
          "A group of people stands in front of a banner that reads, 'Pope for a day contest.' One person helps another put on a big robe while saying, 'Congratulations!' A third person offers them a hat saying, 'Dont forget your hat!' The recipient says, 'This is exciting!'",
        title: "Philip is named Pope. Later that day, he is removed as Pope.",
        year: "768",
      },
    ],
  },
  {
    date: "August 1",
    iso: "0801",
    entries: [
      {
        caption:
          "A man with a gray beard and floppy hat holds a very very long piece of paper with a list on it and says, 'Here are all the characters from chapter one.'",
        title:
          "George R. R. Martin's novel, A Game of Thrones, is published, the first in the series, A Song of Fire and Ice.",
        year: "1996",
      },
    ],
  },
  {
    date: "August 2",
    iso: "0802",
    entries: [
      {
        caption:
          "A man and child converse. The child says, 'Do you think its weird a grown man only talks to a kid?' The man responds, 'Maybe Im a ghost? OoOoOoh!' The child replies, 'I dont think thats better.'",
        title: "The movie The Sixth Sense is released.",
        year: "1999",
      },
    ],
  },
  {
    date: "August 3",
    iso: "0803",
    entries: [
      {
        caption:
          "A demonic person in front of a pit of fire proclaims, 'Together, four out of five of us will make them suffer! Muahahahahaa!'",
        title:
          "The American Dental Association is founded in Niagara Falls, NY.",
        year: "1859",
      },
    ],
  },
  {
    date: "August 4",
    iso: "0804",
    entries: [
      {
        caption:
          "George Washington holds a compass and a square and says, 'Now the world will be mine!'",
        title:
          "In Fredericksburg, Virginia, George Washington is raised to the rank of Master Mason in the fraternity of Freemasons.",
        year: "1753",
      },
      {
        caption:
          "Abbey wields a sword at a pile of books labeled 'Regulations,' 'Policies,' and 'Legalese,' while shouting, 'Have at you!'",
        title: "The Battle of Kos is fought between Greek and Turkish forces.",
        year: "1824",
      },
    ],
  },
  {
    date: "August 5",
    iso: "0805",
    entries: [
      {
        caption:
          "A stoplight with the red light illuminated says in a robotic voice, 'The revolution has arrived now the humans obey us!'",
        title:
          "The first electric traffic signal is installed in Cleveland, Ohio.",
        year: "1914",
      },
    ],
  },
  {
    date: "August 6",
    iso: "0806",
    entries: [
      {
        caption:
          "A person stands and announces, 'It is neither holy nor Roman nor an empire.",
        title:
          "The Holy Roman Empire is dissolved following the abdication of Emperor Francis II.",
        year: "1806",
      },
    ],
  },
  {
    date: "August 7",
    iso: "0807",
    entries: [
      {
        caption:
          "A man in a suit carrying a briefcase says, 'Cmon honey, just approve the drug.' A woman holds up a hand and says, 'Shove that honey shit and show me the drug is safe or GTFO.",
        title:
          "Frances Oldham Kelsey is awarded the US President's Award for Distinguished Civil Service for refusing to approve the drug thalidomide, later linked to severe birth defects.",
        year: "1962",
      },
    ],
  },
  {
    date: "August 8",
    iso: "0808",
    entries: [
      {
        caption:
          "Three people march in protest. One is carrying the flying peacock flag, which came to represent the protests in Burma.",
        title:
          "The student-led pro-democracy 8888 Uprising begins in Rangoon, Burma.",
        year: "1988",
      },
    ],
  },
  {
    date: "August 9",
    iso: "0809",
    entries: [
      {
        caption:
          "In front of a forest fire, Smokey Bear points at someone and says, 'Goddammit, what did I tell you?!'",
        title:
          "Smokey Bear debuts in his first poster advocating wildfire prevention for the US Forest Service.",
        year: "1944",
      },
    ],
  },
  {
    date: "August 10",
    iso: "0810",
    entries: [
      {
        caption:
          "A person wields a knife at a scared person and says, 'Give me all your money!' They lower the knife and declare, 'Just kidding! Youre on Candid Camera!' The other person is momentarily relieved, then angrily declares, 'And youre an enormous asshole.'",
        title: "'Candid Camera' debuts.",
        year: "1948",
      },
    ],
  },
  {
    date: "August 11",
    iso: "0811",
    entries: [
      {
        caption:
          "A person points at another and declares, 'Im free, you hear? You dont control me anymore!' The other, looking confused, responds, 'Uh... kay.'",
        title: "Chad declares independence.",
        year: "1960",
      },
    ],
  },
  {
    date: "August 12",
    iso: "0812",
    entries: [
      {
        caption:
          "A tyrannosaurus rex stands and says, 'I like bad jokes because they really make me reach for the punchline.",
        title:
          "The largest and most complete Tyrannosaurus rex skeleton, named Sue, is found in South Dakota by Sue Henderickson.",
        year: "1990",
      },
    ],
  },
  {
    date: "August 13",
    iso: "0813",
    entries: [
      {
        caption:
          "A child points at an old pay telephone and says, 'Gramma, whats a pay phone?' The child's grandmother answers, 'People used to use them to make phone calls. You put in a coin and dial a number!' The child responds, 'Whats a coin?'",
        title: "The coin-operated telephone is patented by William Gray.",
        year: "1889",
      },
    ],
  },
  {
    date: "August 14",
    iso: "0814",
    entries: [
      {
        caption:
          "A yellow Ford pinto sits in the background. On one side stands a person with a sword. On the other side, a man holding a spear says, 'Oh, THIS is what were fighting over? Yeah, fuck that, you can have it.",
        title:
          "The Battle of the Yellow Ford between Irish and English forces in the Nine Years' War.",
        year: "1598",
      },
    ],
  },
  {
    date: "August 15",
    iso: "0815",
    entries: [
      {
        caption:
          "A house swirls in a tornado. A voice shouts from within, 'Oh fuck, Toto! Were gonna die!'",
        title:
          "The movie, The Wizard of Oz, premiers in Hollywood at Grauman's Chinese Theatre.",
        year: "1939",
      },
    ],
  },
  {
    date: "August 16",
    iso: "0816",
    entries: [
      {
        caption: "The Ramones standing for a portrait",
        title: "The Ramones give their debut concert at CBGBs.",
        year: "1974",
      },
    ],
  },
  {
    date: "August 17",
    iso: "0817",
    entries: [
      {
        caption:
          "A book titled 'Animal Farm Because People Farms Would be Weird,' authored by George Orwell",
        title: "George Orwell's novella Animal Farm is published.",
        year: "1945",
      },
    ],
  },
  {
    date: "August 18",
    iso: "0818",
    entries: [
      {
        caption:
          "A man stands behind a prodium in front of a bridge and says, 'I dedicate this bridge in honor of okay salads everywhere.",
        title:
          "US President Franklin D. Roosevelt dedicates the Thousand Islands Bridge, connecting New York to Ontario over the Saint Lawrence River.",
        year: "1938",
      },
    ],
  },
  {
    date: "August 19",
    iso: "0819",
    entries: [
      {
        caption:
          "A woman wearing a dress covered with bees, a beehive, and honey sings, 'I live for the bee buzz, bee buzz, bee buzz!'",
        title: "Lady Gaga's debut album, 'The Fame,' is released.",
        year: "2008",
      },
    ],
  },
  {
    date: "August 20",
    iso: "0820",
    entries: [
      {
        caption:
          "An airplane flies by. A man leaps out and screams, 'This was not smart...'",
        title:
          "Adolphe Célestin Pégoud is the first pilot to leap from their own plane while wearing a parachute.",
        year: "1913",
      },
    ],
  },
  {
    date: "August 21",
    iso: "0821",
    entries: [
      {
        caption:
          "A soldier with a rifle charges into battle saying, 'Boy, déja vu, huh?'",
        title: "In World War I, the Second Battle of the Somme begins.",
        year: "1918",
      },
    ],
  },
  {
    date: "August 22",
    iso: "0822",
    entries: [
      {
        caption:
          "A man with a top hat, glasses, a bushy beard, and large teeth sits in the back of an old car and says, 'This is a bully ride!'",
        title:
          "Theodore Roosevelt becomes the first US President to appear in public in an automobile.",
        year: "1902",
      },
    ],
  },
  {
    date: "August 23",
    iso: "0823",
    entries: [
      {
        caption:
          "Two people stand. One looks shocked and says, 'Oh man, that is foul.' The other is bent over with their hands on their knees, looking sick.",
        title:
          "French troops are repulsed by Prussians at the Battle of Großbeeren",
        year: "1813",
      },
    ],
  },
  {
    date: "August 24",
    iso: "0824",
    entries: [
      {
        caption:
          "A man with an orange for a head holds hands with a woman playing saxaphone. The man says, 'My dearest Anna of Saxaphony.'",
        title: "Willem of Orange marries Anna, Duchess of Saxony.",
        year: "1561",
      },
    ],
  },
  {
    date: "August 25",
    iso: "0825",
    entries: [
      {
        caption:
          "A bespectacled man looks into a microscope and says, 'I see you there, teensy tiny killer.'",
        title:
          "Kitasato Shibasaburō discovers the Yersinia pestis bacteria, the infectious agent behind the bubonic plague.",
        year: "1894",
      },
    ],
  },
  {
    date: "August 26",
    iso: "0826",
    entries: [
      {
        caption:
          "A Mini with a British flag painted on it and a man sitting in the seat saying, 'Yeah, baby! Yeah'!",
        title:
          "British Motor Corporation introduces the Mini-Motor, commonly called just a Mini.",
        year: "1959",
      },
    ],
  },
  {
    date: "August 27",
    iso: "0827",
    entries: [
      {
        caption: "The Earth and Mars wave at each other.",
        title:
          "Mars and Earth pass within 35 million miles, the nearest in 60,000 years.",
        year: "2003",
      },
    ],
  },
  {
    date: "August 28",
    iso: "0828",
    entries: [
      {
        caption:
          "A space probe examines an asteroid with a small moon and says, 'Magnifico!'",
        title:
          "The NASA Galileo probe flies by asteroid 243 Ida, sending photos to Earth taht show the first-known moon to orbit an asteroid, named Dactyl.",
        year: "1993",
      },
    ],
  },
  {
    date: "August 29",
    iso: "0829",
    entries: [
      {
        caption:
          "A coil of wire is plugged into an electrical outlet. A man holds another coil of wire near the first. Electrical sparks pop from his head and he says, 'ow ow ow ow ow.'",
        title: "Michael Faraday discovers electromagnetic induction.",
        year: "1831",
      },
    ],
  },
  {
    date: "August 30",
    iso: "0830",
    entries: [
      {
        caption: "Thurgood Marshal in his Supreme Court Justice robe.",
        title:
          "Thurgood Marshall, who successfully argued Brown v. Board of Education, is confirmed as the first African American justice of the United States Supreme Court.",
        year: "1967",
      },
    ],
  },
  {
    date: "August 31",
    iso: "0831",
    entries: [
      {
        caption:
          "A crouching, sneaking man holds a knife. He passes gas and thinks to himself, 'oh no not now...'",
        title: "Jack the Ripper commits their first confirmed murder.",
        year: "1888",
      },
    ],
  },
  {
    date: "September 1",
    iso: "0901",
    entries: [
      {
        caption:
          "A pigon is a passenger aboard a school bus speeding towards a cliff. It says, 'Coo?'",
        title:
          "The passenger pigeon goes extinct when the lsat known bird, named Martha, dies at the Cincinnati Zoo.",
        year: "1914",
      },
    ],
  },
  {
    date: "September 2",
    iso: "0902",
    entries: [
      {
        caption:
          "A person looks at a calendar of September which jumps from the 2nd to the 14th and says, 'This seems off...'",
        title:
          "Great Britain and its possessions adopts the Gregorian calendar, jumping from Wednesday, September 2, to Thursday, September 14.",
        year: "1752",
      },
    ],
  },
  {
    date: "September 3",
    iso: "0903",
    entries: [
      {
        caption: "A baseball player gets a hit.",
        title: "Ty Cobb records his 4,189th and final career hit.",
        year: "1928",
      },
    ],
  },
  {
    date: "September 4",
    iso: "0904",
    entries: [
      {
        caption:
          "A contestant trying to win an ugly clean clothes dryer has guessed the price $135. A man with a microphone jeers at them, 'The price is WRONG, loser!'",
        title:
          "The Price is Right, longest-running televsion game show in the United States, premiers on CBS.",
        year: "1972",
      },
    ],
  },
  {
    date: "September 5",
    iso: "0905",
    entries: [
      {
        caption:
          "A mean shouts from a balcony down to people below, 'This includes you homos, too!' Below are a man with a brown beard, a man with a red beard, and an effiminate man holding hands with a woman.",
        title:
          "Tsar Peter I of Russia, in an effort to westernize the nobility, imposes a tax on beards except for clergy and peasants.",
        year: "1698",
      },
    ],
  },
  {
    date: "September 6",
    iso: "0906",
    entries: [
      {
        caption: "The Piggly Wiggly face says, 'Come buy our shit!'",
        title:
          "Piggly Wiggly opens in Memphis, Tennessee, the first supermarket grocery store, pioneering concepts such as self-service shopping, grocery carts, and checkout stands.",
        year: "1916",
      },
    ],
  },
  {
    date: "September 7",
    iso: "0907",
    entries: [
      {
        caption: "A small rock passes near the Earth.",
        title:
          "Asteroid 2014 RC passes less than 25,000 miles from Earth. Due to its small size and orbital trajectory, it had been removed from the list of planetary impact risks two days earlier.",
        year: "2014",
      },
    ],
  },
  {
    date: "September 8",
    iso: "0908",
    entries: [
      {
        caption:
          "The starship USS Enterprise passes by a street sign on an asteroid that reads, 'Nursing School.' A voice from the ship says, 'To boldly go where no man has gone before.",
        title: "Star Trek premiers.",
        year: "1966",
      },
    ],
  },
  {
    date: "September 9",
    iso: "0909",
    entries: [
      {
        caption:
          "An extremely elongated queen stands in front of a person who remarks, “That's one long queen.“",
        title:
          "Queen Elizabeth II becomes the longest-reigning monarch in United Kingdom history.",
        year: "2015",
      },
    ],
  },
  {
    date: "September 10",
    iso: "0910",
    entries: [
      {
        caption:
          "Two scientists stand in front of the Large Hadron Collider. One says, “Now to rip apart the fabric of spacetime!“ The other responds, “Good. Gooooood.“",
        title:
          "The Large Hadron Collider at CERN is powered up for the first time in Geneva, Switzerland.",
        year: "2008",
      },
    ],
  },
  {
    date: "September 11",
    iso: "0911",
    entries: [
      {
        caption: "A train drives past saying, “CHOO CHOO I'M A TRAIN!“",
        title:
          "The San Francisco Bay Area Rapid Transit (BART) system begins passenger service.",
        year: "1972",
      },
    ],
  },
  {
    date: "September 12",
    iso: "0912",
    entries: [
      {
        caption:
          "John F. Kennedy stands delivering a speech. He says, “We choose to go to the moon in this decade and do the other things...“ A person in the audience interrupts to ask, “Wait, which other things?“ Kennedy continues, “...not because they are easy, but because they are hard.“ An audience member responds, “Doing things just because they are hard is dumb!“",
        title:
          "US President John F. Kennedy gives his famous “We choose to go to the Moon“ speech at Rice University.",
        year: "1962",
      },
    ],
  },
  {
    date: "September 13",
    iso: "0913",
    entries: [
      {
        caption:
          "A person bends over a table trying to write on a pile of worms, saying “This would be a lot easier with paper.“",
        title:
          "Great Britain, Austria, and the Kingdom of Sardinia sign the Treaty of Worms.",
        year: "1743",
      },
    ],
  },
  {
    date: "September 14",
    iso: "0914",
    entries: [
      {
        caption:
          "A man sitting behind a blind of tall grasses looks through binocular as some medieval British Earls fly away and says, “Magnificent.“",
        title: "Flight of the Earls from Lough Swilly, Donegal, Ireland.",
        year: "1607",
      },
    ],
  },
  {
    date: "September 15",
    iso: "0915",
    entries: [
      {
        caption:
          "An old man stands abord a ship that has just beached, looks out, and says, “Look at all the birdies!“",
        title:
          "The HMS Beagle, carrying Charles Darwin, arrives at the Galapagos Islands.",
        year: "1835",
      },
    ],
  },
  {
    date: "November 4",
    iso: "1104",
    entries: [
      {
        caption:
          "A crying child sits huddled next to an adult in front of a campfire. The child says, 'I miss Grandpa.' The adult responds, 'I know, but he lives on inside of us.'",
        title:
          "The Donner Party becomes trapped in the Sierra Nevada Mountains due to an eight-day snowstorm.",
        year: "1846",
      },
    ],
  },
];

const todayIso = new Date()
  .toISOString()
  .replace(/^\d{4}-(\d{2})-(\d{2}).*$/, (a, b, c) => `${b}${c}`);

const todayIndex = (() => {
  const i = days.findIndex(({ iso }) => +iso - +todayIso > 0);
  if (i > 0) {
    return i - 1;
  }
  return days.length - 1;
})();

const next = todayIndex < days.length - 1 ? todayIndex + 1 : 0;
const previous = todayIndex > 0 ? todayIndex - 1 : days.length - 1;

export default {
  layout: "layouts/today-in-history",
  days,
  today: {
    ...days[todayIndex],
    next: days[next].iso,
    previous: days[previous].iso,
  },
};
