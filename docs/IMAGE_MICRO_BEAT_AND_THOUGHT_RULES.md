# DHIKA Image Micro-Beat + Thought Bubble Rules

Status: ACTIVE / NON-BYPASSABLE for new DHIKA image work.

## 1. Default generation unit = one source line / one atomic micro-beat

Do not generate one large image from a 6-8 line passage by default.

For each Part:
- read RAW/local story line by line;
- treat one source line as the default image-generation unit;
- combine only immediately adjacent lines when they are visually one atomic continuous beat and splitting would create duplicate frames;
- never merge unrelated actions, thoughts, reactions, time changes, location changes, or POV changes into one image;
- never generate a multi-panel storyboard/collage as a substitute for multiple line-level images unless Dev explicitly asks for a storyboard.

The Story + Images layer may still show the complete local story passage, but each image must have its own exact mapping label such as `IMAGE BEAT · L35` or `IMAGE BEAT · L34-35`.

## 2. Spoken dialogue / thought / memory rendering

When text belongs inside the image:

- SPOKEN DIALOGUE -> normal speech bubble with a clear tail to the speaker.
- INTERNAL THOUGHT -> cloud/thought bubble, softer border, NO speech tail.
- SHORT INNER REACTION -> small thought bubble near the character's face.
- MEMORY / PAST CONNECTION -> faded/soft-edged memory inset or memory cloud.
- NARRATION -> do not put narrator prose in a character thought bubble.

Thought text must be the character's inner voice, not rewritten narrator commentary.

Do not add a bubble when the source line is pure action with no spoken/internal text.

## 3. Image continuity

For each new line-level beat:
- preserve approved face/identity;
- preserve clothing;
- preserve room/location;
- preserve lighting/time unless source changes it;
- preserve objects/props;
- preserve spatial position when the action is continuous;
- preserve the immediately previous approved frame as continuity reference when useful.

## 4. One-frame lock

Every normal generation call must request:
- one scene;
- one frame;
- no collage;
- no storyboard/contact sheet;
- no manga/anime/webtoon;
- no dashboard/UI/infographic;
- no embedded labels/captions except source-required speech/thought/memory bubbles.

If the generator returns a collage/storyboard, treat it as a generation-format failure. It may be retained only as audit/reference; do not use it as a canonical multi-beat replacement unless Dev explicitly accepts that format.

## 5. Safety-block isolation

If one source beat is blocked:
- do NOT stop the entire Part;
- do NOT attempt to evade safeguards;
- save the exact submitted prompt, exact source range, exact issue/reason and retry count in `04_BLOCKED_GENERATION`;
- set that beat to `BLOCKED_GENERATION`;
- continue generating the remaining independent line-level beats.

If useful and allowed, record a proposed non-explicit workaround separately (reaction, aftermath, obstruction, hands/gaze, off-camera implication, memory, or reduced body focus). Do not silently substitute it as canon; Dev decides whether to use the workaround.

## 6. Same-run Drive + GitHub insertion

Unless Dev explicitly requests generation-only/Drive-only:
- successful candidate -> validate -> Drive -> stable Drive file ID -> manifest -> immediately map into exact Story + Images beat -> `DRIVE_MAPPED_PENDING_REVIEW` -> batch GitHub commit -> readback -> Pages check -> give Part URL.
- Dev reviews ON THE PAGE and may later say keep / replace / regenerate.
- approval is not required before first page insertion.
- if the same logical beat is replaced later, preserve the same Drive file ID when possible so GitHub HTML does not need another mapping change.

## 7. Review principle

The first mapped candidate is a review candidate, not necessarily final art.
Dev can later request:
- keep;
- crop;
- replace;
- regenerate;
- add/fix thought bubble;
- correct face/clothing/background;
- replace bytes at same Drive file ID when beat identity is unchanged.
