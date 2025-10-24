import type { INodeProperties } from 'n8n-workflow';

export const linkOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['link'],
			},
		},
		options: [
			{
				name: 'Add Fallback Link',
				value: 'addFallback',
				description: 'Add a reserve URL to a link',
				action: 'Add fallback link',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a short link',
				action: 'Create a link',
			},
			{
				name: 'Create Cloaking Link',
				value: 'createCloaking',
				description: 'Create a cloaking link with filters',
				action: 'Create a cloaking link',
			},
			{
				name: 'Get Link',
				value: 'get',
				description: 'Get link information by ID',
				action: 'Get a link',
			},
			{
				name: 'Get Link List',
				value: 'getList',
				description: 'Get a list of links',
				action: 'Get link list',
			},
			{
				name: 'Update Link URL',
				value: 'updateUrl',
				description: 'Change the main site for the link',
				action: 'Update link URL',
			},
		],
		default: 'create',
	},
];

export const linkFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             link:addFallback                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['addFallback'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the link to add fallback URL to',
	},
	{
		displayName: 'Reserve URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['addFallback'],
			},
		},
		default: '',
		required: true,
		placeholder: 'https://example.com',
		description: 'The reserve URL to use if the main URL is unavailable',
	},
	/* -------------------------------------------------------------------------- */
	/*                                link:create                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['create'],
			},
		},
		default: '',
		placeholder: 'https://example.com',
		required: true,
		description: 'The long URL to shorten',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['create'],
			},
		},
		default: 'url',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				description: 'Custom short code for the link. Must be unique.',
			},
			{
				displayName: 'Domain ID',
				name: 'domain_id',
				type: 'number',
				default: 0,
				description: 'ID of the domain to use for the short link',
			},
			{
				displayName: 'Group ID',
				name: 'group_id',
				type: 'number',
				default: 0,
				description: 'ID of the group to assign the link to',
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'Keywords for link search',
			},
			{
				displayName: 'Keywords Mode',
				name: 'keywords_mode',
				type: 'options',
				options: [
					{
						name: 'Any Word',
						value: 1,
					},
					{
						name: 'Half of the Words',
						value: 2,
					},
					{
						name: 'All Words',
						value: 3,
					},
				],
				default: 1,
				description: 'Keyword search logic',
			},
			{
				displayName: 'Link Name',
				name: 'link_name',
				type: 'string',
				default: '',
				description: 'Name for the link',
			},
			{
				displayName: 'Monetization',
				name: 'monetization',
				type: 'boolean',
				default: false,
				description: 'Whether to enable advertising for this link',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                           link:createCloaking                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Offer URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		default: '',
		placeholder: 'https://offer.com',
		required: true,
		description: 'Main offer page link',
	},
	{
		displayName: 'White Page URL',
		name: 'cloakingUrl',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		default: '',
		placeholder: 'https://whitepage.com',
		required: true,
		description: 'URL of the white page to show filtered traffic',
	},
	{
		displayName: 'Domain ID',
		name: 'domain_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		default: '',
		required: true,
		description: 'ID of your or Premium domain',
	},
	{
		displayName: 'Cloaking Mode',
		name: 'cloakingMode',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Loading the Page',
				value: 1,
			},
			{
				name: 'Redirect',
				value: 2,
			},
		],
		default: 1,
		required: true,
		description: 'How to show the white page',
	},
	{
		displayName: 'Filters',
		name: 'cloakingFilters',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Main Filter',
				value: 'cuti',
			},
			{
				name: 'IPv6 Filter',
				value: 'ipv6',
			},
			{
				name: 'VPN/Proxy Filter',
				value: 'proxy',
			},
			{
				name: 'Without Referrer',
				value: 'noref',
			},
		],
		default: ['cuti'],
		required: true,
		description: 'Selection of filters for checking traffic',
	},
	{
		displayName: 'Country Filter Status',
		name: 'geoFilterStatus',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Disabled',
				value: 0,
			},
			{
				name: 'Disallow',
				value: 1,
			},
			{
				name: 'Allow',
				value: 2,
			},
		],
		default: 0,
		description: 'Country filtering property',
	},
	{
		displayName: 'Country List',
		name: 'geoFilterList',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
				geoFilterStatus: [1, 2],
			},
		},
		default: '',
		placeholder: 'US,RU,IT',
		description: 'ISO country codes separated by commas',
	},
	{
		displayName: 'IP Filter Status',
		name: 'ipFilterStatus',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Disabled',
				value: 0,
			},
			{
				name: 'Disallow',
				value: 1,
			},
			{
				name: 'Allow',
				value: 2,
			},
		],
		default: 0,
		description: 'IP filtering property',
	},
	{
		displayName: 'IP List',
		name: 'ipFilterList',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
				ipFilterStatus: [1, 2],
			},
		},
		default: '',
		placeholder: '200.200.50.0/255',
		description: 'List of IPs separated by commas',
	},
	{
		displayName: 'ISP Filter Status',
		name: 'ispFilterStatus',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Disabled',
				value: 0,
			},
			{
				name: 'Disallow',
				value: 1,
			},
			{
				name: 'Allow',
				value: 2,
			},
		],
		default: 0,
		description: 'Internet Service Provider filtering property',
	},
	{
		displayName: 'ISP List',
		name: 'ispFilterList',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
				ispFilterStatus: [1, 2],
			},
		},
		default: '',
		placeholder: 'Comcast,Verizon',
		description: 'List of providers separated by commas',
	},
	{
		displayName: 'Referer Filter Status',
		name: 'refererFilterStatus',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Disabled',
				value: 0,
			},
			{
				name: 'Disallow',
				value: 1,
			},
			{
				name: 'Allow',
				value: 2,
			},
		],
		default: 0,
		description: 'Referer filtering property',
	},
	{
		displayName: 'Referer List',
		name: 'refererFilterList',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
				refererFilterStatus: [1, 2],
			},
		},
		default: '',
		placeholder: 'google.com,facebook.com',
		description: 'Values in referer separated by commas',
	},
	{
		displayName: 'User Agent Filter Status',
		name: 'uaFilterStatus',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Disabled',
				value: 0,
			},
			{
				name: 'Disallow',
				value: 1,
			},
			{
				name: 'Allow',
				value: 2,
			},
		],
		default: 0,
		description: 'User Agent filtering property',
	},
	{
		displayName: 'User Agent List',
		name: 'uaFilterList',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
				uaFilterStatus: [1, 2],
			},
		},
		default: '',
		placeholder: 'Chrome,Firefox',
		description: 'Values in User Agent separated by commas',
	},
	{
		displayName: 'OS Filters',
		name: 'osFilters',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				name: 'Windows',
				value: 'Windows',
			},
			{
				name: 'Mac',
				value: 'Mac',
			},
			{
				name: 'GNU/Linux',
				value: 'GNU/Linux',
			},
			{
				name: 'Android',
				value: 'Android',
			},
			{
				name: 'iOS',
				value: 'iOS',
			},
			{
				name: 'Windows Phone',
				value: 'Windows Phone',
			},
			{
				name: 'BlackBerry OS',
				value: 'BlackBerry OS',
			},
		],
		default: [],
		description: 'List of OS to display White Page',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'hidden',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		default: 'url',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['createCloaking'],
			},
		},
		options: [
			{
				displayName: 'Change Links',
				name: 'change_links',
				type: 'boolean',
				default: false,
				description: 'Whether to replace all links on the page (page load only)',
			},
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				description: 'Custom short code for the link. Must be unique.',
			},
			{
				displayName: 'Group ID',
				name: 'group_id',
				type: 'number',
				default: 0,
				description: 'Link group ID',
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'Keywords for link search, separated by commas',
			},
			{
				displayName: 'Keywords Mode',
				name: 'keywords_mode',
				type: 'options',
				options: [
					{
						name: 'Any Word',
						value: 1,
					},
					{
						name: 'Half of the Words',
						value: 2,
					},
					{
						name: 'All Words',
						value: 3,
					},
				],
				default: 1,
				description: 'Keyword search logic',
			},
			{
				displayName: 'Link Name',
				name: 'link_name',
				type: 'string',
				default: '',
				description: 'Name for the link',
			},
			{
				displayName: 'Monetization',
				name: 'monetization',
				type: 'boolean',
				default: false,
				description: 'Whether to enable ad display',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                link:get                                    */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['get'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the link to retrieve',
	},
	/* -------------------------------------------------------------------------- */
	/*                             link:updateUrl                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['updateUrl'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the link to update',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['updateUrl'],
			},
		},
		default: '',
		required: true,
		placeholder: 'https://example.com',
		description: 'New URL for the link (must be a valid link with http or https)',
	},
	/* -------------------------------------------------------------------------- */
	/*                              link:getList                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['link'],
				operation: ['getList'],
			},
		},
		options: [
			{
				displayName: 'Clicks',
				name: 'clicks',
				type: 'number',
				default: 0,
				description: 'Click-throughs number for filtering',
			},
			{
				displayName: 'Clicks Type',
				name: 'clicks_type',
				type: 'options',
				options: [
					{
						name: 'Greater Than or Equal To',
						value: 1,
					},
					{
						name: 'Less Than or Equal To',
						value: 2,
					},
				],
				default: 1,
				description: 'The direction of the search by clicks',
			},
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				description: 'Link code',
			},
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Date the link was added from',
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'Date the link was added before',
			},
			{
				displayName: 'Link ID',
				name: 'link_id',
				type: 'number',
				default: '',
				description: 'Link ID',
			},
			{
				displayName: 'Link Name',
				name: 'link_name',
				type: 'string',
				default: '',
				description: 'Search by link name',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 1,
					},
					{
						name: 'Pause',
						value: 3,
					},
					{
						name: 'Blocked',
						value: 4,
					},
				],
				default: 1,
				description: 'The status of links',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Search by page title',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'Search by site link',
			},
		],
	},
];

