# Galactic Hearth Ledger

Independent Star Wars: Legion escalation league tracker for Cosmic Hearth Games. Longshanks records competitive match results; this application records honor-system participation, hobby achievements and stage bounties, with organizer review.

## Status
Initial scaffold. Not ready for public player submissions until Vercel Blob storage and organizer authentication are configured and tested.

## League
Nov 12 2026–Jan 10 2027. Four stages (600 / 700 / 850 / 1000 points), each two weeks. Pineville Thursdays; Belmont Sundays. Best six of eight weeks count. Bounties can be claimed once per stage. Organizer review by James and Rob.

## Deployment
Connect this repository to a new Vercel project. Configure `BLOB_READ_WRITE_TOKEN` through a Vercel Blob store. Set separate `OWNER_REVIEW_KEY` and `MANAGER_REVIEW_KEY` as sensitive Vercel environment variables. Do not commit secrets. Review authentication, spam controls, and storage concurrency before launching publicly.
