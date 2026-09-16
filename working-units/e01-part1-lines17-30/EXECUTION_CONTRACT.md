# DHIKA E01 Review Execution Contract

This file defines how the working review UI must be updated so an approved result does not regress when a later review comment is applied.

## 1. Source-of-truth hierarchy

1. **Raw source** — immutable story evidence. Never rewrite it to fit analysis.
2. **Part-local reading** — exact current part only: Original + faithful natural Hinglish/Hindi + 20% compact map.
3. **Part-local Story + Images** — images/prompts belonging to that part only. Once approved, this module is frozen.
4. **Part-local review modules** — Episode Review and Sequences for the current part.
5. **Cumulative trackers** — Character Evolution, Relationships, Action/Visibility, Consent/Control, Knowledge, Pace/Normalization, Style/Voice, Hooks, Negative Canon, Writer Engine. These inherit earlier approved history and add the current delta; they never replace the earlier baseline.

## 2. Part hierarchy

- **Prologue L1–16** = origin baseline.
- **Part 1 L17–30** = Prologue + Part 1 delta.
- **Part 2 L31–64** = Prologue + Part 1 + Part 2 delta.
- A later part may read prior approved state, but it must not rewrite prior part-local modules.

## 3. Review / patch isolation

Every user correction is treated as a targeted patch.

- If feedback is about **40/40**, only the 40/40 module may change, plus QA/Writer Engine rules if needed.
- If feedback is about **Story + Images**, only that part's Story + Images module may change.
- If feedback is about **Character Evolution**, cumulative character state may change, but local reading/images must remain untouched.
- If feedback is about navigation, navigation may change without rebuilding story modules.
- An approved module is immutable unless the user explicitly reopens that module for review.

## 4. Local-language rule

`LOCAL_LANGUAGE_MODE = FAITHFUL_SOURCE_TRANSLATION_NOT_ANALYSIS`

The local-language column must preserve source meaning, tone, sequence, and relevant details in natural Hinglish/Hindi. Terms such as `baseline`, `asymmetric state`, `narrator establishes`, `normalization`, `unspecified`, or QA commentary belong in analysis/QA trackers, not inside the translation unless those words are genuinely part of the story wording.

## 5. Images rule

- Existing approved image assets remain attached to their original source ranges.
- Missing visuals show **image prompt only**; no explanation for why the image is absent.
- Adding a new part must not convert earlier approved image cards back into prompts.
- Part 1 approved image assets:
  - `assets/images/e01/scenes/e01-l017-018.webp`
  - `assets/images/e01/scenes/e01-l019-021.webp`
  - `assets/images/e01/scenes/e01-l022-025.webp`
  - `assets/images/e01/scenes/e01-l026-030.webp`

## 6. Cumulative-state rule

Cumulative modules use this transition model:

`previous approved state -> current-part evidence/delta -> current state`

Never reset a character, relationship, knowledge state, physical-contact history, or style history merely because a new part is being reviewed.

## 7. Pre-commit regression check

Before each future update:

1. Identify the exact module(s) requested by the user.
2. Compare the proposed change against the current approved view.
3. Verify unrelated approved modules are byte-for-byte/logically unchanged.
4. Verify image asset references still exist in earlier parts.
5. Verify no future-part facts leak backward.
6. Verify local-language text is translation, not analysis.
7. Commit only the targeted change.

## 8. Current lock state

- Prologue: origin baseline retained.
- Part 1 40/40: reviewed/fidelity-corrected.
- Part 1 Story + Images: four repository image cards restored and treated as approved until explicitly reopened.
- Part 2 40/40: fidelity-corrected.
- Part 2 missing visuals: prompt-only rule.

The purpose of this contract is simple: **a new correction must improve one layer without silently damaging a layer that was already correct.**
