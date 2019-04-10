import { Entity, Column, Index, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { id } from '../id';
import { User } from './user';

@Entity()
export class UserProfile {
	@PrimaryColumn(id())
	public userId: User['id'];

	@OneToOne(type => User, {
		onDelete: 'CASCADE'
	})
	@JoinColumn()
	public user: User | null;

	@Column('varchar', {
		length: 128, nullable: true,
		comment: 'The location of the User.'
	})
	public location: string | null;

	@Column('char', {
		length: 10, nullable: true,
		comment: 'The birthday (YYYY-MM-DD) of the User.'
	})
	public birthday: string | null;

	@Column('varchar', {
		length: 1024, nullable: true,
		comment: 'The description (bio) of the User.'
	})
	public description: string | null;

	@Column('jsonb', {
		default: [],
	})
	public fields: {
		name: string;
		value: string;
	}[];

	@Column('varchar', {
		length: 128, nullable: true,
		comment: 'The email address of the User.'
	})
	public email: string | null;

	@Column('varchar', {
		length: 128, nullable: true,
	})
	public emailVerifyCode: string | null;

	@Column('boolean', {
		default: false,
	})
	public emailVerified: boolean;

	@Column('varchar', {
		length: 128, nullable: true,
	})
	public twoFactorTempSecret: string | null;

	@Column('varchar', {
		length: 128, nullable: true,
	})
	public twoFactorSecret: string | null;

	@Column('boolean', {
		default: false,
	})
	public twoFactorEnabled: boolean;

	@Column('varchar', {
		length: 128, nullable: true,
		comment: 'The password hash of the User. It will be null if the origin of the user is local.'
	})
	public password: string | null;

	@Column('jsonb', {
		default: {},
		comment: 'The client-specific data of the User.'
	})
	public clientData: Record<string, any>;

	@Column('boolean', {
		default: false,
	})
	public autoWatch: boolean;

	@Column('boolean', {
		default: false,
	})
	public autoAcceptFollowed: boolean;

	@Column('boolean', {
		default: false,
	})
	public alwaysMarkNsfw: boolean;

	@Column('boolean', {
		default: false,
	})
	public carefulBot: boolean;

	//#region Linking
	@Column('boolean', {
		default: false,
	})
	public twitter: boolean;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public twitterAccessToken: string | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public twitterAccessTokenSecret: string | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public twitterUserId: string | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public twitterScreenName: string | null;

	@Column('boolean', {
		default: false,
	})
	public github: boolean;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public githubAccessToken: string | null;

	@Column('integer', {
		nullable: true, default: null,
	})
	public githubId: number | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public githubLogin: string | null;

	@Column('boolean', {
		default: false,
	})
	public discord: boolean;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public discordAccessToken: string | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public discordRefreshToken: string | null;

	@Column('integer', {
		nullable: true, default: null,
	})
	public discordExpiresDate: number | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public discordId: string | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public discordUsername: string | null;

	@Column('varchar', {
		length: 64, nullable: true, default: null,
	})
	public discordDiscriminator: string | null;
	//#endregion

	//#region Denormalized fields
	@Index()
	@Column('varchar', {
		length: 128, nullable: true,
		comment: '[Denormalized]'
	})
	public userHost: string | null;
	//#endregion
}