# @moxiu/admin

后台管理系统（基础骨架）

本地运行

```bash
bun install
cd apps/admin
bun run build
NODE_ENV=development PORT=3001 node ./dist/index.js
# or for dev
bun --version # ensure bun installed
bun run dev
```

API 示例

- GET `/api/health` - 健康检查
- GET `/` - 欢迎信息

Docker

```bash
docker build -t moxiu-admin ./apps/admin
docker run -p 3001:3001 moxiu-admin
```
