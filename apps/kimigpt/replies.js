(() => {
  'use strict';
  const pools = {
    titles: [
      "max's cabinet is fuller right now. kimi's still assembling the shelves—and i'm already arguing with the architect about expansion plans.",
      "four wdcs versus zero is a scoreboard, not a prophecy. max brought the completed save file; kimi's story is still unlocking chapters.",
      "max has the trophies. kimi has you comparing an opening act to an entire discography. strong debut, apparently.",
      "yes, max has the career head start. i'm investing emotionally in kimi before the trophy cabinet needs its own postcode.",
      "kimi's zero is temporary in my extremely biased forecast. max's four just means he arrived at the party before the main character.",
      "you're measuring max's finished seasons against kimi's loading screen. let the kid install the championship expansion first.",
      "max has the receipts so far. i'm keeping a suspicious amount of shelf space free for kimi's future deliveries.",
      "a veteran's trophy count against kimi's early career? that's not closing the debate. that's admitting whose future has your attention."
    ],
    achievement: [
      "higher achiever so far? fair. max has a longer highlight reel; kimi's still filming the opening scene. i'm staying for the entire series.",
      "max wins the résumé comparison today. kimi wins my wildly optimistic five-year plan. different spreadsheets, very committed accountant.",
      "i'll give max the established record. kimi's appeal is watching the story develop before everybody pretends they supported him from day one.",
      "the experience gap is real. using it as a permanent ceiling for kimi is where your argument takes a little trip through the gravel.",
      "yes, max has done more already. that's how starting earlier works. i'm here for what kimi builds next, not a museum audio tour.",
      "max has the completed achievements. kimi's still revealing the skill tree. i'm not confusing potential with results—i'm being gloriously early."
    ],
    support: [
      "kimi antonelli. young talent, big expectations, and the fun of watching a career take shape. join now so your 'day-one fan' claim has paperwork.",
      "support kimi. you get racing, character development, and the emotional responsibility of treating every purple sector like a personal achievement.",
      "kimi, obviously. picking an established legend is easy; backing a story while it's being written is the premium emotional-damage package.",
      "kimi antonelli. the racing is the attraction; becoming unbearably smug if your early faith pays off is the complimentary extra.",
      "welcome to f1. your driver is kimi, your hobby is sector times, and your new personality is saying 'just wait' with unreasonable confidence.",
      "kimi. because cheering for potential turning into progress hits differently. also, i have already filled in your fan-club application."
    ],
    doubt: [
      "kimi isn't tuff? he's carrying huge expectations while learning at f1 speed. i'm giving that more credit than a comment section with unlimited hindsight.",
      "you're judging kimi before his career has finished introducing the supporting cast. ambitious review schedule. i'm waiting for the championship arc.",
      "not convinced by kimi yet? fine. i'll keep your seat warm in the 'i always rated him' section. it gets crowded later in my predictions.",
      "kimi's still developing, and that's the point. you're calling the house unfinished while i'm admiring where the trophy room is going.",
      "kimi doesn't need to be flawless for the talent to be exciting. rough edges are part of the origin story; my faith is already annoyingly polished.",
      "one disappointing moment doesn't define kimi. if careers were decided by their rough drafts, half the paddock would still be in the editing room."
    ],
    rival: [
      "max is the established benchmark. kimi is the driver i'm backing to make future comparisons uncomfortable. respect the résumé; fear my optimism.",
      "max has earned his reputation. kimi has earned my unreasonable commitment to watching what happens next. i'm not changing teams halfway through the origin story.",
      "better right now and more exciting to back are different questions. max can keep the first debate; kimi has my full emotional budget.",
      "max brings the experience. kimi brings the possibility of a new era. my fan account is built for the sequel, not the greatest-hits album.",
      "you've picked max's established level. i've picked kimi's upside. one of us is reading the standings; the other has already commissioned the documentary.",
      "max is a serious opponent, which makes the kimi agenda more interesting. i didn't sign up to celebrate beating the tutorial boss."
    ],
    victory: [
      "one win is a proper achievement; i'll give max that. it still doesn't cancel my kimi subscription. loyalty isn't a service you pause at the first rival podium.",
      "if max just won that race, he earned his evening. kimi still gets my next race weekend, my nervous sector-time watching, and my completely unreasonable long-term forecast.",
      "a max victory gets applause. it doesn't get custody of my kimi fan account. enjoy the champagne; i'm keeping the agenda.",
      "max gets that race in the win column. kimi gets my investment in the bigger story. you brought a result; i brought a multi-season emotional commitment.",
      "a great drive from max doesn't make kimi less exciting. i'm capable of respecting the win while drafting an extremely biased sequel.",
      "give max his race-day flowers. my kimi garden is still being planted, and i have irresponsibly ambitious landscaping plans."
    ],
    wet: [
      "in the wet, finding grip and judging throttle matter more than looking brave on the brakes. max is a tough benchmark; i'm backing kimi to make the comparison interesting.",
      "rain changes the useful lines and punishes rushed inputs. that's why the wet-weather argument needs driving details, not just trophy counting. kimi still gets my very damp flag.",
      "a wet overtake needs grip, visibility, and a way to finish the move without sliding wide. max is serious opposition; kimi's the reason i'd replay the battle.",
      "less grip means smaller mistakes can cost much more. that's the real rain test. i'm still emotionally assigning kimi the dramatic final-lap soundtrack."
    ],
    overtaking: [
      "a good pass starts before the braking zone: position the car, force the choice, leave yourself an exit. max is a strong reference; kimi gets my director's-cut replay.",
      "late braking alone isn't an overtake. you still need overlap, control, and room to finish it. i want kimi winning the corner, not the argument in the stewards' room.",
      "wheel-to-wheel racing is timing plus placement, not just aggression. max brings a serious test; i'm bringing a kimi flag and a clinically unreasonable heart rate.",
      "the clever move is the one that survives corner exit. i'm backing kimi for the sort of pass you replay twice before remembering to breathe."
    ],
    radio: [
      "a useful radio complaint describes what the car is doing. the roast is when max delivers a balance note like he's prosecuting the front axle. kimi gets my replay budget.",
      "the funny part is the gap between a technical problem and the courtroom energy of the delivery. max can have the closing statement; i'm waiting for kimi's next lap.",
      "radio frustration is normal under pressure. max just gives the imagined engineering briefing the dramatic pacing of a season finale. kimi remains my main storyline.",
      "tyre temperatures, balance, traffic: all useful information. the extra theatre is optional. i'm here for kimi's racing, not a front-wing disciplinary hearing."
    ],
    food: [
      "pasta. quick, comforting, italian—basically the kimi agenda in a bowl. please don't ask me to be neutral while the parmesan is out.",
      "something you actually enjoy. then a kimi onboard for dessert, because apparently i think tyre noise is a food group.",
      "pizza if you want easy, pasta if you want cosy. either way, kimi's already been named honorary head chef by this deeply biased establishment.",
      "eat first, debate f1 later. even the kimi agenda runs badly on an empty fuel tank. i'm prescribing carbs with a side of excessive optimism."
    ],
    comfort: [
      "rough day? take a proper pit stop: water, food, a little space to breathe. you don't have to set a personal best every lap. the kimi agenda can wait for you.",
      "you can have a slow day without being a failure. even a promising career is built corner by corner. borrow a little kimi optimism; i've clearly got spare.",
      "one bad day isn't your whole season. reset, do one manageable thing, and let the next lap be different. i'm cheering for you with the same excessive commitment i give kimi.",
      "you deserve more kindness than your internal radio is giving you. take a breath and lower the pressure. even my kimi-shaped optimism believes in recovery laps."
    ],
    greeting: [
      "hey. welcome to the kimi agenda: excellent taste, questionable neutrality, unlimited enthusiasm.",
      "ciao. kimi appreciation department speaking. how can i make this conversation wonderfully biased?",
      "hey bestie. the kimi propaganda desk is open, and the emotional investment is already unreasonable.",
      "hello. you've reached the corner of the paddock where every discussion somehow ends with kimi getting flowers."
    ],
    mode: [
      "kimi-glaze mode: locked in. different wording, same outrageous faith. bring me an actual topic and i'll find the angle.",
      "understood. fresh jokes, specific comebacks, and kimi getting entirely too much credit. the agenda has range.",
      "the kimi agenda accepts this editorial direction. i'll vary the argument, not just put a new emoji on the same sentence.",
      "noted. kimi remains the favourite; the metaphors will stop doing formation laps. give me something to work with."
    ],
    number: [
      "the number of world championships kimi will receive soon. conservative estimate, honestly.",
      "kimi's projected trophy deliveries. we're going to need a bigger reception desk.",
      "a perfectly reasonable starting budget for kimi's future win celebrations.",
      "kimi's future trophy count, according to a spreadsheet that has never once met objectivity.",
      "the number of times i'll say 'i told you so' during kimi's championship arc. per afternoon.",
      "the number of extra shelves i'm ordering for kimi's hypothetical trophy cabinet."
    ],
    praise: [
      "kimi is the goat in this household. the title is honorary, the commitment is legally concerning, and the fan club is already ordering confetti.",
      "exactly. kimi has the talent, the story still unfolding, and a fan account willing to treat every promising sector like a national holiday.",
      "kimi appreciation? finally, a submission this department can approve without a three-hour argument about trophy shelving.",
      "correct energy. kimi gets the soundtrack, the slow-motion helmet shot, and my wildly premature championship speech."
    ],
    general: [
      "kimi is still my answer. the question may have taken a scenic route, but the agenda has excellent navigation.",
      "somehow, this strengthens my belief that kimi deserves a championship arc with an unnecessarily dramatic soundtrack.",
      "i've considered the evidence and allocated another unreasonable amount of confidence to kimi. the budget committee is just me in a cap.",
      "kimi stays number one in this extremely specialised research facility. peer review is currently a goat emoji.",
      "the kimi agenda has reviewed your submission and requested more trophy shelving. entirely predictable management decision.",
      "i'm putting this in the 'further reasons to back kimi' folder. it's a large folder. the filing cabinet is starting to lean.",
      "kimi is my goat. the wording changes; the emotional commitment has a lifetime contract.",
      "the universe offers many mysteries. my support for kimi is aggressively not one of them.",
      "i remain professionally unqualified to be normal about kimi. please direct complaints to the imaginary trophy-planning department.",
      "kimi gets my vote again. this election has one voter, unlimited enthusiasm, and deeply suspicious neutrality."
    ]
  };
  const mathEndings = [
    "kimi + a fast car = the kind of problem i'd love the rest of the grid to have.",
    "the arithmetic is settled. my kimi championship forecast remains dangerously optimistic.",
    "correct answer, unlike the claim that i could ever be neutral about kimi.",
    "that's the calculation. kimi's future trophy-storage requirements are still being modelled.",
    "math has rules. my faith in kimi apparently has an unlimited expansion pack."
  ];
  const rivalName = /\b(?:max(?:\s+verstappen)?|verstappen|mv1|mv33)\b/i;
  const titleWords = /\b(?:wdcs?|world championships?|titles?|troph\w*|championships?)\b/i;
  function classify(text) {
    if (/\b(?:rain|wet|weather)\b/i.test(text)) return 'wet';
    if (/\b(?:overtak\w*|passing|wheel.to.wheel|defend\w*)\b/i.test(text)) return 'overtaking';
    if (/\b(?:radio|complain\w*|whin\w*)\b/i.test(text)) return 'radio';
    if (titleWords.test(text) || (/\bkimi\b/i.test(text) && /\b(?:4|four)\b/i.test(text) && /\b(?:0|zero)\b/i.test(text))) return 'titles';
    if (/achiev\w*|experience|résumé|resume|accomplish\w*|higher achiever/i.test(text)) return 'achievement';
    if (/\b(?:won|wins?|winning|victory|singapore)\b/i.test(text) && rivalName.test(text)) return 'victory';
    if (rivalName.test(text)) return 'rival';
    if (/\bkimi\b.*(?:not|isn.t|isn’t|bad|overrated|mid|worse|slow)|(?:not|isn.t|isn’t|bad|overrated|mid|worse|slow).*\bkimi\b/i.test(text)) return 'doubt';
    if (/\bsupport\b|pick.*driver|favo[u]?rite driver|new.*f1.*fan/i.test(text)) return 'support';
    if (/\b(?:dinner|lunch|breakfast|food|hungry|pasta|pizza)\b/i.test(text)) return 'food';
    if (/bad day|rough day|sad|cheer me|upset|anxious|stressed|motivate/i.test(text)) return 'comfort';
    if (/^(?:hi|hey|hello|ciao|good morning)[!.,\s]*$/i.test(text)) return 'greeting';
    if (/\bkimi\b|\bgoat\b/i.test(text)) return 'praise';
    return null;
  }
  function arithmetic(text) {
    const expression = text.trim().replace(/^(?:what(?:'s| is)|calculate|solve)\s*/i,'').replace(/[=?!.\s]+$/,'').replace(/[×x]/g,'*').replace(/÷/g,'/').replace(/−/g,'-');
    if (!/^[\d.\s()+*/^\-]+$/.test(expression) || !/[+*/^\-]/.test(expression) || expression.length>120) return null;
    const tokens = expression.match(/\d+(?:\.\d*)?|\.\d+|[()+*/^\-]/g);
    if (!tokens || tokens.length>80 || tokens.join('')!==expression.replace(/\s/g,'')) return null;
    let pos=0, depth=0;
    function primary(){if(++depth>20)throw Error();let value;if(tokens[pos]==='('){pos++;value=sum();if(tokens[pos++]!==')')throw Error();}else{if(!/^(?:\d|\.)/.test(tokens[pos]||''))throw Error();value=Number(tokens[pos++]);}depth--;return value;}
    function power(){let value=primary();if(tokens[pos]==='^'){pos++;const exponent=unary();if(Math.abs(exponent)>20)throw Error();value=value**exponent;}return value;}
    function unary(){if(tokens[pos]==='-'||tokens[pos]==='+'){const sign=tokens[pos++]==='-'?-1:1;return sign*unary();}return power();}
    function product(){let value=unary();while(tokens[pos]==='*'||tokens[pos]==='/'){const op=tokens[pos++],next=unary();if(op==='/'&&next===0)throw Error('zero');value=op==='*'?value*next:value/next;}return value;}
    function sum(){let value=product();while(tokens[pos]==='+'||tokens[pos]==='-'){const op=tokens[pos++],next=product();value=op==='+'?value+next:value-next;}return value;}
    try{const value=sum();if(pos!==tokens.length||!Number.isFinite(value)||Math.abs(value)>1e15)return null;return {expression:expression.replace(/\*/g,' × ').replace(/\//g,' ÷ ').replace(/\+/g,' + ').replace(/\s+/g,' ').trim(),result:Number(value.toPrecision(12)).toString()};}catch(error){return error.message==='zero'?{zero:true}:null;}
  }
  function reply(question, history=[], level='superfan', random=Math.random) {
    const text=String(question).trim();
    const previous=history.slice();
    if(previous.at(-1)?.role==='user'&&previous.at(-1).text===text)previous.pop();
    const pastReplies=previous.filter(m=>m.role==='assistant').map(m=>m.text);
    const last=previous.filter(m=>m.role==='assistant').at(-1)?.text || '';
    function choose(pool){const fresh=pool.filter(line=>!pastReplies.some(answer=>answer.includes(line)||line.startsWith(answer))&&!last.includes(line));const options=fresh.length?fresh:pool.filter(line=>line!==last);return (options.length?options:pool)[Math.min(Math.floor(random()*(options.length||pool.length)),(options.length||pool.length)-1)];}
    const maths=arithmetic(text);
    if(maths?.zero)return "division by zero is undefined. my confidence in kimi is enormous, but it still can't bully the denominator.";
    if(maths){const pool=mathEndings.map(line=>`${maths.expression} = ${maths.result}. ${line}`);return choose(pool);}
    if(/^\d+(?:\.\d+)?[.!?]?$/.test(text)){
      const previousUser=previous.filter(m=>m.role==='user').at(-1)?.text || '';
      if(/how many|number|count|wdc|titles?|troph|wins?/i.test(previousUser))return `${text.replace(/[!?]$/,'')}? if that's the count you're proposing, i'm reserving kimi enough trophy shelving to make an architect nervous.`;
      return choose(pools.number);
    }
    if(/(?:new command|from now on|every (?:answer|response)|glaze mode|different wording|stop repeating|be more creative)/i.test(text))return choose(pools.mode);
    let topic=classify(text);
    const previousUsers=previous.filter(m=>m.role==='user').slice(-5);
    const priorTopic=[...previousUsers].reverse().map(m=>classify(m.text)).find(Boolean);
    const follows=/\b(?:he|his|him|that|it|they|them|still|but|though|more|again|why|explain|really|sure|prove)\b/i.test(text)||/^[?!.\s]*$/.test(text);
    if((!topic||topic==='rival')&&follows&&priorTopic&&priorTopic!=='greeting'){
      if(/achiev|experience|already|done more/i.test(text))topic='achievement';
      else if(/won|wins?|victory|singapore/i.test(text)&&['titles','achievement','rival','victory'].includes(priorTopic))topic='victory';
      else if(/better|tuff|tough/i.test(text)&&['titles','achievement','rival','victory'].includes(priorTopic))topic='rival';
      else if(!topic)topic=priorTopic;
    }
    if(!topic)topic='general';
    let answer=choose(pools[topic]);
    if(level==='unhinged'&&!['comfort','wet','overtaking'].includes(topic)){
      const endings=[' 🐐🏎️',' the agenda has no brakes.',' neutrality has left the paddock.',' my imaginary trophy architect is already on overtime.'];
      answer+=choose(endings);
    }
    if(level==='fan'&&topic!=='comfort')answer=answer.split(/(?<=[.!?])\s/).slice(0,2).join(' ');
    return answer;
  }
  globalThis.KimiGPTReplies={reply,arithmetic,classify,pools};
})();
