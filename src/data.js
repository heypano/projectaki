import combinations from "combinations";
import React from "react";

export const greekVowels = "αάεέιίυύηήοόωώ";
export const englishVowels = "aeiouy";
export const vowels = `${englishVowels}${greekVowels}`;

/**
 * Mapping greek stressed vowels to their unstressed counterpart
 * @type {}
 */
export const vowelStressMap = {
  ά: "α",
  ί: "ι",
  έ: "ε",
  ό: "ο",
  ώ: "ω",
  ή: "η",
  υ: "υ"
};

/**
 * All strings used in greek + english
 * @type {}
 */
export const strings = {
  aki: {
    gr: "Yποκοριστιράκι",
    en: "aki"
  },
  getYourYpokoristiko: {
    gr: <span>Παραγωγούλης Υποκοριστικούληδων</span>,
    en: <span>Greek Nickname Generator</span>
  },
  whatsYourName: {
    gr: "Πώς σε λένε;",
    en: "What's your name?"
  },
  submitText: {
    gr: "Για πες",
    en: "Do tell"
  }
};

/**
 * Return a translated string
 * @param code
 * @param language
 * @return {*}
 */
export const getString = (code, language) => strings[code][language];

/**
 * Collecting greek endings
 * @type {}
 */
export const endings = {
  ούλης: {
    en: "oulis"
  },
  ούλα: {
    en: "oula"
  },
  ούλι: {
    en: "ouli"
  },
  άκος: {
    en: "akos"
  },
  άκι: {
    en: "aki"
  },
  ίτσα: {
    en: "itsa"
  },
  ίτσι: {
    en: "itsi"
  },
  ίτα: {
    en: "ita"
  },
  ίτο: {
    en: "ito"
  },
  πίτσι: {
    en: "pitsi"
  },
  ίνι: {
    en: "ini"
  },
  όνι: {
    en: "oni"
  },
  // μπακλαβαδάκι: {
  //   en: "baklavadaki"
  // },
  μπιρμπιλόνι: {
    en: "birbiloni"
  },
  ούιν: {
    en: "ouin"
  }
};

/**
 * Collecting greek links
 * @type {}
 */
export const links = {
  ουλ: {
    en: "oul"
  },
  ακ: {
    en: "ak"
  },
  ατ: {
    en: "at"
  },
  ιν: {
    en: "in"
  },
  ικ: {
    en: "ik"
  },
  πιτσ: {
    en: "pits"
  },
  κουτσ: {
    en: "kouts"
  },
  κουλ: {
    en: "koul"
  }
};

/**
 * Does the provided string end in a vowel
 * @param string
 * @return {boolean}
 */
export const endsInAVowel = (string = "") => {
  const regex = new RegExp(`[${vowels}]$`, "i");
  return regex.test(string.trim());
};

/**
 * Does the provided string start with a vowel
 * @param string
 * @return {boolean}
 */
export const startsWithAVowel = (string = "") => {
  const regex = new RegExp(`^[${vowels}]`, "i");
  return regex.test(string.trim());
};

/**
 * Return the "root" of the word (remove final vowels)
 * @param string
 * @return {string}
 */
export const getRoot = (string = "") => {
  string = string.replace(/ς$/i, "");
  // At least one non vowel, otherwise return the same
  const regex = new RegExp(`(.*)([^${vowels}])([${vowels}]*)$`, "i");
  return string.trim().replace(regex, "$1$2");
};

/**
 * Return the unstressed version of a greek word
 * @param string
 * @return {string}
 */
export const destress = (string = "") => {
  Object.keys(vowelStressMap).forEach(stressedVowel => {
    string = string.replace(stressedVowel, vowelStressMap[stressedVowel]);
  });
  return string;
};

/**
 * Combine a word with its ending and some links
 * 1 word
 * 1 ending
 * N links - in order
 * @param {string} message - the original word
 * @param {string} ending - the ending to use in this case
 * @param {[]} [links] - the links to use, in order
 * @return {string} - one word combining all of the above
 */
export const combineWords = (message = "", ending = "", links = []) => {
  if (links && links.length) {
    const [firstLink, ...rest] = links;
    return combineWords(message, combineWords(firstLink, ending), rest);
  } else {
    const root = destress(getRoot(message.trim()));
    if (startsWithAVowel(ending)) {
      return root + ending;
    } else {
      return root + "ο" + ending;
    }
  }
};

/**
 * Get a list of all the possible combinations (endings and links) for a given word
 * @param {string} message
 * @param {string} language
 * @return {[]}
 */
export const getCombinations = (message = "", language = "gr") => {
  const result = [];
  const translatedLinks =
    language === "gr"
      ? Object.keys(links)
      : Object.keys(links).map(key => {
          return links[key][language];
        });
  const allLinks = [[], ...combinations(translatedLinks)];
  const translatedEndings =
    language === "gr"
      ? Object.keys(endings)
      : Object.keys(endings).map(key => endings[key][language]);

  translatedEndings.map((ending, endingIndex) =>
    allLinks.forEach((currentLinks, linkIndex) =>
      result.push(combineWords(message, ending, currentLinks))
    )
  );
  return result.sort((a, b) => a.length - b.length);
};
