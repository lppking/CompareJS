# CompareJS
一个用于比较对象或者数组结构的工具库
--- ---
#### 使用示例：
1. 首先声明数据格式模板
```
const tpl = {
  head: {
    module: '',
    function: '',
    error_code: 0
  },
  body: {
    data: [],
    status: {
      name: '',
      age: 1,
      flags: []
    }
  }
};
```
2. 获取到需要套用上述模板做结构校验的数据
```
const res = {
  head: {
    module: 'module',
    function: 'function',
    error_code: 0
  },
  body: {
    data: [{
      tag: 1,
      a: {}
    }],
    status: {
      name: 'lipeng',
      age: 18,
      flags: ['1', '2']
    }
  }
};
```
3. 将模板和待校验数据作为参数传入`$cm.compare()`，校验结构以布尔值形式返回，true代表被校验数据结构正确，否则不正确
```
$cm.compare(tpl, res);
```
