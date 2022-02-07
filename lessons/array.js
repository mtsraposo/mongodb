// Array operators and Projections
db.listingsAndReviews.find({
    "amenities": {
        "$size": 20,
        "$all": ["Internet", "Wifi", "Kitchen",
            "Heating", "Family/kid friendly",
            "Washer", "Dryer", "Essentials",
            "Shampoo", "Hangers",
            "Hair dryer", "Iron",
            "Laptop friendly workspace"]
    }
}).pretty()

db.listingsAndReviews.find(
    {
        "$and": [
            {"accommodates": {"$gt": 6}},
            {"reviews": {"$size": 50}}]
    },
    {"name": 1, "_id": 0}
)

db.listingsAndReviews.find(
    {
        "$and": [
            {"property_type": "House"},
            {"amenities": "Changing table"}]
    }
).count()

db.grades.find({ "class_id": 431 },
    { "scores": { "$elemMatch": { "score": { "$gt": 85 } } }
    })

db.grades.find({ "scores": { "$elemMatch": { "type": "extra credit" } }
})

db.companies.find({
    "offices": {"$elemMatch": {"city": "Seattle"}}
}).count()

// Find one while projecting only one field
db.listingsAndReviews.findOne({ },{ "address": 1, "_id": 0 })