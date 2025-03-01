import {
    SearchClient,
    AzureKeyCredential
} from '@azure/search-documents';

const credential = new AzureKeyCredential(process.env.AZURE_SEARCH_KEY as string);

export const tokensSearchClient = new SearchClient(
    process.env.AZURE_SEARCH_URL as string,
    'tokens',
    credential
)