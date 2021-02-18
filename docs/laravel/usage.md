---
id: usage
title: Usage
---

All API request is received at <APP_URL>/usedb and method type will always of type **POST**.

The fields which are mandatory, while sending requests are as follows:

- **collection**: It contains the name of the model on which operation has to be performed.
- **operation**: Name of the operation.
- **payload**: It contains different values on the basis of the type of operation.

  Mandatory fields in the payload

  | Operation | Fields      |
  | --------- | ----------- |
  | create    | data        |
  | findOne   | where       |
  | findMany  | skip, take  |
  | update    | data, where |
  | delete    | where       |
