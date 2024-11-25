# Tasclock-Web

## Requirements

-   nodejs ^22.11.0
-   pnpm ^9.14.2

## Developing on localhost

1. Install dependencies: `pnpm i`
2. Run on localhost: `pnpm dev`

## Deploying to Google Cloud Run

This template can be used to deploy your Next.js application as a Docker container.

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
1. Deploy to Cloud Run: `gcloud run deploy helloworld --source=. --project=PROJECT-ID --region=us-central1 --allow-unauthenticated`.

    - You must replace `PROJECT-ID` with your Google Cloud Project ID.
    - You may replace `us-central1` with a different Google Cloud [region](https://cloud.google.com/run/docs/locations).

For more information, see the Next.js [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting).
