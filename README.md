# Galactic Hearth Ledger

Independent Star Wars: Legion escalation league tracker for Cosmic Hearth Games. Longshanks records competitive match results; this application records honor-system participation, hobby achievements and stage bounties, with organizer review.

## Status
Initial scaffold. Not ready for public player submissions until Vercel Blob storage and organizer authentication are configured and tested.

## League
Nov 12 2026–Feb 3 2027. Free entry. Three four-week stages: Recon 600 points (weeks 1–4), 800 points (weeks 5–8), and 1000 points (weeks 9–12). Pineville Thursdays; Belmont Sundays. Best nine of twelve weeks count (provisional scoring policy). Bounties can be claimed once per stage. Organizer review by James and Rob.

## Deployment
Connect this repository to a new Vercel project. Configure `BLOB_READ_WRITE_TOKEN` through a Vercel Blob store. Set separate `OWNER_REVIEW_KEY` and `MANAGER_REVIEW_KEY` as sensitive Vercel environment variables. Do not commit secrets. Review authentication, spam controls, and storage concurrency before launching publicly.
