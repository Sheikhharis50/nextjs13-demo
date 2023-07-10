export interface MetaType {
    title: string;
    description: string;
}

export interface RouteType {
    name: string;
    path: string;
}

export interface MetaRouteType extends RouteType, MetaType {
}

export interface MenuRouteType extends RouteType {
    displayName: string;
}
