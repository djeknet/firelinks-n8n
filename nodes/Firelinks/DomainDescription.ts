import type { INodeProperties } from 'n8n-workflow';

export const domainOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['domain'],
			},
		},
		options: [
			{
				name: 'Add Domain',
				value: 'create',
				description: 'Add a new domain',
				action: 'Add a domain',
			},
			{
				name: 'Get List',
				value: 'getList',
				description: 'Get a list of domains',
				action: 'Get domain list',
			},
			{
				name: 'Get Servers',
				value: 'getServers',
				description: 'Get a list of available servers',
				action: 'Get servers',
			},
		],
		default: 'getList',
	},
];

export const domainFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             domain:create                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Domain Name',
		name: 'domain',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		placeholder: 'link.example.com',
		description: 'Domain name to add',
	},
	{
		displayName: 'Server IP',
		name: 'server_ip',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		placeholder: '192.168.1.1',
		description: 'IP of the server to link the domain to. Must be registered in advance.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Default URL',
				name: 'default_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Default URL for redirects without code',
			},
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'dateTime',
				default: '',
				description: 'Domain end date',
			},
			{
				displayName: 'Is Default',
				name: 'is_default',
				type: 'boolean',
				default: false,
				description: 'Whether to make this the default domain for links',
			},
			{
				displayName: 'Generate SSL Certificate',
				name: 'ssl_code',
				type: 'boolean',
				default: false,
				description: 'Whether to generate SSL certificate with Let\'s Encrypt',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                             domain:getList                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['getList'],
			},
		},
		options: [
			{
				displayName: 'Domain ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Domain ID',
			},
			{
				displayName: 'Domain Name',
				name: 'domain',
				type: 'string',
				default: '',
				description: 'Domain name',
			},
			{
				displayName: 'Is Default',
				name: 'is_default',
				type: 'options',
				options: [
					{
						name: 'Not Default',
						value: 0,
					},
					{
						name: 'Default',
						value: 1,
					},
				],
				default: 0,
				description: 'Get the default domain',
			},
			{
				displayName: 'My Domains Only',
				name: 'my',
				type: 'boolean',
				default: false,
				description: 'Whether to show only my domains',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Off',
						value: 0,
					},
					{
						name: 'On',
						value: 1,
					},
				],
				default: 1,
				description: 'Domain activity status',
			},
			{
				displayName: 'Server IP',
				name: 'server_ip',
				type: 'string',
				default: '',
				placeholder: '192.168.1.1',
				description: 'IP of the server to which the domain is linked',
			},
		],
	},
];

