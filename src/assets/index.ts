import j_joy00 from "./img/Pearl/joy00.jpg";
import j_joy01 from "./img/Pearl/joy01.gif";

import c_angry00 from "./img/Chim/angry00.png";
import c_angry01 from "./img/Chim/angry01.jpg";
import c_joy00 from "./img/Chim/joy00.jpg";
4;

import o_angry00 from "./img/Others/angry00_gue.png";

const db = {
  침착맨: {
    joy: [c_joy00],
    angry: [c_angry00, c_angry01],
  },
  주호민: {
    joy: [j_joy00, j_joy01],
  },
  주변인물: {
    angry: [o_angry00],
  },
};

const chim_angry_length = db.침착맨.angry.length;

export default db;
