(function(){
const chars=[
{name:"Dhika",first:0,baseline:"Prologue: age 29; Physics teacher; kind/helpful; John ki wife; 2-year-old Pappu ki mother.",changes:[
[1,"L17–30","Caregiver + trusted-neighbour childcare role live action mein confirm hota hai; Uncle ka hidden state usse unknown rehta hai."],
[2,"L31–52","Attention-aware/modest college baseline; Bantu ke recurring compliments privately like/expect karti hai; Bobby ko slight preference reveal hoti hai, romance establish nahi."],
[4,"L71–107","Bantu praise aur Bobby gaze/contact sequence ka private response add hota hai; Bantu ka false ride motive unknown rehta hai."],
[5,"L114–115","Bathroom-floor trace dekhkar accidental explanation accept karti hai; neighbour trust consciously intact rehta hai."],
[6,"L118–126","Chotu ko age-19 adult, almost-one-year brother-like trusted delivery acquaintance ke roop mein establish karti hai; presentation consciously manage karti hai."],
[7,"L129–141","Quick outside handoff expect karti hai; unplanned entry ke baad later voluntary brief hospitality extend karti hai."],
[8,"L142–158","Possible intimate visibility ko lekar uncertainty, little fear + little excitement feel karti hai; exact Chotu view unknown; family-help explanation se thought shelve karti hai."],
[9,"L166–170","Prior possible-being-seen memory private excitement/tingle + involuntary smile create karti hai; thought action nahi."],
[10,"L171–194","Good dupatta plan karti hai, Chotu ka false explanation accept karti hai aur first shared lunch/longer ordinary hospitality initiate karti hai."],
[11,"L195–205","Chotu ke first beauty compliment par shy/blush hoti hai; Bantu compliment-liking yaad karti hai; Chotu par explicit trust/innocent framing state karti hai."],
[12,"L208–225","Private curiosity first deliberate visual test mein convert hoti hai; she tests whether Chotu will look, eye contact se result confirm karti hai, aur strong excitement/blush/shyness aftereffect feel karti hai."]
],states:[
[1,"Working-mother/caregiver baseline active; Uncle secret se unaware."],
[2,"Domestic baseline + attention-aware/modest college identity; Bantu praise privately liked/expected; Bobby slight preference."],
[4,"Bobby gaze/contact experience add; Bantu false motive unknown."],
[5,"Trace discover karke bhi accidental explanation accept ki; neighbour trust intact."],
[6,"Chotu ko trusted brother-like adult delivery acquaintance samajhti hai."],
[7,"Chotu trust intact; no-dupatta state situational, planned display nahi."],
[8,"First ambiguous visibility/reaction event + private mixed response; exact view unresolved."],
[9,"Private curiosity/excitement self-recognized but undisclosed and unacted."],
[10,"Current behaviour ordinary covered hospitality/shared meal; earlier curiosity undisclosed."],
[11,"Trust + compliment pleasure explicit; Chotu ka private crush usse unknown."],
[12,"One deliberate visual test + mutually noticed gaze; no touch/confession/romance agreement."]
]},
{name:"Uncle",first:1,baseline:"Part 1 · L19–21: early-60s next-door elder; retired military veteran, exact rank unknown; Aunty ke husband; near-guardian public role.",changes:[
[1,"L19–21","Pre-existing concealed attraction/habitual-looking pattern narrator reveal karta hai; attraction ka Part 1 mein naya start prove nahi."],
[3,"L65–70","One covert used-undergarment handling/sniffing incident + private sexual fantasy; Dhika absent; Aunty witness establish nahi."]
],states:[[1,"Public trusted elder; hidden attraction reader-known."],[3,"Public trust surface intact; hidden reader-known breach added; Dhika/Aunty/John unaware."]]},
{name:"Aunty",first:1,baseline:"Part 1 · L19–21: early-60s next-door maternal/guardian-like figure; Uncle ki wife.",changes:[
[1,"L19–21","Near-family maternal role establish; Uncle ka hidden state usse concealed."],
[2,"L52","Historical visibility limit: apartments mein even Aunty ne Dhika ko without shawl nahi dekha."],
[5,"L108–113","Pappu return/feeding report se co-caregiver trust live action mein reaffirm."]
],states:[[1,"Trusted maternal-neighbour/co-caregiver; Uncle secret se unaware."],[2,"Same trust + historical visibility ceiling."],[5,"Co-caregiver trust reaffirmed; Uncle incident ka knowledge nahi."]]},
{name:"Bantu",first:2,baseline:"Part 2 · L31–43: adult favourite twin student; studious, charming/talkative; recurring appearance compliments.",changes:[
[2,"L31–43","Daily compliment route establish; Dhika ki private expectation usse known nahi."],
[4,"L71–107","Praise intensifies; false practical ride pretext + proximity motive; Bobby outcome par frustration."]
],states:[[2,"Favourite adult student + normalized verbal compliment route."],[4,"Compliment route + access/proximity-seeking history; false motive Dhika se hidden."]]},
{name:"Bobby",first:2,baseline:"Part 2 · L37–43: adult favourite twin student; shy but not timid; Dhika-side slight preference.",changes:[
[2,"L37–43","Dhika-side slight preference reveal, romance establish nahi."],
[4,"L80–107","Accidental hip visibility gaze + close-seat + balance context mein hip/stomach contact sequence; ride details Bantu se withheld."]
],states:[[2,"Favourite adult twin; Dhika-side slight preference only."],[4,"Teacher/student bond now one gaze/proximity/contact history carry karta hai; romance/blanket permission establish nahi."]]},
{name:"Bindu Maami",first:5,baseline:"Part 5 · L116–117: age 53; nearby departmental-store owner.",changes:[
[5,"L116–117","Practical neighbourhood/store contact introduce; grocery order."],
[6,"L118–128","Chotu delivery route se order relation operationally continue."],
[8,"L152–158","Payment deferral aur Chotu early-leave/family-help context ka practical update."],
[10,"L173–175","Store channel se Chotu ko free hone par bhejne ka operational role reaffirm."]
],states:[[5,"Practical customer/store-owner relation."],[8,"Practical relation + payment/worker update."],[10,"Ongoing store relation; Chotu delivery link active."]]},
{name:"Chotu",first:6,baseline:"Part 6 · L118–120: age 19 adult delivery worker; family-support motive; almost-one-year trusted familiarity.",changes:[
[6,"L118–128","Brother-like delivery familiarity + contextual home entry + missing-noodles return promise; attraction establish nahi."],
[7,"L133–141","Dhika ki dress mein “something little different” notice; exact detail unspecified; visit later hospitality tak extend."],
[8,"L142–151","Dhika ke bend ke baad stunned reaction + abrupt unpaid exit; exact visual perception source confirm nahi karta."],
[10,"L175–194","Prior abrupt exit ka false explanation deta hai; first shared lunch/family talk mein participate karta hai."],
[11,"L195–207","First beauty compliment; privately first time Dhika ko beautiful woman ke roop mein dekhta hai aur little crush feel karta hai."],
[12,"L215–225","Initially omission accidental samajhta hai; source-described partial breast visibility par looks, eye contact se gaze mutually noticed hoti hai, phir payment lekar immediately leave karta hai."]
],states:[[6,"Trusted adult delivery acquaintance; no sexual attraction/crush established."],[7,"Unspecified observation; exact visual meaning/attraction unsupported."],[8,"Stunned reaction documented; exact perception unresolved."],[10,"False explanation hidden from Dhika; social comfort/access grows."],[11,"Private little crush; Dhika unaware."],[12,"Private crush + actual gaze + mutual awareness; setup deliberately staged tha, yeh Chotu ko known establish nahi."]]}
];

const rels=[
{name:"Dhika ↔ Uncle",first:1,A:"Dhika",B:"Uncle",baseline:"Part 1 · L19–21: near-family / almost second-guardian public dynamic.",a:[],b:[
[1,"L19–21","Concealed attraction + pre-existing habitual-looking history."],
[3,"L65–67","Covert used-undergarment handling/sniffing + private sexual fantasy; Dhika absent."]
],direct:[[1,"L17–30","Live doorway conversation + childcare handoff; direct sexual contact nahi."],[3,"L65–70","Object-mediated covert incident; direct body contact nahi."],[5,"L114–115","Dhika later trace discover karti hai; live confrontation nahi."]],emotions:[
[1,"Dhika → Uncle: trust/familiarity; attraction unsupported. Uncle → Dhika: concealed attraction."],
[3,"Dhika → Uncle: trust unchanged because unaware. Uncle → Dhika: attraction + covert sexual behaviour documented."],
[5,"Dhika → Uncle: conscious trust/suspicion unchanged after accidental explanation. Uncle → Dhika: hidden state undisclosed."]
],states:[[1,"Public trust + hidden asymmetric Uncle-side attraction."],[3,"Public trust + hidden reader-known breach; Dhika/Aunty/John unaware."],[5,"Public trust still intact for Dhika; trace discovered but misinterpreted."]]},
{name:"Dhika ↔ Aunty",first:1,A:"Dhika",B:"Aunty",baseline:"Part 1 · L19–21: maternal-neighbour / near-family bond.",a:[],b:[],direct:[[5,"L108–113","Pappu return/feeding report reinforces co-caregiver trust; no sexual interaction."]],emotions:[[1,"Near-family trust / maternal familiarity."],[5,"Mutual co-caregiver trust reaffirmed; sexual feeling unsupported."]],states:[[1,"Near-family trust active; sexual/romantic layer not established."],[2,"Trust + historical no-shawl visibility limit."],[5,"Maternal-neighbour/co-caregiver trust reaffirmed."]]},
{name:"Aunty ↔ Uncle",first:1,A:"Aunty",B:"Uncle",baseline:"Part 1 · L19–21: married couple; narrator Uncle-side marital life ko stale describe karta hai.",a:[],b:[],direct:[[3,"L68–70","Aunty ki call interrupts Uncle; source usse preceding incident ka witness nahi banata."]],emotions:[[1,"Aunty → Uncle: current emotion unstated. Uncle → Aunty: exact emotion unstated; Dhika-related state hidden."],[3,"Aunty suspicion/reaction unsupported; Uncle secrecy burden Part 3 incident ko bhi cover karta hai."]],states:[[1,"Marriage public baseline + Uncle-side secret."],[3,"Marriage remains; Uncle-side secrecy now covert incident bhi cover karti hai."]]},
{name:"Dhika ↔ Bantu",first:2,A:"Dhika",B:"Bantu",baseline:"Part 2 · L31–43: favourite teacher/student familiarity + recurring compliments.",a:[
[2,"L40–43","Repeated compliments initial discomfort se private liking/secret expectation tak; romance establish nahi."],
[4,"L71–79","Intensified praise par private blush while spoken modesty maintain karti hai."]
],b:[[2,"L31–43","Daily appearance compliments."],[4,"L82–94","False practical ride pretext + close-seat/proximity motive."]],direct:[[2,"L31–39","Verbal compliment exchange; no sexual physical contact."],[4,"L82–107","Shared ride setup; Bantu ke saath direct sexual contact establish nahi."]],emotions:[[2,"Dhika enjoys praise privately; Bantu appearance-directed attention, exact romantic label unstated."],[4,"Dhika positive blush; Bantu access/proximity motive + Bobby outcome par frustration."]],states:[[2,"Teacher/student familiarity + normalized verbal compliment routine."],[4,"Same + Bantu-side deceptive access/proximity seeking; no declared romance."]]},
{name:"Dhika ↔ Bobby",first:2,A:"Dhika",B:"Bobby",baseline:"Part 2 · L37–43: favourite teacher/student bond; Dhika-side slight preference.",a:[[2,"L40–43","Slight preference; romance/sexual attraction establish nahi."],[4,"L95–107","Unexpected hip/stomach contact par surprise, rationalization, chill/shyness; silence blanket consent nahi."]],b:[[4,"L80–81","Accidental hip visibility gaze."],[4,"L91–107","Close-seat + hip/stomach hold/contact sequence; full details Bantu se withheld."]],direct:[[4,"L95–107","Ride mein direct contact; permission balance-hold ke liye thi, Dhika shoulders expect karti thi."]],emotions:[[2,"Dhika mild preference/intrigue only; Bobby-side feeling unsupported."],[4,"Dhika surprise/chill/shyness; Bobby proximity/gaze/contact-seeking actions, broader romantic label unstated."]],states:[[2,"Teacher/student favourite bond; Dhika-side slight preference only."],[4,"Teacher/student bond + one gaze/proximity/contact sequence; no normalized repetition or declared romance."]]},
{name:"Bantu ↔ Bobby",first:2,A:"Bantu",B:"Bobby",baseline:"Part 2 · L40–43: adult twins / close peer pair.",a:[],b:[],direct:[[4,"L91–107","Dhika-related close-seat rivalry cue; Bobby ride details Bantu se withhold karta hai."]],emotions:[[2,"Sibling/twin familiarity; sexual attraction absent."],[4,"Dhika-related rivalry/frustration layer add."]],states:[[2,"Close twin baseline; no sexual/romantic pair state."],[4,"Close twins + Dhika-related proximity rivalry/secrecy."]]},
{name:"Dhika ↔ Bindu Maami",first:5,A:"Dhika",B:"Bindu Maami",baseline:"Part 5 · L116–117: customer/store-owner relation.",a:[],b:[],direct:[[5,"L116–117","Grocery order call."],[8,"L152–158","Payment-context call + Chotu early-leave/family update."],[10,"L173–175","Store channel se Chotu ko bhejne ka request."]],emotions:[[5,"Practical familiarity only; sexual/romantic feeling unsupported."]],states:[[5,"Routine neighbourhood/store relation."],[8,"Payment deferral + operational update add."],[10,"Ongoing practical store relation; Chotu link active."]]},
{name:"Bindu Maami ↔ Chotu",first:6,A:"Bindu Maami",B:"Chotu",baseline:"Part 6 · L119: store-owner / worker-delivery relation.",a:[],b:[],direct:[[6,"L118–128","Operational delivery relation."],[8,"L152–158","Maami reports Chotu asked to leave early and she allowed it."],[10,"L173–175","Maami can send Chotu when free."]],emotions:[[6,"Operational work relation; sexual/romantic feeling unsupported."]],states:[[6,"Store-owner/worker relation active."],[8,"Early-leave decision/report add."],[10,"Operational link remains active."]]},
{name:"Dhika ↔ Chotu",first:6,A:"Dhika",B:"Chotu",baseline:"Part 6 · L118–120: trusted adult delivery acquaintance; Dhika-side brother-like framing.",a:[
[8,"L152–158","Possible intimate visibility ko lekar private uncertainty + little fear/little excitement; objective view proof nahi."],
[9,"L166–170","Prior possible-being-seen memory private excitement/tingle + smile create karti hai; thought, not action."],
[11,"L195–205","Beauty compliment par shy/blush + explicit trust/‘innocent’ framing; Dhika-side crush stated nahi."],
[12,"L208–225","Deliberately visual test karti hai whether Chotu will look; nervous/excited; eye contact se result confirm."]
],b:[
[7,"L133–136","Unspecified clothing difference notice; exact detail/sexual meaning unknown."],
[8,"L142–151","Stunned reaction + abrupt exit; exact perception unresolved."],
[11,"L195–207","First beauty compliment + private little crush."],
[12,"L215–225","Source-described partial breast visibility par actual gaze; eye contact se Dhika ne looking notice kiya ye Chotu ko known, setup motive unknown."]
],direct:[
[6,"L121–128","Delivery/home-entry; no sexual contact."],
[7,"L129–141","Expected outside handoff → unplanned entry → later voluntary hospitality; no sexual contact."],
[8,"L142–151","Juice handoff/bend/reaction; no touch; exact visibility unresolved."],
[10,"L175–194","False explanation + first shared lunch/family talk; no sexual contact."],
[11,"L195–207","Appearance/trust conversation; no touch."],
[12,"L215–225","Deliberate visual test + gaze + mutual eye contact; no touch or sexual dialogue."]
],emotions:[
[6,"Dhika → Chotu: brother-like trust. Chotu → Dhika: respectful familiarity; attraction unsupported."],
[8,"Dhika → Chotu: mixed fear/excitement privately, surface trust retained. Chotu → Dhika: stunned reaction, exact feeling unresolved."],
[9,"Dhika → Chotu: private curiosity/excitement on recollection; Chotu absent."],
[10,"Dhika → Chotu: ordinary hospitality/trust + undisclosed earlier curiosity. Chotu → Dhika: social comfort grows; attraction not yet explicit."],
[11,"Dhika → Chotu: trust + compliment pleasure; no stated crush. Chotu → Dhika: private little crush."],
[12,"Dhika → Chotu: deliberate curiosity/test + strong excitement after confirmation. Chotu → Dhika: crush + actual gaze; full interpretation of her motive unknown."]
],states:[
[6,"High practical/familial trust; sexual/romantic route not established."],
[7,"Trust remains; one ambiguous observation without confirmed sexual meaning."],
[8,"Outward trust + unresolved visibility event; Dhika-side private mixed response, Chotu exact perception unknown."],
[9,"No live encounter; Dhika-side private curiosity self-recognized, still undisclosed/unacted."],
[10,"Social comfort/access grows through first shared meal; private meanings remain undisclosed."],
[11,"Outward trust/familial shell remains; hidden layer now Dhika prior curiosity + Chotu private little crush."],
[12,"Episode-end: one deliberate visual test + mutually noticed gaze; no touch, confession, spoken pact, declared romance or blanket future permission."]
]}
];

function latest(arr,n){let v="";for(const x of arr||[])if(x[0]<=n)v=x[1];return v}
function list(arr,n,who){const v=(arr||[]).filter(x=>x[0]<=n).map(x=>"<b>Part "+x[0]+" · "+x[1]+":</b> "+x[2]);return v.length?v.join("<br>"):"No source-supported sexual/physical attraction or action established for "+who+" through Part "+n+"."}
function changedAt(arr,n){return (arr||[]).some(x=>x[0]===n)}
function renderChars(n){
 let h='<div class="hero"><div class="eyebrow">CUMULATIVE · VERIFIED 18+ · THROUGH PART '+n+'</div><h1>Character Evolution</h1><p>Baseline stable hai; changes chronological evidence ke saath carry hote hain; current state cumulative snapshot hai. Sirf canonically verified 18+ characters included hain.</p></div>';
 for(const c of chars.filter(x=>x.first<=n)){
  const hist=c.changes.filter(x=>x[0]<=n).map(x=>"<b>Part "+x[0]+" · "+x[1]+":</b> "+x[2]).join("<br>");
  const hold=changedAt(c.changes,n)?"":"<br><b>Part "+n+":</b> No new change in this Part.";
  h+='<div class="card"><h3>'+c.name+'</h3><p><b>A. BASELINE</b><br>'+c.baseline+'</p><p><b>B. WHAT CHANGED</b><br>'+hist+hold+'</p><p><b>C. CURRENT STATE</b><br>'+latest(c.states,n)+'</p><p><b>D. FUTURE POSSIBILITY / INFERENCE</b><br><b>NON-CANON INFERENCE:</b> Current state later source mein change ho sakta hai; reciprocity, escalation, new knowledge ya future act pehle se fact nahi maana jayega.</p></div>';
 }
 return h;
}
function renderRels(n){
 let h='<div class="hero"><div class="eyebrow">CUMULATIVE · VERIFIED 18+ PAIRS · THROUGH PART '+n+'</div><h1>Relationship Progression</h1><p>Directionality, thoughts/actions, direct interactions, current feelings aur pair-state cumulative hain. Raw chronology separate Relationship History Ledger mein rahegi. Minor/age-ambiguous entries ko sexual-history card nahi diya gaya.</p></div>';
 for(const r of rels.filter(x=>x.first<=n)){
  const d=(r.direct||[]).filter(x=>x[0]<=n).map(x=>"<b>Part "+x[0]+" · "+x[1]+":</b> "+x[2]).join("<br>")||"No direct physical/sexual interaction established through Part "+n+".";
  const changed=[r.a,r.b,r.direct,r.emotions,r.states].some(a=>changedAt(a,n));
  const hold=changed?"":" <b>Part "+n+" delta:</b> No new change in this Part; cumulative state retained.";
  h+='<div class="card"><h3>'+r.name+'</h3><p><b>A. BASELINE RELATIONSHIP</b><br>'+r.baseline+'</p><p><b>B. '+r.A+' → '+r.B+': SEXUAL / PHYSICAL THOUGHTS & ACTIONS</b><br>'+list(r.a,n,r.A)+'</p><p><b>C. '+r.B+' → '+r.A+': SEXUAL / PHYSICAL THOUGHTS & ACTIONS</b><br>'+list(r.b,n,r.B)+'</p><p><b>D. DIRECT PHYSICAL / SEXUAL INTERACTIONS</b><br>'+d+'</p><p><b>E. CURRENT EMOTIONS / FEELINGS</b><br>'+latest(r.emotions,n)+'</p><p><b>F. CURRENT RELATIONSHIP STATE</b><br>'+latest(r.states,n)+hold+'</p><p><b>G. FUTURE POSSIBILITY / INFERENCE</b><br><b>NON-CANON INFERENCE:</b> Current dynamic later source mein change ho sakta hai; reciprocity, escalation, consent/permission ya next encounter pehle se canon nahi maana jayega.</p></div>';
 }
 return h;
}
window.applyE01CumulativeSections=function(doc,key){
 const m=/^part(\d+)$/.exec(key||""); if(!m)return; const n=Number(m[1]); if(n<8||n>12)return;
 const cb=doc.querySelector('nav button[data-tab="Character Evolution"]');
 const cp=doc.querySelector('.panel[data-panel="Character Evolution"]');
 const rb=doc.querySelector('nav button[data-tab="Relationships"],nav button[data-tab="Relationship Progression"]');
 const rp=doc.querySelector('.panel[data-panel="Relationships"],.panel[data-panel="Relationship Progression"]');
 if(cp)cp.innerHTML=renderChars(n);
 if(rb){rb.dataset.tab="Relationship Progression";rb.textContent="Relationship Progression";}
 if(rp){rp.dataset.panel="Relationship Progression";rp.innerHTML=renderRels(n);}
};
})();