const mongoose = require("mongoose");
const coordsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  segment: {
    type: Number,
    required: true,
  },
});

const connectionSchema = mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  routeId: {
    type: Number,
    required: true,
  },
});
const routesSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  source: {
    type: coordsSchema,
    required: true,
  },
  destination: {
    type: coordsSchema,
    required: true,
  },
  waypoints: {
    type: [coordsSchema],
    required: true,
  },
  connections: {
    type: [connectionSchema],
    required: true,
  },
});

module.exports = mongoose.model("route", routesSchema);
