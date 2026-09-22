<!-- MIRROR NOTICE: canonical source is developer-fandom-rush/dhika-story-engine. Keep this file synced for target-repo-only chats. -->

# DHIKA Image Runner — Reusable Chat Starter

Use this prompt in any new chat. Replace the TARGET block only.

## Reusable prompt

Before doing any DHIKA image work:

1. Perform a harmless read-only connection test on:
   - `developer-fandom-rush/dhika-story-engine`
   - `developer-fandom-rush/dhika-story-engine-site`
2. Fresh-read:
   - `docs/PROJECT_RULES.md`
   - `docs/IMAGE_ASSET_WORKFLOW.md`
   - `docs/EXECUTION_FAILURES_AND_GUARDRAILS.md`
3. Read the complete target Part `Story + Images` section and exact source lines.
4. Read the latest approved preceding image(s) needed for face, clothing, location and scene continuity.
5. Use the canonical Drive vault:
   `DHIKA Story Engine — Image Asset Vault`
   folder ID `17BsdiPpxcpeYlGoT_UVeZyIBQ1_UUZnK`.
6. Reuse existing Episode/Part folders. Do not create duplicate same-name Episode folders.
7. Required Part folders:
   - `00_INBOX_UNREVIEWED`
   - `01_APPROVED`
   - `02_REJECTED_OR_REGENERATE`
   - `03_MANIFESTS`
   - `04_BLOCKED_GENERATION`

### Generation rules

For each target beat:
- compile an Image Job Packet first
- explicitly state objective adult ages for adult characters
- preserve approved identities and aliases
- preserve clothing/location/time continuity
- use exact source intent/action/reaction/gaze
- one scene, one frame
- realistic natural story illustration
- no manga/anime/webtoon
- no collage/contact sheet
- no dashboard/UI/infographic
- no invented nudity
- no invented sexual action
- no age reinterpretation
- no unrelated scene substitution

If the system blocks generation:
- do not bypass the block
- save the exact prompt used + exact issue/reason + source range in `04_BLOCKED_GENERATION`
- set status `BLOCKED_GENERATION`
- continue with other independent beats
- report blocked ranges to Dev

If generation succeeds:
- inspect pixels for identity/continuity/source match
- upload candidate to `00_INBOX_UNREVIEWED`
- rename to canonical source-range filename once mapped
- write Drive file ID + URL + prompt + status into the Part manifest
- do not mark approved until Dev approves it

### GitHub sync rules

Default mode is Drive-first:
- do not upload new image binaries to GitHub
- Part HTML references Drive file IDs
- update HTML only after candidate mapping is known
- do one GitHub batch commit per Part update
- use exact latest HEAD + exact `tree.sha`
- fast-forward only, no force
- read back target file
- verify Pages workflow once
- one failed operation is not a GitHub-disconnection diagnosis

### TARGET

Episode: <E##>
Part: <P##>
Source ranges: <exact ranges>
Drive Part folder: <existing folder ID or locate under vault>
Goal: generate all required Story + Images visual beats, save candidates to Drive, log blocked beats, maintain manifest, and prepare/sync Drive-backed GitHub mappings without changing unrelated sections.

---

## Ready-to-use target — E03 Part 4

Episode: E03
Part: P04
Source ranges:
- L43–48
- L49–56
- L57–64
- L65–72

Drive Part folder ID: `1Fft42viPoegvdsejAZg0-ckERZNT4RzQ`

Generate these four source-grounded candidates:

### Beat 1 — L43–48
Single realistic domestic sofa scene. Dhika, a 29-year-old adult woman, gives Chotu/Babu, a 19-year-old adult man, the second Chocobar. When he starts to sit on the floor, she catches his hand and pulls him onto the three-seater sofa facing her. Both sit cross-legged, face-to-face, eating Chocobars. Preserve established faces, outfits, room and lighting from E03 Part 3. Warm playful familiarity, ordinary domestic body language. One scene, one frame. No sexualized crop, no manga/anime/webtoon, no collage/UI/text overlay, no invented nudity or sexual action.
Canonical filename: `e03-p04-l043-048.png`

### Beat 2 — L49–56
Single realistic domestic frame of the same two adults joking about Chotu/Babu's imaginary ten girlfriends while eating Chocobars. Dhika casually catches a melting drop from his bar with her fingers; later she lightly taps his knee. Chotu/Babu casually sweeps a melting drop from Dhika's nearby palm. Keep the food interaction source-framed as innocent/playful and natural. Preserve established faces, clothing and sofa-room continuity. One scene, one frame. No eroticized crop, no manga/anime/webtoon, no collage/UI/text overlay, no invented action.
Canonical filename: `e03-p04-l049-056.png`

### Beat 3 — L57–64
Single realistic sofa scene with Dhika, 29, and Chotu/Babu, 19, both adults. Dhika giggles and teases him by asking whether he has ever kissed a girl for real. He initially looks surprised and stammers, then relaxes and plays along. As she shifts a little closer while laughing, their knees touch. Near the end of the beat, a small ice-cream drop lands on Dhika's bare stomach near the navel and she looks down at the sudden cold sensation. Preserve exact clothing and room continuity. No kiss actually occurs. No explicit sexual posing, no sexualized close-up, no manga/anime/webtoon, no collage/UI/text overlay, no invented nudity or intent.
Canonical filename: `e03-p04-l057-064.png`

### Beat 4 — L65–72
Single realistic reaction-focused aftermath scene with the same two adults. Immediately after an accidental ice-cream spill near Dhika's navel, Chotu/Babu has reflexively wiped the drop from her stomach and instantly realizes what he did. Show his widened eyes, tension and apology while Dhika laughs and reassures him that it is okay. The image should emphasize reaction, awkwardness, reassurance and the Chocobar context rather than body-focused framing. Preserve established identities, clothing, room and sofa continuity. No kiss, no invented sexual intent, no explicit sexual pose, no sexualized close-up, no manga/anime/webtoon, no collage/UI/text overlay.
Canonical filename: `e03-p04-l065-072.png`

For any blocked beat, save the exact submitted prompt and exact system issue into `04_BLOCKED_GENERATION`, keep the asset absent, update the manifest truthfully, and report the blocked source range to Dev.
