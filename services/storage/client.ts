import {BlobServiceClient} from "@azure/storage-blob";

const blobServiceUrl = `${process.env.NEXT_PUBLIC_AZURE_STORAGE_ACCOUNT_URL}?sv=${process.env.NEXT_PUBLIC_AZURE_STORAGE_SAS_STRING}`;

const blobServiceClient = new BlobServiceClient(blobServiceUrl);

export default blobServiceClient;