import { Types } from "mongoose";

interface RobotMockSructure {
  _id: Types.ObjectId;
  name: string;
  image: string;
  speed: number;
  resilience: number;
  creationDate: string;
}

const robotsMock: RobotMockSructure[] = [
  {
    _id: new Types.ObjectId(),
    name: "r2d2",
    image:
      "https://dsuj2mkiosyd2.cloudfront.net/unified-gallery/190827/1813/eb1c0647/r2-d2-17_1300-auto.webp?t=1679352286",
    speed: 4,
    resilience: 10,
    creationDate: "32 BBY",
  },
  {
    _id: new Types.ObjectId(),
    name: "Bender",
    image: "https://twiki.cern.ch/twiki/pub/LHCb/Bender/bender-for-website.jpg",
    speed: 7,
    resilience: 9,
    creationDate: " 2996",
  },
  {
    _id: new Types.ObjectId(),
    name: "Bishop",
    image:
      "https://static.wikia.nocookie.net/avp/images/c/cd/Bishop_Halved.jpg/revision/latest?cb=20091117004831",
    speed: 6,
    resilience: 5,
    creationDate: "1986",
  },
  {
    _id: new Types.ObjectId(),
    name: "Marvin the Paranoid Android",
    image:
      "https://static.wikia.nocookie.net/hitchhikers/images/a/a0/Marvinrobot.jpg/revision/latest?cb=20181116220504",
    speed: 5,
    resilience: 6,
    creationDate: "1981",
  },
  {
    _id: new Types.ObjectId(),
    name: "The Terminator",
    image:
      "https://resizing.flixster.com/DisYrRdGVNVDPr1BrFlvVxLN81o=/300x300/v2/https://flxt.tmsimg.com/assets/p7764_k_h10_aa.jpg",
    speed: 8,
    resilience: 9,
    creationDate: "1984",
  },
  {
    _id: new Types.ObjectId(),
    name: "Optimus Prime",
    image:
      "https://tfwiki.net/mediawiki/images2/thumb/0/0b/Movieprime_meettheautobots.jpg/300px-Movieprime_meettheautobots.jpg",
    speed: 4,
    resilience: 7,
    creationDate: "1984",
  },
];
export default robotsMock;
