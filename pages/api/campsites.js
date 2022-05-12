import campsiteTypes from "../../common/campsiteTypes";

export default function campsites(req, res) {

  const { campsite_type } = req.query;

  // call to the database
  const availableSites = getCampsites(campsite_type);

  res.status(200).json(availableSites);
}

function getCampsites(campsiteType) {
  switch (campsiteType.toUpperCase()) {
    case campsiteTypes.FULL_HOOKUP:
      return [
        { site_number: 10, date_available: "7/19", price_per_night: 59 },
        { site_number: 12, date_available: "6/29", price_per_night: 59 },
        { site_number: 14, date_available: "8/9", price_per_night: 59 },
        { site_number: 19, date_available: "7/5", price_per_night: 59 },
        { site_number: 13, date_available: "7/10", price_per_night: 59 },
      ];

    case campsiteTypes.NO_HOOKUP:
      return [
        { site_number: 21, date_available: "7/19", price_per_night: 29 },
        { site_number: 25, date_available: "7/19", price_per_night: 29 },
        { site_number: 20, date_available: "7/19", price_per_night: 29 },
        { site_number: 22, date_available: "7/19", price_per_night: 29 },
        { site_number: 29, date_available: "7/19", price_per_night: 29 },
        { site_number: 27, date_available: "7/19", price_per_night: 29 },
        { site_number: 28, date_available: "7/19", price_per_night: 29 },
      ];

    case campsiteTypes.RIVERFRONT_WATER_ELECTRIC:
      return [
        { site_number: 60, date_available: "7/19", price_per_night: 99 },
        { site_number: 63, date_available: "7/19", price_per_night: 99 },
        { site_number: 69, date_available: "7/19", price_per_night: 99 },
      ];

    case campsiteTypes.WATER_ELECTRIC:
      return [
        { site_number: 33, date_available: "7/19", price_per_night: 49 },
        { site_number: 37, date_available: "7/19", price_per_night: 49 },
        { site_number: 39, date_available: "7/19", price_per_night: 49 },
        { site_number: 38, date_available: "7/19", price_per_night: 49 },
      ];

    case campsiteTypes.WATER_ELECTRIC_SEWER:
      return [
        { site_number: 41, date_available: "7/19", price_per_night: 79 },
        { site_number: 44, date_available: "7/19", price_per_night: 79 },
        { site_number: 46, date_available: "7/19", price_per_night: 79 },
        { site_number: 47, date_available: "7/19", price_per_night: 79 },
      ];

    default:
      return [];
  }
}