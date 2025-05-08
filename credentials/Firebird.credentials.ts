import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export class Firebird implements ICredentialType {
	name = 'firebird';
	displayName = 'Firebird';
	documentationUrl = '';
	properties: INodeProperties[] = [
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '127.0.0.1',
		},
		{
			displayName: 'Database',
			name: 'database',
			type: 'string',
			default: 'database.fdb',
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: 'SYSDBA',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: 'masterkey',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 3050,
		},
		{
			displayName: 'Reconnect Interval',
			name: 'retryConnectionInterval',
			type: 'number',
			default: 1000,
			description: 'Reconnect interval in case of connection drop.',
		},
		{
			displayName: 'Role',
			name: 'role',
			type: 'string',
			default: null,
			description: 'Connection role.',
		},
		{
			displayName: 'Page Size',
			name: 'pageSize',
			type: 'number',
			default: 4096,
			description: 'Page size when creating new database.',
		},
		{
			displayName: 'Lowercase Keys',
			name: 'lowercase_keys',
			type: 'boolean',
			default: false,
			description: 'Set to true to lowercase keys.',
		},
		{
			displayName: 'Character Set',
			name: 'charset',
			type: 'options',  // Tipo options para criar uma lista dropdown
			options: [
				{
					name: 'UTF8',
					value: 'UTF8',
				},
				{
					name: 'WIN1252',
					value: 'WIN1252',
				},
				{
					name: 'ISO8859_1',
					value: 'ISO8859_1',
				},
				{
					name: 'ASCII',
					value: 'ASCII',
				},
			],
			default: 'UTF8',
			description: 'The character set to use for the connection',
		},
	];
}