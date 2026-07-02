// import Cookies from "js-cookie";

// const COOKIE_NAME = "userConsent";

// export const cookieService = {
//   setConsent() {
//     Cookies.set(COOKIE_NAME, "accepted", {
//       expires: 30,
//       secure: true,
//       sameSite: "Strict",
//     });
//   },

//   getConsent() {
//     return Cookies.get(COOKIE_NAME);
//   },

//   removeConsent() {
//     Cookies.remove(COOKIE_NAME);
//   },
// };

import Cookies from "js-cookie";

export const cookieService = {
  set(name, value, days = 30) {
    Cookies.set(name, value, {
      expires: days,
    //   secure: true,
      sameSite: "Strict",
    });
  },

  get(name) {
    return Cookies.get(name);
  },

  remove(name) {
    Cookies.remove(name);
  },
};