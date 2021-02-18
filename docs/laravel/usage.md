---
id: usage
title: Usage
---

All API request is received at <APP_URL>/usedb and method type will always be of type `POST`.

The fields which are mandatory, while sending requests are:

1. **collection**: It contains the name of the model on which operation has to be performed.
2. **operation**: Name of the operation.
3. **payload**: It contains different values on the basis of the type of operation.

<span style={{ marginLeft:'30px'}}>Mandatory fields in the payload</span>

<table style={{ marginLeft:'30px', marginTop:'10px' }}>
    <tr>
        <th>Operation</th>
        <th>Fields</th>
    </tr>
    <tr>
        <td>create</td>
        <td>data</td>
    </tr>
    <tr>
        <td>findOne</td>
        <td>where</td>
    </tr>
    <tr>
        <td>findMany</td>
        <td> skip, take </td>
    </tr>
    <tr>
        <td>update</td>
        <td>data, where</td>
    </tr>
    <tr>
        <td>delete</td>
        <td>where</td>
    </tr>
</table>

<!-- | Operation | Fields      |
| --------- | ----------- |
| create    | data        |
| findOne   | where       |
| findMany  | skip, take  |
| update    | data, where |
| delete    | where       | -->
