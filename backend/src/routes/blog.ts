import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

blogRouter.post('/', (c) => {
    return c.text("Hello")
})

blogRouter.put('/', (c) => {
    return c.text("Hello")
})

blogRouter.get('/', (c) => {
    return c.text("Hello")
})

blogRouter.get('/bulk', (c) => {
    return c.text("Hello")
})