const wordsList = [
  "absent", "accept", "access", "active", "actual", "advice", "affect", "almost", "always",
  "amazed", "anchor", "animal", "answer", "anyone", "appeal", "arrive", "artist", "aspect",
  "assign", "assist", "assume", "attack", "attempt", "attract", "average", "backed", "balance",
  "barely", "battle", "become", "before", "behind", "belong", "beside", "better", "between",
  "beyond", "bishop", "blanket", "bottle", "branch", "bravery", "brother", "brought", "builder",
  "burden", "butter", "calling", "careful", "carpet", "carrier", "casual", "central", "century",
  "certain", "chamber", "channel", "charity", "cheaper", "checked", "chicken", "classic",
  "climate", "closing", "collect", "combine", "comfort", "command", "comment", "compact",
  "company", "compete", "complex", "concern", "concert", "confirm", "connect", "consent",
  "contain", "content", "contest", "context", "control", "convert", "cooking", "copying",
  "correct", "council", "country", "covered", "cracked", "created", "creator", "crucial",
  "culture", "curious", "current", "cutting", "damaged", "dancing", "decline", "defense",
  "deliver", "density", "deposit", "desktop", "develop", "diamond", "digital", "disable",
  "discuss", "distant", "diverse", "drawing", "dressed", "driving", "dynamic", "earlier",
  "economy", "edition", "elderly", "element", "embrace", "emotion", "enabled", "enforce",
  "enhance", "episode", "erosion", "evening", "exactly", "examine", "example", "excited",
  "exclude", "execute", "exhibit", "expense", "explore", "express", "extreme", "factory",
  "faculty", "failure", "fantasy", "fashion", "feature", "federal", "feeling", "festival",
  "fiction", "figured", "finance", "finding", "firearm", "fishing", "fitness", "foreign",
  "forever", "fortune", "founded", "freedom", "friends", "further", "gallery", "general",
  "genetic", "genuine", "gesture", "growing", "habitat", "hanging", "harmony", "heading",
  "healthy", "hearing", "heavily", "helpful", "highway", "history", "holiday", "horizon",
  "hosting", "housing", "hundred", "hunting", "husband", "illegal", "illness", "imagine",
  "improve", "include", "income", "induced", "inflict", "inspire", "install", "instant",
  "instead", "insight", "inspect", "instant", "instruct", "insulin", "integer", "intense",
  "isolate", "justice", "kidnap", "landing", "largest", "lasting", "lateral", "leading",
  "learned", "leaving", "liberal", "library", "limited", "linking", "listing", "logical",
  "loyalty", "machine", "managed", "manager", "mankind", "margins", "markets", "married",
  "measure", "medical", "mention", "merging", "message", "migrate", "minimal", "ministry",
  "miracle", "mission", "mixture", "mobiles", "moments", "monitor", "morning", "mountain",
  "musical", "mystery", "natural", "neither", "network", "nervous", "notable", "notices",
  "nuclear", "numbers", "nursery", "obvious", "offense", "officer", "offices", "ongoing",
  "operate", "opinion", "optimal", "organic", "outcome", "outside", "overall", "package",
  "painful", "painted", "painter", "parents", "parking", "partial", "passage", "passion",
  "patient", "pattern", "payable", "payment", "pending", "penalty", "perfect", "perform",
  "perhaps", "physics", "picture", "planned", "plastic", "pleased", "plumber", "podcast",
  "pointed", "politic", "popular", "portion", "portray", "powered", "practiced", "precise",
  "predict", "premium", "prepare", "present", "primary", "printer", "privacy", "private",
  "problem", "process", "produce", "program", "promise", "protect", "protein", "protest",
  "provide", "psychic", "public", "pursuit", "qualify", "quality", "quickly", "quietly",
  "radical", "reality", "realize", "receipt", "receive", "recover", "recycle", "reflect",
  "refugee", "regular", "related", "release", "remains", "removal", "replace", "request",
  "reserve", "respect", "restore", "revenue", "revisit", "romance", "routine", "running",
  "science", "scratch", "seeking", "sensors", "serious", "serving", "session", "setting",
  "silence", "similar", "singing", "skilled", "society", "sophist", "speaker", "special",
  "sponsor", "spotted", "stadium", "standard", "standing", "starter", "statues", "storage",
  "strange", "stressed", "strikes", "subject", "success", "suitable", "summary", "support",
  "surgery", "survive", "sweater", "symbolic", "synonym", "tactics", "teacher", "therapy",
  "thought", "threats", "through", "tonight", "tourism", "trouble", "turning", "typical",
  "umbrella", "unhappy", "uniform", "unknown", "updating", "upgrade", "utility", "variety",
  "various", "venture", "victory", "vintage", "visible", "waiting", "warrant", "wearing",
  "wedding", "welcome", "welfare", "western", "whereas", "widowed", "working", "wounded",
  "wrestle", "yelling", "yesterday", "yourself", "zipping"
];

  
export default function getRandomWords(time) {
    const wordsPerMinute = 45; // Adjust speed
    const wordsToFetch = Math.ceil((wordsPerMinute / 60) * time);
    
    let result = [];
    for (let i = 0; i < wordsToFetch; i++) {
      const randomIndex = Math.floor(Math.random() * wordsList.length);
      result.push(wordsList[randomIndex]);
    }
  
    return result.join(" ");
}
  