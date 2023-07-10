import { MenuRouteType } from './types'

const MenuRoutes: MenuRouteType[] = [
    {
        name: "dashboard",
        path: "/",
        displayName: "Dashboard",
    },
    {
        name: "product",
        path: "/product",
        displayName: "Products",
    },
    {
        name: "about",
        path: "/about",
        displayName: "About Us",
    },
]

export default MenuRoutes;