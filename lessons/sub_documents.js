// Sub-Documents
db.trips.findOne({ "start station location.type": "Point" })

db.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },
    { "name": 1 }).pretty()

db.companies.find({ "relationships.0.person.first_name": "Mark",
        "relationships.0.title": { "$regex": "CEO" } },
    { "name": 1 }).count()


db.companies.find({ "relationships.0.person.first_name": "Mark",
        "relationships.0.title": {"$regex": "CEO" } },
    { "name": 1 }).pretty()

db.companies.find({ "relationships":
            { "$elemMatch": { "is_past": true,
                    "person.first_name": "Mark" } } },
    { "name": 1 }).pretty()

db.companies.find({ "relationships":
            { "$elemMatch": { "is_past": true,
                    "person.first_name": "Mark" } } },
    { "name": 1 }).count()

db.trips.find({"start station location.coordinates.0": {"$lt": -74}}).count()

db.inspections.find({"address.city": "NEW YORK"}).count()