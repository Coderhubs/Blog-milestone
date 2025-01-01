import sanityClient from '@sanity/client'

// Your existing Sanity configuration code
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-26'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

// Configure useCdn
export const useCdn = process.env.NEXT_PUBLIC_USE_CDN === 'true'

// Sanity client configuration with useCdn option
export const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion, // Use the specified API version
  useCdn: useCdn, // Enable or disable CDN based on the environment variable
})

// The assertValue function ensures the environment variables are set
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
