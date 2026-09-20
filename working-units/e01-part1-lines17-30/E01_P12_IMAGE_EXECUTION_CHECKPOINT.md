# E01 Part 12 Image Execution Checkpoint

Branch: `main`  
Target: `working-units/e01-part1-lines17-30/part12.html`  
Asset folder: `assets/images/e01/scenes/`

## Current resumable state

- L208-A — **LOCKED_APPROVED_IMAGE** — `e01-p12-l208-a-spill-noticed-v2.webp`
- L208-B — **LOCKED_APPROVED_IMAGE** — `e01-p12-l208-b-fetch-cloth-v2.webp`
- L209 — **LOCKED_APPROVED_IMAGE** — `e01-p12-l209-bathroom-mirror-v2.webp`
- Approved sequence board — **UPLOADED** — `e01-p12-l208-209-sequence-board-approved.webp`
- Approved L208 continuity board — **UPLOADED** — `e01-p12-l208-sequence-board-approved.webp`
- L210 — **LOCKED_APPROVED_IMAGE** — reuses `e01-p12-l209-bathroom-mirror-v2.webp` with approved UI thought-cloud overlay
- L211-A — **GENERATED_PENDING_REVIEW** — `e01-p12-l211-a-thought-hit-v1.webp`
- L211-B — **GENERATED_PENDING_REVIEW** — `e01-p12-l211-b-dupatta-off-v1.webp`
- L212-A — **GENERATED_PENDING_REVIEW** — `e01-p12-l212-a-body-look-v1.webp`
- L212-B — **GENERATED_PENDING_REVIEW** — `e01-p12-l212-b-reaction-v1.webp`
- L213-A — **GENERATED_PENDING_REVIEW** — `e01-p12-l213-a-thought-urge-v1.webp`
- L213-B — **GENERATED_PENDING_REVIEW** — `e01-p12-l213-b-self-conflict-v1.webp`
- Next resumable beat: **L214**
- Visual continuity for L208: Dhika is kitchen-side at the start; Chotu is already waiting on the hall sofa from L207; Dhika still wears the black sleeveless home outfit with dupatta ON.

## Beat status

| # | Beat | Status |
|---:|---|---|
| 1 | L208-A — food spill noticed | LOCKED_APPROVED_IMAGE |
| 2 | L208-B — bedroom/bathroom for cloth | LOCKED_APPROVED_IMAGE |
| 3 | L209 — bathroom mirror | LOCKED_APPROVED_IMAGE |
| 4 | L210 — beauty/self-image question | LOCKED_APPROVED_IMAGE |
| 5 | L211-A — yesterday/night thoughts return | GENERATED_PENDING_REVIEW |
| 6 | L211-B — slowly removes dupatta | GENERATED_PENDING_REVIEW |
| 7 | L212-A — studies body/cleavage in mirror | GENERATED_PENDING_REVIEW |
| 8 | L212-B — lip bite, blush, private smile | GENERATED_PENDING_REVIEW |
| 9 | L213-A/B — urge + self-conflict | GENERATED_PENDING_REVIEW |
| 10 | L214 — returns to hall without dupatta | PENDING |
| 11 | L215-A — Chotu notices missing dupatta | PENDING |
| 12 | L215-B — opposite seating established | PENDING |
| 13 | L216 — nervous + excited setup | PENDING |
| 14 | L217 — bends/all fours/wiping begins | PENDING |
| 15 | L218-A — source visibility beat | PENDING |
| 16 | L218-B — Chotu shocked/wide-eyed | PENDING |
| 17 | L219 — one-minute continuation | PENDING |
| 18 | L220 — Dhika looks toward Chotu | PENDING |
| 19 | L221 — eyes meet | PENDING |
| 20 | L222-A — Chotu remains wide-eyed | PENDING |
| 21 | L222-B — Dhika nervous/excited lip bite | PENDING |
| 22 | L223 — Chotu takes money and leaves | PENDING |
| 23 | L224-A — cloth dropped / flips from all fours | PENDING |
| 24 | L224-B — lies on back, overwhelmed | PENDING |
| 25 | L225 — face covered / aftermath | PENDING |

Do not restart completed L208 beats unless Dev explicitly requests replacement.


## Approved sequence-reference assets

- `e01-p12-l208-209-sequence-board-approved.webp` — L208-A → L208-B → L209 recap; does not replace individual beat assets.
- `e01-p12-l208-sequence-board-approved.webp` — L208 continuity recap; does not replace individual beat assets.


## Story + Images reading-layer migration · Part 11-aligned Story + Images layout

- Primary content: approved 40/40/20 local-language story text, reused verbatim.
- Images are inserted after exact represented story beats.
- L208 two-clause images and L208/L209 approved boards remain locked.
- Older grouped Part 12 images remain `GENERATED_PENDING_REVIEW` and are now mapped only to the narrower beats they visibly claim.
- Full L208–225 local-language story remains present even where no image exists.
- Next image task remains **L210**.


## Layout/render repair

- Story + Images now follows the Part 11 card rhythm: story passage first, mapped image inside the same card, centered image width with `max-width:980px`.
- L209 approved mirror asset bytes were repaired at the existing canonical path and cache-busted in HTML.
- Part 12 no longer uses alternating standalone story-card / image-card alignment.
- Full approved L208–225 local-language text remains present.
- Next resumable content beat remains **L210**.


## L210 UI thought-cloud overlay

- L210 intentionally reuses the exact locked L209 bathroom-mirror asset.
- No new camera, pose, clothing, face, or location state is introduced.
- Only the approved internal-thought cloud is added in the rendered UI.
- Exact cloud text: `Chotu bhi mujhe beautiful samajhta hai… Ek bachcha hone ke baad bhi kya main sach mein beautiful hoon?`
- Narrative state: **INTERNAL THOUGHT**, not spoken dialogue.
- Next image beat: **L211-A**.


## L211–213 six-panel crop placement

- Source asset: `assets/images/e01/scenes/e01-p12-l211-213-collage-v1.webp`
- The page renders six crops instead of displaying the collage as one image.
- CSS crop map: L211-A c0/r0; L211-B c1/r0; L212-A c2/r0; L212-B c0/r1; L213-A c1/r1; L213-B c2/r1.
- Approved local-language story is split only at existing sentence boundaries.
- Status remains `GENERATED_PENDING_REVIEW` until explicit lock.
- Next content beat: **L214**.


## L211–213 black-render repair

- Root cause: repository collage blob was invalid/undersized and rendered as black crops.
- Replaced the canonical collage asset bytes at `assets/images/e01/scenes/e01-p12-l211-213-collage-v1.webp`.
- Kept the six existing CSS crop mappings unchanged.
- Bumped the page cache key from `r1` to `r2`.
- No story text or beat mapping changed.


## L211–213 black-render repair r3

- Replaced the canonical collage asset with a verified decodable WebP.
- Changed the six crops from CSS background-image rendering to nested img elements with overflow cropping.
- Cache key bumped to r3.
- Removed the L208 and L208–209 continuity-board gallery blocks that created unnecessary empty vertical space.
- No approved story text or beat mapping changed.


## L211–213 direct-panel render repair

- Root failure: the shared collage/CSS-crop rendering path produced black panels in the live page.
- The original 3×2 collage was split into six valid individual WebP files.
- L211-A, L211-B, L212-A, L212-B, L213-A and L213-B now render through ordinary `<img>` elements.
- The shared collage is no longer used by these live image beats.
- Approved story text, exact line mapping and reading order were not changed.
- Status remains `GENERATED_PENDING_REVIEW` for all six.
- Next resumable beat remains **L214**.
