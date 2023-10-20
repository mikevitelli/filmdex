import mongoose, { Schema, models } from "mongoose";

const filmLogSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
    },
    cameraSettings: {
      fStop: {
        type: String,
        required: true,
      },
      shutterSpeed: {
        type: String,
        required: true,
      },
    },
    filmStockId: {
      type: String,
      required: true,
    },
    other: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const FilmLog = models.FilmLog || mongoose.model("Film Log", filmLogSchema);
export default FilmLog;
