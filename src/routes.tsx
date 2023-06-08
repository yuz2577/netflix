import GatePage from "./pages/gate/index"

export const routes: Array<object> = [
    {
        path: "/",
        exact: true,
        strict: false,
        element: <GatePage />,
    }
]