import { getContainerClient } from "@/services/storage";

export const uploadImage = async (file: File) => {
    const blockBlobClient = (await getContainerClient()).getBlockBlobClient(`${file.name}`);
    if (await blockBlobClient.exists()) {
        await blockBlobClient.delete();
    }
    await blockBlobClient.uploadData(await file.arrayBuffer());
    return blockBlobClient.url.slice(0, blockBlobClient.url.indexOf("?"));
}

export const deleteImage = async (fileName: string) => {
    const blockBlobClient = (await getContainerClient()).getBlockBlobClient(fileName);
    if (await blockBlobClient.exists()) {
        await blockBlobClient.delete();
    }
}