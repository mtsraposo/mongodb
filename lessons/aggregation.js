// Aggregation framework
db.listingsAndReviews.aggregate([
    {"$match": {"amenities": "Wifi"}},
    {
        "$project": {
            "price": 1,
            "address": 1,
            "_id": 0
        }
    }]).pretty()

db.listingsAndReviews.aggregate([{"$project": {"address": 1, "_id": 0}},
    {"$group": {"_id": "$address.country"}}])

db.listingsAndReviews.aggregate([
    {"$project": {"address": 1, "_id": 0}},
    {
        "$group": {
            "_id": "$address.country",
            "count": {"$sum": 1}
        }
    }
])

db.listingsAndReviews.aggregate([
    {"$group": {"_id": "$room_type"}}
])

// Cursor Methods: sort() and limit()
db.zips.find().sort({"pop": 1}).limit(1)
db.zips.find({"pop": 0}).count()
db.zips.find().sort({"pop": -1}).limit(1)
db.zips.find().sort({"pop": -1}).limit(10)
db.zips.find().sort({"pop": 1, "city": -1})

db.trips.find({"birth year": {"$ne": ''}}, {
    "birth year": 1,
    "_id": 0
}).sort({"birth year": -1}).limit(10)