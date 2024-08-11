import { Client, Databases, Query } from "appwrite";
import { conf } from "../conf/config"
 
const client = new Client()
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECT_ID);
 
const databases = new Databases(client);
 
export { client, databases };

export class Service {

    client = new Client();
    databases;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async getNotes (queries = []) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                queries)
        } catch (error) {
            console.error("Apprwite Service :: getNotes :: error", error)
            return false
        }
    }

    async updateNote (noteID, payload) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                noteID,
                payload
                )
        } catch (error) {
            console.error("Apprwite Service :: updateNote :: error", error)
            return false
        }
    }

    async deleteNote (noteID) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                noteID 
                )
        } catch (error) {
            console.error("Apprwite Service :: deleteNote :: error", error)
            return false
        }
    }

}

export const service = new Service()

