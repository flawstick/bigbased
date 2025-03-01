import blobServiceClient from "./client";

export const getContainerClient = async () => {
    const containerClient = blobServiceClient.getContainerClient("images");
    await containerClient.createIfNotExists({ access: 'blob' });
    return containerClient;
};