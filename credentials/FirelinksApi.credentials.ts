import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class FirelinksApi implements ICredentialType {
	name = 'firelinksApi';

	displayName = 'Firelinks API';

	documentationUrl = 'https://firelinks.cc';

	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'API token from your Firelinks account profile page',
		},
	];
}

