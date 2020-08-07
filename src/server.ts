const express = require('express');

import express from 'express';

const app = express()

app.get('/', (req, res) =>
{
    return res.json({ json: "example" });
})

app.listen(9000)