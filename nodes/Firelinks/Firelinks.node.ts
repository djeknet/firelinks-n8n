import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeApiError } from 'n8n-workflow';

import { firelinksApiRequest } from './GenericFunctions';
import { linkFields, linkOperations } from './LinkDescription';
import { domainFields, domainOperations } from './DomainDescription';
import { statisticFields, statisticOperations } from './StatisticDescription';

export class Firelinks implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Firelinks',
		name: 'firelinks',
		icon: 'file:firelinks.png',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Firelinks API',
		defaults: {
			name: 'Firelinks',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'firelinksApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Domain',
						value: 'domain',
					},
					{
						name: 'Link',
						value: 'link',
					},
					{
						name: 'Statistic',
						value: 'statistic',
					},
				],
				default: 'link',
			},
			...linkOperations,
			...linkFields,
			...domainOperations,
			...domainFields,
			...statisticOperations,
			...statisticFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);
		
		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'statistic') {
					if (operation === 'byDay') {
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {};
						
						if (additionalFields.date_from) {
							const dateFrom = new Date(additionalFields.date_from as string);
							body.date_from = dateFrom.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.date_to) {
							const dateTo = new Date(additionalFields.date_to as string);
							body.date_to = dateTo.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.link_id) {
							body.link_id = additionalFields.link_id as number;
						}
						
						responseData = await firelinksApiRequest.call(this, '/stat/days', body);
					}
					
					if (operation === 'byLinks') {
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {};
						
						if (additionalFields.date_from) {
							const dateFrom = new Date(additionalFields.date_from as string);
							body.date_from = dateFrom.toISOString().split('T')[0];
						}
						if (additionalFields.date_to) {
							const dateTo = new Date(additionalFields.date_to as string);
							body.date_to = dateTo.toISOString().split('T')[0];
						}
						if (additionalFields.link_id) {
							body.link_id = additionalFields.link_id as number;
						}
						if (additionalFields.links) {
							const links = (additionalFields.links as string).split(',').map(id => parseInt(id.trim(), 10));
							body.links = links;
						}
						
						responseData = await firelinksApiRequest.call(this, '/stat/links', body);
					}
					
					if (operation === 'byClicks') {
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {};
						
						if (additionalFields.time_from) {
							const timeFrom = new Date(additionalFields.time_from as string);
							body.time_from = timeFrom.toISOString().replace('T', ' ').split('.')[0];
						}
						if (additionalFields.time_to) {
							const timeTo = new Date(additionalFields.time_to as string);
							body.time_to = timeTo.toISOString().replace('T', ' ').split('.')[0];
						}
						if (additionalFields.date_from) {
							const dateFrom = new Date(additionalFields.date_from as string);
							body.date_from = dateFrom.toISOString().split('T')[0];
						}
						if (additionalFields.date_to) {
							const dateTo = new Date(additionalFields.date_to as string);
							body.date_to = dateTo.toISOString().split('T')[0];
						}
						if (additionalFields.links) {
							const links = (additionalFields.links as string).split(',').map(id => parseInt(id.trim(), 10));
							body.links = links;
						}
						if (additionalFields.clicks_id) {
							const clicks = (additionalFields.clicks_id as string).split(',').map(id => parseInt(id.trim(), 10));
							body.clicks_id = clicks;
						}
						if (additionalFields.clicker_id) {
							body.clicker_id = additionalFields.clicker_id as number;
						}
						if (additionalFields.unique_click !== undefined) {
							body.unique_click = additionalFields.unique_click ? 1 : 0;
						}
						if (additionalFields.click_out !== undefined) {
							body.click_out = additionalFields.click_out ? 1 : 0;
						}
						if (additionalFields.ad_click !== undefined) {
							body.ad_click = additionalFields.ad_click ? 1 : 0;
						}
						if (additionalFields.sub_id) {
							body.sub_id = additionalFields.sub_id as string;
						}
						if (additionalFields.sub_id1) {
							body.sub_id1 = additionalFields.sub_id1 as string;
						}
						if (additionalFields.sub_id2) {
							body.sub_id2 = additionalFields.sub_id2 as string;
						}
						if (additionalFields.sub_id3) {
							body.sub_id3 = additionalFields.sub_id3 as string;
						}
						if (additionalFields.cc) {
							body.cc = additionalFields.cc as string;
						}
						if (additionalFields.country) {
							body.country = additionalFields.country as string;
						}
						if (additionalFields.city) {
							body.city = additionalFields.city as string;
						}
						if (additionalFields.device) {
							body.device = additionalFields.device as string;
						}
						if (additionalFields.os) {
							body.os = additionalFields.os as string;
						}
						if (additionalFields.browser) {
							body.browser = additionalFields.browser as string;
						}
						if (additionalFields.is_bot !== undefined) {
							body.is_bot = additionalFields.is_bot ? 1 : 0;
						}
						if (additionalFields.quality !== undefined) {
							body.quality = additionalFields.quality as number;
						}
						if (additionalFields.proxy_type) {
							body.proxy_type = additionalFields.proxy_type as string;
						}
						if (additionalFields.limit) {
							body.limit = additionalFields.limit as number;
						}
						
						responseData = await firelinksApiRequest.call(this, '/stat/clicks', body);
					}
					
					if (operation === 'compare') {
						const period1_from = this.getNodeParameter('period1_from', i) as string;
						const period1_to = this.getNodeParameter('period1_to', i) as string;
						const period2_from = this.getNodeParameter('period2_from', i) as string;
						const period2_to = this.getNodeParameter('period2_to', i) as string;
						const groupFields = this.getNodeParameter('group', i) as string[];
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {
							period1_from: new Date(period1_from).toISOString().split('T')[0],
							period1_to: new Date(period1_to).toISOString().split('T')[0],
							period2_from: new Date(period2_from).toISOString().split('T')[0],
							period2_to: new Date(period2_to).toISOString().split('T')[0],
							group: groupFields.join(','),
						};
						
						if (additionalFields.links) {
							const links = (additionalFields.links as string).split(',').map(id => parseInt(id.trim(), 10));
							body.links = links;
						}
						if (additionalFields.limit) {
							body.limit = additionalFields.limit as number;
						}
						
						responseData = await firelinksApiRequest.call(this, '/stat/compare', body);
					}
					
					if (operation === 'total') {
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {};
						
						if (additionalFields.date_from) {
							const dateFrom = new Date(additionalFields.date_from as string);
							body.date_from = dateFrom.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.date_to) {
							const dateTo = new Date(additionalFields.date_to as string);
							body.date_to = dateTo.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.link_id) {
							body.link_id = additionalFields.link_id as number;
						}
						
						responseData = await firelinksApiRequest.call(this, '/stat/total', body);
					}
				}
				
				if (resource === 'domain') {
					if (operation === 'create') {
						const domain = this.getNodeParameter('domain', i) as string;
						const server_ip = this.getNodeParameter('server_ip', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {
							domain,
							server_ip,
						};
						
						if (additionalFields.default_url) {
							body.default_url = additionalFields.default_url as string;
						}
						if (additionalFields.end_date) {
							const endDate = new Date(additionalFields.end_date as string);
							body.end_date = endDate.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.is_default !== undefined) {
							body.is_default = additionalFields.is_default ? 1 : 0;
						}
						if (additionalFields.ssl_code !== undefined) {
							body.ssl_code = additionalFields.ssl_code ? 1 : 0;
						}
						
						responseData = await firelinksApiRequest.call(this, '/domain/create', body);
					}
					
					if (operation === 'getServers') {
						responseData = await firelinksApiRequest.call(this, '/servers', {});
					}
					
					if (operation === 'getList') {
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {};
						
						if (additionalFields.id) {
							body.id = additionalFields.id as number;
						}
						if (additionalFields.domain) {
							body.domain = additionalFields.domain as string;
						}
						if (additionalFields.is_default !== undefined) {
							body.is_default = additionalFields.is_default as number;
						}
						if (additionalFields.my !== undefined) {
							body.my = additionalFields.my ? 1 : 0;
						}
						if (additionalFields.status !== undefined) {
							body.status = additionalFields.status as number;
						}
						if (additionalFields.server_ip) {
							body.server_ip = additionalFields.server_ip as string;
						}
						
						responseData = await firelinksApiRequest.call(this, '/domains/list', body);
					}
				}
				
				if (resource === 'link') {
					if (operation === 'addFallback') {
						const linkId = this.getNodeParameter('linkId', i) as number;
						const url = this.getNodeParameter('url', i) as string;
						
						const body: IDataObject = {
							id: linkId,
							url,
						};
						
						responseData = await firelinksApiRequest.call(this, '/link/add/reserve', body);
					}
					
					if (operation === 'create') {
						const url = this.getNodeParameter('url', i) as string;
						const type = this.getNodeParameter('type', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {
							url,
							type,
							redirect_type: 0,
						};
						
						if (additionalFields.code) {
							body.code = additionalFields.code as string;
						}
						if (additionalFields.domain_id) {
							body.domain_id = additionalFields.domain_id as number;
						}
						if (additionalFields.group_id) {
							body.group_id = additionalFields.group_id as number;
						}
						if (additionalFields.link_name) {
							body.link_name = additionalFields.link_name as string;
						}
						if (additionalFields.keywords) {
							body.keywords = additionalFields.keywords as string;
						}
						if (additionalFields.keywords_mode) {
							body.keywords_mode = additionalFields.keywords_mode as number;
						}
						if (additionalFields.monetization !== undefined) {
							body.options = additionalFields.monetization ? 'advertising' : '';
						}
						
						responseData = await firelinksApiRequest.call(this, '/links/create', body);
					}
					
					if (operation === 'createCloaking') {
						const url = this.getNodeParameter('url', i) as string;
						const cloakingUrl = this.getNodeParameter('cloakingUrl', i) as string;
						const domain_id = this.getNodeParameter('domain_id', i) as number;
						const cloakingMode = this.getNodeParameter('cloakingMode', i) as number;
						const cloakingFilters = this.getNodeParameter('cloakingFilters', i) as string[];
						const type = this.getNodeParameter('type', i) as string;
						
						// Get filter settings from main parameters
						const geoFilterStatus = this.getNodeParameter('geoFilterStatus', i, 0) as number;
						const ipFilterStatus = this.getNodeParameter('ipFilterStatus', i, 0) as number;
						const ispFilterStatus = this.getNodeParameter('ispFilterStatus', i, 0) as number;
						const refererFilterStatus = this.getNodeParameter('refererFilterStatus', i, 0) as number;
						const uaFilterStatus = this.getNodeParameter('uaFilterStatus', i, 0) as number;
						const osFilters = this.getNodeParameter('osFilters', i, []) as string[];
						
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						// Build options query string
						const optionsParams: string[] = [];
						
						const body: IDataObject = {
							url,
							type,
							domain_id,
							redirect_type: 0,
						};
						
						// Cloaking parameters
						body.cloaking_on = 1;
						body['cloaking[url]'] = cloakingUrl;
						body['cloaking[mode]'] = cloakingMode;
						optionsParams.push('cloaking_on=1');
						optionsParams.push(`cloaking[url]=${encodeURIComponent(cloakingUrl)}`);
						optionsParams.push(`cloaking[mode]=${cloakingMode}`);
						
						// Add filters
						cloakingFilters.forEach((filter, index) => {
							body[`cloaking[filters][${index}]`] = filter;
							optionsParams.push(`cloaking[filters][${index}]=${filter}`);
						});
						
						// Additional fields
						if (additionalFields.change_links !== undefined) {
							const value = additionalFields.change_links ? 1 : 0;
							body['cloaking[change_links]'] = value;
							optionsParams.push(`cloaking[change_links]=${value}`);
						}
						if (additionalFields.code) {
							body.code = additionalFields.code as string;
						}
						if (additionalFields.group_id) {
							body.group_id = additionalFields.group_id as number;
						}
						if (additionalFields.link_name) {
							body.link_name = additionalFields.link_name as string;
						}
						if (additionalFields.keywords) {
							body.keywords = additionalFields.keywords as string;
						}
						if (additionalFields.keywords_mode) {
							body.keywords_mode = additionalFields.keywords_mode as number;
						}
						if (additionalFields.monetization !== undefined) {
							body.monetization = additionalFields.monetization ? 1 : 0;
						}
						
						// Geo filters
						if (geoFilterStatus !== undefined && geoFilterStatus !== 0) {
							body['cloaking[geo_filter_status]'] = geoFilterStatus;
							optionsParams.push(`cloaking[geo_filter_status]=${geoFilterStatus}`);
							const geoFilterList = this.getNodeParameter('geoFilterList', i, '') as string;
							if (geoFilterList) {
								body['cloaking[geo_filter_list]'] = geoFilterList;
								optionsParams.push(`cloaking[geo_filter_list]=${encodeURIComponent(geoFilterList)}`);
							}
						}
						
						// IP filters
						if (ipFilterStatus !== undefined && ipFilterStatus !== 0) {
							body['cloaking[ip_filter_status]'] = ipFilterStatus;
							optionsParams.push(`cloaking[ip_filter_status]=${ipFilterStatus}`);
							const ipFilterList = this.getNodeParameter('ipFilterList', i, '') as string;
							if (ipFilterList) {
								body['cloaking[ip_filter_list]'] = ipFilterList;
								optionsParams.push(`cloaking[ip_filter_list]=${encodeURIComponent(ipFilterList)}`);
							}
						}
						
						// ISP filters
						if (ispFilterStatus !== undefined && ispFilterStatus !== 0) {
							body['cloaking[isp_filter_status]'] = ispFilterStatus;
							optionsParams.push(`cloaking[isp_filter_status]=${ispFilterStatus}`);
							const ispFilterList = this.getNodeParameter('ispFilterList', i, '') as string;
							if (ispFilterList) {
								body['cloaking[isp_filter_list]'] = ispFilterList;
								optionsParams.push(`cloaking[isp_filter_list]=${encodeURIComponent(ispFilterList)}`);
							}
						}
						
						// Referer filters
						if (refererFilterStatus !== undefined && refererFilterStatus !== 0) {
							body['cloaking[referer_filter_status]'] = refererFilterStatus;
							optionsParams.push(`cloaking[referer_filter_status]=${refererFilterStatus}`);
							const refererFilterList = this.getNodeParameter('refererFilterList', i, '') as string;
							if (refererFilterList) {
								body['cloaking[referer_filter_list]'] = refererFilterList;
								optionsParams.push(`cloaking[referer_filter_list]=${encodeURIComponent(refererFilterList)}`);
							}
						}
						
						// User Agent filters
						if (uaFilterStatus !== undefined && uaFilterStatus !== 0) {
							body['cloaking[ua_filter_status]'] = uaFilterStatus;
							optionsParams.push(`cloaking[ua_filter_status]=${uaFilterStatus}`);
							const uaFilterList = this.getNodeParameter('uaFilterList', i, '') as string;
							if (uaFilterList) {
								body['cloaking[ua_filter_list]'] = uaFilterList;
								optionsParams.push(`cloaking[ua_filter_list]=${encodeURIComponent(uaFilterList)}`);
							}
						}
						
						// OS filters
						if (osFilters && osFilters.length > 0) {
							osFilters.forEach((os, index) => {
								body[`cloaking[os_filters][${index}]`] = os;
								optionsParams.push(`cloaking[os_filters][${index}]=${encodeURIComponent(os)}`);
							});
						}
						
						// Set options query string
						body.options = optionsParams.join('&');
						
						responseData = await firelinksApiRequest.call(this, '/links/create', body);
					}
					
					if (operation === 'get') {
						const linkId = this.getNodeParameter('linkId', i) as number;
						
						const body: IDataObject = {
							id: linkId,
						};
						
						responseData = await firelinksApiRequest.call(this, '/link/get', body);
					}
					
					if (operation === 'updateUrl') {
						const linkId = this.getNodeParameter('linkId', i) as number;
						const url = this.getNodeParameter('url', i) as string;
						
						const body: IDataObject = {
							id: linkId,
							url,
						};
						
						responseData = await firelinksApiRequest.call(this, '/link/url', body);
					}
					
					if (operation === 'getList') {
						const additionalFields = this.getNodeParameter('additionalFields', i);
						
						const body: IDataObject = {};
						
						if (additionalFields.code) {
							body.code = additionalFields.code as string;
						}
						if (additionalFields.date_from) {
							const dateFrom = new Date(additionalFields.date_from as string);
							body.date_from = dateFrom.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.date_to) {
							const dateTo = new Date(additionalFields.date_to as string);
							body.date_to = dateTo.toISOString().split('T')[0]; // Format: Y-m-d
						}
						if (additionalFields.link_id) {
							body.link_id = additionalFields.link_id as number;
						}
						if (additionalFields.url) {
							body.url = additionalFields.url as string;
						}
						if (additionalFields.clicks) {
							body.clicks = additionalFields.clicks as number;
						}
						if (additionalFields.clicks_type) {
							body.clicks_type = additionalFields.clicks_type as number;
						}
						if (additionalFields.title) {
							body.title = additionalFields.title as string;
						}
						if (additionalFields.link_name) {
							body.link_name = additionalFields.link_name as string;
						}
						if (additionalFields.status) {
							body.status = additionalFields.status as number;
						}
						
						responseData = await firelinksApiRequest.call(this, '/links/list', body);
					}
				}

				// Handle response data format
				let itemsToReturn = responseData;
				
				// If response has a data property, use that
				if (responseData && typeof responseData === 'object' && 'data' in responseData) {
					itemsToReturn = responseData.data;
				}
				
				// Ensure we have an array
				if (!Array.isArray(itemsToReturn)) {
					itemsToReturn = [itemsToReturn];
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(itemsToReturn as IDataObject[]),
					{ itemData: { item: i } },
				);
				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					const apiError = error instanceof NodeApiError 
						? error 
						: new NodeApiError(this.getNode(), error as JsonObject);
					returnData.push({ error: apiError, json: {}, pairedItem: { item: i } });
					continue;
				}
				throw error;
			}
		}
		return [returnData];
	}
}
