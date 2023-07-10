import { MenuRouteType, MetaRouteType } from './types'
import MetaRoutes from './meta'
import MenuRoutes from './menu'

/**
 * The function `getMenuRoute` returns a `MenuRouteType` object from an array of `MenuRoutes` based on the
 * provided name.
 * @param {string} name - A string representing the name of the menu route.
 * @returns a value of type `MenuRouteType` or `undefined`.
 */
export const getMenuRoute = (name: string): MenuRouteType | undefined => {
    return MenuRoutes.find((route) => route.name === name)
}

/**
 * The function `getMetaRoute` returns a `MetaRouteType` object based on the provided name, or
 * `undefined` if no matching route is found.
 * @param {string} name - A string representing the name of the route.
 * @returns a value of type `MetaRouteType` or `undefined`.
 */
export const getMetaRoute = (name: string): MetaRouteType | undefined => {
    return MetaRoutes.find((route) => route.name === name)
}

