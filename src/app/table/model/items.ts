export interface ItemsProperties {
    merchant_item_oid: number;
    merchant_id: string;
    merchant_item_id: string;
    description: string;
    description_translated_text_instance_oid: number;
    parent_category_id: number;
    parent_category_path: string;
    last_modified_dts: string;
    creation_dts: string;
}


export interface Items {
    items: ItemsProperties[];
    success: boolean;
    metadata: {
        result_set: {
            count: number;
            offset: number;
            limit:  number;
            more: boolean;
            next_offset:  number;
            total_records:  number;
        },
        payload_name: string;
    }
}