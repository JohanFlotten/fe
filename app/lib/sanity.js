import { createClient } from "next-sanity";


export const client = createClient({
    projectId: 'j7wgpyaz',
    dataset: 'production',
    apiVersion: "2023-07-03",
    useCdn: false
})
