# Pretty JSON
A JSON pretty-printed response middleware based on [koa-json](https://github.com/koajs/json).

# Installation
```bash
yarn add qoq-pretty-json
```

# Usage
```typescript
import { WebSlotManager } from 'qoq';
import { PrettyJson } from 'qoq-pretty-json';

const webSlots = WebSlotManager.use(new PrettyJson());
```

# Options
@see [koa-json](https://github.com/koajs/json/blob/master/Readme.md)
