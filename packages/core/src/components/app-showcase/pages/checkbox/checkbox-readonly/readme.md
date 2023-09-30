# checkbox-readonly



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `textId`    | `text-id`    |             | `string` | `undefined` |
| `textTitle` | `text-title` |             | `string` | `undefined` |


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `valueChange` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [app-docsectiontext](../../../doc/app-docsectiontext)
- [any-checkbox](../../../../checkbox)
- [app-code](../../../doc/app-code)

### Graph
```mermaid
graph TD;
  checkbox-readonly --> app-docsectiontext
  checkbox-readonly --> any-checkbox
  checkbox-readonly --> app-code
  app-code --> any-button
  any-button --> any-badge
  any-button --> any-ripple-effect
  style checkbox-readonly fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***