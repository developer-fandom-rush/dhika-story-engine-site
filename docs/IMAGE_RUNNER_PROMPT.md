# DHIKA Image Runner — Site Mirror

Canonical rules live in `developer-fandom-rush/dhika-story-engine`.

Before any image task, perform harmless read-only checks on both DHIKA repositories, then fresh-read:

- `docs/PROJECT_RULES.md`
- `docs/IMAGE_ASSET_WORKFLOW.md`
- `docs/EXECUTION_FAILURES_AND_GUARDRAILS.md`
- `docs/IMAGE_RUNNER_PROMPT.md` from the canonical source repo
- `docs/IMAGE_PUBLISH_COMPLETION_GATE.md` from this site repo
- the complete target Part `Story + Images` section
- exact source lines and latest approved continuity needed for the image

Use the canonical Drive-first workflow.

For each successful generated candidate, the same execution must:
- validate pixels and continuity;
- save to the correct Drive Part folder;
- capture Drive file ID and update the Part manifest;
- immediately insert that Drive file ID into the exact Story + Images beat;
- preserve the full local-language story text;
- mark `DRIVE_MAPPED_PENDING_REVIEW`;
- batch-push the Part HTML/reference changes to GitHub;
- read back and verify the expected Drive file IDs;
- check Pages and return the exact Part URL.

Do not wait for approval before page insertion. Approval happens after Dev reviews the image on the page.

If a beat is blocked, save the exact prompt + issue in `04_BLOCKED_GENERATION`, mark `BLOCKED_GENERATION`, do not fabricate an image, and continue independent beats.

A successful image that is only in Library or Drive is not complete.
