export const conf = {
    appwriteUrl: String(import.meta.env.VITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_NOTES_ID),
}