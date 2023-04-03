export const currentPageParam = (location) => {
    return location.pathname.split('/')[location.pathname.split('/').length - 1]
}