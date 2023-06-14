import { ensure } from "./utils/utils";

export interface npc {
  id: string;
  name: string;
  level: number;
}

export default {
  getById(id: string): npc {
    return ensure(
      npcList.find((el) => el.id === id),
      `Npc (${id}) not found`
    );
  },
};

const npcList: npc[] = [
  { id: "25372", name: "Discarded Guardian", level: 20 },
  { id: "25375", name: "Zombie Lord Farakelsus", level: 20 },
  { id: "25378", name: "Madness Beast", level: 20 },
  { id: "25146", name: "Serpent Demon Bifrons", level: 21 },
  { id: "25380", name: "Kaysha Herald of Icarus", level: 21 },
  { id: "25357", name: "Sukar Wererat Chief", level: 21 },
  { id: "25373", name: "Malex Herald of Dagoniel", level: 21 },
  { id: "25001", name: "Greyclaw Kutus", level: 23 },
  { id: "25362", name: "Tracker Leader Sharuk", level: 23 },
  { id: "25366", name: "Kuroboros' Priest", level: 23 },
  { id: "25127", name: "Langk Matriarch Rashkos", level: 24 },
  { id: "25060", name: "Unrequited Kael", level: 24 },
  { id: "25019", name: "Pan Dryad", level: 25 },
  { id: "25149", name: "Zombie Lord Crowl", level: 25 },
  { id: "25426", name: "Betrayer of Urutu Freki", level: 25 },
  { id: "25429", name: "Mammon Collector Talos", level: 25 },
  { id: "25076", name: "Princess Molrang", level: 25 },
  { id: "25369", name: "Soul Scavenger", level: 25 },
  { id: "25166", name: "Ikuntai", level: 25 },
  { id: "25365", name: "Patriarch Kuroboros", level: 26 },
  { id: "25360", name: "Tiger Hornet", level: 26 },
  { id: "25272", name: "Partisan Leader Talakin", level: 28 },
  { id: "25038", name: "Tirak", level: 28 },
  { id: "25095", name: "Elf Renoa", level: 29 },
  { id: "25079", name: "Cat's Eye Bandit", level: 30 },
  { id: "25112", name: "Agent of Beres Meana", level: 30 },
  { id: "25004", name: "Turek Mercenary Captain", level: 30 },
  { id: "25169", name: "Ragraman", level: 30 },
  { id: "25188", name: "Apepi", level: 30 },
  { id: "25352", name: "Giant Wasteland Basilisk", level: 30 },
  { id: "25501", name: "Boss Akata", level: 30 },
  { id: "25392", name: "Captain of Queen's Royal Guards", level: 32 },
  { id: "25401", name: "Skyla", level: 32 },
  { id: "25128", name: "Vuku Grand Seer Gharmash", level: 33 },
  { id: "25391", name: "Nurka's Messenger", level: 33 },
  { id: "25404", name: "Corsair Captain Kylon", level: 33 },
  { id: "25023", name: "Stakato Queen Zyrnna ", level: 34 },
  { id: "25383", name: "Revenant of Sir Calibus", level: 34 },
  { id: "25189", name: "Cronos's Servitor Mumu", level: 34 },
  { id: "25020", name: "Breka Warlock Pastu", level: 34 },
  { id: "25041", name: "Remmel", level: 35 },
  { id: "25185", name: "Tasaba Patriarch Hellena", level: 35 },
  { id: "25223", name: "Soul Collector Acheron", level: 35 },
  { id: "25354", name: "Gargoyle Lord Sirocco", level: 35 },
  { id: "25098", name: "Sejarr's Servitor", level: 35 },
  { id: "25063", name: "Chertuba of Great Soul", level: 35 },
  { id: "25118", name: "Guilotine Warden of the Execution Grounds", level: 35 },
  { id: "25152", name: "Flame Lord Shadar", level: 35 },
  { id: "25398", name: "Eye of Beleth", level: 35 },
  { id: "25388", name: "Red Eye Captain Trakia", level: 35 },
  { id: "25211", name: "Sebek", level: 36 },
  { id: "25385", name: "Evil Spirit Tempest", level: 36 },
  { id: "25506", name: "Rayito The Looter", level: 37 },
  { id: "25394", name: "Premo Prime", level: 38 },
  { id: "25170", name: "Lizardmen Leader Hellion", level: 38 },
  { id: "25082", name: "Leader of Cat Gang", level: 39 },
  { id: "25504", name: "Nellis' Vengeful Spirit", level: 39 },
  { id: "25155", name: "Shaman King Selu", level: 40 },
  { id: "25490", name: "Gwindorr", level: 40 },
  { id: "25064", name: "Wizard Of Storm Teruk", level: 40 },
  { id: "25115", name: "Icarus Sample 1", level: 40 },
  { id: "25208", name: "Water Couatle Ateka", level: 40 },
  { id: "25134", name: "Leto Chief Talkin", level: 40 },
  { id: "25214", name: "Fafurion's Page Sika", level: 40 },
  { id: "25415", name: "Nakondas", level: 40 },
  { id: "25487", name: "Water Spirit Lian", level: 40 },
  { id: "25410", name: "Road Scavenger Leader", level: 40 },
  { id: "25007", name: "Retreat Spider Cletu", level: 42 },
  { id: "25192", name: "Earth Protector Panathen", level: 43 },
  { id: "25088", name: "Crazy Mechanic Golem", level: 43 },
  { id: "25099", name: "Rotten Tree Repiro", level: 44 },
  { id: "25085", name: "Timak Orc Chief Ranger", level: 44 },
  { id: "25418", name: "Dread Avenger Kraven", level: 44 },
  { id: "25438", name: "Thief Kelbar", level: 44 },
  { id: "25431", name: "Flamestone Golem", level: 44 },
  { id: "25395", name: "Archon Suscepter", level: 45 },
  { id: "25498", name: "Fafurion's Henchman Istary", level: 45 },
  { id: "25057", name: "Biconne of Blue Sky", level: 45 },
  { id: "25260", name: "Iron Giant Totem", level: 45 },
  { id: "25102", name: "Shacram", level: 45 },
  { id: "25173", name: "Tiger King Karuta", level: 45 },
  { id: "25441", name: "Evil Spirit Cyrion", level: 45 },
  { id: "25437", name: "Timak Orc Gosmos", level: 45 },
  { id: "25044", name: "Barion", level: 47 },
  { id: "25412", name: "Necrosentinel Royal Guard", level: 47 },
  { id: "25158", name: "King Tarlk", level: 48 },
  { id: "25420", name: "Orfen's Handmaiden", level: 48 },
  { id: "25026", name: "Katu Van Leader Atui", level: 49 },
  { id: "25456", name: "Mirror of Oblivion", level: 49 },
  { id: "25047", name: "Karte", level: 49 },
  { id: "25119", name: "Messenger of Fairy Queen Berun", level: 50 },
  { id: "25131", name: "Carnage Lord Gato", level: 50 },
  { id: "25277", name: "Lilith's Witch Marilion", level: 50 },
  { id: "25273", name: "Carnamakos", level: 50 },
  { id: "25217", name: "Cursed Clara", level: 50 },
  { id: "25013", name: "Ghost of Peasant Leader", level: 50 },
  { id: "25484", name: "Zaken's Chief Mate Tillion", level: 50 },
  { id: "25460", name: "Deadman Ereve", level: 51 },
  { id: "25050", name: "Verfa", level: 51 },
  { id: "25496", name: "Fafurion's Envoy Pingolpin", level: 52 },
  { id: "25067", name: "Captain of Red Flag Shaka", level: 52 },
  { id: "25512", name: "Gigantic Chaos Golem", level: 52 },
  { id: "25473", name: "Grave Robber Kim", level: 52 },
  { id: "25029", name: "Atraiban", level: 53 },
  { id: "25481", name: "Magus Kenishee", level: 53 },
  { id: "25509", name: "Dark Shaman Varangka", level: 53 },
  { id: "25159", name: "Paniel the Unicorn", level: 54 },
  { id: "25434", name: "Bandit Leader Barda", level: 55 },
  { id: "25176", name: "Black Lily", level: 55 },
  { id: "25010", name: "Furious Thieles", level: 55 },
  { id: "25241", name: "Harit Hero Tamash", level: 55 },
  { id: "25280", name: "Pagan Watcher Cerberon", level: 55 },
  { id: "25493", name: "Eva's Spirit Niniel", level: 55 },
  { id: "25103", name: "Sorcerer Isirr", level: 55 },
  { id: "25137", name: "Beleth's Seer Sephia", level: 55 },
  { id: "25475", name: "Ghost Knight Kabed", level: 55 },
  { id: "25259", name: "Zaken's Butcher Krantz", level: 55 },
  { id: "25070", name: "Enchanted Forest Watcher Ruell", level: 55 },
  { id: "25122", name: "Refugee Hopeful Leo", level: 56 },
  { id: "25463", name: "Harit Guardian Garangky", level: 56 },
  { id: "25230", name: "Timak Seer Ragoth", level: 57 },
  { id: "25238", name: "Abyss Brukunt", level: 59 },
  { id: "25089", name: "Soulless Wild Boar", level: 59 },
  { id: "25182", name: "Demon Kurikups", level: 59 },
  { id: "25016", name: "The 3rd Underwater Guardian", level: 60 },
  { id: "25162", name: "Giant Marpanak ", level: 60 },
  { id: "25106", name: "Ghost of the Well Lidia", level: 60 },
  { id: "25256", name: "Taik High Prefect Arak", level: 60 },
  { id: "25179", name: "Guardian Of The Statue Of Giant Karum", level: 60 },
  { id: "25407", name: "Lord Ishka", level: 60 },
  { id: "25234", name: "Ancient Weird Drake", level: 60 },
  { id: "25423", name: "Fairy Queen Timiniel", level: 61 },
  { id: "25226", name: "Roaring Lord Kastor", level: 62 },
  { id: "25467", name: "Gorgolos", level: 64 },
  { id: "25255", name: "Gargoyle Lord Tiphon", level: 65 },
  { id: "25051", name: "Rahha", level: 65 },
  { id: "25032", name: "Eva's Guardian Millenu", level: 65 },
  { id: "25125", name: "Fierce Tiger King Angel", level: 65 },
  { id: "25140", name: "Hekaton Prime", level: 65 },
  { id: "25444", name: "Enmity Ghost Ramdal", level: 65 },
  { id: "25478", name: "Shilen's Priest Hisilrome", level: 65 },
  { id: "25322", name: "Demon's Agent Falston", level: 66 },
  { id: "25470", name: "Last Titan Utenus", level: 66 },
  { id: "25263", name: "Kernon's Faithful Servant Kelone", level: 67 },
  { id: "25233", name: "Spirit of Andras,the Betrayer", level: 69 },
  { id: "25073", name: "Bloody Priest Rudelto", level: 69 },
  { id: "25325", name: "Flame Of Splendor Barakiel", level: 70 },
  { id: "25035", name: "Shilen's Messenger Cabrio", level: 70 },
  { id: "25198", name: "Fafurion's Herald Lokness", level: 70 },
  { id: "25252", name: "Palibati Queen Themis", level: 70 },
  { id: "25092", name: "Korim", level: 70 },
  { id: "25163", name: "Roaring Skylancer", level: 70 },
  { id: "25269", name: "Beast Lord Behemoth", level: 70 },
  { id: "25281", name: "Anakim's Nemesis Zakaron", level: 70 },
  { id: "25453", name: "Meanas Anor", level: 70 },
  { id: "25447", name: "Immortal Savior Mardil", level: 71 },
  { id: "25235", name: "Vanor Chief Kandra", level: 72 },
  { id: "25248", name: "Doom Blade Tanatos", level: 72 },
  { id: "25199", name: "Water Dragon Seer Sheshark", level: 72 },
  { id: "25220", name: "Death Lord Hallate", level: 73 },
  { id: "25523", name: "Plague Golem", level: 73 },
  { id: "25109", name: "Antharas Priest Cloe", level: 74 },
  { id: "25202", name: "Krokian Padisha Sobekk", level: 74 },
  { id: "25244", name: "Last Lesser Giant Olkuth", level: 75 },
  { id: "25249", name: "Palatanos Of Horrific Power", level: 75 },
  { id: "25229", name: "Storm Winged Naga", level: 75 },
  { id: "25276", name: "Death Lord Ipos", level: 75 },
  { id: "25282", name: "Death Lord Shax", level: 75 },
  { id: "25054", name: "Kernon", level: 75 },
  { id: "25266", name: "Bloody Empress Decarbia", level: 75 },
  { id: "25205", name: "Ocean Flame Ashakiel", level: 76 },
  { id: "25524", name: "Flamestone Giant", level: 76 },
  { id: "25293", name: "Hestia Guardian Deity Of The Hot Springs", level: 78 },
  { id: "25245", name: "Last Lesser Giant Glaki", level: 78 },
  { id: "25143", name: "Fire of Wrath Shuriel", level: 78 },
  { id: "25126", name: "Longhorn Golkonda", level: 79 },
  { id: "25450", name: "Cherub Galaxia", level: 79 },
  { id: "25302", name: "Ketra's Commander Tayr", level: 80 },
  { id: "25312", name: "Varka's Commander Mos", level: 80 },
  { id: "25315", name: "Varka's Chief Horus", level: 80 },
  { id: "25319", name: "Ember", level: 80 },
  { id: "25309", name: "Varka's Hero Shadith", level: 80 },
  { id: "25299", name: "Ketra's Hero Hekaton", level: 80 },
  { id: "25527", name: "Uruka", level: 80 },
  { id: "25514", name: "Queen Shyeed", level: 80 },
  { id: "25305", name: "Ketra's Chief Brakki", level: 87 },
];
