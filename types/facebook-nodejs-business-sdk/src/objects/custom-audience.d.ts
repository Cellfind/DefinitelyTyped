import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CustomAudience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        approximate_count_lower_bound: "approximate_count_lower_bound";
        approximate_count_upper_bound: "approximate_count_upper_bound";
        customer_file_source: "customer_file_source";
        data_source: "data_source";
        data_source_types: "data_source_types";
        datafile_custom_audience_uploading_status: "datafile_custom_audience_uploading_status";
        delete_time: "delete_time";
        delivery_status: "delivery_status";
        description: "description";
        excluded_custom_audiences: "excluded_custom_audiences";
        external_event_source: "external_event_source";
        household_audience: "household_audience";
        id: "id";
        included_custom_audiences: "included_custom_audiences";
        is_eligible_for_sac_campaigns: "is_eligible_for_sac_campaigns";
        is_household: "is_household";
        is_snapshot: "is_snapshot";
        is_value_based: "is_value_based";
        lookalike_audience_ids: "lookalike_audience_ids";
        lookalike_spec: "lookalike_spec";
        name: "name";
        operation_status: "operation_status";
        opt_out_link: "opt_out_link";
        owner_business: "owner_business";
        page_deletion_marked_delete_time: "page_deletion_marked_delete_time";
        permission_for_actions: "permission_for_actions";
        pixel_id: "pixel_id";
        regulated_audience_spec: "regulated_audience_spec";
        retention_days: "retention_days";
        rev_share_policy_id: "rev_share_policy_id";
        rule: "rule";
        rule_aggregation: "rule_aggregation";
        rule_v2: "rule_v2";
        seed_audience: "seed_audience";
        sharing_status: "sharing_status";
        subtype: "subtype";
        time_content_updated: "time_content_updated";
        time_created: "time_created";
        time_updated: "time_updated";
    }>;
    static get ClaimObjective(): Readonly<{
        automotive_model: "AUTOMOTIVE_MODEL";
        collaborative_ads: "COLLABORATIVE_ADS";
        home_listing: "HOME_LISTING";
        media_title: "MEDIA_TITLE";
        product: "PRODUCT";
        travel: "TRAVEL";
        vehicle: "VEHICLE";
        vehicle_offer: "VEHICLE_OFFER";
    }>;
    static get ContentType(): Readonly<{
        automotive_model: "AUTOMOTIVE_MODEL";
        destination: "DESTINATION";
        flight: "FLIGHT";
        generic: "GENERIC";
        home_listing: "HOME_LISTING";
        hotel: "HOTEL";
        job: "JOB";
        local_service_business: "LOCAL_SERVICE_BUSINESS";
        media_title: "MEDIA_TITLE";
        offline_product: "OFFLINE_PRODUCT";
        product: "PRODUCT";
        vehicle: "VEHICLE";
        vehicle_offer: "VEHICLE_OFFER";
    }>;
    static get CustomerFileSource(): Readonly<{
        both_user_and_partner_provided: "BOTH_USER_AND_PARTNER_PROVIDED";
        partner_provided_only: "PARTNER_PROVIDED_ONLY";
        user_provided_only: "USER_PROVIDED_ONLY";
    }>;
    static get SubscriptionInfo(): Readonly<{
        messenger: "MESSENGER";
        whatsapp: "WHATSAPP";
    }>;
    static get Subtype(): Readonly<{
        app: "APP";
        bag_of_accounts: "BAG_OF_ACCOUNTS";
        bidding: "BIDDING";
        claim: "CLAIM";
        custom: "CUSTOM";
        engagement: "ENGAGEMENT";
        exclusion: "EXCLUSION";
        fox: "FOX";
        lookalike: "LOOKALIKE";
        managed: "MANAGED";
        measurement: "MEASUREMENT";
        messenger_subscriber_list: "MESSENGER_SUBSCRIBER_LIST";
        offline_conversion: "OFFLINE_CONVERSION";
        partner: "PARTNER";
        primary: "PRIMARY";
        regulated_categories_audience: "REGULATED_CATEGORIES_AUDIENCE";
        study_rule_audience: "STUDY_RULE_AUDIENCE";
        video: "VIDEO";
        website: "WEBSITE";
    }>;
    static get UseForProducts(): Readonly<{
        ads: "ADS";
        marketing_messages: "MARKETING_MESSAGES";
    }>;
    static get ActionSource(): Readonly<{
        physical_store: "PHYSICAL_STORE";
        website: "WEBSITE";
    }>;
    deleteAdAccounts(params?: Record<string, any>): Promise<any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdAccount(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    getAds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHealth(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSalts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createSalt(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    getSessions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getSharedAccountInfo(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteUsers(params?: Record<string, any>): Promise<any>;
    createUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    createUsersReplace(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CustomAudience>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<CustomAudience>;
    update(fields: string[], params?: Record<string, any>): Promise<CustomAudience>;
}
