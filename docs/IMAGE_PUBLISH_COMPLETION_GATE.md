# DHIKA Image Publish Completion Gate

This gate is mandatory for every DHIKA image-generation chat unless Dev explicitly requests generation-only, Drive-only, or no GitHub changes.

A generated image is not complete merely because it exists in ChatGPT Library or Google Drive.

For every successful candidate, the same execution must:
1. validate the image;
2. save it to the correct Google Drive Part folder;
3. capture the stable Drive file ID;
4. update the Part manifest;
5. insert the Drive-backed image into the exact Story + Images source beat in the target Part HTML;
6. preserve the complete local-language story text and source-range mapping;
7. set DRIVE_MAPPED_PENDING_REVIEW unless already approved;
8. batch-commit the Part HTML/reference changes to GitHub;
9. read the HTML back and verify every expected Drive file ID;
10. check the Pages deployment state;
11. return the exact Part URL to Dev.

Do not wait for Dev approval before page insertion. Dev reviews the pending image on the page, then approves/rejects/regenerates it.

If generation is blocked, save the exact prompt + exact issue in the Part's 04_BLOCKED_GENERATION folder, leave the image absent, mark BLOCKED_GENERATION, and continue independent beats.

Do not claim completion while any successful image remains Drive-only/Library-only.
