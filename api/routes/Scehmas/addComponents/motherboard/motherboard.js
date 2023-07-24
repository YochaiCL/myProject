const mongoose = require('mongoose');

/**
 * Description - Define the motherboard scehma
 */
const motherboardScehma = new mongoose.Schema(
  {
    model: String,
    cpu_socket_support: String,
    chipset: String,
    memory: String,
    form_factor: String,
    expansion_slots: String,
    M2Slot: String,
  },
  {
    collection: 'Motherboard',
  }
);

mongoose.model('Motherboard', motherboardScehma);
