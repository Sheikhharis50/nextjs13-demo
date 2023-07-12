import type { Metadata } from "next";
import MetaRoutes from './meta'

/**
 * The `getMetaData` function takes a name parameter and returns the title and description metadata for
 * a given route name.
 * @param {string} name - The `name` parameter is a string that represents the name of a route.
 * @returns an object with two properties: "title" and "description". The values of these properties
 * are obtained from the "route" object that matches the given "name" parameter in the "MetaRoutes"
 * array. If a matching route is found, the function returns an object with the "title" and
 * "description" properties from the matching route. If no matching route is found,
 */
export const getMetaData = (name: string): Metadata => {
    const route = MetaRoutes.find((route) => route.name === name)
    return {
        title: route?.title,
        description: route?.description,
    }
}