import type { INodeProperties } from 'n8n-workflow';

export const statisticOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['statistic'],
			},
		},
		options: [
			{
				name: 'By Day',
				value: 'byDay',
				description: 'Get click statistics by day for the specified period',
				action: 'Get statistics by day',
			},
			{
				name: 'By Links',
				value: 'byLinks',
				description: 'Get statistics for user links for the period',
				action: 'Get statistics by links',
			},
			{
				name: 'By Clicks',
				value: 'byClicks',
				description: 'Get detailed click statistics with extensive filtering options',
				action: 'Get statistics by clicks',
			},
			{
				name: 'Comparative Statistics',
				value: 'compare',
				description: 'Compare statistics between two periods',
				action: 'Compare statistics',
			},
			{
				name: 'General Statistics',
				value: 'total',
				description: 'Get total aggregate statistics for the period',
				action: 'Get general statistics',
			},
		],
		default: 'byDay',
	},
];

export const statisticFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             statistic:byDay                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['byDay'],
			},
		},
		options: [
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Period start date',
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'Period end date',
			},
			{
				displayName: 'Link ID',
				name: 'link_id',
				type: 'number',
				default: '',
				description: 'Specific link ID for filtering',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                            statistic:byLinks                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['byLinks'],
			},
		},
		options: [
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Period start date',
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'Period end date',
			},
			{
				displayName: 'Link ID',
				name: 'link_id',
				type: 'number',
				default: '',
				description: 'Specific link ID for filtering',
			},
			{
				displayName: 'Links',
				name: 'links',
				type: 'string',
				default: '',
				placeholder: '1,2,3',
				description: 'Comma-separated list of link IDs',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                            statistic:byClicks                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['byClicks'],
			},
		},
		options: [
			{
				displayName: 'Time From',
				name: 'time_from',
				type: 'dateTime',
				default: '',
				description: 'Time from (Y-m-d H:i:s)',
			},
			{
				displayName: 'Time To',
				name: 'time_to',
				type: 'dateTime',
				default: '',
				description: 'Time to (Y-m-d H:i:s)',
			},
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Date from (Y-m-d format)',
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'Date to (Y-m-d format)',
			},
			{
				displayName: 'Links',
				name: 'links',
				type: 'string',
				default: '',
				placeholder: '1,2,3',
				description: 'Comma-separated list of link IDs',
			},
			{
				displayName: 'Clicks IDs',
				name: 'clicks_id',
				type: 'string',
				default: '',
				placeholder: '1,2,3',
				description: 'Comma-separated list of click IDs',
			},
			{
				displayName: 'Clicker ID',
				name: 'clicker_id',
				type: 'number',
				default: '',
				description: 'Clicker ID',
			},
			{
				displayName: 'Unique Clicks Only',
				name: 'unique_click',
				type: 'boolean',
				default: false,
				description: 'Whether to show only unique clicks',
			},
			{
				displayName: 'Confirmed Redirects Only',
				name: 'click_out',
				type: 'boolean',
				default: false,
				description: 'Whether to show only confirmed redirects',
			},
			{
				displayName: 'Ad Clicks Only',
				name: 'ad_click',
				type: 'boolean',
				default: false,
				description: 'Whether to show only clicks on ads',
			},
			{
				displayName: 'Sub ID',
				name: 'sub_id',
				type: 'string',
				default: '',
				description: 'Sub ID for filtering',
			},
			{
				displayName: 'Sub ID 1',
				name: 'sub_id1',
				type: 'string',
				default: '',
				description: 'Sub ID 1 for filtering',
			},
			{
				displayName: 'Sub ID 2',
				name: 'sub_id2',
				type: 'string',
				default: '',
				description: 'Sub ID 2 for filtering',
			},
			{
				displayName: 'Sub ID 3',
				name: 'sub_id3',
				type: 'string',
				default: '',
				description: 'Sub ID 3 for filtering',
			},
			{
				displayName: 'Country Code',
				name: 'cc',
				type: 'string',
				default: '',
				placeholder: 'US',
				description: 'Country ISO code',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'Country name',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'City',
			},
			{
				displayName: 'Device',
				name: 'device',
				type: 'string',
				default: '',
				description: 'Device type',
			},
			{
				displayName: 'OS',
				name: 'os',
				type: 'string',
				default: '',
				description: 'Operating system',
			},
			{
				displayName: 'Browser',
				name: 'browser',
				type: 'string',
				default: '',
				description: 'Browser',
			},
			{
				displayName: 'Is Bot',
				name: 'is_bot',
				type: 'boolean',
				default: false,
				description: 'Whether the click was made by a bot',
			},
			{
				displayName: 'Quality',
				name: 'quality',
				type: 'options',
				options: [
					{ name: 'Undefined', value: 0 },
					{ name: 'Good', value: 1 },
					{ name: 'Suspect', value: 2 },
					{ name: 'Bad', value: 3 },
				],
				default: 0,
				description: 'Traffic quality',
			},
			{
				displayName: 'Proxy Type',
				name: 'proxy_type',
				type: 'options',
				options: [
					{ name: 'VPN', value: 'VPN' },
					{ name: 'TOR', value: 'TOR' },
					{ name: 'DCH', value: 'DCH' },
					{ name: 'PUB', value: 'PUB' },
					{ name: 'WEB', value: 'WEB' },
					{ name: 'SES', value: 'SES' },
				],
				default: 'VPN',
				description: 'Proxy type',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description: 'Number of records to output (1-10000)',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                            statistic:compare                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Period 1 From',
		name: 'period1_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['compare'],
			},
		},
		default: '',
		required: true,
		description: 'First period start date',
	},
	{
		displayName: 'Period 1 To',
		name: 'period1_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['compare'],
			},
		},
		default: '',
		required: true,
		description: 'First period end date',
	},
	{
		displayName: 'Period 2 From',
		name: 'period2_from',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['compare'],
			},
		},
		default: '',
		required: true,
		description: 'Second period start date for comparison',
	},
	{
		displayName: 'Period 2 To',
		name: 'period2_to',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['compare'],
			},
		},
		default: '',
		required: true,
		description: 'Second period end date for comparison',
	},
	{
		displayName: 'Group By',
		name: 'group',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['compare'],
			},
		},
		options: [
			{ name: 'Link ID', value: 'link_id' },
			{ name: 'Clicker ID', value: 'clicker_id' },
			{ name: 'Sub ID', value: 'sub_id' },
			{ name: 'Sub ID 1', value: 'sub_id1' },
			{ name: 'Sub ID 2', value: 'sub_id2' },
			{ name: 'Sub ID 3', value: 'sub_id3' },
			{ name: 'IP v4', value: 'ipv4' },
			{ name: 'IP v6', value: 'ipv6' },
			{ name: 'IP Subnet Level 1', value: 'ip_network1' },
			{ name: 'IP Subnet Level 2', value: 'ip_network2' },
			{ name: 'Proxy Type', value: 'proxy_type' },
			{ name: 'User Agent', value: 'ua' },
			{ name: 'Full Click Source', value: 'referer' },
			{ name: 'Domain of Click Source', value: 'referer_domain' },
			{ name: 'Name of Well-Known Click Source', value: 'referer_name' },
			{ name: 'Country ISO Code', value: 'cc' },
			{ name: 'Country', value: 'country' },
			{ name: 'Region of Country', value: 'region' },
			{ name: 'City', value: 'city' },
			{ name: 'Device Type', value: 'device' },
			{ name: 'Device Brand', value: 'brand' },
			{ name: 'Device Model', value: 'model' },
			{ name: 'OS', value: 'os' },
			{ name: 'OS Version', value: 'os_ver' },
			{ name: 'Browser', value: 'browser' },
			{ name: 'Browser Version', value: 'browser_ver' },
			{ name: 'Browser Type', value: 'browser_type' },
			{ name: 'Main Language of Device', value: 'lang' },
			{ name: 'Full Device Language', value: 'lang_full' },
			{ name: 'Click Made by Bot', value: 'is_bot' },
			{ name: 'Internet Service Provider', value: 'isp' },
			{ name: 'Ad Blocker Enabled', value: 'adblock' },
		],
		default: ['link_id'],
		required: true,
		description: 'Fields to group by. You can select multiple fields.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['compare'],
			},
		},
		options: [
			{
				displayName: 'Links',
				name: 'links',
				type: 'string',
				default: '',
				placeholder: '1,2,3',
				description: 'Comma-separated list of link IDs',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description: 'Number of records to output (1-10000)',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                             statistic:total                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['statistic'],
				operation: ['total'],
			},
		},
		options: [
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Period start date',
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'Period end date',
			},
			{
				displayName: 'Link ID',
				name: 'link_id',
				type: 'number',
				default: '',
				description: 'Specific link ID for filtering',
			},
		],
	},
];

