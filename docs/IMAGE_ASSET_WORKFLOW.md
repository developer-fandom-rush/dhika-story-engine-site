<!-- MIRROR NOTICE: canonical source is developer-fandom-rush/dhika-story-engine. Keep this file synced for target-repo-only chats. -->

# DHIKA Story Engine — Image Asset Workflow

Purpose: make image generation, review, Google Drive storage, Story + Images mapping, and GitHub publishing deterministic, fast, resumable, and reusable across chats.

## 1. Primary architecture — DRIVE FIRST

**Google Drive is the canonical image asset vault. GitHub is the code/rendering layer.**

Default production flow:

```
SOURCE BEAT
  -> compile Image Job Packet
  -> generate one scene / one frame
  -> validate pixels + continuity
  -> save original generated image to Google Drive
  -> record Drive file ID + canonical filename in Part manifest
  -> Dev review: approve / reject / regenerate
  -> map approved or pending-review Drive file ID into Story + Images
  -> ONE GitHub HTML/manifest commit for the Part batch
  -> ONE Pages verification
```

Do **not** upload new image binaries to GitHub in normal Drive-first mode unless Dev explicitly asks or Drive rendering is unavailable and a GitHub-binary fallback is required.

ChatGPT Library is a useful generation/staging source, but it is not the canonical project asset store.

## 2. Canonical Drive vault

Root folder:

- Name: `DHIKA Story Engine — Image Asset Vault`
- Drive folder ID: `17BsdiPpxcpeYlGoT_UVeZyIBQ1_UUZnK`

Required hierarchy for every Part:

```
DHIKA Story Engine — Image Asset Vault/
  E<episode>/
    P<part>/
      00_INBOX_UNREVIEWED/
      01_APPROVED/
      02_REJECTED_OR_REGENERATE/
      03_MANIFESTS/
      04_BLOCKED_GENERATION/
```

Never mix RAW manuscripts, episode analysis, or continuity documents into this image vault.

Before creating an Episode or Part folder, list the parent first and reuse an existing same-name folder. Do not create duplicate Episode folders.

## 3. Drive identity and rename rule

**Drive file ID is the canonical asset identity. Filename is the human-readable label.**

Renaming or moving a Drive image is allowed when the same Drive file ID is preserved.

After source mapping is known, preferred canonical filename:

```
e<episode>-p<part>-l<line>.png
e<episode>-p<part>-l<start>-<end>.png
```

Examples:

```
e03-p04-l043-048.png
e03-p04-l049-056.png
e03-p04-l057-064.png
e03-p04-l065-072.png
```

Use `test-` or sequence-only names only in `00_INBOX_UNREVIEWED` before source mapping is known.

## 4. Mandatory image preflight

Before **every generation call**, fresh-read:

1. `docs/PROJECT_RULES.md`
2. `docs/IMAGE_ASSET_WORKFLOW.md`
3. `docs/EXECUTION_FAILURES_AND_GUARDRAILS.md`
4. target Part `Story + Images` section
5. exact source lines for the beat
6. latest approved preceding image(s) required for continuity
7. approved character identity/reference state when available

Never generate directly from stale chat memory alone.

## 5. Image Job Packet — non-bypassable

Every image call must first be compiled into a compact job packet containing:

- Episode / Part / exact source range
- exact narrative function
- all visible characters
- objective adult ages where relevant
- aliases used in story text
- relationship/role only when source-supported
- current clothing
- location
- time/lighting if source-supported
- previous-frame continuity
- exact action/reaction/gaze/emotion to show
- negative canon: what must **not** be invented
- style lock
- asset filename / Drive destination

For DHIKA adult canon currently used by the project:
- Dhika = 29-year-old adult woman
- Chotu/Babu = 19-year-old adult man
- Bantu = adult 18+
- Bobby = adult 18+
- Pappu is a child and must never be sexualized

Names or kinship-style nicknames must never override objective age canon.

## 6. Scene-only style lock

Story image generation must be isolated from UI/dashboard language.

Default style lock:

- realistic cinematic story illustration / natural realistic scene
- one scene
- one frame
- preserve approved face/identity
- preserve clothing/location continuity
- natural body proportions
- source-faithful emotion and gaze
- no manga
- no anime
- no comic page
- no webtoon layout
- no storyboard/contact sheet unless explicitly requested
- no collage
- no dashboard/UI
- no infographic
- no cards
- no labels or text overlay unless exact in-scene text is explicitly required
- no invented nudity
- no invented sexual action
- no age reinterpretation

Do not add sexualized framing when the source beat is ordinary, playful, domestic, emotional, transitional, or non-explicit.

## 7. Safety / blocked-generation rule

If the image system blocks or refuses a beat:

1. **Do not try to evade or bypass the safety system.**
2. Do not silently sanitize or rewrite the source as if generation succeeded.
3. Preserve the exact source range.
4. Preserve the exact prompt that was submitted.
5. Record the exact returned issue/reason as faithfully as available.
6. Mark the beat `BLOCKED_GENERATION`.
7. Save an auditable record in:
   `E<episode>/P<part>/04_BLOCKED_GENERATION/`
8. Continue with the remaining independent beats.
9. Tell Dev which ranges were blocked and why.

Preferred blocked-record filename:

```
e03-p04-l065-072-BLOCKED.md
```

Blocked record fields:

```
Episode:
Part:
Source range:
Canonical intended filename:
Exact generation prompt:
System result / issue:
Classification:
Retry count:
Asset status: BLOCKED_GENERATION
Next action:
```

A blocked prompt record is not an image and must never be shown as completed visual work.

## 8. Retry rule

Retry only when the first output is technically wrong or visually mismatched, for example:

- wrong character identity
- manga/anime/collage output
- wrong clothing
- wrong location
- wrong participants
- blank/corrupt image
- merged unrelated beats
- obvious prompt misunderstanding

Do not repeatedly retry a policy/safety block with evasive wording.

For an ordinary mismatch, use the same source truth and correct only the failing visual dimension.

## 9. Validation gate before Drive upload

Before saving a generated image as a candidate:

- confirm bytes exist
- confirm the image decodes
- confirm not blank / near-blank / corrupt
- inspect actual pixels
- verify exact source beat
- verify character identity
- verify objective adult-age presentation
- verify clothing
- verify location
- verify participants
- verify action and intentionality
- verify gaze/emotion
- verify no accidental manga/webtoon/collage/UI drift
- verify no invented nudity or stronger action
- verify no continuity regression

If it fails, route to `02_REJECTED_OR_REGENERATE` or regenerate before mapping.

## 10. Review states

Use truthful asset states:

- `UNREVIEWED`
- `GENERATED_PENDING_REVIEW`
- `DRIVE_MAPPED_PENDING_REVIEW`
- `LOCKED_APPROVED_IMAGE`
- `REJECTED_OR_REGENERATE`
- `BLOCKED_GENERATION`
- `MISSING`

Only Dev approval can promote a candidate to `LOCKED_APPROVED_IMAGE`.

## 11. Manifest rule

Every Part must maintain a machine-readable manifest in `03_MANIFESTS`.

Minimum fields per beat:

```json
{
  "episode": "E03",
  "part": "P04",
  "sourceRange": "L43-L48",
  "canonicalFilename": "e03-p04-l043-048.png",
  "driveFileId": null,
  "driveViewUrl": null,
  "status": "MISSING",
  "reviewStatus": "PENDING_DEV_REVIEW",
  "prompt": "...",
  "issue": null
}
```

Never infer story order from Library recency. Story order comes from source ranges.

## 12. GitHub sync — reusable across chats

For normal Drive-first publishing, GitHub receives only the Part HTML / manifest/reference changes.

### Mandatory GitHub preflight

Before each write batch:

1. harmless read-only repo test
2. fetch latest `main` HEAD through exact ref endpoint
3. fetch `/git/commits/<HEAD>` and parse exact `tree.sha`
4. fresh-read target Part HTML
5. abort/re-read if HEAD changes before write

Never derive base tree SHA from a normalized commit wrapper.

### HTML mapping

Current verified Drive rendering mode:

```html
<div class="drive-asset"
     data-drive-file-id="<DRIVE_FILE_ID>"
     data-drive-filename="e03-p04-l043-048.png">
  <iframe
    src="https://drive.google.com/file/d/<DRIVE_FILE_ID>/preview"
    title="E03 P04 L43-48"
    loading="lazy">
  </iframe>
  <a href="https://drive.google.com/file/d/<DRIVE_FILE_ID>/view?usp=drivesdk"
     target="_blank"
     rel="noopener">Open original on Drive</a>
</div>
```

Drive preview is the currently validated review/render mode. Stored original bytes remain unchanged; preview softness is not proof of source-image compression.

Do not claim anonymous/public Drive rendering has been validated unless it has actually been tested in that state.

### Publish batch

For one Part:

```
Drive candidate generation/upload
  -> Dev review state
  -> update Part HTML mappings once
  -> create one Git tree based on exact current base tree
  -> create one commit
  -> fast-forward main once
  -> read back Part HTML once
  -> verify Pages workflow once
```

Do not create Git image blobs in this mode.

## 13. Replacement rule

If an approved Drive image needs correction and the logical beat is unchanged:

- regenerate corrected image
- replace the raw bytes of the **same Drive file ID** when technically possible
- preserve canonical filename
- preserve HTML mapping
- update manifest/review state
- do not touch GitHub HTML merely because image bytes changed

If Drive file ID must change, update the Part HTML and manifest once.

## 14. Existing GitHub image assets

Existing repository images are preserved.

Do not delete old GitHub image binaries merely because Drive-first mode is now active.

A Part may temporarily be hybrid:
- some beats Drive-backed
- some beats legacy GitHub-backed
- some beats blocked/missing

Migrate only when the correct Drive candidate exists and is source-mapped.

## 15. Failure classification

When something fails, report the exact layer:

1. source/beat ambiguity
2. generation safety block
3. generation target missing
4. wrong generated visual
5. generated bytes inaccessible
6. Drive upload failure
7. Drive rename/move failure
8. Drive file-ID mapping mismatch
9. Drive preview/rendering/auth issue
10. GitHub read failure
11. Git tree creation failure
12. commit creation failure
13. branch ref update failure
14. HTML mapping mismatch
15. GitHub Pages/cache/rendering issue

One failure does not prove GitHub or Drive is disconnected.

## 16. New-chat execution contract

For any DHIKA image task, a new chat must:

- fresh-read `docs/PROJECT_RULES.md`
- fresh-read `docs/IMAGE_ASSET_WORKFLOW.md`
- fresh-read `docs/EXECUTION_FAILURES_AND_GUARDRAILS.md`
- read target Part Story + Images and exact source ranges
- read previous approved image continuity
- locate/reuse the target Episode/Part folder in the canonical Drive vault
- compile Image Job Packets before generation
- generate one frame per planned beat unless source logic requires otherwise
- upload successful candidates to Drive
- log blocked prompts/issues in `04_BLOCKED_GENERATION`
- maintain the Part manifest
- preserve approved assets
- batch GitHub HTML/reference updates
- verify repository readback and Pages once

## 17. Copy-paste starter prompt

Use `docs/IMAGE_RUNNER_PROMPT.md` for the reusable prompt template.
