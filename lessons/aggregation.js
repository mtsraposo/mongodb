// Aggregation framework
db.listingsAndReviews.aggregate([
    { "$match": { "amenities": "Wifi" } },
    { "$project": { "price": 1,
            "address": 1,
            "_id": 0 }}]).pretty()

db.listingsAndReviews.aggregate([ { "$project": { "address": 1, "_id": 0 }},
    { "$group": { "_id": "$address.country" }}])

db.listingsAndReviews.aggregate([
    { "$project": { "address": 1, "_id": 0 }},
    { "$group": { "_id": "$address.country",
            "count": { "$sum": 1 } } }
])