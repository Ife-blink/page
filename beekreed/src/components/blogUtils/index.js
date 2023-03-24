import { getClient, overlayDrafts } from '../lib/sanity.server'

export async function getStaticProps({ preview = false }) {
    const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
    return {
      props: { allPosts, preview },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    }
  }