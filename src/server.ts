const express = require('express');
import expressTopLevelFunction from 'express';

const app = expressTopLevelFunction()

app.get('/', (req, res) =>
{
    return res.json({ json: "example" });
})

app.listen(9000)