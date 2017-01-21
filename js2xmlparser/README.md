js2xmlparser
---

Tested out js2xmlparser,this package make xml string from object.
`xml = js2xmlparser.parse('rootname', object);`

Example:

`const object = { field1: 'value', field2: 'value' };`
`console.log(js2xmlparser.parse('body', object));`