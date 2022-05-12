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
        { site_number: 10, date_available: "7/19", price_per_night: 59 },
        { site_number: 10, date_available: "7/19", price_per_night: 59 },
        { site_number: 10, date_available: "7/19", price_per_night: 59 },
        { site_number: 10, date_available: "7/19", price_per_night: 59 },
      ];

    case campsiteTypes.NO_HOOKUP:
      return [
        { site_number: 20, date_available: "7/19", price_per_night: 29 },
        { site_number: 20, date_available: "7/19", price_per_night: 29 },
        { site_number: 20, date_available: "7/19", price_per_night: 29 },
        { site_number: 20, date_available: "7/19", price_per_night: 29 },
        { site_number: 20, date_available: "7/19", price_per_night: 29 },
      ];

    case campsiteTypes.RIVERFRONT_WATER_ELECTRIC:
      return [
        { site_number: 60, date_available: "7/19", price_per_night: 99 },
        { site_number: 60, date_available: "7/19", price_per_night: 99 },
        { site_number: 60, date_available: "7/19", price_per_night: 99 },
        { site_number: 60, date_available: "7/19", price_per_night: 99 },
        { site_number: 60, date_available: "7/19", price_per_night: 99 },
      ];

    case campsiteTypes.WATER_ELECTRIC:
      return [
        { site_number: 30, date_available: "7/19", price_per_night: 49 },
        { site_number: 30, date_available: "7/19", price_per_night: 49 },
        { site_number: 30, date_available: "7/19", price_per_night: 49 },
        { site_number: 30, date_available: "7/19", price_per_night: 49 },
        { site_number: 30, date_available: "7/19", price_per_night: 49 },
      ];

    case campsiteTypes.WATER_ELECTRIC_SEWER:
      return [
        { site_number: 40, date_available: "7/19", price_per_night: 79 },
        { site_number: 40, date_available: "7/19", price_per_night: 79 },
        { site_number: 40, date_available: "7/19", price_per_night: 79 },
        { site_number: 40, date_available: "7/19", price_per_night: 79 },
        { site_number: 40, date_available: "7/19", price_per_night: 79 },
      ];

    default:
      return [];
  }
}