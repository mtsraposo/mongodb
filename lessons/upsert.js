// Updates if valcount is less than 48, and inserts otherwise
db.iot.updateOne({ "sensor": r.sensor, "date": r.date,
        "valcount": { "$lt": 48 } },
    { "$push": { "readings": { "v": r.value, "t": r.time } },
        "$inc": { "valcount": 1, "total": r.value } },
    { "upsert": true })