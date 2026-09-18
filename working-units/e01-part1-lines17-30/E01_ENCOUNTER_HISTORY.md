# E01 Encounter History — Canonical Human Review View

**Scope:** Original DHIKA · Episode 01 · processed through **Part 1 (L17–30)** only  
**Machine authority:** `e01.encounter-history.json`  
**RAW authority:** Drive document `98 — RAW SOURCE — EPISODE 01`  
**Rule:** Unknown ko unknown hi rakho. Later Part ka fact is snapshot mein backward import mat karo.

## Future-AI traversal guide

1. Pehle relevant `characterId` ya `relationshipId` identify karo.
2. Us record ke ordered `eventIds` chronological order mein padho.
3. Har event mein `sourceRange` aur `sourceSupportedFacts` ko `derivedInterpretations` se alag rakho.
4. `LIVE_ENCOUNTER`, `NARRATED_HISTORY`, observation, private thought aur spoken dialogue ko mix mat karo.
5. Reader kya jaanta hai aur har character kya jaanta hai, dono separately check karo.
6. `boundaryPermissionControl` act-specific hai. Trust, comfort ya childcare access ko blanket permission mat banao.
7. Latest Part snapshot load karo; next Part mein sirf naya delta apply karo.
8. `HOLD / UNCHANGED` relationship ko delete mat karo.
9. Active secrets, hooks aur Negative Canon ko tab tak carry karo jab tak later RAW explicitly change na kare.
10. Ambiguity ko guess karke fill mat karo.

---

## Previous verified state — Prologue L1–16

- **Dhika:** 29 saal; senior students ko Physics padhane wali college teacher; kind-hearted/helpful; John ki wife; 2-year-old son ki mother.
- **Dhika ↔ John:** shaadi Part 1 se pehle established hai. Part 1 tak koi marital conflict source establish nahi karta.
- **Dhika ↔ Pappu:** mother-child caregiving baseline already established hai.
- **Dhika ↔ Students (general):** positive teacher/student baseline established hai.
- Prologue mein Uncle/Aunty ka hidden-state history abhi establish nahi hua tha.

---

# Part 1 Encounter Events

## E01-P01-E001 — L17–18 — LIVE_ENCOUNTER

**Exactly kya hua:** Dhika sleeping Pappu ko ek haath mein sambhalte hue next-door Uncle ke saamne aati hai aur poochti hai, “Aunty kahan hain?”

**Action / visibility:** Dhika aur Uncle live scene mein hain; Pappu Dhika ke saath sleeping state mein hai. Aunty sirf referenced hai.

**Knowledge state:** Is event tak koi hidden Uncle-state Dhika ko disclose nahi hota.

**Boundary state:** Yeh ordinary neighbour arrival + caregiving situation hai. Koi adult intimate permission ya interaction establish nahi hota.

**Carry-forward:** Immediate question — Aunty kahan hain — L24 mein partial answer hota hai.

**Evidence:** `E01-P01-E001` · E01 Part 1 · **L17–18**

---

## E01-P01-E002 — L19–21 — NARRATED_HISTORY

**Exactly kya reveal hota hai:**  
- Uncle retired military veteran hain; **exact military position Dhika ko pata nahi aur RAW supply nahi karta**.  
- Aunty aur Uncle early 60s mein next door rehte hain.  
- Dono Dhika aur John ke liye almost second guardians jaise describe hote hain.  
- Unki apni koi aulaad/heir nahi; Aunty Dhika aur John ko apne bachchon ki tarah treat karti hai.  
- Narrator Uncle ka pre-existing hidden state reveal karta hai: marital life “stale” describe hoti hai aur narrator ke mutabik woh Dhika ko ogle karne ka chance miss nahi karta.  
- Uncle yeh hidden state Dhika ya John ko nahi batata, aur especially Aunty se chhupata hai.

**Critical distinction:** Yeh **historical/narrated reveal** hai. Isse yeh prove nahi hota ki L17–30 ke exact childcare handoff moment mein Uncle koi specific stare karta hai.

**Knowledge split:**  
- **Uncle knows:** apna hidden attraction/ogling state.  
- **Reader knows:** public guardian-like surface + hidden Uncle-side layer.  
- **Dhika does not know.**  
- **John does not know.**  
- **Aunty does not know.**

**Boundary state:** Near-family trust ya future childcare access Uncle ko ogling ki permission nahi deta. Attraction ≠ permission.

**Relationship delta:** Dhika↔Aunty, Dhika↔Uncle, John↔Aunty/Uncle aur Aunty↔Uncle background relationships first time evidence-backed form mein establish hote hain.

**Carry-forward secret:** Uncle ka hidden state reader-known hai lekin Dhika/John/Aunty se concealed hai.

**Negative Canon / QA:**  
- exact military rank invent nahi karna;  
- reciprocal Dhika→Uncle attraction establish nahi hai;  
- prior ogling ka exact count/date source nahi deta;  
- exact current-time handoff stare assume nahi karna.

**Evidence:** `E01-P01-E002` · E01 Part 1 · **L19–21**

---

## E01-P01-E003 — L22–25 — LIVE_ENCOUNTER

**Exactly kya hua:** Uncle poochta hai Pappu abhi bhi so raha hai kya. Dhika “haan” bolkar Aunty ke baare mein phir poochti hai. Uncle kehta hai Aunty abhi neeche gayi hain aur Pappu use de dene ko kehta hai. Dhika sleeping Pappu ko Uncle ki care mein deti hai aur thanks bolti hai.

**Action type:** Intentional childcare handoff.

**Who saw / knew:** Dhika aur Uncle live exchange mein present hain. Pappu sleeping hai. Aunty present nahi hai.

**Knowledge delta:** Dhika ko sirf itna pata chalta hai ki Aunty “just went down.” **Exact destination unknown** hai.

**Boundary / permission:** Dhika ka permission specific hai — **Pappu ki childcare**. Yeh unrelated personal/intimate access ke liye permission nahi hai.

**Emotional delta:** RAW Dhika ke taraf se Uncle ko lekar fear, attraction ya suspicion state nahi deta. Thanks/trust practical caregiving context mein hai.

**Relationship delta:**  
- Dhika↔Uncle practical childcare trust live action mein enact hota hai.  
- Pappu↔Aunty/Uncle neighbour-caregiver route establish hota hai.

**Evidence:** `E01-P01-E003` · E01 Part 1 · **L22–25**

---

## E01-P01-E004 — L26–30 — LIVE_ENCOUNTER

**Exactly kya hua:** Dhika batati hai ki Pappu ka milk fridge mein stored hai. Phir line start karti hai: “And when he wakes up….. *” — RAW us instruction ko complete nahi karta. Uncle kehta hai samajh gaya, worry mat karo. Dhika phir thanks bolti hai, kehti hai woh late ho rahi hai, Aunty ko inform karne ko bolti hai aur stairs se chali jaati hai.

**Action / dialogue meaning:** Pappu-care logistics + communication request + departure.

**Knowledge delta:** Uncle ko milk/care information aur Aunty ko inform karne ki request milti hai. Uncle ka hidden attraction/ogling secret disclose nahi hota.

**Boundary state:** Explicit permission/context milk + childcare + Aunty ko message tak hai. Incomplete L27 ko kisi additional permission ya instruction mein expand nahi karna.

**Emotional delta:** Dhika explicitly late ho rahi hai. Uncle-related emotional shift source establish nahi karta.

**Carry-forward:**  
- Dhika scene chhod chuki hai;  
- Pappu neighbour care mein hai;  
- Aunty absent hai;  
- Uncle ka secret intact hai;  
- L27 incomplete hai.

**Evidence:** `E01-P01-E004` · E01 Part 1 · **L26–30**

---

# Character state through Part 1

## Dhika

**Previous verified state:** Prologue se age 29, Physics teacher, kind/helpful, John ki wife aur young-son mother baseline.

**Current Part delta:** `E01-P01-E001` / `E003` / `E004` mein woh sleeping Pappu ko carry karti hai, trusted-neighbour childcare arrange karti hai, milk/care instructions deti hai aur late hone ki wajah se leave karti hai. `E002` ke hidden Uncle-state ka usse knowledge nahi hai.

**Cumulative state through Part 1:** Working-mother/caregiver baseline live action mein confirm hota hai. Neighbour household par practical childcare trust hai. Uncle ke concealed attraction/ogling se woh unaware hai. Source is Part mein uske Uncle-related attraction, suspicion ya fear ko establish nahi karta.

## Uncle

**Previous verified state:** Prologue mein Uncle state absent.

**Current Part delta:** `E002` reader ko batata hai ki Uncle retired military veteran hai, exact position unknown hai, public near-guardian surface ke peeche Dhika-related concealed attraction/habitual ogling rakhta hai. `E003–E004` mein woh Pappu ki childcare accept karta hai aur care instructions receive karta hai.

**Cumulative state through Part 1:** Public role = trusted elder/near-guardian + childcare receiver. Hidden reader-known role = concealed one-sided attraction/ogling. Specific handoff-time stare ya adult intimate physical act establish nahi hota.

## John

**Previous verified state:** Dhika ka husband.

**Current Part delta:** Live Part 1 scene mein absent. `E002` kehta hai Uncle ne John ko bhi apna hidden state nahi bataya.

**Cumulative state through Part 1:** Marriage baseline HOLD / UNCHANGED. Uncle secret se unaware.

## Aunty

**Previous verified state:** Prologue mein absent.

**Current Part delta:** `E002` mein early-60s neighbour, near-family maternal figure; `E003` mein “just went down”; `E004` mein Dhika Uncle se use inform karne ko kehti hai.

**Cumulative state through Part 1:** Trusted near-family/co-caregiver state. Live handoff mein absent. Uncle ka hidden state nahi jaanti.

## Pappu

**Previous verified state:** Dhika ka young son.

**Current Part delta:** Sleeping state mein neighbour childcare ko handoff hota hai; milk stored hai; wake-up instruction incomplete hai.

**Cumulative state through Part 1:** Childcare causal node only. Sleeping Pappu ke liye unsupported knowledge/reaction invent nahi karna.

---

# Complete relationship ledger through Part 1

## Relationship: Dhika ↔ John
**Status:** HOLD / UNCHANGED  
**Previous history:** Prologue L8–13: already married.  
**Current encounter:** No new direct encounter. `E01-P01-E002` sirf establish karta hai ki Uncle apna hidden state John se bhi chhupata hai.  
**Knowledge split:** Dhika/John marriage baseline jaante hain; reader jaanta hai Uncle ka secret dono se hidden hai.  
**Boundary state:** Marriage ≠ blanket permission.  
**Emotional delta:** No source-supported marital emotional change.  
**Carry-forward state:** Married baseline intact; Uncle secret unse hidden.  
**Evidence:** Prologue L8–13 + `E01-P01-E002` L19–21.

## Relationship: Dhika ↔ Pappu
**Status:** CHANGED  
**Previous history:** Prologue L13: mother-child baseline.  
**Current encounter:** `E001` sleeping Pappu ko carry; `E003` Uncle ko childcare handoff; `E004` milk/wake-up instructions.  
**Knowledge split:** Dhika care logistics jaanti hai; Pappu sleeping hai, uski awareness invent nahi karni.  
**Boundary state:** Dhika intentional childcare delegation karti hai.  
**Emotional delta:** No special emotional change stated.  
**Carry-forward state:** Active maternal care neighbour childcare ke through continue hoti hai.  
**Evidence:** `E001` L17–18; `E003` L22–25; `E004` L26–30.

## Relationship: Dhika ↔ Students (general)
**Status:** HOLD / UNCHANGED  
**Previous history:** Prologue L13: Dhika kind/helpful teacher aur students ki favourite.  
**Current encounter:** No new encounter.  
**Knowledge split:** No new state.  
**Boundary state:** No Part 1 student interaction.  
**Emotional delta:** None.  
**Carry-forward state:** Prologue teacher/student baseline only.  
**Evidence:** Prologue L13.

## Relationship: Dhika ↔ Aunty
**Status:** NEW  
**Previous history:** Not established before Part 1.  
**Current encounter:** `E002` Aunty treats Dhika/John as own children; `E003` Dhika Aunty ko dhoondhti hai; `E004` Uncle se Aunty ko inform karne ko kehti hai.  
**Knowledge split:** Dhika near-family trust jaanti hai; Aunty Uncle ka hidden state nahi jaanti; reader dono layers jaanta hai.  
**Boundary state:** Near-family/childcare cooperation; no unrelated blanket permission.  
**Emotional delta:** No new source-stated emotional shift.  
**Carry-forward state:** Maternal-neighbour trust active; Aunty exact downstairs destination unknown.  
**Evidence:** `E002` L19–21; `E003` L22–25; `E004` L26–30.

## Relationship: Dhika ↔ Uncle
**Status:** NEW  
**Previous history:** Not established before Part 1.  
**Current encounter:** `E001` doorway contact; `E002` public guardian-like surface + hidden habitual ogling reveal; `E003` Pappu handoff; `E004` care instructions and departure.  
**Knowledge split:** Dhika = trusted elder/childcare surface only. Uncle = apna hidden state jaanta hai. Reader = dono jaanta hai. John/Aunty = secret nahi jaante.  
**Boundary state:** Childcare permission only. Ogling ke liye permission nahi. Attraction ≠ permission.  
**Emotional delta:** Uncle ka attraction pre-existing narration hai; Part 1 mein new onset prove nahi hota. Dhika ka reciprocal attraction/suspicion source establish nahi karta.  
**Carry-forward state:** Public trust + hidden asymmetric secret. Exact current-time stare ya intimate physical act nahi.  
**Evidence:** `E001` L17–18; `E002` L19–21; `E003` L22–25; `E004` L26–30.

## Relationship: John ↔ Aunty/Uncle
**Status:** NEW / REFERENCE-ONLY  
**Previous history:** Not established before Part 1.  
**Current encounter:** `E002` unhe Dhika aur John ke almost second guardians batata hai; Uncle secret John se hidden hai.  
**Knowledge split:** Reader hidden state jaanta hai; John nahi.  
**Boundary state:** No live interaction.  
**Emotional delta:** None stated.  
**Carry-forward state:** Near-family guardian relationship + Uncle-side undisclosed secret.  
**Evidence:** `E002` L19–21.

## Relationship: Pappu ↔ Aunty/Uncle
**Status:** NEW  
**Previous history:** Not established before Part 1.  
**Current encounter:** `E003` Uncle sleeping Pappu ko childcare ke liye leta hai; `E004` care instructions receive karta hai; Aunty expected co-caregiver hai but live exchange mein absent.  
**Knowledge split:** Pappu sleeping; Aunty ne exact instructions sune, source yeh establish nahi karta.  
**Boundary state:** Childcare/milk/care logistics only.  
**Emotional delta:** None stated.  
**Carry-forward state:** Trusted neighbour-caregiver arrangement.  
**Evidence:** `E003` L22–25; `E004` L26–30.

## Relationship: Aunty ↔ Uncle
**Status:** NEW / REFERENCE-ONLY  
**Previous history:** Not established before Part 1.  
**Current encounter:** `E002` marriage, narrator-stated stale marital life from Uncle-side description, and Uncle ka Dhika-related secret Aunty se hidden.  
**Knowledge split:** Uncle knows; reader knows; Aunty does not.  
**Boundary state:** No live spouse interaction in L17–30.  
**Emotional delta:** Aunty reaction/suspicion source mein nahi.  
**Carry-forward state:** Marriage + Uncle-side secret.  
**Evidence:** `E002` L19–21.

---

# Part 1 cumulative snapshot

## Character Evolution

**Previous verified state:** Prologue mein Dhika ki identity, teacher role, marriage, motherhood aur kind/helpful baseline established hai.

**Current Part delta:** `E001/E003/E004` caregiving ko live action mein dikhate hain. `E002` ek hidden reader-only asymmetry introduce karta hai: Uncle ka concealed state Dhika ko nahi pata.

**Cumulative state through Part 1:** Dhika ka baseline intact hai; practical neighbour-childcare trust add hota hai. Uncle-related fear/attraction/suspicion Dhika ke liye source-supported nahi hai.

## Knowledge / Secrecy

**Previous verified state:** Prologue mein Uncle secret exist nahi karta.

**Current Part delta:** `E002`: Uncle + reader know hidden attraction/ogling; Dhika/John/Aunty do not. `E003`: Dhika learns Aunty went down, exact destination unknown. `E004`: care logistics Uncle ko transfer hote hain, secret disclose nahi hota.

**Cumulative state through Part 1:** Reader aur Uncle ke paas hidden information hai; Dhika, John aur Aunty ke paas nahi. Public trust aur private secret simultaneously active hain.

## Escalation / Normalization

**Previous verified state:** Prologue mein Uncle behavioral route documented nahi.

**Current Part delta:** `E002` habitual ogling ko **pre-existing narrated history** ke roop mein reveal karta hai. Yeh Part 1 mein new escalation start hone ka proof nahi. L17–30 mein koi adult intimate physical act nahi.

**Cumulative state through Part 1:** Ceiling = concealed attraction + narrator-described habitual looking. Specific current-time stare, touch ya physical escalation establish nahi.

## Hooks

**Previous verified state:** Uncle-specific hook absent.

**Current Part delta:** Public near-family trust vs hidden Uncle state open tension ban jata hai. `E004` mein L27 incomplete rehta hai.

**Cumulative state through Part 1:** Uncle secret undisclosed hai; L27 exact completion unknown hai. Future outcome predict nahi karna.

## Negative Canon

**Previous verified state:** Prologue facts ko later material se expand nahi karna.

**Current Part delta:** Part 1 explicit limits:
- exact military rank/position unknown;
- reciprocal Dhika→Uncle attraction not established;
- exact handoff-time stare not established;
- adult intimate physical interaction not present;
- Aunty exact downstairs destination unknown;
- L27 completion unknown.

**Cumulative state through Part 1:** Yeh saare negatives active rahenge jab tak later RAW explicitly change na kare.

## Writer Guidance

**Previous verified state:** Prologue identity/family/teacher baseline preserve karna hai.

**Current Part delta:** Part 1 adds trusted-neighbour childcare, hidden Uncle-side state, knowledge asymmetry, act-specific childcare permission aur incomplete L27.

**Cumulative state through Part 1:** Next Part ko isi state se start hona chahiye. Part 2 ke facts Part 1 mein backfill nahi karne.
