import type {
	IDataObject,
	IExecuteFunctions,
	ILoadOptionsFunctions,
	JsonObject,
	IRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function firelinksApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	endpoint: string,
	body: IDataObject = {},
): Promise<any> {
	const credentials = await this.getCredentials('firelinksApi');

	const options: IRequestOptions = {
		method: 'POST',
		uri: `https://firelinks.cc/api/out${endpoint}`,
		headers: {
			'Content-Type': 'application/json',
		},
		body: {
			api_token: credentials.apiToken as string,
			...body,
		},
		json: true,
	};

	try {
		const response = await this.helpers.request(options);

		// Check for API errors
		if (response.status === false || response.success === false) {
			let errorMessage = response.errors || 'Unknown error occurred';
			
			// Add validation details if available
			if (response.data && typeof response.data === 'object') {
				const validationErrors: string[] = [];
				for (const [field, messages] of Object.entries(response.data)) {
					if (Array.isArray(messages)) {
						validationErrors.push(`${field}: ${messages.join(', ')}`);
					}
				}
				if (validationErrors.length > 0) {
					errorMessage = `${errorMessage}\n${validationErrors.join('\n')}`;
				}
			}
			
			// If no errors field and no data, just log and return empty response
			if (!response.errors && (!response.data || Object.keys(response.data).length === 0)) {
				return response;
			}
			
			throw new NodeApiError(this.getNode(), {
				message: errorMessage,
				description: 'Firelinks API returned an error',
				httpCode: '422',
			} as JsonObject);
		}

		return response;
	} catch (error) {
		// If it's already a NodeApiError, rethrow it
		if (error instanceof NodeApiError) {
			throw error;
		}
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

